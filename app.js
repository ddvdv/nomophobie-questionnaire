// fonction JQUERY globale
$(function(){
	// Mise à jour dans le questionnaire lors du déplacement du curseur
	$('input').change(function(){
		let num = $(this).val();
		num = parseFloat(num);
		let idFull = $(this).attr('id');
		let idTab = idFull.split("-");
		let id = idTab[1];
		let msg = '';
		switch(num){
			case 1:
				msg = "point: fortement en désaccord";
				break;
			case 2:
				msg = "points: en désaccord";
				break;
			case 3:
				msg = "points: un peu en désaccord";
				break;
			case 4:
				msg = "points: neutre";
				break;
			case 5:
				msg = "points: en peu en accord";
				break;
			case 6:
				msg = "points: en accord";
				break;
			case 7:
				msg = "points: fortement en accord";
				break;
		}
		console.log(num);
		$('#rangevalue'+id).text(num + " " + msg);
	});
		// Lorsque clic sur le boutton submit
		$('#submit').click(function(event){
			// Calcul du total des points
			let total = 0;
			for(i = 1; i <= 20; i++){
				numRep = $('#question-'+i).val();
				total = total + parseFloat(numRep);
			}
			var msg = '';
			if(total > 100){
					msg = "Plus de 100 points, vous êtes fameusement entamé!";
				}
				else if( total < 100 && total > 70 ){
					msg = "Au dessus de la moyenne, mais on limite la casse.";
				}
				else if(total >40 && total < 70){
					msg = "En dessous de la moyenne, vous semblez être raisonnable";
				}
				else{
					msg = "Possédez-vous réellement un téléphone?";
				}
			$('#total').text(total + " points au total; " + msg);
			$('#total').focus();
			// Envoi du résulat en AJAX
			// postCodeVal = $('#city').val();
			// ageVal = $('#age').val();
			// totalVal = total;
			// $.get('connect.php?totalKey='+totalVal+'&postCodeKey='+postCodeVal+'&ageKey='+ageVal, function(data){
			// 	$('#resultat').html(data);
			// });
		});

});
