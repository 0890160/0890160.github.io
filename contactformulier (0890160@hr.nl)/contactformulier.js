var vnaam = document.getElementById("voornaam");
var anaam = document.getElementById("achternaam");
var tnumm = document.getElementById("telefoonnummer");
var email = document.getElementById("email");
var opmer = document.getElementById("opmerking");

function allnumeric(nummer)  
   {  
      var numbers = /^[0-9]+$/;  
      if(nummer.value.match(numbers))  
      {   
      return true;  
      }  
      else  
      {  
      alert('Ongeldig nummer');  
      document.form1.text1.focus();  
      return false;  
      }  
   }   



	
	
