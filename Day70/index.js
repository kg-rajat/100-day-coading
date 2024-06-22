let marks = [99,96,93,92,87];
let names= ["Doli","Kajal","Punita","Anu","Rjt"];
let info = ["Ram", 25,8.3];

console.log(marks[2]);
console.log(names);
console.log(info);
console.log(names[1].length);

let emArray = []
console.log(emparray);

let fruits =["mango","apple","orange"];
fruits[0] = "banana";
fruits[2] = "Rjt";
console.log(fruits);

// Push Array Method
let userName = ["Rajat","Geeta","Doli", "Anu"];
userName.push("Unnati");
console.log(userName);

// Unshift Array Method

userName.unshift("Rajat");
console.log(userName);

userName.pop();
userName.pop(userName[4]);
userName.pop("Kisan");
console.log(userName);

//Shift Array Method
 
userName.shift()
userName.shift(userName[0]);
userName.shift("Sunita");
console.log(userName);

// Q1
let days = ["Monday", "Tuesday", "Saturday", "Friday"];
days.shift();
days.shift();
days.unshift("Tuesday");
days.unshift("Friday");

console.log(days)

let fruit = ["apple","orange","mango","orange"];
let position = fruit.indexOf("apple");
fruit.includes("Mango");

console.log(position);
console.log(fruit);

