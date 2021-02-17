
function checkEmail(email){
	if(email.includes("@ucc.on.ca")){
		console.log("Valid");
	}
	else{
		console.log("Invalid")
	}

	newEmail = email.substring(0,email.indexOf("@ucc.on.ca"));

	fname = newEmail.substring(0,email.indexOf("."));
	lname = newEmail.substring(email.indexOf(".")+1,newEmail.length);
	console.log(fname+" "+lname);
}

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

btn = document.getElementById("submit");

  btn.addEventListener("click",function() {      
   	hi = 'hi'
  })

function setData(hi){
    var ref = database.ref('DATA');            
    var data = {
      'hi': hi
    }
 
    ref.push(data);
   }