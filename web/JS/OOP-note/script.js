'use strict';
let Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
//jonas是由Person所宣告的，因此=true
console.log(Person.prototype.isPrototypeOf(jonas));
//這個function 任何屬於Person的member都可使用
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/* 每個由Prototype宣告的function,variable...都會存在＿proto__中
而每個Person memeber都有一個__proto__因此只要是由prototype定義的任何function,variabel
Person member都能夠存取到 
所有能夠使用的function也能透過第一層__proto__存取到

*/

Person.prototype.constructor; //point to Person itself

//Challenge 3
let Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
let EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//here EV is an constructor function so does Car
EV.prototype = Object.create(Car.prototype);
//define function
EV.prototype.chargeBattery = function (chargeTo) {
  this.chargeTo = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h,with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.brake();
tesla.accelerate();

//object.prototype-->any object method jonas can use
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__ == Person.prototype); //true
//modern way:class
class Personcl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //point to class itself
  static testing() {
    console.log(`what you looking at?`);
  }
}
//call constructor
let jessia = new Personcl('Jessica', 2037);
console.log(jessia);
console.log(jessia.__proto__ === Personcl.prototype);
//Validation--->set or get(must of time we don't need it)
//getter don't need argument,setter need one argument

Personcl.testing();
const test = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
//create a variable inherient test function without variable
//here test is an object
let newMember = Object.create(test);
newMember.birthYear = 1995;
newMember.calcAge();
Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const student = function (firstName, birthYear, course) {
  //call告訴js我們要使用this
  //inherient firstName,birthYear from Person
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//取得Person prototype
student.prototype = Object.create(Person.prototype);
const mike = new student('Mike', 2022, 'Computer Science');
//mike prototype is student not person
console.log(mike instanceof student);
console.log(mike instanceof Person);
//由於上面create取得person prototype,因此會讓student prototype變成person
//所以需要下面這行來修正
student.prototype.constructor = student;
console.log(student.prototype.constructor);

//tell js StudentCl is the child class and Personcl is the parent class
class StudentCl extends Personcl {
  constructor(fullName, birthYear, course) {
    //inherient from parent class replace call method
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  //overwrite the previous method
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCl('Marrha Jonas', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//object
let PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const StudentProto = Object.create(PersonProto);
//rewrite init
StudentProto.init = function (firstName, birthYear, course) {
  //tell js we using 'this'
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
class Account {
  //public member
  locale = navigator.language;
  //private member
  #movements = [];
  //當他被給予值，他會直接被視為private
  #pin;
  constructor(owner, currency, pin) {
    //it means owner is private member....但沒有強制性
    this._owner = owner;
    this.currency = currency;
    this.pin = pin;
    console.log(`Thanks for opening an account,${owner}`);
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  //private method
  #testing() {}
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}
const acc1 = new Account('Andrew', 'EUR', 1111);
acc1.deposit(115).deposit(200).withdraw(23).withdraw(243).withdraw(3434);

//Challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.chargeTo = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h,with a charge of ${this.charge}%`
    );
    return this;
  }
}
const Rivian = new EVCl('Rivian', 120, 23);
Rivian.accelerate().accelerate().break().break();

//
