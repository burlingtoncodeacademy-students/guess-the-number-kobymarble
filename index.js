const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();
}
fconst readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);
  let min = 0;
  let max = 100;
  //narrowing range//

  //start project here//
  //genertaing a random number between 1 to 100 for user//
  console.log(randomNum(0, 100));
  let response = await ask("Is this your number?");
  function randomNum(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }


  if (response === "yes") {
    console.log("you win sir");

    } else {
      //changing the range of the random number function
      
let highLow = await ask("higher or lower?");
let computerGuess = randomNum;

if(highlow=== "higher") {
    function higherRandom(computerGuess, max) {
      let range = max - computerGuess + 1;
      return Math.floor(Math.random() * range) + min;
    } else { 
      function LowerRandom(min, computerGuess) {
        let range = computerGuess - min + 1
        return Math.floor(Math.random()* range) +1
      }
    }
    }

}
  