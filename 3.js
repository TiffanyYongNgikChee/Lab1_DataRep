let Tasks = [];

//3b. an add task function
const addTask = (task)=>{ //receives a string
    Tasks.push(task); //add the task to the array
    console.log(task + " has been added to my Tasks"); //prints a message in the console
    return Tasks.length;//returns the number of elements
}

//3c. a listAllTasks function
const listAllTasks = ()=>{ 
    Tasks.forEach((item)=>{
        console.log(item); // prints each array item in the console.
    }) // iterates over all the tasks in the array.
}

//3d a delete Task function
const deleteTask = (task)=>{ //receives a string
    let index = Tasks.indexOf(task);
    if(index>-1){
        Tasks.splice(index,1);// removes that string from the array.
        console.log(task + " has been deleted from my Tasks"); // prints in console
    }
    else{
        console.log(task+" not found in my Tasks");
    }
    return Tasks.length; // returns the number of elements after deletion
}

//Testing
console.log(addTask("Apple"));
console.log(addTask("Banana"));
console.log(addTask("Cauliflower"));
listAllTasks();
console.log(deleteTask("Apple"));
console.log(deleteTask("sdfwer"));