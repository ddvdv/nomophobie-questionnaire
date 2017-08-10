// Calcul du niveau de dépendance

$(function(){
	$('#submit').click(function(){
		let total = 0;
		for(i = 1; i <= 20; i++){
			numRep = $('#question-'+i).val();
			total = total + parseFloat(numRep);
		}
		$('#total').text(total);
	});
	// Mise à jour du niveau des rep aux questions
	$('input').change(function(){
		let num = $(this).val();
		num = parseFloat(num);
		let idFull = $(this).attr('id');
		let idTab = idFull.split("-");
		let id = idTab[1];
		console.log(id);
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
});




// Envoi du résultat en AJAX
var form = document.getElementsByTagName('form');

form = form[0];



form.addEventListener('submit', function(e){
	e.preventDefault();
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     form.insertAdjacentHTML('afterEnd', this.responseText);
	    }
	  };
	  xhttp.open("GET", "result.php", true);
	  xhttp.send();
});