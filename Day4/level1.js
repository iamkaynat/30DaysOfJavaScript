const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Enter your age:' , function(answer){
console.log(answer);
});