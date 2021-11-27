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

function array_Function(){
    const dogs = [" Chihuahua ", " Puggle ", " Pitbull "," Belgian Malinois "," Husky/Lab "];
    document.getElementById("Array1").innerHTML = dogs;
    }

function constant_function() {
    const Pet_dog = {type:"puggle", sex:"female", color:"black", age:"13 "};
    document.getElementById("Constant").innerHTML = "The age of the " +   Pet_dog.type + " is " + Pet_dog.age + " years old.";
  }
  
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
    document.getElementById("Car_Object").innerHTML = car.description();

    let dogs2 = {
        breed: "Belgian Malinios ",
        sex: "Female ",
        age: "5 months ",
        name: "Laguna ",
        description : function () {
            return "The dog " + this.name + " is a " + this.sex + " " + this.breed + " and is " + this.age + " old.";
        }
        };
        document.getElementById("dog_Object").innerHTML = dogs2.description();

let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break1").innerHTML = text;

let text1 = "";
    for (let n = 0; n < 10; n++) {
    if (n === 3) { continue; }
    text1 += "The number is " + n + "<br>";
}
document.getElementById("continue1").innerHTML = text1;
    