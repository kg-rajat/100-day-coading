// Example -1 
let heros = [["ironman", "spiderman", "thor", "starload"],["superman", "aquaman", "flash"]];

for (let i = 0; i < heros.length; i++){
  console.log(`list #${1}`);
  for (j=0; j<heros[i].length; i++){
    console.log(heros[i][j]);
  }
}

// Example -2 
let student =[["Doli", 20],["anu",22], ["rjt",18], ["kitto",34]];

for (let i=0; i<student.length; i++){
  console.log(`info of student #${i+1}`);

  for (let j=0; j<student[i].length; j++){
    console.log(studen[i][j]);
  }
}

// Example 3 for of loop
for (char of "the helppur"){
  console.log(char);
}

let names = ["rjt","saraswat","pooja","anu","doli"];

for (name of names){
  console.log(name);
}

/// nesting of for of loop
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (list of heroes){
  console.log(list);
  for (hero of list){
    console.log(hero);
  }
}