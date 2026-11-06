FROM udp-base:latest

# Overlay UDP Friendica fork files on top of the base image.
# The base image provides PHP, all extensions, Apache config, and entrypoint scripts.
# vendor/ is pre-built on the host via `composer install --no-dev -o` and COPYed in.

COPY --chown=www-data:www-data . /usr/src/friendica/
