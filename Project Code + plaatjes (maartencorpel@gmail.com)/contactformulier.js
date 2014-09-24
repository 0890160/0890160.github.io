var vnaam = document.getElementById("voornaam");
var anaam = document.getElementById("achternaam");
var tnumm = document.getElementById("telefoonnummer");
var email = document.getElementById("email");
var opmer = document.getElementById("opmerking");

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
	
	var melding = document.getElementById("foutmelding");
	
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		document.getElementById("foutmelding").innerhtml = "Welkom";
        return false;
    }
}


	
	
