//generates a random number using Math and uses it to decide computer's move for that round
function computerPlay() {
    let randonNumber = Math.floor(Math.random() * 10) + 1;
    let computerMove;
    if (randonNumber == 1 || randonNumber == 5 || randonNumber == 7) {
        computerMove = "rock";
    } else if (randonNumber == 3 || randonNumber == 6 || randonNumber == 9) {
        computerMove = "scissor";
    } else {
        computerMove = "paper";
    }
    return computerMove;
}

function playRound() {
    const computerMove = computerPlay();
    let playerMove, winner;
    playerMove = prompt("Play your move");
    playerMove = playerMove.toLowerCase();
    console.log(playerMove);
    switch (playerMove) {
        case "rock":
            if (computerMove == "paper") {
                winner = "Computer";
            } else if (computerMove == "scissor") {
                winner = "Player";
            } else if (computerMove == "rock") {
                winner = "No one";
            }
            break;
        case "paper":
            if (computerMove == "paper") {
                winner = "No one";
            } else if (computerMove == "scissor") {
                winner = "Computer";
            } else if (computerMove == "rock") {
                winner = "Player";
            }
            break;
        case "scissor":
            if (computerMove == "paper") {
                winner = "Player";
            } else if (computerMove == "scissor") {
                winner = "No one";
            } else if (computerMove == "rock") {
                winner = "Computer";
            }
            break;
        default:
            winner = "Make a valid move";
            break;
    }
    if (winner == "Computer" || winner == "No one" || winner == "Player") {
        console.log("Computer: " + computerMove);
        console.log(winner + " wins");
    } else {
        console.log(winner);
    }
}

playRound();