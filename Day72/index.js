let colors= ["red","blue", "orange", "black","pink"];

//let final = color.slice(-3);
//let final = color.slice(-2);
//let final = color.slice(2, 5);
let final = colors.slice(5);

console.log(final);

// let finalColors = colors.splice(1);
// let finalColor = color.splice(0, 1);
// let finalColor = color.splice(-2);
let finalColor = colors.splice(0, 0, "teal", "orange");
console.log(finalColors);

let days = ["wednesday", "sunday", "monday", "tuesday"];
days.sort();
console.log(days);

let nums = [100,89,56,56,45];
nums.short();
console.log(nums);

let months = ["january", "july", "march", "August"];
let finalMonths = months.splice(0, 2, "july", "june");
console.log(finalMonths);
console.log(months);


let codingLang = ["c", "c++", "java", "python", "html", "javascript", "c#", "sql"];
console.log(codingLang.reverse().indexOf("javascript"));