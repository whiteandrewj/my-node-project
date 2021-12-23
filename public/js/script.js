const gameState = {
    "playerTurn": "O",
    "gameBoard": {
        "a1": null,
        "a2": null,
        "a3": null,
        "b1": null,
        "b2": null,
        "b3": null,
        "c1": null,
        "c2": null,
        "c3": null
    }
};

var a1 = document.getElementById("a1").addEventListener("click", e => {
    Object.defineProperties(gameBoard["a1"]) = "X"
    updateGamestate();
})
var b1 = document.getElementById("b1").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["b1"]) = "X"
    updateGamestate();
})
var c1 = document.getElementById("c1").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["c1"]) = "X"
    updateGamestate();
})

var a2 = document.getElementById("a2").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["a2"]) = "X"
    updateGamestate();
})
var b2 = document.getElementById("b2").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["b2"]) = "X"
    updateGamestate();
})
var c2 = document.getElementById("c2").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["c2"]) = "X"
    updateGamestate();
})

var a3 = document.getElementById("a3").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["a3"]) = "X"
    updateGamestate();
})
var b3 = document.getElementById("b3").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["b3"]) = "X"
    updateGamestate();
})
var c3 = document.getElementById("c3").addEventListener("click", e => {
    Object.defineProperties(gameState.gameBoard["c3"]) = "X"
    updateGamestate();
})
/*
a1.addEventListener("click", e => {
    a1.setAttribute("class", "btn btn-success")
    a1.setAttribute("value", "X")
    a1.disabled = true
})
b1.addEventListener("click", e => {
    b1.setAttribute("class", "btn btn-success")
    b1.setAttribute("value", "X")
    b1.disabled = true
})
c1.addEventListener("click", e => {
    c1.setAttribute("class", "btn btn-success")
    c1.setAttribute("value", "X")
    c1.disabled = true
})
*/

function updateGamestate() {
    //iterate over gameBoard object
    for (var square of Object.keys(gameState.gameBoard)) {

        //get html element
        var boardSquare = document.getElementById(square)

        //set element attributes
        if (gameBoard[square] == "X") {
            boardSquare.setAttribute("class", "btn btn-primary")
            boardSquare.setAttribute("value", "X")
            boardSquare.disabled = true
        } else if (gameBoard[square] == "O") {
            boardSquare.setAttribute("class", "btn btn-danger")
            boardSquare.setAttribute("value", "O")
            boardSquare.disabled = true
        } else {
            boardSquare.setAttribute("class", "btn btn-outline-primary")
            boardSquare.setAttribute("value", null)
            boardSquare.disabled = false 
        }
    }
}