#! /usr/bin/env node
import inquirer from "inquirer";
let todolist =[];
let condition = true

while(condition){
    const Add = await inquirer.prompt([{
        message: "what as you want add in your todolist",type:"input", name:"todolist" 
    },
    { message: "Do you  want to add more items", type:"confirm", name:"confirm", default: "false"},
    ],
    );

    todolist.push(Add.todolist);
    condition=Add.confirm;
    console.log(todolist);
}