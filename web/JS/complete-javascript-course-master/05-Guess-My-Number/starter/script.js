'use strict';
let target = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const input = document.querySelector('.guess').value;
  if (input > target) {
    document.querySelector('.message').textContent = 'too big';
    document.querySelector('.message').style.backgroundColor = '#0000FF';
  } else if (input < target) {
    document.querySelector('.message').textContent = 'too small';
    document.querySelector('.message').style.backgroundColor = '#f03';
  } else if (input == target) {
    document.querySelector('.message').textContent = 'bigo~';
    document.querySelector('.message').style.backgroundColor = '#7c03ff';
    document.querySelector('.number').textContent = String(target);
    document.querySelector('body').style.backgroundColor = '#51cf66';
    document.querySelector('.number').style.width = '30rem';
  }
  if (input != target) {
    if (score > 0) score--;
    if (score == 0) {
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = 'game over';
    }
  }
  document.querySelector('.score').textContent = score;
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.backgroundColor = '#222';
  target = Math.trunc(Math.random() * 20) + 1;
});
