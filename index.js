console.log("Hello");
console.log(getComputerChoice());
console.log(getHumanChoice());

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

function getHumanChoice()
{
    // Getting user input and converting to int
    let choice = parseInt(prompt("Select your Hand: 1) Rock 2) Paper 3) Scissor"));

    // Making decision and returning data
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissor";

}

// Function to get the random number
function getRandomInt()
{
    return Math.floor(Math.random() * 3);
}