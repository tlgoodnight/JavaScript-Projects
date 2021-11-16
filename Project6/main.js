//NaN//
function my_Function() {
    document.getElementById("Test1").innerHTML = 0/0;
}
//isNaN true//
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a String');
}
//isNan false//
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}
//Infinity//
function my_Function4() {
    document.getElementById("Test4").innerHTML = (2E310);
}
//negative infinity//
function my_Function5() {
    document.getElementById("Test5").innerHTML = (-2E310);
}
//Boolean true//
function my_Boolean1() {
    document.getElementById("Test6").innerHTML = (10>2);
}
//Boolean false//
function my_Boolean2() {
    document.getElementById("Test7").innerHTML = (10<2);
}
//Console 4//
function my_Console() {
    console.log(2 + 2);
}
//Console Boolean false//
function my_Console2() {
    console.log(10<2);
}
//Double Equal SIgns true//
function my_Equal1() {
    document.getElementById("Test10").innerHTML = (10==10);
}
//Triple Equals true same data type and value //
function my_Equal2() {
    var M = 10;
    var N = 10;
    document.getElementById("Test11").innerHTML = (M===N);
}
//Triple Equals false different data type and value //
function my_Equal3() {
    var O = 10
    var P = "Twelve"
    document.getElementById("Test12").innerHTML = (O===P);
}
//Triple Equals false different data type and  same value //
function my_Equal4() {
    var O = 10
    var P = "Ten"
    document.getElementById("Test13").innerHTML = (O===P);
}
//Triple Equals false same data type and different value //
function my_Equal5() {
    var O = 10
    var P = 12
    document.getElementById("Test14").innerHTML = (O===P);
}
//&& operator true//
function my_Operator1() {
    document.getElementById("Test15").innerHTML = (5 > 3 && 10 > 4);
}
//&& operator false//
function my_Operator2() {
    document.getElementById("Test16").innerHTML = (5 > 10 && 10 > 4)
}
// || operator true//
function my_Operator3() {
    document.getElementById("Test17").innerHTML = (5 > 10 || 10 > 4);
}
// || operator false // 
function my_Operator4() {
    document.getElementById("Test18").innerHTML = (5 > 10 || 10 > 20);
}
// not ! operator false//
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
// not ! operator true//
function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5 > 20);
}