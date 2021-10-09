<?php

	include "../conn.php";

	$result = $conn->query("select * from elements");
	$all_elems = [];

	while ($row = $result->fetch_assoc()) {
		$arr = [
			"name"=>"$row[name]",
			"conf"=>"$row[conf]",
			"cons"=>"$row[cons]",
			"img"=>"$row[img]",
			"id"=>$row["id"] - 1
		];
		array_push($all_elems, $arr);
	}

	echo json_encode($all_elems);

?>