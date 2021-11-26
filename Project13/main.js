function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length1() {
let text = "Hello World!";
let length = text.length;
document.getElementById("length1").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function array_Function(){
const dogs = [" Chihuahua ", " Puggle ", " Pitbull "," Belgian Malinois "," Husky/Lab "];
document.getElementById("Array1").innerHTML = dogs;
}

function constant_function() {
    const Pet_dog = {type:"puggle", sex:"female", color:"black"};
    Pet_dog.color = "black";
    Pet_dog.age = "13 years old";
    document.getElementById("Constant").innerHTML = "The age off the " + 
    Pet_dog.type + " is " + Pet_dog.age;
}


//function let_demo(){
  //  var X = 55;
//document.getElementById("let_demo").innerHTML = (X);
//{
  //  let X=99;
    //document.getElementById("let_demo").innerHTML = ("<br>" + X);
//}
//document.getElementById("let_demo").innerHTML = ("<br>" + X);
//}
 
//function myFunction() {
  //  return Math.PI;
  //}
  //document.getElementById("demo2").innerHTML = myFunction();//

//let car = {
  //  make: "Dodge ",
    //model: "Viper ",
    //year: "2021 ",
    //color: "red ",
    //description : function() {
      //  return "The car is a " + this.year + this.color + this.make + this.model;
    //}/
//};
//document.getElementById("Car_Object").innerHTML = car.description();

let dogs2 = {
    breed: "Belgian Malinios ",
    sex: "Female ",
    age: "5 months ",
    name: "Laguna ",
    description : function () {
        return "The dog " + this.name + " is a " + this.sex + " " + this.breed + " and is " + this.age + " old.";
    }
    document.getElementById("dog_Object").innerHTML = dogs2.description();
}
