var app = function(){
  var url = 'http://hp-api.herokuapp.com/api/characters';
  var change = document.getElementById('character-select');

  change.onchange = selectChangedHandle;

  makeRequest(url, requestComplete);
  
  new PieChart("area", "Number of Wizards Per House", "Total:", [10,1,1,9], ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]);
};

// ------------------------------------------------------------------

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
  console.log("will apear before the requestComplete function")
};

// ------------------------------------------------------------------

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

// ------------------------------------------------------------------

var populateList = function(characters){
  var newCharacter = document.getElementById('character-select');
  // console.log(characters);

  for (person of characters){
    var newPerson = document.createElement("option");
    newPerson.innerText = person.actor;
    newPerson.character = person
    // console.log(newPerson.character);

    // var image = person.image;
    // var photo = document.createElement('img');
    // photo.src = image;

    // var wandCore = person.wand.core;
    // var wand = document.createElement("li");
    // wand.innerText = wandCore;

    newCharacter.appendChild(newPerson);
    // newCharacter.appendChild(photo);
    // newCharacter.appendChild(wand);
  } 
};

// ------------------------------------------------------------------

var selectChangedHandle = function(){
  var selectedOption = this.options[this.selectedIndex];
  // console.log(this.options);
  var chosenPerson = selectedOption.character;

  var name = document.getElementById('character-name');
  name.innerText = chosenPerson.name;
  // console.log(name);

  var picture = document.getElementById('character-picture');
    picture.jpeg = chosenPerson.image;

  var house = document.getElementById('character-house');
  house.innerText = "Hogwarts House: " + chosenPerson.house;

  var patronus = document.getElementById('character-patronus');
  patronus.innerText = "Patronus: " + chosenPerson.patronus;

  var wandCore = document.getElementById('character-wandCore');
  wandCore.innerText = "Wand Info: " + chosenPerson.wand.core + " -  Length: " + chosenPerson.wand.length + " - Type: " +  chosenPerson.wand.wood;

  var status = document.getElementById('character-status');
  status.innerText = "Did they survive in the books?: " + chosenPerson.alive;
};

// ------------------------------------------------------------------

window.onload = app;