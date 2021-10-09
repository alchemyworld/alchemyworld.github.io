<?php

	include "../conn.php";

	$result = $conn->query("select * from games where user_id = $_SESSION[id]");

	if ($result->num_rows > 0) {
		
		$row = $result->fetch_assoc();

		echo $row['elems_have'];

	}

?>