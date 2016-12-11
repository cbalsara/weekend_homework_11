var app = function(){
  var url = 'http://hp-api.herokuapp.com/api/characters/students';
  var change = document.getElementById('character-select');

  change.onchange = selectChangedHandle;

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
  var newCharacter = document.getElementById('character-select');
  // console.log(characters);

  for (person of characters){
    var newPerson = document.createElement("option");
    newPerson.innerText = person.name;
    newPerson.character = person
    // console.log(newPerson.character);

    var image = person.image;
    var photo = document.createElement('img');
    photo.src = image;

    var wandCore = person.wand.core;
    var wand = document.createElement("li");
    wand.innerText = wandCore;

    newCharacter.appendChild(newPerson);
    newCharacter.appendChild(photo);
    newCharacter.appendChild(wand);
  } 
};

var selectChangedHandle = function(){
  var selectedOption = this.options[this.selectedIndex];
  // console.log(this.options);
  var chosenPerson = selectedOption.character;

  var name = document.getElementById('character-name');
  name.innerText = chosenPerson.name;
  // console.log(name);

  var house = document.getElementById('character-house');
  house.innerText = chosenPerson.house;

  var picture = document.getElementById('character-picture');
  picture.src = chosenPerson.image;
};







window.onload = app;