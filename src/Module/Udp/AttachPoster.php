<?php

// UDP: poster (thumbnail) image for a video attachment.
//
// GET /attach/{item}/poster
//
// Used by BBCode-rendered [video] tags for local attachments (post-media rendered
// videos get the same thumbnail via /photo/preview — see Module\Photo). The image is
// the frame UploadChunk extracted at upload time (udp-media.thumb-resource-id).
//
// Permission is checked against the *attachment*: the thumbnail photo is stored
// owner-only, but anyone allowed to see the video should see its poster.

namespace Friendica\Module\Udp;

use Friendica\BaseModule;
use Friendica\Core\System;
use Friendica\DI;
use Friendica\Model\Attach as MAttach;
use Friendica\Model\UdpMedia;
use Friendica\Network\HTTPException\ForbiddenException;
use Friendica\Network\HTTPException\NotFoundException;

class AttachPoster extends BaseModule
{
	protected function rawContent(array $request = [])
	{
		$attachId = intval($this->parameters['item'] ?? 0);
		if ($attachId <= 0 || MAttach::exists(['id' => $attachId]) === false) {
			throw new NotFoundException();
		}

		$attach = MAttach::getByIdWithPermission($attachId);
		if ($attach === false) {
			throw new ForbiddenException(DI::l10n()->t('Permission denied.'));
		}

		$thumb = UdpMedia::getAttachThumbData($attachId);
		if ($thumb === null) {
			throw new NotFoundException();
		}

		$public = ($attach['allow_cid'] . $attach['allow_gid'] . $attach['deny_cid'] . $attach['deny_gid']) === '';
		$etag   = '"' . $thumb['etag'] . '"';
		header_remove('Pragma');
		header('Cache-Control: ' . ($public ? 'public' : 'private') . ', max-age=31536000');
		header('ETag: ' . $etag);
		if (trim($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === $etag) {
			http_response_code(304);
			System::exit();
		}

		header('Content-Type: ' . $thumb['type']);
		header('Content-Length: ' . strlen($thumb['data']));
		echo $thumb['data'];
		System::exit();
	}
}
