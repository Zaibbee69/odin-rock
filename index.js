const rounds = 5;

// Variables for keeping track of score
let humanScore = 0;
let computerScore = 0;

// Selecting the buttons and result
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let result = document.getElementById("results");

// Adding event listeners to the buttons
rock.addEventListener("click", function() {
    playRound("rock");
});

paper.addEventListener("click", function() {   
    playRound("paper");
});

scissor.addEventListener("click", function() {
    playRound("scissor");
});


// Function to get the random number
function getRandomInt()
{
    return Math.floor(Math.random() * 3);
}

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

// Plays a single round of game
function playRound(choice)
{
    // Getting the choices
    const computerChoice = getComputerChoice();

    console.log(computerChoice);

    const humanChoice = choice;

    // First Checking if the game was a draw or not
    if (computerChoice == humanChoice)
    {
        result.textContent = "It's a Draw!";
    }

    // Now making decision of the game

    else if ((computerChoice == "rock" && humanChoice == "paper") 
        || (computerChoice == "paper" && humanChoice == "scissor") 
        || (computerChoice == "scissor" && humanChoice == "rock" ))
    {
        humanScore ++;
        result.textContent = `You Win! ${humanChoice} Beats ${computerChoice}`;
    }

    else 
    {
        computerScore ++;
        result.textContent = `You Lose! ${computerChoice} Beats ${humanChoice}`;
    }

    result.textContent += ` Score: You: ${humanScore} Computer: ${computerScore}`;

    // Making a check if game score exceeded 5
    if (humanScore == rounds || computerScore == rounds)
    {
        if (humanScore == rounds)
        {
            result.textContent = "You Win the Game!";
        }
        else
        {
            result.textContent = "You Lose the Game!";
        }

        humanScore = 0;
        computerScore = 0;
    }
}
