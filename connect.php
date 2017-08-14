<?php
// Connection à la DB
	$bdd = new PDO('mysql:host=localhost;dbname=nomophobia;charset=utf8', 'root', 'root');

// Insertion du résultat uploadé
	$req = $bdd->prepare('INSERT INTO `answers`(`score`, `city`, `age`) VALUES(:score, :city, :age)');
	$req->execute(array(
		'score' => $_GET['totalKey'],
		'city' => $_GET['postCodeKey'],
		'age' => $_GET['ageKey']));

// Récupération de la commune concernée
	$postCode = $_GET["postCodeKey"];
	$liste = $bdd->query("SELECT * FROM cities WHERE postCode = '$postCode'");
	while ($donnees = $liste->fetch()){
		echo($donnees['cityName']);
	}

// Récuparation du top 10

// postCode = $_GET["postCodeKey"]

	// 	$parVille = [];
	// 	$parVille['postCode'] = $donnees['postCode'];
	// 	$parVille['cityName'] = $donnees['cityName'];
	// 	array_push($donneesFull, $parVille);
	// }
	// echo'<pre>';
	// print_r($donneesFull);
	// $encoded = json_encode($donneesFull);
	// echo($encoded);
	// echo'</pre>';



?>