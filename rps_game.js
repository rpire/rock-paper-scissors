console.log("Ok, you made it to the console!\nHere is where you are going to be playing, press \"Begin\" to start.");
let playerCounter = 0;
let computerCounter = 0;
function computerPlay() {
    const randomNumbersGenerator = Math.floor(Math.random()*100);
    if (randomNumbersGenerator < 33) {
        return "ROCK";
    }
    else if (randomNumbersGenerator < 66) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            playerCounter++;
            return `Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\n\nYou win! ${playerSelection} beats ${computerSelection}`; 
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK") {
                computerCounter++;
                return `Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\n\nYou lose... ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        return `Your selection: ${playerSelection}\nComputer's selection: ${computerSelection}\n\nWow! That's a tie!`
    }
    else {
        return `You typed: ${playerSelection}\n\nI didn't understand quite well...`
    }
}
function game() {
    playerCounter = 0;
    computerCounter = 0;
    do {
        console.log(playRound(prompt("Type your play! Rock, Paper or Scissors?").toUpperCase(), computerPlay()));
    } while (playerCounter < 3 && computerCounter < 3);
    if (playerCounter > computerCounter) {
        console.log(`Your score: ${playerCounter}\nComputer score: ${computerCounter}\n\nYou won the game!`);
    }
    else {
        console.log(`Your score: ${playerCounter}\nComputer score: ${computerCounter}\n\nYou lost the game...`);
    }
}