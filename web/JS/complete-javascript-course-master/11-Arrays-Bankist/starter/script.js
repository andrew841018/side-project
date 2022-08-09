'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //initial-->刪除html一開始的資訊->沒有初始資訊
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} deposit</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    //將字串html放在movement最上層，代表在.movement這個class最上面新增html裡面指定
    //的元素
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const calcDisplayBalance = function (array) {
  let sum = array.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${sum} TWD`;
};
calcDisplayBalance(account1.movements);
const calcDisplaySummary = function (movements) {
  let sum = movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  let output_str = `${sum}$`;
  labelSumIn.textContent = output_str;
  sum = movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  output_str = `${Math.abs(sum)}$`;
  labelSumOut.textContent = output_str;
  let intetest = movements
    .filter(money => money > 0)
    .map(money => (money * 1.2) / 100) //利息
    .filter(money => money >= 1) //>1 then 加入
    .reduce((acc, cur) => acc + cur, 0); //計算總和
  labelSumInterest.textContent = `${intetest}$`;
};
calcDisplaySummary(account1.movements);
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const EurtoTWD = 29.7; //Eur to Taiwan dolors.
const movementsTWD = movements.map(Eur => Eur * EurtoTWD);

btnLogin.addEventListener('click', function (e) {
  //prevent from
  e.preventDefault();
});
