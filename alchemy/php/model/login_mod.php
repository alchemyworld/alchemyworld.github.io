<?php

    if($check->num_rows > 0){

        $row = $check->fetch_assoc();

        $_SESSION['login'] = true;
        $_SESSION['id'] = $row['id'];
        $_SESSION['name'] = $row['name'];

        header("location: ../../html/index.html");
    }else{

        $_SESSION['login'] = false;

        header("location: ../../html/log.html");
    }

?>