let score = 0;

// generates a random number using Math and uses it to decide computer's move for that round
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let computerMove;
    if (randomNumber == 1 || randomNumber == 5 || randomNumber == 7) {
        computerMove = "Rock";
    } else if (randomNumber == 3 || randomNumber == 6 || randomNumber == 9) {
        computerMove = "Scissor";
    } else {
        computerMove = "Paper";
    }
    return computerMove;
}

// function to check whether the player or computer won the last round
// returns win if player won and returns loss if computer won and returns draw for draw
let winOrLose = (playerChoice, computerChoice) => {
    switch (playerChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                return ("loss");
            } else if (computerChoice == "Scissor") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
        case "Paper":
            if (computerChoice == "Scissor") {
                return ("loss");
            } else if (computerChoice == "Rock") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
        case "Scissor":
            if (computerChoice == "Paper") {
                return ("loss");
            } else if (computerChoice == "Rock") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
    }
}

// displaying the latest move made by the player and computer
function currentMove(playerMove, computerMove) {
    let latestplayerMove = document.getElementById("latest-player-move");
    let latestcomputerMove = document.getElementById("latest-computer-move");
    latestplayerMove.innerText = playerMove;
    latestcomputerMove.innerText = computerMove;
}

// decides if the round was win or loss and then updates the global variable score and also the DOM score
function updateScore(result) {
    let displayedScore = document.querySelector(".score");
    if (result == "win") {
        score++
    } else if (result == "loss") {
        score--
    }
    displayedScore.innerText = score;
}


// decides the winner on +5 or -5 score
function winner() {
    let gameOver;
    if (score == 5) {
        alert("Player Wins!");
        gameOver = true;
    } else if (score == -5) {
        alert("Computer Wins!");
        gameOver = false;
    }
    return gameOver;
}

// resets all the elements to the default state, clears player moves, scores, etc
// starts a new round
function resetGame() {
    let reset = document.querySelector("#reset-round");
    reset.addEventListener("click", e => {
        let element = document.getElementById("latest-player-move");
        element.innerText = "";
        element = document.getElementById("latest-computer-move");
        element.innerText = "";
        element = document.querySelector(".score");
        element.innerText = "0";
    })
}

// checks which button was clicked and returns the move's name as a value
function playerChoice() {

    let moveSelection = document.querySelector(".move-selection");
    moveSelection.addEventListener("click", e => {
        let playerMove = e.path[0].innerText; // player move
        let computerMove = computerChoice(); // computer move
        currentMove(playerMove, computerMove);
        let result = winOrLose(playerMove, computerMove); // result of the two moves
        updateScore(result); // updates the result of the moves in the HTML
        winner();
        resetGame();
    });
}


// start the program once player chooses a move
playerChoice();