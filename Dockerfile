# ── Stage 1: build vendor/ ────────────────────────────────────────────────────
# vendor/ is never taken from the build context (.dockerignore excludes it):
# provision_box.yml syncs the source without it, so fresh boxes built images
# with no vendor/ and every slot fataled at install ("Vendor path not found").
# Building it here makes the image self-contained. The composer image supplies
# git and unzip, which udp-base lacks. friendica/json-ld comes from the
# UDPSolutions/php-json-ld fork on GitHub (see composer.json "repositories").
ARG COMPOSER_IMAGE=composer:2.9
FROM ${COMPOSER_IMAGE} AS vendor
WORKDIR /app

# Dependency layer: cached until composer.json / composer.lock change.
# Platform checks are skipped because this stage's PHP is not the runtime PHP;
# udp-base provides the required extensions.
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --no-progress \
        --no-scripts --no-autoloader --ignore-platform-reqs

# The optimized autoloader needs the source tree for its classmap.
COPY . .
RUN composer dump-autoload --optimize --no-dev --no-interaction \
    && test -f vendor/autoload.php

# ── Stage 2: runtime image ────────────────────────────────────────────────────
FROM udp-base:latest

# Overlay UDP Friendica fork files on top of the base image.
# The base image provides PHP, all extensions, Apache config, and entrypoint scripts.
COPY --chown=www-data:www-data . /usr/src/friendica/
COPY --from=vendor --chown=www-data:www-data /app/vendor /usr/src/friendica/vendor

# Refuse to produce an image that cannot install.
RUN test -f /usr/src/friendica/vendor/autoload.php
