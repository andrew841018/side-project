'use strict';
let dice = document.querySelector('.dice');
let i;
let activate_player = 0;
let curr_sum;
let score1 = document.getElementById('score--1');
let score0 = document.getElementById('score--0');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let hold = document.querySelector('.btn--hold');
let total_score = [0, 0];
let init = function () {
  total_score = [0, 0];
  document
    .querySelector(`.player--${activate_player}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${activate_player}`).textContent = 0;
  activate_player = 0;
  curr_sum = 0;
  score1.textContent = 0;
  score0.textContent = 0;
  document.querySelector('.btn--roll').disabled = false;
  hold.disabled = false;
  dice.classList.add('hidden');
};
init();
let switch_player = function () {
  curr_sum = 0;
  document.getElementById(`current--${activate_player}`).textContent = curr_sum;
  activate_player++;
  activate_player = activate_player % 2;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
document.querySelector('.btn--roll').addEventListener('click', function () {
  let random = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${random}.png`;
  if (random == 1) {
    switch_player();
  } else {
    curr_sum += random;
    document.getElementById(`current--${activate_player}`).textContent =
      curr_sum;
  }
});
let new_btn = document.querySelector('.btn--new');
hold.addEventListener('click', function () {
  total_score[`${activate_player}`] += curr_sum;
  document.getElementById(`score--${activate_player}`).textContent =
    total_score[`${activate_player}`];
  curr_sum = 0;
  if (total_score[`${activate_player}`] >= 10) {
    document
      .querySelector(`.player--${activate_player}`)
      .classList.add('player--winner');
    dice.classList.add('hidden');
    document.querySelector('.btn--roll').disabled = true;
    hold.disabled = true;
  } else {
    switch_player();
  }
});
new_btn.addEventListener('click', function () {
  init();
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
});
