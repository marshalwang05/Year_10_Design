function checkEmail(email){

	var email = document.getElementById("email").value;
   
   int length = email.length();
   String name = "None";
   if (email.substring(length-10, length).equals("@ucc.on.ca")){
       name = email.substring(0, email.indexOf("."));
   }
   else{
   	      M.toast({html: 'Invalid Email'})
   }
   System.out.println(name);
 }
}