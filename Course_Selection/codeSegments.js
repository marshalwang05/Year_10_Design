
function checkEmail(email){
	if(email.includes("@ucc.on.ca")){
		console.log("Valid");
	}
	else{
		console.log("Invalid")
	}
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