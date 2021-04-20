

function verify(){
	//When the form submits store the form inputs in variables
	let userName = document.getElementById('inputName').value;
	let company = document.getElementById('inputCompany').value
	let email = document.getElementById('inputEmail').value
	let phone = document.getElementById('inputPhone').value
	let message = document.getElementById('inputMessage').value

	//Then store these variables in an array (Be used to check if 'filled in' or 'blank')
	let formDetails = [userName, company, email, phone, message];

	/*Using this variable to validate the phone number to hold only numbers
	Found how to do this on https://www.w3resource.com/javascript/form/all-numbers.php */
	var numbers = /^[0-9]+$/; 

	/*  1. Go through the array of form inputs
		2. For each element, if it is blank
		3. Alert the user to complete all fields*/
	for(i in formDetails){
		if(formDetails[i] == ""){
			console.log("Please make sure to complete all fields")
			alert('Please make sure to complete all fields')
			return false;
		}
	}
	// If the 4th element (phone number) in array isn't made up of numbers, alert the user
	if(!formDetails[3].match(numbers)){
			console.log('numbers only');
			alert('Please use numbers only in the phone number field');
			return false;
		}
	}
