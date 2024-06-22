// Creating an object literal for a user

const user = {
  firstName: "Rajat",
  lastName: "Saraswat",
  age: 24,
  email: rajatsaraswat64@gmail.com
};

// Creating a post object
const post ={
  title: "JavaScript Basics",
  content: "This is a beginner's guide to javaScript programming."
  author:user,
  datePosted: new Date(),
  likes:10,
  Comment:[
    {
      user:{
        firstName:"Doli",
        lastName:"saraswat"
      },
      comment: "great tutorial!"
    },
    {
      user: {
        firstName:"Anu",
        lastName:"kumari"
      },
      comment: "Very helpful, thank you!"
    }
  ]
};

//Getting values from the user object
console.log(`User's first name: ${user.firstName}`);
console.log(`User's age:${user.age}`);

// Conversion in getting values
console.log(`User's age as string: ${String(user.age)}`);

// Accessing nested objects

console.log(`First comment by ${post.comments[0].user.firstName}: "${post.comments[0].comment}"`);

//Array of objects
const students =[
  {name:"rajat", grade:85},
  {name: "doli", grade: 90},
  {name: "anu" , grade:75}
];

//math objects
console.log(`Maximum grade: ${Math.max(...students.map(student => student.grade))}`);

//Generating a random integer between 1 and 100
const randomInteger = Math.floor(Math.random()*100) +1;
console.log(`Random integer between 1 and 100: ${randomInteger}`);
