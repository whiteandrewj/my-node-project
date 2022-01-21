const gameState = {
    playerTurn: "X",
    gameBoard: {
        a1: "",
        b1: "",
        c1: "",
        a2: "",
        b2: "",
        c2: "",
        a3: "",
        b3: "",
        c3: ""
    }
}

var a1 = document.getElementById("a1").addEventListener("click", e => {
    gameState.gameBoard["a1"] = gameState.playerTurn;
    updateGameState();
})
var b1 = document.getElementById("b1").addEventListener("click", e => {
    gameState.gameBoard["b1"] = gameState.playerTurn;
    updateGameState();
})
var c1 = document.getElementById("c1").addEventListener("click", e => {
    gameState.gameBoard["c1"] = gameState.playerTurn;
    updateGameState();
})

var a2 = document.getElementById("a2").addEventListener("click", e => {
    gameState.gameBoard["a2"] = gameState.playerTurn;
    updateGameState();
})
var b2 = document.getElementById("b2").addEventListener("click", e => {
    gameState.gameBoard["b2"] = gameState.playerTurn;
    updateGameState();
})
var c2 = document.getElementById("c2").addEventListener("click", e => {
    gameState.gameBoard["c2"] = gameState.playerTurn;
    updateGameState();
})

var a3 = document.getElementById("a3").addEventListener("click", e => {
    gameState.gameBoard["a3"] = gameState.playerTurn;
    updateGameState();
})
var b3 = document.getElementById("b3").addEventListener("click", e => {
    gameState.gameBoard["b3"] = gameState.playerTurn;
    updateGameState();
})
var c3 = document.getElementById("c3").addEventListener("click", e => {
    gameState.gameBoard["c3"] = gameState.playerTurn;
    updateGameState();
})



function updateGameState() {
    
    var isGameOver = checkForWinner();

    if (isGameOver == false) {
        switchPlayerTurn();
    }

    //iterate over gameBoard object
    for (var gameSpaceId of Object.keys(gameState.gameBoard)) {

        //get html element
        var htmlElementId = document.getElementById(gameSpaceId)

        //set element attributes
        if (gameState.gameBoard[gameSpaceId] == "X") {
            htmlElementId.setAttribute("class", "btn btn-primary")
            htmlElementId.setAttribute("value", "X")
            htmlElementId.disabled = true
        } else if (gameState.gameBoard[gameSpaceId] == "O") {
            htmlElementId.setAttribute("class", "btn btn-danger")
            htmlElementId.setAttribute("value", "O")
            htmlElementId.disabled = true
        } else {
            if (isGameOver) {
                htmlElementId.setAttribute("class", "btn btn-secondary")
                htmlElementId.disabled = true;
            } else {
                if (gameState.playerTurn == "X") {
                htmlElementId.setAttribute("class", "btn btn-outline-primary")
                }
                if (gameState.playerTurn == "O") {
                htmlElementId.setAttribute("class", "btn btn-outline-danger")
                }
                htmlElementId.setAttribute("value", "")
                htmlElementId.disabled = false 
            }
        }
    }
    console.log(gameState);
}

function checkForWinner() {
    if ((gameState.gameBoard.a1 == gameState.playerTurn && gameState.gameBoard.a2 == gameState.playerTurn && gameState.gameBoard.a3 == gameState.playerTurn)
    || (gameState.gameBoard.b1 == gameState.playerTurn && gameState.gameBoard.b2 == gameState.playerTurn && gameState.gameBoard.b3 == gameState.playerTurn)
    || (gameState.gameBoard.c1 == gameState.playerTurn && gameState.gameBoard.c2 == gameState.playerTurn && gameState.gameBoard.c3 == gameState.playerTurn)
    || (gameState.gameBoard.a1 == gameState.playerTurn && gameState.gameBoard.b1 == gameState.playerTurn && gameState.gameBoard.c1 == gameState.playerTurn)
    || (gameState.gameBoard.a2 == gameState.playerTurn && gameState.gameBoard.b2 == gameState.playerTurn && gameState.gameBoard.c2 == gameState.playerTurn)
    || (gameState.gameBoard.a3 == gameState.playerTurn && gameState.gameBoard.b3 == gameState.playerTurn && gameState.gameBoard.c3 == gameState.playerTurn)
    || (gameState.gameBoard.a1 == gameState.playerTurn && gameState.gameBoard.b2 == gameState.playerTurn && gameState.gameBoard.c3 == gameState.playerTurn)
    || (gameState.gameBoard.a3 == gameState.playerTurn && gameState.gameBoard.b2 == gameState.playerTurn && gameState.gameBoard.c1 == gameState.playerTurn)
    ) {
        console.log(gameState.playerTurn + " is the winner!");
        return true;
    } else {
        console.log("no winner yet");
        return false;
    }
}

function switchPlayerTurn() {
    if (gameState.playerTurn == "X") {
        gameState.playerTurn = "O";
    } else if (gameState.playerTurn == "O") {
        gameState.playerTurn = "X";
    }
}