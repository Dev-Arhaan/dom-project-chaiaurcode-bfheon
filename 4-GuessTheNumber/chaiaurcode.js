let randNum = parseInt(Math.random() * 100 + 1);
// console.log(randNum)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid')
  } 
  else if(guess > 100){
    alert('Please enter a number under 100')
  } 
  else if(guess<0){
    alert('Please enter a number above 0')
  } else {
    prevGuess.push(guess);
    if(numGuess >= 10){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randNum){
    displayMessage(`You guessed it right! It is ${randNum}`);
    endGame();
  }
  else if(guess<randNum){
    displayMessage(`Number is too low`);
  } 
  else if(guess>randNum){
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`  
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`; 
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;  
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}