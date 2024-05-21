let a = "123";
let b = 123;

console.log(a === b);
console.log(a == b);

let num1 = 0;
let num2 = " ";

console.log(num1 == num2);
console.log(num1 === num2);

let x = null; // null
let y; // undefined

console.log(x==y); // compares value only
console.log(x===y); //compares both value and type

// conditional statement

// Q1 - Write a program that determines whether a given number is positive or not.

// for Positive Number 
//   let num1 = 25;

//   if (num1 >= 0) {
//     console.log("Positive Number");
//   } else {
//     console.log("Negative Number");
//   } 


// For Negative Number

// let num2 = -10;

// if (num2 >= 0){
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }

// Q2 write a program that checked if a number is even or odd.

// Even Number
 let number = 12;

 if (number %2 === 0 ){
   console.log("Even Number");
 }else{
   console.log("Odd Number");
 }

 // Odd Number

 let number1 = 12;

 if (number1 % 2 === 0) {
   console.log("Even number")
 } else {
   console.log("Odd Number")
 }

 // Q3 write a program to determine the greater of two numbers.

//  let a = 50;
//  let b = 20 ;

//  if (a > b) {
//    console.log("A is greater hen B");
//  } else {
//    console.log("A is less than B")
//  }

// Q4 Voter Card 

let age = 12;

if (age >= 18){
  console.log("U can vote");
} else{
  console.log("U can't vote")
}

// Q1  Print the number from 0 to 15

for (let i=1; i <=15; i++){
  console.log("Number: ", i);
}

// Q2 print the number 90 to 2001

for (let i = 90; i<=2001; i++){
  console.log("Number: ", i);
}

// Q3 Print the odd number from 30 to 65

for (let i =7; i <=31; i++){
  if (i % 2 !== 0){
    console.log(i);
  }
}

// for (let i =7; i <=31; i++){
//   if (i % 2 !=== 0){
//     console.log(i);
//   }
// }

