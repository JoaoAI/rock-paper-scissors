

    function getComputerChoice(){
        const decision = Math.random();
        let result;

        if(decision < 0.333){
            result = "Scissors"
        } else if(decision > 0.333 && decision < 0.666){
            result = "Paper"
        } else if(decision > 0.666){
            result = "Rock"
        }
        return result;
    }


    function getHumanChoice(){
        let human = prompt("Rock, Paper, or Scissors?")
        return human;
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result;

        if(humanChoice === "Scissors" && computerChoice === "Paper"){
            result = "You Win! Scissors beats Paper!";
            humanScore++;
        } else if(humanChoice === "Paper" && computerChoice === "Rock"){
            result = "You Win! Paper beats Rock!";
            humanScore++;
        } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            result = "You Win! Rock beats Scissors!";
            humanScore++;
        } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            result = "You Lose! Scissors beats Paper!";
            computerScore++;
        } else if(humanChoice === "Rock" && computerChoice === "Paper"){
            result = "You Lose! Paper beats Rock!";
            computerScore++;
        } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            result = "You Lose! Rock beats Scissors!";
            computerScore++;
        } else if(humanChoice === computerChoice){
            result = "It's a Tie!"; 
        }

        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(result);
        console.log(`Scores - Human: ${humanScore} | Computer: ${computerScore}`);
}

playRound();

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
    }

    console.log("Game Over!");
    console.log(`Final Scores - Human: ${humanScore} | Computer: ${computerScore}`);
    }

playGame();

