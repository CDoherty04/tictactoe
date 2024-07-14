function resetGame() {
    editedPlayer = 0
    activePlayer = 1
    curRound = 1
    gameIsOver = false

    gameOverDisplay.style.display = "none"
    gameOverDisplay.firstElementChild.innerHTML = "You won <span id=\"winner\">PLAYER NAME</span>!"

    let fieldIndex = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0
            gameFieldElements[fieldIndex].textContent = ""
            gameFieldElements[fieldIndex].classList.remove("disabled")
            fieldIndex++
        }
    }
}

function startGame() {
    resetGame()

    gameDisplay.style.display = "block"
    activePlayerName.textContent = players[activePlayer - 1].name

    // gameDisplay.style.display = "none"
}

function switchPlayer() {
    if (activePlayer === 1) {
        activePlayer = 2
    }
    else {
        activePlayer = 1
    }
}

function selectGameField(event) {
    const selectedCol = +event.target.dataset.col
    const selectedRow = +event.target.dataset.row

    if (gameData[selectedRow][selectedCol] !== 0 || gameIsOver) {
        return
    }

    event.target.textContent = players[activePlayer - 1].symbol
    event.target.classList.add("disabled")

    gameData[selectedRow][selectedCol] = activePlayer

    switchPlayer()
    activePlayerName.textContent = players[activePlayer - 1].name

    curRound++
    endGame(checkGameOver())
}

function checkGameOver() {
    // Check Rows
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0]
        }
    }
    // Check Columns
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]) {
            return gameData[0][i]
        }
    }
    // Check Diaganols
    if (gameData[0][0] &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0]
    }
    if (gameData[0][2] &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]) {
        return gameData[0][2]
    }
    if (curRound > 9) {
        return -1
    }

    return 0
}

function endGame(winner) {

    if (winner > 0) {
        gameOverDisplay.style.display = "block"
        gameOverDisplay.firstElementChild.firstElementChild.textContent = players[winner - 1].name
        gameIsOver = true
    }
    else if (winner === -1) {
        gameOverDisplay.style.display = "block"
        gameOverDisplay.firstElementChild.textContent = "It's a draw!"
        gameIsOver = true
    }
}
