
const fPage = document.getElementById("firstPage");
fPage.style.display = "block";
const sPage = document.getElementById("secondPage");
sPage.style.display = "none";
const lPage = document.getElementById("thirdPage");
lPage.style.display = "none";

const quiz = document.getElementById("courseQuiz");
quiz.style.display = "none";

const art = document.getElementById("art");
art.style.display = "none";
const film = document.getElementById("film");
film.style.display = "none";
const music = document.getElementById("music");
music.style.display = "none";
const drama = document.getElementById("drama");
drama.style.display = "none";
const economics = document.getElementById("economics");
economics.style.display = "none";
const geography = document.getElementById("geography");
geography.style.display = "none";
const history = document.getElementById("history");
history.style.display = "none";
const philosophy = document.getElementById("philosophy");
philosophy.style.display = "none";
const aa = document.getElementById("aa");
aa.style.display = "none";
const ai = document.getElementById("ai");
ai.style.display = "none";
const chemistry = document.getElementById("chemistry");
chemistry.style.display = "none";
const physics = document.getElementById("physics");
physics.style.display = "none";
const bio = document.getElementById("bio");
bio.style.display = "none";
const cs = document.getElementById("cs");
cs.style.display = "none";
const next = document.getElementById("next");
next.style.display = "none";




function forLoop(){
    var setnumber = document.getElementById('numberBox').value;
    for (var i=0; i<setnumber; i++){

      var para = document.createElement("input"); 
      var para1 = document.createElement("br"); 
      para.style.width = "10%";
      var node = document.createTextNode(""); 
      para.appendChild(node);  
      para.id = "options" + i;
      console.log(para.id)

      var element = document.getElementById("courseNumber"); 
      element.appendChild(para);
      element.appendChild(para1);

  }
}

function checkEmail(email){

  var email = document.getElementById("email").value;

  var length = email.length;
  var name = "";
  if (email.includes("@ucc.on.ca")){
   var name = email.substring(0, email.indexOf("."));
   var newname = name.charAt(0).toUpperCase() + name.slice(1)
   M.toast({html: 'Welcome '+newname+'!'})

   const lPage = document.getElementById("firstPage");
   lPage.style.display = "none";
   const ePage = document.getElementById("secondPage");
   ePage.style.display = "block";
   const rPage = document.getElementById("thirdPage");
   rPage.style.display = "none";
}
else{
    M.toast({html: 'Please enter a UCC Email'})
}

}
function tolPage(){
    const fPage = document.getElementById("firstPage");
    fPage.style.display = "none";
    const sPage = document.getElementById("secondPage");
    sPage.style.display = "none";
    const lPage = document.getElementById("thirdPage");
    lPage.style.display = "block";
}

function startQuiz(){
  const quiz = document.getElementById("courseQuiz");
  quiz.style.display = "block";
}
function finalQuiz(){
    const art = document.getElementById("art");
    art.style.display = "none";
    const film = document.getElementById("film");
    film.style.display = "none";
    const music = document.getElementById("music");
    music.style.display = "none";
    const drama = document.getElementById("drama");
    drama.style.display = "none";
    const economics = document.getElementById("economics");
    economics.style.display = "none";
    const geography = document.getElementById("geography");
    geography.style.display = "none";
    const history = document.getElementById("history");
    history.style.display = "none";
    const philosophy = document.getElementById("philosophy");
    philosophy.style.display = "none";
    const aa = document.getElementById("aa");
    aa.style.display = "none";
    const ai = document.getElementById("ai");
    ai.style.display = "none";
    const chemistry = document.getElementById("chemistry");
    chemistry.style.display = "none";
    const physics = document.getElementById("physics");
    physics.style.display = "none";
    const bio = document.getElementById("bio");
    bio.style.display = "none";
    const cs = document.getElementById("cs");
    cs.style.display = "none";
    var arts = document.getElementById("option1").value;
    var humanity = document.getElementById("option2").value;
    var math = document.getElementById("option3").value;
    var science = document.getElementById("option4").value;

    const quiz = document.getElementById("courseQuiz");
    quiz.style.display = "none";
    const bshowAll = document.getElementById("showAll");
    bshowAll.style.display = "block";


    if(arts == 'art'){
        art.style.display = "block";
    }
    else if(arts == 'film'){
        film.style.display = "block";
    }
    else if(arts == 'music'){
        music.style.display = "block";
    }
    else{
        drama.style.display = "block";
    }


    if(humanity=='econ'){
        economics.style.display = "block";
    }
    else if(humanity=='geo'){
        geography.style.display = "block";
    }
    else if(humanity=='history'){
        history.style.display = "block";
    }
    else{
        philosophy.style.display = "block";
    }


    if(math=='aa'){
        aa.style.display = "block";
    }
    else{
        ai.style.display = "block";
    }


    if(science=='chem'){
        chemistry.style.display = "block";
    }
    else if(science=='physics'){
        physics.style.display = "block";
    }
    else if(science=='bio'){
        bio.style.display = "block";
    }
    else{
        cs.style.display = "block";
    }

}

function showAll(){
    const art = document.getElementById("art");
    art.style.display = "block";
    const film = document.getElementById("film");
    film.style.display = "block";
    const music = document.getElementById("music");
    music.style.display = "block";
    const drama = document.getElementById("drama");
    drama.style.display = "block";
    const economics = document.getElementById("economics");
    economics.style.display = "block";
    const geography = document.getElementById("geography");
    geography.style.display = "block";
    const history = document.getElementById("history");
    history.style.display = "block";
    const philosophy = document.getElementById("philosophy");
    philosophy.style.display = "block";
    const aa = document.getElementById("aa");
    aa.style.display = "block";
    const ai = document.getElementById("ai");
    ai.style.display = "block";
    const chemistry = document.getElementById("chemistry");
    chemistry.style.display = "block";
    const physics = document.getElementById("physics");
    physics.style.display = "block";
    const bio = document.getElementById("bio");
    bio.style.display = "block";
    const cs = document.getElementById("cs");
    cs.style.display = "block";
    const next = document.getElementById("next");
    next.style.display = "block";
}



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Economics', 'Geography', 'History', 'Philosophy'],
        datasets: [{
            label: '# of Votes',
            data: [23, 10, 13, 1],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



var provider = new firebase.auth.GoogleAuthProvider();
var userId = document.getElementById("uid").innerHTML;

var config = {
    apiKey: "AIzaSyAAOtTgZfosZ1CKgZxzDciIr6uCSXCIsDA",
    authDomain: "course-selection-559e0.firebaseapp.com",
    databaseURL: "https://course-selection-559e0-default-rtdb.firebaseio.com",
    projectId: "course-selection-559e0",
    storageBucket: "course-selection-559e0.appspot.com",
    messagingSenderId: "164519433062",
    appId: "1:164519433062:web:3e7e75812d45d91300aea7",
    measurementId: "G-K45VYCNNWX"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
    if (user == null) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
          window.location.replace("fbtest.html");
      });
        return;
    } else {
        userEmail = user.email;
        document.getElementById("uid").innerHTML = userEmail;
    }
    if (userEmail.includes("@ucc.on.ca")){
      mainpage = document.getElementById("mainpage");
      mainpage.style.display = "block";
  } else{
      errorpage = document.getElementById("errorpage")
      mainpage.style.display = "none";
      errorpage.style.display = "block";
  }
});


function signout(){
  firebase.auth().signOut()
}  




firebase.analytics();

var database = firebase.database();

var updateDisplay = database.ref('users/');
updateDisplay.on('value', (snapshot) => {
    const data = snapshot.val();
    const dataStr = JSON.stringify(data);
    console.log('Data:' + data);
    console.log('***********')
    console.log('Data String: ' + dataStr)
});

function addUser() {
    var rootRef = firebase.database().ref();
    let newid = document.getElementById('username').value;
    console.log(newid);
    var idRef = rootRef.child('users/' + newid);
    var newidRef = idRef.push();
    var listInfo = [];

}

function writeUserData(userId) {
    userId = document.getElementById('username').value;
    firebase.database().ref('users/' + userId).set({name:userId});
}


















