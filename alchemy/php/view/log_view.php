<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel</title>
    <link rel="stylesheet" href="../css/log.css">
</head>
<body>

    <div class="form">
        <div class="tab-header">
            <div class="active">Sign Up</div>
            <div>Sign In</div>
        </div>
        <div class="tab-content">
            <div class="tab-body active">
                <div class="form-element">
                    <form action="../php/log.php" method="POST">
                        <input type="email" name="uemail" placeholder="Input your email"><br>
                        <input type="text" name="uname" placeholder="Input your name"><br>
                        <input type="password" name="upass" placeholder="Input your password"><br>
                        <input type="submit" value="Sign Up">
                    </form>
                </div>
            </div>

            <div class="tab-body">
                <div class="form-element">
                    <form action="../php/log.php" method="POST">
                        <input type="email" name="iemail" placeholder="Input your email"><br>
                        <input type="password" name="ipass" placeholder="Input your password"><br>
                        <input type="submit" value="Sign In">
                    </form>
                </div>
            </div>

        </div>
    </div>

    <script src="../js/log.js"></script>
</body>
</html>