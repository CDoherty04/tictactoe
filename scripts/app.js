let editedPlayer = 0

const configOverlay = document.getElementById("config-overlay")
const backdrop = document.getElementById("backdrop")
const formElement = document.querySelector("form")
const inputErrorOutput = document.getElementById("input-error")

const editP1Button = document.getElementById("edit-player-1")
const editP2Button = document.getElementById("edit-player-2")
const cancelConfigButton = document.getElementById("cancel-button")

editP1Button.addEventListener("click", openPlayerConfig)
editP2Button.addEventListener("click", openPlayerConfig)
cancelConfigButton.addEventListener("click", closePlayerConfig)
formElement.addEventListener("submit", submitPlayerConfig)