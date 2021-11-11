



function My_First_Function() { //defining a function and naming it
    var str = "this text is green!"; //defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str value
    document.getElementById("Green_Text").innerHTML = result; //putting th vallue of the result in to html element 
}
