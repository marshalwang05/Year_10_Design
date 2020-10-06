function randomName(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomNumber(limit){
  return Math.floor(Math.random() * limit) + 1
}

var results = [];
for(var i = 0; i<randomNumber(100); i++){
  results.push({
  Name: randomName(randomNumber(7)),
  Freestyle: randomNumber(300),
  Breastroke: randomNumber(300),
  Backstroke: randomNumber(300),
  Butterfly: randomNumber(300),
  Team:randomName(randomNumber(20))
  })
}



//Comparer Function
//Returning a negative number means a goes infront of b
//Returning a positive number means b goes infront of a
function GetSortOrder(prop) {    
   return function(a, b) {
      if(isNaN(Number(a[prop]))==false){
        return a[prop]-b[prop];
      }
      else{
         return a[prop].localeCompare(b[prop]);
      }
   }    
}    

const sortby = "Freestyle";

results.sort(GetSortOrder(sortby)); //Pass the attribute to be sorted on    
console.log("Sorted by " + sortby);    
for (var item in results) {
   console.log((Number(item)+1)+". "+results[item]["Name"]+" from "+results[item]["Team"]);
   console.log(results[item][sortby]);
   console.log("–––");
}