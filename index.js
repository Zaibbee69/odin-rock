console.log("Hello");
console.log(getComputerChoice());
console.log(getHumanChoice());

// Variables for keeping track of score
let humanScore = 0;
let computerScore = 0;

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
    let choice = parseString(prompt("Select your Hand: 1) Rock 2) Paper 3) Scissor"));

    // Returning data
    return choice;

}

function playRound( computerChoice = getComputerChoice(), playerChoice = getHumanChoice() )
{

}

// Function to get the random number
function getRandomInt()
{
    return Math.floor(Math.random() * 3);
}