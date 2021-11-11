//Addition Function//
function addition_Function() {
    var addition = 5 + 5;
    document.getElementById("Math1").innerHTML = "The sum of 5 + 5 = " + addition; 
}
//Subtraction Function//
function subtraction_Function() {
    var subtraction = 5 - 5;
    document.getElementById("Math2").innerHTML = "5 - 5 = " + subtraction; 
}
//Multiply Function//
function multiply_Function() {
    var simple_Math = 5 * 5;
    document.getElementById("Math3").innerHTML = " 5 times 5 = " + simple_Math; 
}
//division function//
function division_Function() {
    var simple_Math = 5/5;
    document.getElementById("Math4").innerHTML = "5 divided by 5 = " + simple_Math; 
}
//multiple function//

function more_Function() {
    var simple_Math = (5 + 5) * 10 / 2;
    document.getElementById("Math5").innerHTML = "What 5 + 5 times 10 divided by 2 = " + simple_Math; 
}
//Remainder function//
function modulus_Operator() {
    var simple_Math = 60 % 9;
    document.getElementById("Math6").innerHTML = "When you divide 60 by 9 you have a remainder of:" + simple_Math;
}
//Negative Function//
function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
//increment function//
function plus1_Operator() {
    var X = 5;
    X++
    document.getElementById("Math8").innerHTML = X++;
}
//decrement function//
function minus1_Operator() {
    var T = 5
    T--
    document.getElementById("Math9").innerHTML = T--;
}
//random function//
function random_Operator() {
    document.getElementById("Math10").innerHTML = (Math.random() * 100);
}