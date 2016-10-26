function formValidation() {
	var navn = document.forms["producerForm"]["name"].value;
	var mail = document.forms["producerForm"]["email"].value;
	var regex = /\S+@\S+\.\S+/;

	if(navn == null || navn == "") {
		alert("Please enter a name!");
		return false;
	}

	else if(regex.test(mail) == false) {
		alert("Please enter a mail on the form name_part@domain_part.land_code");
		return false;
	}

	else {
		return true;
	}

}