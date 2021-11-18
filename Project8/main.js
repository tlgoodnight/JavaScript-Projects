//Local and Global Variable Assignment//
var X = 10;
function Add_numbers_1() {
        document.getElementById("Local1").innerHTML = (20 + X);
    }
function Add_numbers_2() {
    document.getElementById("Local2").innerHTML = (X + 100);
}
Add_numbers_1 ();
Add_numbers_2 ();
//console function
function Add_numbers_3 () {
    var Y = 10;
    console.log(15 + Y);
}
function Add_numbers_4 () {
    console.log(Y + 100);
}
Add_numbers_3 ();
Add_numbers_4 ();
//conditional//
function get_Date () {
    if (new Date().getHours() > 20) {
        document.getElementById("Greeting").innerHTML = "It is past your bedtime!";
    }
    if (new Date().getHours() <20) {
        document.getElementById("Greeting").innerHTML = "It is still daytime get out of bed!";
    }
    }
//Else if statement//
function Drink_Function () {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to DRINK! COME ON IN!!!";
    }
    else {
        Vote = "You are not old enought to drink.. may we suggest a soda?!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//Time function//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}