let humanScore = 0;
let computerScore = 0;
const rps = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    if(Math.random() >= 2/3)
    {
        return 0;
    }
    if(Math.random() >= 1/3)
    {
        return 1;
    }
    return 2;
}

// function getPlayerChoice()
// {
//     let playerChoice = prompt("Choose between rock, paper, and scissors: ");
//     playerChoice = playerChoice.toLowerCase();
//     if(playerChoice == "rock") return 0;
//     if(playerChoice == "paper") return 1;
//     if(playerChoice == "scissors") return 2;
//     return -1;
// }

function endGame(num)
{
    const rock = document.querySelector("#rock");
    rock.remove();

    const paper = document.querySelector("#paper");
    paper.remove();

    const scissors = document.querySelector("#scissors");
    scissors.remove();

    const div = document.querySelector("#results");
    div.remove();

    const end = document.createElement("p");
    if(num == 0)
    {
        end.textContent = "Congratulations! You won.";
    }
    else
    {
        end.textContent = "The computer won."
    }
    const fdiv = document.querySelector("#end");
    fdiv.appendChild(end);
}

function playRound(pChoice, cChoice){
    const p = document.querySelector("#cround");
    const res = document.querySelector("#wl");
    const ps = document.querySelector("#hscore");
    const cs = document.querySelector("#cscore");
    p.textContent = ("You played " + rps[pChoice] + " and the computer played " + rps[cChoice] + ".");

    if(pChoice == cChoice)
    {
        res.textContent = ("The round ends in a tie.");
        return;
    }
    if(pChoice-cChoice == 1 || pChoice-cChoice == -2)
    {
        res.textContent = ("You won the round!");
        humanScore++;
        ps.textContent = "Player Score: " + humanScore;
        if(humanScore >= 5) endGame(0);
        return;
    }
    res.textContent = ("You lost the round.");
    computerScore++;
    cs.textContent = "Computer Score: " + computerScore;
    if(computerScore >= 5) endGame(1);
    return;
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound(0, getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound(1, getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound(2, getComputerChoice());
});

// function playGame(){
//     for(let i = 0; i < 5; i++)
//     {
//         playRound(getPlayerChoice(), getComputerChoice());
//     }
//     if(humanScore == computerScore)
//     {
//         console.log("The game ended in a tie!");
//     }
//     else if (humanScore > computerScore)
//     {
//         console.log("You won!");
//     }
//     else
//     {
//         console.log("You lost!");
//     }
//     console.log("Your score: " + humanScore);
//     console.log("The computer's score: " + computerScore);
// }

// playGame();