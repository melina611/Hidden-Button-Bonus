let winnOrLose

function hiddenButton() {
    winnOrLose = Math.floor(Math.random() * 3)
    let buttonGroup = document.getElementById("buttonGroup")
    for (let button of buttonGroup.getElementsByTagName("button")) {
        button.addEventListener("click", theWinnOrLoseButton)
    }
}

let randomWinnOrLoseButton

function givenButton() {
    let numberOfProvidedButtons = document.getElementById("numberOfProvidedButtons").value
    randomWinnOrLoseButton = Math.floor(Math.random() * numberOfProvidedButtons)
    let buttons = []
    let outputButtons = document.getElementById("outputButtons")
    outputButtons.innerHTML = ""
    for (let i = 0; i < numberOfProvidedButtons; ++i) {
        buttons[i] = document.createElement("button")
        buttons[i].innerText = "Winn or Lose"
        buttons[i].id = i
        outputButtons.appendChild(buttons[i])
        buttons[i].addEventListener("click", theWinnOrLoseButton)
    }
}

function theWinnOrLoseButton(e) {
    if (e.target.id == randomWinnOrLoseButton) {
        e.target.innerText = "Winner"
    } else if ("winnerOrLoser" + winnOrLose == e.target.id) {
        e.target.innerText = "Winner"
    } else {
        e.target.innerText = "Loser"
    }
}
window.onload = hiddenButton
