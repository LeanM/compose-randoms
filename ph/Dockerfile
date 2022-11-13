FROM php:5.6-apache

WORKDIR /usr/ph/src
COPY . .

CMD php -S 0.0.0.0:${NUMPH_PORT} -t ./src