var emailInput = document.getElementById('email');
var commentInput = document.getElementById('comment');

function validateData() {
	var isValidEmail = validateEmail();
	var isValidComment = validateComment();

	if(!(isValidEmail)) {
		alert("You have entered an invalid email address!");
	}  
	
	if(!(isValidComment)) {
		alert('Comment field cannot be left empty!');
	}
}

function validateEmail() {  
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {  
    	return true;  
  	} else {
    	return false; 
  	} 
}

function validateComment() {
	if(commentInput.value  !== '') {
		return true;
	} else {
		return false;
	}
}