<?php

	include "../conn.php";

	$cons = $_GET['cons'];
	$conf = $_GET['conf'];
	$name = $_GET['name'];
	$img = $_GET['img'];
	$id = intval($_GET['id']);

	$obj1 = [
		"name"=>"$name",
		"conf"=>"$conf",
		"cons"=>"$cons",
		"img"=>"$img",
		"id"=>$id
	];

	$obj2 = [
		"name"=>"$name",
		"conf"=>"$cons",
		"cons"=>"$conf",
		"img"=>"$img",
		"id"=>$id
	];


	$selected = $conn->query("select elems_have from games where user_id = $_SESSION[id]");

	if ($selected->num_rows > 0) {
		$row = $selected->fetch_assoc();
		$res = json_decode($row['elems_have']);

		$new_elems = json_encode($res);

		$json_obj1 = json_decode(json_encode($obj1));
		$json_obj2 = json_decode(json_encode($obj2));

		$new_elems_arr = json_decode($new_elems);

		if (in_array($json_obj1, $new_elems_arr) == false && in_array($json_obj2, $new_elems_arr) == false) {
			array_push($res, $obj1);
			$checked = json_encode($res);
			$conn->query("update games set elems_have = '$checked' where user_id = $_SESSION[id]");
		}

	}

?>