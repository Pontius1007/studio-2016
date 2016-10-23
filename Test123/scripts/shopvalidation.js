// A function to check if anything is intered in the form. Check if the length og the information is longer than 0 and alerts the user if nothing is intered 

function formValidation()
{
    var fnavn = document.forms["shirtform"]["fornavn"].value;
    var enavn = document.forms["shirtform"]["etternavn"].value;	
	var mail = document.forms["shirtform"]["mail"].value;
	var telefon = document.forms["shirtform"]["telefon"].value;
	var adresse = document.forms["shirtform"]["adresse"].value;
	var tshirt = document.forms["shirtform"]["t-shirt1"].value;
    if(fnavn.length === 0) {
        alert("Please enter your first name");
        return false;
    }
	else if (enavn.length === 0) {
		alert("Please enter your last name");
		return false;
	}
	else if (mail.length === 0) {
		alert("Please enter a valig mail");
		return false;
	}
	else if(telefon.length === 0) {
		alert("Please enter a valid phone number");
		return false;
	}
	else if(adresse.length === 0) {
		alert("Please write an address");
		return false; 
	}
	else if(tshirt.length === 0) {
		alert("You have to write the ID-code for your T-Shirt")
		return false
	}
	else {
		return true;
	}
	

}
