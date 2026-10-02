#!/usr/bin/env bash
# Concatenates static frio CSS and JS into UDP theme bundles.
# Run from the friendica root after any upstream frio asset update.
# Font CSS files (open-sans, fork-awesome) are intentionally excluded —
# their relative url() paths break when the file moves.

set -euo pipefail
FRIO="view/theme/frio"
ASSET="view/asset"
VIEW="view"
OUT_CSS="view/theme/udp/css/bundle.css"
OUT_JS="view/theme/udp/js/bundle.js"

mkdir -p view/theme/udp/css view/theme/udp/js

concat_with_newlines() {
  local out="$1"; shift
  > "$out"
  for f in "$@"; do
    cat "$f" >> "$out"
    echo >> "$out"
  done
}

echo "Building CSS bundle -> $OUT_CSS"
concat_with_newlines "$OUT_CSS" \
  "$VIEW/global.css" \
  "$ASSET/jquery-colorbox/example5/colorbox.css" \
  "$ASSET/jgrowl/jquery.jgrowl.min.css" \
  "$ASSET/jquery-datetimepicker/build/jquery.datetimepicker.min.css" \
  "$ASSET/perfect-scrollbar/dist/css/perfect-scrollbar.min.css" \
  "$FRIO/frameworks/bootstrap/css/bootstrap.min.css" \
  "$FRIO/frameworks/bootstrap/css/bootstrap-theme.min.css" \
  "$FRIO/frameworks/jasny/css/jasny-bootstrap.min.css" \
  "$FRIO/frameworks/bootstrap-select/css/bootstrap-select.min.css" \
  "$FRIO/frameworks/ekko-lightbox/ekko-lightbox.min.css" \
  "$FRIO/frameworks/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" \
  "$FRIO/frameworks/justifiedGallery/justifiedGallery.min.css" \
  "$FRIO/frameworks/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" \
  "$FRIO/frameworks/bootstrap-toggle/css/bootstrap-toggle.min.css" \
  "$VIEW/js/fancybox/jquery.fancybox.min.css" \
  "$FRIO/css/hovercard.css" \
  "$FRIO/css/font-awesome.custom.css"
echo "  CSS: $(wc -l < "$OUT_CSS") lines"

echo "Building JS bundle -> $OUT_JS"
concat_with_newlines "$OUT_JS" \
  "$VIEW/js/modernizr.js" \
  "$ASSET/jquery/dist/jquery.min.js" \
  "$VIEW/js/jquery.textinputs.js" \
  "$ASSET/jquery-textcomplete/dist/jquery.textcomplete.min.js" \
  "$VIEW/js/autocomplete.js" \
  "$ASSET/jquery-colorbox/jquery.colorbox-min.js" \
  "$ASSET/jgrowl/jquery.jgrowl.min.js" \
  "$ASSET/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js" \
  "$ASSET/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js" \
  "$ASSET/imagesloaded/imagesloaded.pkgd.min.js" \
  "$ASSET/base64/base64.min.js" \
  "$ASSET/dompurify/dist/purify.min.js" \
  "$VIEW/js/main.js" \
  "$FRIO/frameworks/bootstrap/js/bootstrap.min.js" \
  "$FRIO/frameworks/jasny/js/jasny-bootstrap.custom.js" \
  "$FRIO/frameworks/bootstrap-select/js/bootstrap-select.min.js" \
  "$FRIO/frameworks/ekko-lightbox/ekko-lightbox.min.js" \
  "$FRIO/frameworks/justifiedGallery/jquery.justifiedGallery.min.js" \
  "$FRIO/frameworks/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js" \
  "$FRIO/frameworks/flexMenu/flexmenu.custom.js" \
  "$FRIO/frameworks/jquery-scrollspy/jquery-scrollspy.js" \
  "$FRIO/frameworks/autosize/autosize.min.js" \
  "$FRIO/frameworks/sticky-kit/jquery.sticky-kit.min.js" \
  "$FRIO/js/theme.js" \
  "$FRIO/js/modal.js" \
  "$FRIO/js/hovercard.js" \
  "$FRIO/js/textedit.js" \
  "vendor/enyo/dropzone/dist/min/dropzone.min.js" \
  "$VIEW/js/dropzone-factory.js" \
  "$VIEW/js/fancybox/jquery.fancybox.min.js" \
  "$VIEW/js/fancybox/fancybox.config.js" \
  "$VIEW/js/vanillaEmojiPicker/vanillaEmojiPicker.min.js"
echo "  JS:  $(wc -l < "$OUT_JS") lines"

echo "Done. Deploy view/theme/udp/css/bundle.css and view/theme/udp/js/bundle.js"
