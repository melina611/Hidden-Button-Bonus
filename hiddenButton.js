let winnOrLose 
function hiddenButton() {
    winnOrLose = Math.floor(Math.random() * 3)
    let buttonGroup = document.getElementById("buttonGroup")
    for (let button of buttonGroup.getElementsByTagName("button")) {
        button.addEventListener("click", function (e) {
            if ("winnerOrLoser" + winnOrLose == button.id) {
                button.innerHTML = "castigator"
            } else {
                button.innerHTML = "necastigator"
            }
        })
    }
}
function givenButton() {
    let numberOfProvidedButtons = document.getElementById("numberOfProvidedButtons").value
    let randomWinnOrLoseButton = Math.floor(Math.random() * numberOfProvidedButtons)
    let buttons = []
    let outputButtons = document.getElementById("outputButtons")
    outputButtons.innerHTML = ""
    for (let i = 0; i < numberOfProvidedButtons; ++i) {
        buttons[i] = document.createElement("button")
        buttons[i].innerText = "Winn or Lose"
        outputButtons.appendChild(buttons[i])
        buttons[i].addEventListener("click", function (e) {
            if (i == randomWinnOrLoseButton) {
                buttons[i].innerText = "Winner"
            } else {
                buttons[i].innerText = "Loser"
            }
        })
    }
}
window.onload = hiddenButton