let score = 0;

//generates a random number using Math and uses it to decide computer's move for that round
let computerChoice = () => {
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

// checks which button was clicked and returns the move's name as a value
let playerChoice = () => {
    let moveSelection = document.querySelector(".move-selection");
    moveSelection.addEventListener("click", e => {
        value = e.path[0].id;
        return value;
    })
}

// function to check whether the player or computer won the last round
// returns win if player won and returns loss if computer won and returns draw for draw
let winOrLose = (playerChoice, computerChoice) => {
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "paper") {
                return ("loss");
            } else if (computerChoice == "scissor") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
        case "paper":
            if (computerChoice == "scissor") {
                return ("loss");
            } else if (computerChoice == "rock") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
        case "scissor":
            if (computerChoice == "paper") {
                return ("loss");
            } else if (computerChoice == "rock") {
                return ("win");
            } else {
                return ("draw");
            }
            break;
    }
}

// actual function that playes the game and updates the runnning score
// also displays the latest move of computer and player
let play = () => {

    // getting the moves made by the computer and the player using their functions
    let computerMove = computerChoice();
    let playerMove = playerChoice();

    // displaying the latest move made by the player and computer
    let latestplayerMove = document.getElementById("latest-player-move");
    let latestcomputerMove = document.getElementById("latest-computer-move");
    latestplayerMove.innerText = playerMove;
    latestcomputerMove.innerText = computerMove;

    // updating the score based on the latest move 
    let result = winOrLose(playerMove, computerMove);
    let displayedScore = document.querySelector(".score");
    let latestScore = parseInt(displayedScore);
    if (result == "win") {
        latestScore++;
    } else if (result == "loss") {
        latestScore--;
    }
    displayedScore.innerText = latestScore;
    return latestScore;
}

// decides the winner on +5 or -5 score
function winner() {
    let n = 0;
    while (n = 0) {
        if (score == 5) {
            alert("Player Wins!");
            n = 1;
        } else if (score == -5) {
            alert("Computer Wins!");
            n = 1
        } else {
            score = play();
        }
    }
}

// resets all the elements to the default state, clears player moves, scores, etc
// starts a new round
function resetRound() {
    let reset = document.querySelector("#reset-round");
    reset.addEventListener("click", e => {
        let element = document.getElementById("latest-player-move");
        element.innerText = "";
        element = document.getElementById("latest-computer-move");
        element.innerText = "";
        element = document.querySelector(".score");
        element.innerText = "0";
    })
    winner();
}

resetRound();