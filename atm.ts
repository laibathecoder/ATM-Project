#! /usr/bin/env node

//ATM Project

import inquirer from "inquirer"

let accountBalance : number = 50000;    //Dollar :)
const pinCode : number = 1564;

console.log("your current Balance status is :" + accountBalance);

let machineAns = await inquirer.prompt([
    {
        name : "ask_requirment",
        message : "Please enter your pincode.",
        type : "number"
    }
])

if(machineAns.ask_requirment === pinCode){
    console.log("Correct pincode!");

    let operation = await inquirer.prompt(
        [
            {
                name : "action",
                message : "Please select anyone option.",
                type : "list",
                choices :["withdraw","check balance","Deposit Amount","Fast cash"]
            }
        ]
    );

    if (operation.action === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "Amount",
                    message : "Please enter your Amount?",
                    type : "number"
                }
            ]
        );
        if(accountBalance >= amountAns.Amount)
            {
                accountBalance -= amountAns.Amount;
                console.log(`your remaining balance is ${accountBalance}`)
            }else{
                console.log("Insufficient Amount");
            };


        }

    else if (operation.action === "Deposit Amount") 
        {
           let addAmount = await inquirer.prompt(
            [ 
                {
                   name : "NewAmount",
                   message : "Please enter Deposit amount :)",
                   type : "number"
                }
            ]
           );

           accountBalance += addAmount.NewAmount;

           console.log("Your Balance status is updated :)");
           console.log(accountBalance);
        }

    else if(operation.action === "check balance")
        {
            console.log(`Your balance is ${accountBalance}.`);
        }else{
            let fastcashAmount = await inquirer.prompt(
             [
                {
                    name : "fastcash",
                    message : "please select your amount",
                    type : "list",
                    choices : [
                        "1000",
                        "1500",
                        "2000",
                        "3000",
                        "4000",
                        "5000"
                    ]
                }
             ]
            
            )
            if(accountBalance >= fastcashAmount.fastcash){
                accountBalance -= fastcashAmount.fastcash;
                console.log(`your total balance is : ${accountBalance}`);
            }
            else{
                console.log("Insufficient Amount :(");
            }
        }   
  
}

else {
    console.log("Pincode is incorrect,Please enter correct pincode.");
}