function openPlayerConfig(event) {
    configOverlay.style.display = "block"
    backdrop.style.display = "block"
    curPlayerNum = +event.target.dataset.playerid
    configOverlay.firstElementChild.textContent = "Who is Player " + curPlayerNum
}

function closePlayerConfig() {
    configOverlay.style.display = "none"
    backdrop.style.display = "none"
    formElement.firstElementChild.classList.remove("error")
    inputErrorOutput.textContent = ""
}

function submitPlayerConfig(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    let playerName = formData.get("playername").trim()
    playerName = playerName.substring(0, 1).toUpperCase() + playerName.substring(1, playerName.length)
    event.target.firstElementChild.children[1].value = playerName

    if (!playerName) {
        inputErrorOutput.textContent = "Please enter a valid name"
        event.target.firstElementChild.classList.add("error")
        return
    }

    event.target.firstElementChild.classList.remove("error")
    inputErrorOutput.textContent = ""

    const updatedPlayerDataElement = document.getElementById("player-" + curPlayerNum + "-data")
    updatedPlayerDataElement.children[1].textContent = playerName
}
