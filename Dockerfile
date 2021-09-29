FROM php:7.4-apache

LABEL maintainer="Ali Talib"

#Copy our public folder to 
COPY app /srv/app

#Set the working directory in 
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf