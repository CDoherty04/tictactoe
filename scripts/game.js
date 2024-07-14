function startGame() {
    gameDisplay.style.display = "block"

    activePlayerName.textContent = players[activePlayer-1].name
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

    if (gameData[selectedRow][selectedCol] !== 0) {
        return
    }

    event.target.textContent = players[activePlayer-1].symbol
    event.target.classList.add("disabled")

    gameData[selectedRow][selectedCol] = activePlayer

    switchPlayer()
    activePlayerName.textContent = players[activePlayer-1].name

    curRound++
    checkGameOver()
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
