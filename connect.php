<?php

	$bdd = new PDO('mysql:host=localhost;dbname=nomophobia;charset=utf8', 'root', 'root');


	$liste = $bdd->query('SELECT * FROM cities');

	$donneesFull = [];
	while ($donnees = $liste->fetch()){
		$parVille = [];
		$parVille['postCode'] = $donnees['postCode'];
		$parVille['cityName'] = $donnees['cityName'];
		array_push($donneesFull, $parVille);
	}
	// echo'<pre>';
	// print_r($donneesFull);
	$encoded = json_encode($donneesFull);
	echo($encoded);
	// echo'</pre>';



?>