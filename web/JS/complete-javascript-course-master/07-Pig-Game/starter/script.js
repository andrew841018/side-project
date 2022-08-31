'use strict';
const player1 = document.querySelector('.player_1');
const player2 = document.querySelector('.player_2');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn-dice');
const hold = document.querySelector('.btn-hold');
const reset = document.querySelector('.btn-reset');
let current_score = document.getElementById('save-score1');
let sum = 0,
  active_player = 1;
let score = document.getElementById('score-1');
let curr_sum = 0;
const dice_path = [
  'dice-1.d626e253',
  'dice-2.9c2270f8',
  'dice-3.40550703',
  'dice-4.3fea6ae2',
  'dice-5.8aa9684a',
  'dice-6.e7359e68',
];
const THRESHOLD = 20;
const init = function () {
  player1.classList.add('sleep');
  player2.classList.add('active');
  roll.disabled = false;
  hold.disabled = false;
  score = document.getElementById(`score-${active_player}`);
  current_score = document.getElementById(`save-score${active_player}`);
  sum = 0;
  curr_sum = 0;
  score.textContent = '0';
  current_score.textContent = '0';
  dice.src = `${dice_path[5]}.png`;
};
init();
const choose_winner = function () {
  player1.classList.add('winner');
  player1.classList.toggle('active');
  player2.classList.add('winner');
  player2.classList.toggle('active');
};
const check = function () {
  if (sum >= THRESHOLD) {
    switch (active_player) {
      case 1:
        player1.classList.remove('active');
        player1.classList.add('winner');
        break;
      case 2:
        player2.classList.remove('active');
        player2.classList.add('winner');
        break;
    }
    roll.disabled = true;
    hold.disabled = true;
  }
};
const switch_player = function () {
  player1.classList.toggle('sleep');
  player1.classList.toggle('active');
  player2.classList.toggle('sleep');
  player2.classList.toggle('active');
  curr_sum = 0;
  current_score.textContent = String(curr_sum);
};
const switch_or_not = function (dice_num) {
  if (dice_num === 1) {
    switch_player();
  }
};
roll.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 6);
  dice.src = `${dice_path[random]}.png`;
  switch_or_not(random + 1);
  if (player1.classList.contains('active')) {
    active_player = 1;
  } else {
    active_player = 2;
  }
  if (random + 1 === 1) return;
  current_score = document.getElementById(`save-score${active_player}`);
  curr_sum += random + 1;
  current_score.textContent = String(curr_sum);
});

hold.addEventListener('click', function () {
  score = document.getElementById(`score-${active_player}`);
  current_score = document.getElementById(`save-score${active_player}`);
  sum = +score.textContent;
  if (sum < THRESHOLD) {
    sum += +current_score.textContent;
    score.textContent = sum;
  }
  curr_sum = 0;
  current_score.textContent = '0';
  check();
});
const new_game = function () {
  switch (active_player) {
    case 1:
      player1.classList.remove('winner');
      player1.classList.toggle('active');
      break;
    case 2:
      player2.classList.remove('winner');
      player2.classList.toggle('active');
      break;
  }
  player1.classList.remove('sleep');
  player1.classList.remove('active');
  init();
};
reset.addEventListener('click', new_game);
