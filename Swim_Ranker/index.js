  const lPage = document.getElementById("loginPage");
  lPage.style.display = "block";
  const ePage = document.getElementById("entryPage");
  ePage.style.display = "none";
  const rPage = document.getElementById("rankingsPage");
  rPage.style.display = "none";

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



  document.addEventListener('DOMContentLoaded', function() {
    options = {
      hover: false,
      closeOnClick: true
    };
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
  //Initialization
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  btn = document.getElementById("submit");

  btn.addEventListener("click",function() {      
    console.log("clicks")
    
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    FULLNAMED = fname + ' ' + lname;
    console.log(FULLNAMED)

    gender = document.getElementById('gender').value;
    console.log(gender); 

    stroke = document.getElementById('stroke').value;
    console.log(stroke);

    distance = document.getElementById('distance').value;
    console.log(distance);  

    course = document.getElementById('course').value;
    console.log(course);

    time1 = document.getElementById('time1').value;
    time2 = document.getElementById('time2').value;
    time3 = document.getElementById('time3').value;
    FULLTIME = time1 + ':' + time2 + ':' + time3;
    console.log(FULLTIME);

    intTime = 6000*time1+100*time2+time3;

    setData(FULLNAMED, gender, stroke, distance, course, FULLTIME, intTime)
  })


  function setData(name, gender, stroke, distance, course, time, intTime){
    // Create a database object that we can refer to
    var ref = database.ref('DATA');
            
    var data = {
      'name': name,
      'gender': gender,
      'stroke': stroke,
      'distance': distance,
      'course': course,
      'time': time,
      'intTime': intTime
    }
    // "PUSH" means we add something to the database
    ref.push(data);
   } // end setdata


  function getData(){

    var database = firebase.database();
    var ref = database.ref('DATA');

    ref.on('value', gotData, errData) 
  }
  
  function gotData(data){

    document.getElementById("nameList").innerHTML = "";
    document.getElementById("timeList").innerHTML = "";

    var swimmerData = data.val();
    console.log(swimmerData);
    var keys = Object.values(swimmerData);
    console.log(keys);

    keys.sort(GetSortOrder('intTime'));

    var rgender = document.getElementById("rgender").value;
    var rstroke = document.getElementById("rstroke").value;
    var rdistance = document.getElementById("rdistance").value;
    var rcourse = document.getElementById("rcourse").value;

    if(rgender=="Male"){ 
      document.getElementById("eventName").innerHTML = "Men's "+ rdistance + " Meter " + rstroke + " " + rcourse;
    }
    else if (rgender =="Female"){
      document.getElementById("eventName").innerHTML = "Women's "+ rdistance + " Meter " + rstroke + " " + rcourse;
    }
    else{
      document.getElementById("eventName").innerHTML = "Mixed "+ rdistance + " Meter " + rstroke + " " + rcourse;
    }


    if(document.getElementById('rgender').value === "none" || document.getElementById('rstroke').value === "none" || 
       document.getElementById('rdistance').value === "none" || document.getElementById('rcourse').value === "none"){
      M.toast({html: 'Please Fill out All Forms'})
    }

    for (var i = 0; i < keys.length; i++){
      var k = keys[i];
      var name = keys[i].name;
      var gender = keys[i].gender;
      var stroke = keys[i].stroke;
      var distance = keys[i].distance;
      var course = keys[i].course;
      var time = keys[i].time;

      if(rgender != "No Answer"){
        if(rgender != gender){
          continue;
        }
      }

      if (rstroke != stroke){
        continue;
      }
      else if (rdistance != distance){
        continue;
      }
      else if (rcourse != course){
        continue;
      }

      // Swimmer Names
      // Create a reference to the ordered list called 'studentList'
      // called 'oListStudent'
      var onameList = document.getElementById('nameList');
      var entry = document.createElement('li'); // a list element to be added to the ordered list
      entry.appendChild(document.createTextNode(name));
      onameList.appendChild(entry);

      // Swimmer times
      // Create a reference to the ordered list called 'studentList'
      // called 'oListStudent'
      var otimeList = document.getElementById('timeList');
      var entry = document.createElement('li'); // a list element to be added to the ordered list
      entry.appendChild(document.createTextNode(time));
      otimeList.appendChild(entry);

    }
  }

  function errData(err){
    console.log('Error!')
    console.log(err)
  }


function GetSortOrder(prop) {    
   return function(a, b) {
      return a[prop]-b[prop];
   }    
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

  function backEntry(){
    const lPage = document.getElementById("loginPage");
    lPage.style.display = "none";
    const ePage = document.getElementById("entryPage");
    ePage.style.display = "block";
    const rPage = document.getElementById("rankingsPage");
    rPage.style.display = "none";

    document.getElementById("rstroke").value = 'none'
    document.getElementById("rdistance").value = 'none'
    document.getElementById("rcourse").value = 'none'

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



  function rankings(){
    // time1 = document.getElementById('time1').value;
    // time2 = document.getElementById('time2').value;
    // time3 = document.getElementById('time3').value;

    // totaltime = time1+100*time2+time3
    // for(i=0; i<Array.length()-1; i++){
    //   Array[i]=;

    // }
  }


function getInfo(){
      // // fname = document.getElementById('fname').value;
      // // lname = document.getElementById('lname').value;
      // // FULLNAMED = fname + ' ' + lname;
      // // fullName.push(FULLNAMED);
      // // console.log(fullName);
     
      // gender = document.getElementById('gender').value;
      // genderList.push(gender);
      // console.log(genderList);
      
      // stroke = document.getElementById('stroke').value;
      // strokeList.push(stroke);
      // console.log(strokeList);
      
      // distance = document.getElementById('distance').value;
      // distanceList.push(distance);
      // console.log(distanceList);
      
      // course = document.getElementById('course').value;
      // courseList.push(course);
      // console.log(courseList);

      // time1 = document.getElementById('time1').value;
      // time2 = document.getElementById('time2').value;
      // time3 = document.getElementById('time3').value;
      // FULLTIME = time1 + ':' + time2 + ':' + time3;
      // timeList.push(FULLTIME);
      // console.log(timeList);
  }


