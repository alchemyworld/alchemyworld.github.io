<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    ob_start();
    session_start();

    $servername = "remotemysql.com";
    $username = "M6LZS3TUrJ";
    $password = "ZFDH50UeIg";
    $dbname = "M6LZS3TUrJ";

    $conn = new mysqli($servername, $username, $password, $dbname);

?>