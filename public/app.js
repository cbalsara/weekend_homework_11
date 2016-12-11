var app = function(){

  var url = 'http://hp-api.herokuapp.com/api/characters/students';

  makeRequest(url, requestComplete);
};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
  console.log("will apear before the requestComplete function")
};

var requestComplete = function(){
  if(this.status != 200) return;
  console.log("should appear with correct url");

var jsonString = this.responseText;
var characters = JSON.parse(jsonString);
//  calling on methods will go here  as it is the reuqestCompelete
populateList(characters); 
console.log("this should appear last behind every called function");
};

console.log("first seen")

var populateList = function(characters){
  var newCharacter = document.getElementById('HP-Characters');
  // console.log(characters);

  for (person of characters){
    var newPerson = document.createElement("li");
    newPerson.innerText = person.name;
    console.log(person);

    // append it

    newCharacter.appendChild(newPerson);


  } 
};







window.onload = app;