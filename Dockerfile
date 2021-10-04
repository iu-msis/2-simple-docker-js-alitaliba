FROM php:7.4-apache

LABEL maintainer="Ali Talib"

RUN docker-php-ext-install pdo_mysql

#Apache configuration


# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

#Copy our public folder to 
COPY app /srv/app

#Set the working directory in 
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf