// Calcul du niveau de dépendance

$(function(){
	$('#submit').click(function(){
		let total = 0;
		for(i = 1; i <= 20; i++){
			numRep = $("#question"+i).val();
			total = total + parseFloat(numRep);
		}
		$('#total').text(total);
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