const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}
// You start the program and it asks the user to guess a number
async function start() {
    let compGuess = await ask("Im thinking of a number from 1 to 100 can you guess it?")
    // creates a random integer
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    let compSecret = randomNum(0, 100)
    // while loop to check if comp guess is equal to comp secret
    while (compSecret !== compGuess) {
        if (compGuess > compSecret) {
            console.log("Lower")
            compGuess = await ask(" ")
        } else if (compGuess < compSecret) {
            console.log("higher")
            compGuess = await ask(" ")
        } else {
            if (compGuess = compSecret) {
                console.log("You Win")
                process.exit()
            }
        }
    }
}

start()