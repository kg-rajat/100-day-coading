let names =["Rahul", "Rjt", "Anu", "Doli"];
names.includes("Rjt");  //true
names.includes("Sanju")  // False
console.log(names);

let primaryColor= ["red", "white", "black"];
let secoundaryColor = ["yellow", "pink", "blue"];

// concat()- merge 2 array

let finalColor = primaryColor.concat(secoundaryColor);
console.log(finalColor);
console.log(primaryColor);
console.log(secoundaryColor);

//reverse

primaryColor.reverse();
console.log(primaryColor);

// Slice

let colors = ["red", "white", "black", "pink", "blue"];
let final = colors.slice(2,4);
console.log(final);