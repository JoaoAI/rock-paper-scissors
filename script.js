let humanScore = 0;
let computerScore = 0;
let gameEnded = false;

function getHumanChoice(choice) {
    return choice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (gameEnded) return;

    let computerChoice = getComputerChoice();
    let result;
    let resultText = '';

    if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result = "You Win! Scissors beats Paper!";
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result = "You Win! Paper beats Rock!";
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        result = "You Win! Rock beats Scissors!";
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        result = "You Lose! Scissors beats Paper!";
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        result = "You Lose! Paper beats Rock!";
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        result = "You Lose! Rock beats Scissors!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        result = "It's a Tie!";
    }

    resultText += `Human choice: ${humanChoice}<br>`;
    resultText += `Computer choice: ${computerChoice}<br>`;
    resultText += `${result}<br>`;
    resultText += `Scores - Human: ${humanScore} | Computer: ${computerScore}<br>`;

    if (humanScore >= 5) {
        resultText += "<strong>Human wins the game!</strong>";
        gameEnded = true;
        disableButtons();
    } else if (computerScore >= 5) {
        resultText += "<strong>Computer wins the game!</strong>";
        gameEnded = true;
        disableButtons();
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultText;

    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    playRound("Rock");
});

paperButton.addEventListener("click", function() {
    playRound("Paper");
});

scissorsButton.addEventListener("click", function() {
    playRound("Scissors");
});
