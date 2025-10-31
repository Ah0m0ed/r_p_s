function getComputerChoice() {
    let randNum = Math.random();
    let choice = "";
    if (randNum <= 0.333) {
        choice = "rock";
    }
    else if (randNum <= 0.666) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Make a choice Rock , Paper , Scissors");
    choice = choice.toLowerCase();
    choice = choice.trim();

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Its a Draw !!");
        return;
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                console.log("You Won , Rock beats Scissors !!");
                humanScore++;
                return;
            } else {
                console.log("You Lose , Paper beats Rock !!");
                computerScore++;
                return;
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                console.log("You Won , Paper beats Rock !!");
                humanScore++;
                return;
            } else {
                console.log("You Lose , Scissors beats Paper !!");
                computerScore++;
                return;
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                console.log("You Won , Scissors beats Paper !!");
                humanScore++;
                return;
            } else {
                console.log("You Lose , Rock beats Scissors !!");
                computerScore++;
                return;
            }
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Its a Draw !!");
            return;
        }

        switch (humanChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    console.log("You Won , Rock beats Scissors !!");
                    humanScore++;
                    return;
                } else {
                    console.log("You Lose , Paper beats Rock !!");
                    computerScore++;
                    return;
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    console.log("You Won , Paper beats Rock !!");
                    humanScore++;
                    return;
                } else {
                    console.log("You Lose , Scissors beats Paper !!");
                    computerScore++;
                    return;
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    console.log("You Won , Scissors beats Paper !!");
                    humanScore++;
                    return;
                } else {
                    console.log("You Lose , Rock beats Scissors !!");
                    computerScore++;
                    return;
                }
                break;
        }
    }

    for(let i = 0 ; i < 5 ; i++){
        playRound(getPlayerChoice(),getComputerChoice());
        console.log("Player : " + humanScore + ".\n" + "Computer : " + computerScore + ".")
    }

    if(computerScore < humanScore){
        console.log("Congrats ... You won !!");
    }
    else if(computerScore > humanScore){
        console.log("Game Over ... You Lost !!");
    }
    else{
        console.log("Game Over ... Its a Draw !!");
    }
}

playGame();