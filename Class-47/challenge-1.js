//Auther: Yel-Mangok <Github>

//store the value
var n = prompt("Enter the Number Either Positive or Negative: ");

//Conduction

if (n < 0) {
    //if the condition is true
    //executee this code
    alert("the Number is Negative.");
} else if (n >= 0) {
    //if the condition is true,
    //else if, analys othe condition
    //execute this code
    alert("The number is Positive.");
} else {
    alert("Invalid Number.");
}


/*
-------------------------
desktop test
-------------------------
n < 0 => Negative Number
n >= 0 => Positive number
n = string => invalid number
-------------------------
*/