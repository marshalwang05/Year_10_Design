//Faking It:
//This means storing all the data and user informations in lists so it is there when the program starts.

var uNames = ["user1@test.com", "user2@test.com"];
var pWords = ["pword1", "pword2"];

//Write function checkCred that takes two parameters
// u, a string representing username
// p, a string representign password
//
// checkCred will check to see that u is contained in uNames
// if u exists, check that p matches the correct password
// return treue if the username and password are valid, false otherwise

function checkCred(u, p){
	for (i=0; i<uNames.length; i=i+1){
		
		if(uNames[i] === u){
			if(pWords[i] == p){
				return true;
			}
		}
	}

	return false;
}
result = checkCred("user1@test.com", "1234")
console.log(result);