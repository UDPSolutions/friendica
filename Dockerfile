FROM udp-base:latest

# Overlay UDP Friendica fork files on top of the base image.
# The base image provides PHP, all extensions, Apache config, and entrypoint scripts.
# We supply the full application source; vendor/ comes from our fork's composer install.

COPY --chown=www-data:www-data . /usr/src/friendica/
