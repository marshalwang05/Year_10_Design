  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCEla56xomNL7lPELGpojUK4yGSMfHQCJA",
    authDomain: "swim-app-7d4f9.firebaseapp.com",
    databaseURL: "https://swim-app-7d4f9.firebaseio.com",
    projectId: "swim-app-7d4f9",
    storageBucket: "swim-app-7d4f9.appspot.com",
    messagingSenderId: "356840169056",
    appId: "1:356840169056:web:079b328159b0a9c7276d05",
    measurementId: "G-59MLB8X16F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  // const lPage = document.getElementById("loginPage");
  // lPage.style.display = "block";
  // const ePage = document.getElementById("entryPage");
  // ePage.style.display = "none";
  // const rPage = document.getElementById("rankingsPage");
  // rPage.style.display = "none";


  function getInfo(){
      var fullName = ['Marshal Wang'];
      var genderList = ['Male'];
      var strokeList = ['Breaststroke'];
      var distanceList = ['50'];
      var courseList = ['SCM'];
      var timeList = ['00:30:48'];

      fname = document.getElementById('fname').value;
      lname = document.getElementById('lname').value;
      FULLNAMED = fname + ' ' + lname;
      fullName.push(FULLNAMED);
      console.log(fullName);
     
      gender = document.getElementById('gender').value;
      genderList.push(gender);
      console.log(genderList);
      
      stroke = document.getElementById('stroke').value;
      strokeList.push(stroke);
      console.log(strokeList);
      
      distance = document.getElementById('distance').value;
      distanceList.push(distance);
      console.log(distanceList);
      
      course = document.getElementById('course').value;
      courseList.push(course);
      console.log(courseList);

      time1 = document.getElementById('time1').value;
      time2 = document.getElementById('time2').value;
      time3 = document.getElementById('time3').value;
      FULLTIME = time1 + ':' + time2 + ':' + time3;
      timeList.push(FULLTIME);
      console.log(timeList);
  }



  function checkEntry(){
    var email = document.getElementById("email").value;
    if(!email.includes("@")||!email.substring(email.indexOf("@"), email.length).includes(".")){
      M.toast({html: 'Invalid Email'})
    }
    var password = document.getElementById("password").value;
    if(password.length<6||password.toLowerCase()==password||!/\d/.test(password)){
      M.toast({html: 'Password must be at least 6 characters, contain a capital, and a number'})
    }
    else{
      const lPage = document.getElementById("loginPage");
      lPage.style.display = "none";
      const ePage = document.getElementById("entryPage");
      ePage.style.display = "block";
      const rPage = document.getElementById("rankingsPage");
      rPage.style.display = "none";
    }
  }

  function submitEntry(){
    if(document.getElementById('fname').value === "" || document.getElementById('lname').value === "" || 
       document.getElementById('gender').value === "" || document.getElementById('stroke').value === "" ||
       document.getElementById('distance').value === "" || document.getElementById('course').value === "" ||
       document.getElementById('time1').value === "" || document.getElementById('time2').value === "" ||
       document.getElementById('time3').value === ""){
      M.toast({html: 'Please Fill out All Forms'})
    }
    else{
      const lPage = document.getElementById("loginPage");
      lPage.style.display = "none";
      const ePage = document.getElementById("entryPage");
      ePage.style.display = "none";
      const rPage = document.getElementById("rankingsPage");
      rPage.style.display = "block";
    }
  }

  function skipRankings(){
    const lPage = document.getElementById("loginPage");
    lPage.style.display = "none";
    const ePage = document.getElementById("entryPage");
    ePage.style.display = "none";
    const rPage = document.getElementById("rankingsPage");
    rPage.style.display = "block";
  }
  
  function backHome(){
    const lPage = document.getElementById("loginPage");
    lPage.style.display = "block";
    const ePage = document.getElementById("entryPage");
    ePage.style.display = "none";
    const rPage = document.getElementById("rankingsPage");
    rPage.style.display = "none";
  }   

  function modEmail(email){
    if(!email.includes("@")){
      return false;
    }
    const index_of_at = email.indexOf("@");
    var result= "";
    for(var i=0; i<index_of_at; i++){
      if(email.charAt(i)!='.')
        result+=email.charAt(i);
    }
    result+=email.substring(index_of_at, email.length);

    return result;
    console.log(result);
  }

  document.addEventListener('DOMContentLoaded', function() {
    options = {
      hover: false,
      closeOnClick: true
    };
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });


  function rankings(){
    time1 = document.getElementById('time1').value;
    time2 = document.getElementById('time2').value;
    time3 = document.getElementById('time3').value;

    totaltime = time1+100*time2+time3
    for(i=0; i<Array.length()-1; i++){
      Array[i]=

    }
  }




