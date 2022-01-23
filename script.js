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

function winOrLose(playerMove, computerMove) {
    // the logic for testing who won that round
    let score = 0;
    switch (playerMove) {
        case "rock":
            if (computerMove == "paper") {
                score--;
            } else if (computerMove == "scissor") {
                score++;
            }
            break;
        case "paper":
            if (computerMove == "scissor") {
                score--;
            } else if (computerMove == "rock") {
                score++;
            }
            break;
        case "scissor":
            if (computerMove == "paper") {
                score++;
            } else if (computerMove == "rock") {
                score--;
            }
            break;
    }
    return score;
}

function playRound() {
    // getting the moves made by the computer and the player using the functions
    let computerMove = computerPlay();
    let playerMove = playerMove();
    let newScore = winOrLose(playerMove, computerMove);
    let score = score + newScore;

    const moves = document.querySelector("moves");
    movesChildren = moves.children;

    // display what moves the player and computer made in last round
    movesChildren[0].innerText = `Player move: ${playerMove}`;
    movesChildren[1].innerText = `Computer move: ${computerMove}`;

    // when reset is pressed, the score needs to be set to 0 and the panel should be cleared
    resetButton = document.getElementById("reset-round");
    resetButton.onclick = () => {
        score = 0;
        htmlScore = document.querySelector("score");
        htmlScore.textContent = score;
        movesChildren[0].innerText = `Player move: `;
        movesChildren[1].innerText = `Computer move: `;
    };
}

// checks which button was clicked and returns the move's name as a value
function playerMove() {
    scissor = document.getElementById("scissor");
    paper = document.getElementById("paper");
    rock = document.getElementById("rock");
    scissor.onclick = () => {
        return "scissor";
    };
    paper.onclick = () => {
        return "paper";
    };
    rock.onclick = () => {
        return "rock";
    };
}