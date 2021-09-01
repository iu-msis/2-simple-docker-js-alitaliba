FROM php:7.4-apache

LABEL maintainer="Ali Talib"

#Set the working directory in the image
WORKDIR /var/www/html

#Copy our public folder to the working directory
COPY public .