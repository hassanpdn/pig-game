'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const  btnRoll = document.querySelector('.btn--roll');
const  btnNew = document.querySelector('.btn--new');
const  btnHold = document.querySelector('.btn--hold');
const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');

score0El.textContent = score1El.textContent = 0;
diceEl.classList.add('hidden');

let generateRandomNumber = function() {
      return Math.trunc((Math.random() * 6)) + 1
}
let currentScore = 0;
let activePlayer = 0;

document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

let player0Score = null;
let player1Score = null;

function changePlayer(){
      player0Score = player1Score = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1: 0;
      document.querySelectorAll('.player').forEach(el => {
            el.classList.contains('player--active') ? el.classList.remove('player--active') : el.classList.add('player--active')
      })
}

btnRoll.addEventListener('click', function(){
      if((activePlayer ? player1Score : player0Score) >= 20) return
      const randomNumber = generateRandomNumber();
      diceEl.src = `dice-${randomNumber}.png`;
      diceEl.classList.remove('hidden');
      if(randomNumber !== 1){
            activePlayer ? player1Score += randomNumber : player0Score += randomNumber;
            document.getElementById(`current--${activePlayer}`).textContent = activePlayer ? player1Score : player0Score;

            if((activePlayer ? player1Score : player0Score) >= 20) {
                  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                  diceEl.classList.add('hidden');
            }
      } else {
            changePlayer();
      }
})

btnHold.addEventListener('click', function(){
      if((activePlayer ? player1Score : player0Score) >= 20) return
      activePlayer ? score1El.textContent = Number(score1El.textContent) + player1Score : score0El.textContent = Number(score0El.textContent) + player0Score;
      changePlayer();
})

btnNew.addEventListener('click', function(){
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
      player0Score = player1Score = currentScore = activePlayer = 0;
      [0, 1].forEach(item => {
            item === activePlayer ? document.querySelector(`.player--${item}`).classList.add('player--active') : document.querySelector(`.player--${item}`).classList.remove('player--active')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
      })
      score0El.textContent = score1El.textContent = current0El.textContent = current1El.textContent = 0;
      diceEl.classList.add('hidden'); 
})
