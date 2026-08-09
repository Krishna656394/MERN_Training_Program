let todo = [];

let req = prompt("Please Enter Your Request : ");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("________________________");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("________________________");
    }
    else if(req == "add"){
        let task = prompt("Enter task You Want to Add : ");
        todo.push(task);
        console.log("Task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter The Task Index U Want To Delete This : ");
        todo.splice(idx, 1);
        console.log("task is deleted");
        
    }
    else{
        console.log("Enter Wrong Request");
    }
    req = prompt("Please Enter Your Request : ")
}

console.log(req);