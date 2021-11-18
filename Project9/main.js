//Concat method//
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete "
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice method//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//upper case//
function uppercase_demo() {
    let text = "I am going to be the best coder!";
    let result = text.toUpperCase();
    document.getElementById("uppercase_demo").innerHTML = result;
}
//Search Method//
function Search_Demo() {
    let text = "Mr. Blue has a blue house"
    let position = text.search("blue");

document.getElementById("search_demo").innerHTML = "The word blue is in the " + position + " position in the sentence.";
}
//numbers method//
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//toprecision method//
function precision_Method() {
    var X=6729058.7263917;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//fixed method//
function Fixed_Method() {
    let num = 2157.8956783457;
    let n = num.toFixed(2);
    document.getElementById("fixed_demo").innerHTML = n;
}
//value of method//
function value_method() {
let str = "I am having so much fun today coding!";
document.getElementById("value_demo").innerHTML = str.valueOf();
}