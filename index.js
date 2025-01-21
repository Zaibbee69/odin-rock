// Ok first making a function which will return the computer's choice
function getComputerChoice()
{
    // Calling randomizer
    let choice = getRandomInt();

    // Now making a choice based upon the digit
    switch (choice) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissor";
    
        default:
            break;
    }
}

// Function to get human choice
function getHumanChoice()
{
    // Getting user input and converting to int
    let choice = prompt("Select your Hand: Rock, Paper, Scissor").toLowerCase();

    // Returning data
    return choice;
}

// Plays a single round of game
function playRound( computerChoice, humanChoice )
{

    // First Checking if the game was a draw or not
    if (computerChoice == humanChoice)
    {
        console.log("It's a Tie! Both selected same");
    }

    // Now making decision of the game

    else if ((computerChoice == "rock" && humanChoice == "paper") 
        || (computerChoice == "paper" && humanChoice == "scissor") 
        || (computerChoice == "scissor" && humanChoice == "rock" ))
    {
        humanScore ++;
        console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
    }

    else 
    {
        computerScore ++;
        console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`);
    }

    console.log(`Current Score: Human: ${humanScore} Computer: ${computerScore}`);
}

// Function to get the random number
function getRandomInt()
{
    return Math.floor(Math.random() * 3);
}

// Getting the choices
const computerChoice = getComputerChoice();
console.log(computerChoice);
const humanChoice = getHumanChoice();

// Variables for keeping track of score
let humanScore = 0;
let computerScore = 0;

playRound( computerChoice, humanChoice );

