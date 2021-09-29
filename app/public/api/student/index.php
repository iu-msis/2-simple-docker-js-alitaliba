<?php

echo getenv('MY_SQL_DATABASE')

require 'class/DbConnection.php'



$db = DbConnection::getConnection();
