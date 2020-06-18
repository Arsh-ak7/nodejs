const readline=require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output:process.stdout
});

let num1= Math.floor((Math.random()*10));
let num2= Math.floor((Math.random()*10));
let answer = num1+num2;

rl.question(`What is ${num1} + ${num2} ? \n`,(userInput)=>{
    if(userInput.trim()==answer){
    console.log('You Entered '+ userInput+` and Its Correct`);
    rl.close();
    }
    else{
        rl.setPrompt('Incorrect. try Again \n');//sets the prompt
        rl.prompt();// calls the prompt;
        rl.on('line', (userInput)=>{// line event is basically activated when user inputs something
            if(userInput.trim()==answer){
                console.log('You Entered '+ userInput+` and Its Correct`);
                rl.close();
                }
                else{
                    rl.setPrompt(`Incorrect \n`);
                    rl.prompt();
                }
        } )
    }
});

rl.on('close',()=>{
    console.log('rl closed');
});
