const readline = require('readline');
const response = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser(){
    response.question("What would you love to do? (add/view/exit): ", (answer) => {
        if (answer === "add"){
            response.question("Enter the task description: ", (description) => {
                addTask(description);
                setTimeout(promptUser, 3000);
            });
        } else if(answer === 'view'){
            viewTasks();
            setTimeout(promptUser, 2000);
        } else if(answer === 'exit'){
            console.log("Exiting the application....");
            response.close();
        } else{
            console.log("Invalid input. Please enter 'add','view', or 'exit'.");
            promptUser();
        }
    });
}

let tasks = [];

function addTask(description){
    console.log("Adding tasks...")

    // simulate adding the task to a database.
    setTimeout(() => {
        tasks.push(description);
        console.log(`Task added: ${description}`);
    }, 3000);
}

function viewTasks(){
    console.log('Retrieving tasks...');

    // simulate retrieving taks from a database.
    setTimeout(()=>{
        if (tasks.length === 0){
            console.log("No tasks to complete.");
        }
        else {
            console.log("Your tasks ");
            tasks.forEach((tasks, index) =>{
                console.log(`${index + 1}.${task}`)
            });
        }
    }, 1000);
}

promptUser();