function checkEmail(email){

  var email = document.getElementById("email").value;

  var length = email.length;
  var name = "";
  if (email.includes("@ucc.on.ca")){
     var name = email.substring(0, email.indexOf("."));
     var newname = name.charAt(0).toUpperCase() + name.slice(1)
     M.toast({html: 'Welcome '+newname+'!'})
   }
  else{
        M.toast({html: 'Please enter a UCC Email'})
      }

}