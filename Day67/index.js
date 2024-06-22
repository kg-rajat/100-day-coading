let str = "Rajat";
console.log(str.length);
console.log(str.trim());

let str = "IHateYou";

console.log(str.indexOf("Hate"));
console.log(str.indexOf("u"));
console.log(str.indexOf("m"))

let newMsg = "     Rajatsaraswat  ";
console.log(newMsg.toLocaleLowerCase().trim());

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// console.log("Welcome", firstName, lastName, "!");

//  ----- Assignment ----- 

// Q1 - create a number variable num with some value.
// now, print "good" if the number is divisible by 10 and print "bad" if it is not.

let num = 1250450;

if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

// Q2 

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");

// alert (`${userName} is ${userAge} years old.`);

// Q3

let quarter = 4;

switch (quarter) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Wrong month")
}


// Q4

let str = "apples";

if ((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}

// Q5 - Write a program to find the largest of 3 numbers?

let num1 = 15;
let num2 = 45;
let num3 = 120;
