<?php

    $check = $conn->query("select * from users where email = '$email' and pass = '$pass'");

    if ($check->num_rows > 0) {
        $_SESSION['login'] = false;
        header("location: ../../html/log.html");
    }else{
        $conn->query("insert into users (email, name, pass) values('$email', '$name', '$pass')");
        $last_id = $conn->insert_id;

        $_SESSION['login'] = true;
        $_SESSION['id'] = $last_id;
        $_SESSION['name'] = $name;

        $conn->query("insert into games (user_id, elems_have) values($last_id, '$jsonelems')");
        header("location: ../../html/index.html");
    }

?>