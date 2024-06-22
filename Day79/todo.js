let todo = []

while (true) {
  let req = prompt("Please enter your requested (add, list, delete, or quit):");

  if (req === "quit"){
    console.log("Quitting app");
    break;
  } else if (req === "list"){
    console.log("---------------");
    if (todo.length === 0) {
      console.log("No tasks in the list.");
    } else {
      todo.forEach((task, index) =>{
        console.log(`${index + 1}: ${task}`);
      });
    }

    console.log("---------------");
  }else if (req === "add"){
    todo.push(task);
    console.log("Task added");
  
  } else if (req === "delete"){
    if (todo.length === 0){
      console.log("No tasks to delete.");
    }else {
      let index = prompt("Please enter the index of the task you want to delete:");
      index = parseInt(index);
      if (isNaN(index) ||index < 1 || index > todo.lenght){
        console.log("Invalid index. Please enter a valid index.");
      } else {
        let deletedTask = todo.splice(index - 1, 1);
        console.log(`Deleted task: ${deletedTask}`);
      }
    }
  } else {
    console.log("Invalid requested. Please enter add, list, delete, or quit.");
  }
 }