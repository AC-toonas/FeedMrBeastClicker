// Get elements
let clickcounter = document.getElementById("ClickCount")
let cpccounter = document.getElementById("CPC")
let cpscounter = document.getElementById("CPS")
let button = document.getElementById("ClickMe")
let plusone = document.getElementById("Plus1CPC")
let plusfive = document.getElementById("Plus5CPC")
let plusten = document.getElementById("Plus10CPC")
let plusoneCPS = document.getElementById("Plus1CPS")
let plusfiveCPS = document.getElementById("Plus5CPS")
let plustenCPS = document.getElementById("Plus10CPS")
let resetButton = document.getElementById("ResetGame")


// Variables
let clicks = 0
let cpc = 1
let cps = 0

// =========================================
// LOAD SAVED VALUES
// =========================================
if (localStorage.getItem("moneyfed")) {
    clicks = parseInt(localStorage.getItem("moneyfed"))
}

if (localStorage.getItem("MoneyPerFeed")) {
    cpc = parseInt(localStorage.getItem("MoneyPerFeed"))
}

if (localStorage.getItem("MoneyPerSecond")) {
    cps = parseInt(localStorage.getItem("MoneyPerSecond"))
}

// Update UI after loading
clickcounter.textContent = clicks
cpccounter.textContent = cpc
cpscounter.textContent = cps

// =========================================
// FUNCTIONS
// =========================================

function saveGame() {
    localStorage.setItem("moneyfed", clicks)
    localStorage.setItem("MoneyPerFeed", cpc)
    localStorage.setItem("MoneyPerSecond", cps)
}

function clicked() {
    clicks += cpc
    clickcounter.textContent = clicks
    saveGame()
}

function autoclicked() {
    clicks += cps
    clickcounter.textContent = clicks
    saveGame()
}

function plusCPCone() {
    if (clicks >= 25) {
        clicks -= 25
        cpc += 1

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPCfive() {
    if (clicks >= 75) {
        clicks -= 75
        cpc += 5

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPCten() {
    if (clicks >= 125) {
        clicks -= 125
        cpc += 10

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPSone() {
    if (clicks >= 50) {
        clicks -= 50
        cps += 1

        clickcounter.textContent = clicks
        cpscounter.textContent = cps
        saveGame()
    }
}

function plusCPSfive() {
    if (clicks >= 150) {
        clicks -= 150
        cps += 5

        clickcounter.textContent = clicks
        cpscounter.textContent = cps
        saveGame()
    }
}

function plusCPSten() {
    if (clicks >= 250) {
        clicks -= 250
        cps += 10

        clickcounter.textContent = clicks
        cpscounter.textContent = cps
        saveGame()
    }
}

function resetGame() {
    localStorage.clear()

    clicks = 0
    cpc = 1
    cps = 0

    clickcounter.textContent = clicks
    cpccounter.textContent = cpc
    cpscounter.textContent = cps

    alert("Game reset!")
}


// =========================================
// EVENT LISTENERS
// =========================================

button.addEventListener("click", clicked)
plusone.addEventListener("click", plusCPCone)
plusfive.addEventListener("click", plusCPCfive) 
plusten.addEventListener("click", plusCPCten)
plusoneCPS.addEventListener("click", plusCPSone)
plusfiveCPS.addEventListener("click", plusCPSfive)
plustenCPS.addEventListener("click", plusCPSten)
resetButton.addEventListener("click", resetGame)


// Auto-click timer
setInterval(autoclicked, 1000)
