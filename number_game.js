// boilerplate readline function
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// setting max and min to global variable so they can be adjusted upon the players request



//  starts the program and asks the user what range they want to guess within
start();
async function start() {

  let maxNum = await ask(" If I can guess your secret number I'll turn your hands into pidgeons.If I fail you will receive a ziplock bag of cold mushroom soup. What would you like your the maximum number of your range to be?"
  );
  console.log("you entered:" + maxNum)


  // asking the user what their secret number is within the adjusted range
  let secretNumber = await ask(
    "Whats your secret number lint licker?"
  );
  console.log("You entered: " + secretNumber);


  // function creating a random and assigning it to a variable

  let min = 0
  let max = maxNum


  function randomNum(min, max) {
    return Math.floor((max - min) / 2 + min)
  }
  let newNum = randomNum(min, max)


  // The computer guesses the users secret number

  let compGuess = await ask(`Is this your number: ${newNum}, you biscuit eating bulldog? `)
  if (compGuess === "yes") {
    console.log("Soup!")
    process.exit()
  }
  // data sanitization for if the user does no guess yes or no
  while (
    compGuess.toLowerCase().trim() !== "no" &&
    compGuess.toLowerCase().trim() !== "yes"

  ) {
    console.log("Can you spell you dummmy? ")
    compGuess = await ask(`is your number ${newNum}? `)
  }
  // Starting a while loop if the user input is no
  while (
    compGuess.toLowerCase().trim() === "no"
  ) {
    let higherLower = await ask(`is your secret number higher or lower than or it ${newNum}?`)
// data sanitization for if the user types in the wrong input
    while (
      higherLower.toLowerCase().trim() !== "higher" &&
      higherLower.toLowerCase().trim() !== "lower"
    ) {
      higherLower = await ask(
        "You are so bad at this, yes or no?"
      )
    }
    // conditional for adjusting the computers guess if the numver is higher or lower
    if (higherLower === "yes") {
      console.log("Soup!")
      process.exit()
      //  modifying random number to be in a new range
    } else if (higherLower === "higher") {

      min = newNum + 1
      newNum = randomNum(min, max)

    } else if (higherLower === "lower") {
      max = newNum - 1
      newNum = randomNum(min, max)

    }
    // guarding against cheating
    if (min > max || max < min) {
      console.log("Youll never get soup behaving like that!")
    }
  }
}

  
  
    
  
