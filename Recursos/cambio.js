$(document).ready(function() {
	var URLactual = self.location.href.match( /\/([^/]+)$/ )[1];
	contenido = URLactual.split("?")
	if(contenido[1]==1){
		$("#new").show();
	}
	else{
		$("#new").hide();
	}
});

//angiecarosantana14@gmail.com