<?php
// Import du questionnaire
	$myQuestions = file_get_contents('myQuestions.json');
	$myQuestionsDecoded = json_decode($myQuestions);
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Nomophobia</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
	<div class="title">
	<h1>Êtes-vous nomophobe ?</h1>
	</div>

	<div class="intro">
		<p>
		La nomophobie est un mal de l’ère moderne. Il s’est développé avec l’augmentation de l’interaction entre l’homme et les technologies mobiles, en particulier le téléphone.<p>
		<p>
		Avez-vous déjà perdu ou oublié votre téléphone quelque part? Pour certains, l’absence de téléphone s’accompagne d’une poussée d’anxiété qui peut s’avérer très grave. C’est dans le but de mesurer cette nomophobie et d’établir son degré de sévérité que ces chercheurs de l’Université de l’Iowa ont élaboré un questionnaire.</p>
		<p>
		L’étude a été menée en deux phases. La première a consisté en l’exploration qualitative de la nomophobie à travers des entrevues avec neuf étudiants. C’est à la suite de cette étape que quatre dimensions ont été définies : l’incapacité à communiquer, la perte de connectivité, l’impossibilité d’accéder à de l’information et l’abandon de la commodité.</p>
		<p>
		À partir de ces réponses, le questionnaire suivant a été élaboré dans la seconde phase de l’étude.
		</p>
		<p>Calculez votre niveau de nomophobie en déplaçant les curseurs!
		</p>
	</div>
<!-- Le calcul du résultat se fera en JS et la comparaison des stat en AJAX -->
	<form action="post" onsubmit="event.preventDefault();">

<!-- Génération du questionnaire -->
	<?php
		for($i = 1; $i <= 20; $i++){
			if($i == 10){
				echo('<br>Si je n’avais pas mon téléphone avec moi :');
			}
			?>	
				<div class="form-group">
					<label for='question<?php echo($i); ?>'>
					<p><?php echo($i . '. ' . $myQuestionsDecoded->$i); ?><br>
						<input type="range" id="question-<?php echo($i);?>" class="question" name="question<?php echo($i); ?>" min="1" max="7" onchange="rangevalue<?php echo($i); ?>.value=value"/>
						<output id="rangevalue<?php echo($i); ?>"></output>
				</div>
			<?php
		}
	?>
<!-- 	<div class="form-group">
		<label for='city'>Code Postal: 
			<input id="city" name="city">
		</label>
	</div>

	<div class="form-group">
		<label for='age'>Age: 
			<input id="age" name="age">
		</label>
	</div> -->


	<div class="form-group">
		<input type="submit" id="submit" name="submit" value="Calculer ma dépendance">
	</div>

	
	</form>

	<div id="resultat">
			<span id="total"></span>

	</div>

	<script src="jquery.js"></script>
	<script src="app.js"></script>

</body>
</html>