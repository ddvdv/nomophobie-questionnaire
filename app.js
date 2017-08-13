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
				msg = "fortement en désaccord";
				break;
			case 2:
				msg = "en désaccord";
				break;
			case 3:
				msg = "un peu en désaccord";
				break;
			case 4:
				msg = "neutre";
				break;
			case 5:
				msg = "en peu en accord";
				break;
			case 6:
				msg = "en accord";
				break;
			case 7:
				msg = "fortement en accord";
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
			$('#total').text(total);
			// Envoi du résulat en AJAX
			postCodeVal = $('#city').val();
			ageVal = $('#age').val();
			totalVal = total;
			$.get('connect.php?totalKey='+totalVal+'&postCodeKey='+postCodeVal+'&ageKey='+ageVal, function(data){
				$('#resultat').html(data);
			});
		});

});
