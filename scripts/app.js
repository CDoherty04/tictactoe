const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let editedPlayer = 0
<<<<<<< HEAD
let activePlayer = 1
let curRound = 1
=======
let activePlayer = 0
>>>>>>> fe430886ab55e6690d702d68b3375644b83bc643

const players = [
    {
        name:"Player 1",
        symbol:"X"
    },
    {
        name:"Player 2",
        symbol:"O"
    }
]

const configOverlay = document.getElementById("config-overlay")
const backdrop = document.getElementById("backdrop")
const formElement = document.querySelector("form")
const inputErrorOutput = document.getElementById("input-error")
const gameDisplay = document.getElementById("active-game")
const activePlayerName = document.getElementById("active-player")

const editP1Button = document.getElementById("edit-player-1")
const editP2Button = document.getElementById("edit-player-2")
const cancelConfigButton = document.getElementById("cancel-button")
const startGameButton = document.getElementById("start-game")
const gameFieldElements = document.querySelectorAll("#game-board li")

editP1Button.addEventListener("click", openPlayerConfig)
editP2Button.addEventListener("click", openPlayerConfig)
cancelConfigButton.addEventListener("click", closePlayerConfig)
backdrop.addEventListener("click", closePlayerConfig)
formElement.addEventListener("submit", submitPlayerConfig)
startGameButton.addEventListener("click", startGame)

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click", selectGameField)
}
