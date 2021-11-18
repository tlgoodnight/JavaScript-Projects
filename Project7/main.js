//ternary operator ?//
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote":"You are old enough to vote!";
    document.getElementById("Vote").innerHTML = Can_vote ;
}
//Oject Contructor//
function Vehicle (Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model +
    " manufactured in" + Erik.Vehicle_Year;
}
function myFunction1() {
    document.getElementById("New_and_This").innerHTML =
    "Emily drives a " + Emily.Vehicle_Color + " colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year;
}

//Pluse one //
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
//decrease by one
function count_Function1() {
    document.getElementById("Nested_Function").innerHTML = Count1();
    function Count1() {
        var Starting_point = 9;
        function Minus_One() { Starting_point -= 1;}
        Minus_One();
        return Starting_point;
    }
}
