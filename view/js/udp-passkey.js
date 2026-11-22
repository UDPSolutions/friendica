/*
 * UDP passkeys — browser side of /passkey/* (src/Module/Security/Passkey.php).
 *
 * Wires itself to elements with these data attributes:
 *   [data-udp-passkey-login]     login page container
 *       data-options-url, data-login-url, data-return-path
 *       contains .udp-passkey-login-btn and .udp-passkey-error
 *   [data-udp-passkey-register]  settings / first-login container
 *       data-options-url, data-register-url, data-csrf,
 *       data-success-form (selector of a form to submit) or data-success-url (optional; default reload)
 *       contains .udp-passkey-register-btn, optional input.udp-passkey-name, .udp-passkey-error
 *   [data-udp-passkey-supported] elements shown only when the browser supports passkeys
 *   [data-udp-passkey-platform]  elements shown only when this device has a built-in authenticator
 *   [data-udp-passkey-noplatform] elements shown only when it does not
 *   [data-udp-passkey-unsupported] elements shown only when passkeys are unsupported
 *   [data-udp-passkey-other]     shown when passkeys work but there is no built-in authenticator
 *   [data-udp-reveal="#id"]      link that un-hides #id and hides itself
 *   [data-udp-show-password="#id"] checkbox toggling a password field's visibility
 */
(function () {
	'use strict';

	var supported = !!(window.PublicKeyCredential && navigator.credentials && navigator.credentials.create);

	function b64uToBuf(s) {
		s = s.replace(/-/g, '+').replace(/_/g, '/');
		while (s.length % 4) { s += '='; }
		var bin = atob(s), buf = new Uint8Array(bin.length);
		for (var i = 0; i < bin.length; i++) { buf[i] = bin.charCodeAt(i); }
		return buf.buffer;
	}

	function bufToB64u(buf) {
		var bytes = new Uint8Array(buf), bin = '';
		for (var i = 0; i < bytes.length; i++) { bin += String.fromCharCode(bytes[i]); }
		return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
	}

	function decodeIds(list) {
		(list || []).forEach(function (c) { c.id = b64uToBuf(c.id); });
	}

	function post(url, data, csrf) {
		var headers = { 'Accept': 'application/json' };
		if (csrf) { headers['X-CSRF-Token'] = csrf; }
		return fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: headers,
			body: new URLSearchParams(data || {})
		}).then(function (r) {
			return r.json().catch(function () { return {}; }).then(function (json) {
				if (!r.ok) { throw new Error(json.error || ('HTTP ' + r.status)); }
				return json;
			});
		});
	}

	// Errors that just mean "the user closed the dialog" — stay quiet.
	function isCancel(err) {
		return err && (err.name === 'NotAllowedError' || err.name === 'AbortError');
	}

	function showError(root, err) {
		var el = root.querySelector('.udp-passkey-error');
		if (!el) { return; }
		if (!err) { el.textContent = ''; el.hidden = true; return; }
		el.textContent = err.name === 'InvalidStateError'
			? (root.getAttribute('data-msg-duplicate') || 'This device already has a passkey for this account.')
			: (err.message || String(err));
		el.hidden = false;
	}

	// ------------------------------------------------------------------ login

	var conditionalAbort = null;

	function login(root, conditional) {
		var optionsUrl = root.getAttribute('data-options-url');
		var loginUrl = root.getAttribute('data-login-url');
		var returnPath = root.getAttribute('data-return-path') || '';

		if (conditionalAbort) { conditionalAbort.abort(); conditionalAbort = null; }

		return post(optionsUrl).then(function (opts) {
			var pk = opts.publicKey;
			pk.challenge = b64uToBuf(pk.challenge);
			decodeIds(pk.allowCredentials);

			var req = { publicKey: pk };
			if (conditional) {
				conditionalAbort = new AbortController();
				req.mediation = 'conditional';
				req.signal = conditionalAbort.signal;
			}
			return navigator.credentials.get(req);
		}).then(function (cred) {
			if (!cred) { return; }
			var r = cred.response;
			return post(loginUrl, {
				id: bufToB64u(cred.rawId),
				clientDataJSON: bufToB64u(r.clientDataJSON),
				authenticatorData: bufToB64u(r.authenticatorData),
				signature: bufToB64u(r.signature),
				userHandle: r.userHandle ? bufToB64u(r.userHandle) : '',
				return_path: returnPath
			}).then(function (res) {
				window.location.href = res.redirect;
			});
		});
	}

	function wireLogin(root) {
		var btn = root.querySelector('.udp-passkey-login-btn');
		if (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				showError(root, null);
				btn.disabled = true;
				login(root, false).catch(function (err) {
					if (!isCancel(err)) { showError(root, err); }
				}).then(function () { btn.disabled = false; });
			});
		}

		// Autofill: offer saved passkeys in the username field's suggestion list.
		var username = document.getElementById('id_username');
		if (username && PublicKeyCredential.isConditionalMediationAvailable) {
			PublicKeyCredential.isConditionalMediationAvailable().then(function (ok) {
				if (!ok) { return; }
				username.setAttribute('autocomplete', 'username webauthn');
				login(root, true).catch(function (err) {
					if (!isCancel(err)) { showError(root, err); }
				});
			});
		}
	}

	// ------------------------------------------------------------------ registration

	function register(root) {
		var csrf = root.getAttribute('data-csrf');
		var nameInput = root.querySelector('input.udp-passkey-name');

		return post(root.getAttribute('data-options-url'), {}, csrf).then(function (opts) {
			var pk = opts.publicKey;
			pk.challenge = b64uToBuf(pk.challenge);
			pk.user.id = b64uToBuf(pk.user.id);
			decodeIds(pk.excludeCredentials);
			return navigator.credentials.create({ publicKey: pk });
		}).then(function (cred) {
			return post(root.getAttribute('data-register-url'), {
				clientDataJSON: bufToB64u(cred.response.clientDataJSON),
				attestationObject: bufToB64u(cred.response.attestationObject),
				name: nameInput ? nameInput.value : ''
			}, csrf);
		});
	}

	function wireRegister(root) {
		var btn = root.querySelector('.udp-passkey-register-btn');
		if (!btn) { return; }
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			showError(root, null);
			btn.disabled = true;
			register(root).then(function () {
				var form = root.getAttribute('data-success-form');
				var next = root.getAttribute('data-success-url');
				if (form && document.querySelector(form)) {
					document.querySelector(form).submit();
				} else if (next) {
					window.location.href = next;
				} else {
					window.location.reload();
				}
			}).catch(function (err) {
				if (!isCancel(err)) { showError(root, err); }
				btn.disabled = false;
			});
		});
	}

	// ------------------------------------------------------------------ init

	function toggle(selector, show) {
		document.querySelectorAll(selector).forEach(function (el) { el.hidden = !show; });
	}

	function init() {
		toggle('[data-udp-passkey-supported]', supported);
		toggle('[data-udp-passkey-unsupported]', !supported);

		var platform = supported && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable
			? PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().catch(function () { return false; })
			: Promise.resolve(false);
		platform.then(function (has) {
			toggle('[data-udp-passkey-platform]', has);
			toggle('[data-udp-passkey-noplatform]', !has);
			toggle('[data-udp-passkey-other]', supported && !has);
		});

		// [data-udp-reveal="#id"]: click to show a hidden section (e.g. "Set a password instead").
		document.querySelectorAll('[data-udp-reveal]').forEach(function (link) {
			link.addEventListener('click', function (e) {
				var target = document.querySelector(link.getAttribute('data-udp-reveal'));
				if (!target) { return; }
				e.preventDefault();
				target.hidden = false;
				link.hidden = true;
				var focus = target.querySelector('input:not([type=hidden])');
				if (focus) { focus.focus(); }
			});
		});

		// [data-udp-show-password="#id"]: checkbox that shows/hides a password field.
		document.querySelectorAll('[data-udp-show-password]').forEach(function (box) {
			box.addEventListener('change', function () {
				var field = document.querySelector(box.getAttribute('data-udp-show-password'));
				if (field) { field.type = box.checked ? 'text' : 'password'; }
			});
		});

		if (!supported) { return; }
		document.querySelectorAll('[data-udp-passkey-login]').forEach(wireLogin);
		document.querySelectorAll('[data-udp-passkey-register]').forEach(wireRegister);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
