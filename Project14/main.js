function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
           Color_Output = "Pink" + Color_String;
           break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
            default:
            Color_Output = "Please enter a color exacly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);
}

{
 var c = document.getElementById("myCanvas2");
 var ctx = c.getContext("2d");
 var grd = ctx.createLinearGradient(0,0,170,0);
 grd.addColorStop(0,"black");
 grd.addColorStop(0.5,"red");
 grd.addColorStop(1,"white");
 ctx.fillStyle = grd;
 ctx.fillRect(20,20,150,100);   
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert(" First Name must be filled out");
        return false;
        }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    }

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is a " + character.innerHTML + ".");
}

var ages = [2.10,18,20,13,15,30];
//using the arrow function to pass in a paraeter of age
checkAge = (age) => age >= 18;

function myFunction () {
    //Use the .some() to iterate through the array of ages and display the result. 
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}

