function startGame() {
    gameDisplay.style.display = "block"

    activePlayerName.textContent = players[activePlayer].name
}

function selectGameField(event) {
    
    const selectedCol = +event.target.dataset.col
    const selectedRow = +event.target.dataset.row
    
    if (gameData[selectedRow][selectedCol] !== 0) {
        return
    }
    
    event.target.textContent = players[activePlayer].symbol
    event.target.classList.add("disabled")
    
    gameData[selectedRow][selectedCol] = players[activePlayer].symbol

    if (!activePlayer) {
        activePlayer = 1
    }
    else {
        activePlayer = 0
    }

    activePlayerName.textContent = players[activePlayer].name
}
