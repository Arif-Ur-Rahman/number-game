const randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number from 1 to 100")
    } else if(guess < 1){
        alert("Please enter a number greater than 1")
    } else if(guess > 100){
        alert("Please enter a number less than 100")
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed right!`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOOO Low!`)
    }else{
        displayMessage(`Number is TOOOO High!`)
    }
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function newGame(){

}
function endGame(){

}



