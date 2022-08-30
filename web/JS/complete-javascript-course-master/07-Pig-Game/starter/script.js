'use strict';
const player1 = document.querySelector('.player_1');
const player2 = document.querySelector('.player_2');
const init = function () {
  player1.classList.add('sleep');
  player2.classList.add('active');
};
init();
