'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const  btnRoll = document.querySelector('.btn--roll');
const  btnNew = document.querySelector('.btn--new');
const  btnHold = document.querySelector('.btn--hold');

score0El.textContent = score1El.textContent = 0;
diceEl.classList.add('hidden');

let generateRandomNumber = function() {
      return Math.trunc((Math.random() * 6)) + 1
}
let currentScore = 0;
btnRoll.addEventListener('click', function(){
      const randomNumber = generateRandomNumber();
      diceEl.src = `dice-${randomNumber}.png`;
      diceEl.classList.remove('hidden');
      if(randomNumber !== 1){
            currentScore += randomNumber;
            current0El.textContent = currentScore;
      } else {
            currentScore += randomNumber;
            current1El.textContent = currentScore;
      }
})