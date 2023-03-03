let hands = ["Rock", "Paper", "Scissor"]
let stageoneEl = document.getElementById("stageone")
let stagetwoEl = document.getElementById("stagetwo")
let resultEl = document.getElementById("result")
let scoreBtnRst = document.getElementById("resetGame")
let playButton = document.getElementById("playButton")

function playGame() {
    let randomIndexOne = Math.floor(Math.random() * hands.length)
    stageoneEl.textContent = "Player One: " + hands[randomIndexOne] 
    let randomIndexTwo = Math.floor(Math.random() * hands.length)
    stagetwoEl.textContent = "Player Two: " + hands[randomIndexTwo] 
    if (hands[randomIndexOne] == "Paper" && hands[randomIndexTwo] == "Rock") {
        resultEl.textContent = "🎉🎉🎉 Player One Wins"
     } else if (hands[randomIndexOne] == "Paper" && hands[randomIndexTwo] == "Scissor") {
        resultEl.textContent = "Player Two Wins 🎉🎉🎉"
     } else if (hands[randomIndexOne] == "Rock" && hands[randomIndexTwo] == "Paper"){ 
        resultEl.textContent = "Player Two Wins  🎉🎉🎉"
     } else if(hands[randomIndexOne] == "Scissor" && hands[randomIndexTwo] == "Paper") {
        resultEl.textContent = "🎉🎉🎉 Player One wins"
     } else if (hands[randomIndexOne] == "Scissor" && hands[randomIndexTwo] == "Rock") {
        resultEl.textContent = "Player Two Wins 🎉🎉🎉"
     } else if (hands[randomIndexOne] == "Rock" && hands[randomIndexTwo] == "Scissor") {
        resultEl.textContent = "🎉🎉🎉 Player One Wins"
     } else if (hands[randomIndexOne] == "Rock" && hands[randomIndexTwo] == "Rock"){
        resultEl.textContent = "🌟 Try again 🌟"
     } else if (hands[randomIndexOne] == "Paper" && hands[randomIndexTwo] == "Paper"){
        resultEl.textContent = "🌟 Try again 🌟"
     } else if (hands[randomIndexOne] == "Scissor" && hands[randomIndexTwo] == "Scissor"){
        resultEl.textContent = "🌟 Try again 🌟"
     }   
}

function resetGame() {
    stageoneEl.textContent = "Player One"
    stageone = "Player One"
    stagetwoEl.textContent = "Player Two"
    stagetwo = "Player Two"
    resultEl.textContent = "Result"
 }
