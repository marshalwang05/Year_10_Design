function modEmail(email){
	const index_of_at = email.indexOf("@");
	var result = "";
	for(var i = 0; i<index_of_at; i++){
	if(email.charAt(i)!='.')
	result+=email.charAt(i);
	}
	result += email.substring(index_of_at, email.length);

	return result;
}
console.log(modEmail("m.arshal.wang@gmail.com"));
console.log(modEmail("m...............arshalwang@gmail.com"));
console.log(modEmail("marshalwang@gmail.com"));

function passwordRequirement(password){
	password = password.toString();
	if(password.length<6){
		return false;
	}
	else if(password.toLowerCase()==password){
		return false;
	}
	else if(!/\d/.test(password)){
		return false;
	}
	return true;
}

console.log(passwordRequirement("Hello1"));
console.log(passwordRequirement("isthisapassword?"));
console.log(passwordRequirement("n0capital"));
console.log(passwordRequirement("NoNumber"));
console.log(passwordRequirement("SH0RT"));