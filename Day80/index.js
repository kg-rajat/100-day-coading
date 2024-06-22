/* Q1 write a js program to delet all occurrences of element 'num' is a given array.
example: if arr [1,2,3,4,5,6,2,3] 7 num = 2

resule should be arr = [1,2,4,5,6,3] */

let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for (let i=0; i<arr.length; i++){
  if (arr[i] == num){
    arr.splice(i, 1);
  }
}
console.log(arr);

/* Write a JS program to find the no digits in a number.
Example: if number = 287152, count =6 */

//let number 287152;
let count = 0;

//let copy= number;

// while(copy>0){
 // count++;
 // copy = Math.floor(copy/10);
// }

// console.log(count);

/* Write a Js program to find the sum of digits in number.

Example: if number = 287152, sum = 25 */

// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//   digit = copy % 10;
//   sum+= digit
//   copy = Math.floor(copy/10);
// }

// console.log(sum);

// -----------

let n = 5;
let factorial = 1;

for (let i =1; i <=n; i++){
  factorial *=i;
}
console.log(`factorial Of ${n} is ${factorial}`);

// ------------

let arr1 = [2,3,4,56,76,12,41];
let largest = 0;

for (let i =0; i <=arr1.length; i++){
  if (largest < arr1[1]) {
    largest = arr[1]
  }
}
console.log(largest);

//---------------object Literals-------------------------

let person = {
  name:"Rajat Saraswat",
  age:25,
  email:"rajatsaraswat64@gmail.com",
};

console.log(typeof(person));

let student ={
  name:"Doli singh",
  age:29,
  marks: 95,
  email:"doli22@gmail.com"
};

console.log(typeof(student));
console.log(student);

const x = [1,2,3];
x[-1] = -1;
console.log(x.length);


function greet(name) {
  if (name === undefined) {
    name = "friend";
  }
  console.log("hello" + " " + name);
}

greet();

//---------

const items ={
  price:70,
  discount: 15,
  color:["Red", "Pink"],
}
console.log(items);

//------Create a X post

const post ={
  username:"@rjt_mok",
  content:"I love You Kiiiito #Love",
  like: 450;
  repost:16,
  tag:["@rjt_mok", "@love"],

};

console.log(post); // print whole object value
console.log(post["content"]); // print only key value, only content ki value print hogi.
console.log(post["username"]);
console.log(post["like"]);
console.log(post["tag"]);


console.log(post.content);

// ------------Add/ Update Values -----------

const std = {
  name: "Rjt saraswat",
  age:25,
  marks:650,
  city:"Mathura"
};

console.log(std);

// after chanding city value

std.city= "New Delhi";
std.marks = [80,34,56,78,68];

console.log(std);

// Adding new value

std.gender = "male";
std.phone = 7017548191;
std.email = "rjt@gmail.com";

console.log(std);

// delete value

delete std.marks;
console.log(std);

// nesting of object

const classInfo ={
  Rajat : {
    grade: "A+",
    city: "Gurugaon",
    gender:"male"
  },

  Doli :{
    grade: "A",
    city: "MTR",
    gender:Female,
  },

  Anu:{
    grade:"C+",
    city:"Agra",
    gender: "Male",
  }
};

console.log(classInfo);
console.log(typeof(classInfo));

let outPut = 2 ** 3;
console.log(outPut);

let stdInfo = [
  {
    name:"Rajat",
    age:26,
    marks:780,
  },

  {
    name:"Annu",
    age:24,
    marks:980,
  },

  {
    name: "Ravi",
    Age:23,
    marks:560,
  }

];

console.log(stdInfo);

stdInfo[1].name ="Suggu";
console.log(stdInfo);

console.log(Math.floor(250.56));
console.log(Math.pow(2, 10));
console.log(Math.ceil(7.9));
console.log(Math.random());
console.log(Math.random());


let number = Math.random();

let total = num*10;


console.log(total);

// generate random number between 1 to 20
console.log(Math.floor(Math.random() * 20) + 1);

// Generate a random number between 1 and 100

let num1 = Math.floor(Math.random() * 100) + 1;
console.log(num1);

let num2 = Math.floor(Math.random() * 6) + 1;
console.log(num2);

let car = {
    name: "Swift",
    model: "Top-Model",
    color: "White",
    price: 1200000,
};

console.log(car);

let person1 = {
    name: "Richard Rahul",
    age: 24,
    city: "Gurgaon",
};

console.log(person1);

person1.city = "New York";
person1.country = "United States";

console.log(person1);