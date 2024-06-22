// Example array
const number = [5, 10, 15, 20, 25, 30];

//Using map to double each element
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled number:", doubledNumbers);

//Using filter to get even numbers
const evenNumber = number.filter(num => num % 2 === 0);
console.log("even numbers:", evenNumbers);

// Using every to check if all numbers are positive
const appPositive = number.every(num => num >0);
console.log("Even numbers", evenNumbers);


// using every to check if all number are positive
const allPositive = numbers.every(num => num >0);
console.log("Are all numbers positive?", allPositive);

//Using reduce to calculate sum
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log("Sum of number:", sum);

//finding maximum value in array
const max = Math.max(...numbers);
console.log("Maximum number:", max);


//Function with defaulte parameters
function greet(name = "Guest"){
  console.log(`Hello, ${name}!`);
}
greet();
greet("john");

//Using spread operator and rest perameter1
function addNumbers(...nums){
  return nums.reduce((acc, curr) => acc + curr, 0);
}
const numbersTodo = [2,4,6,8,10];
const total = addNumbers(...numbersToAdd);
console.log("Total:", total);

// Using destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
const { firstName, lastName, age } = person;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
