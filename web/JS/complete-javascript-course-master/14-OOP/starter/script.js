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

//Challenge 3
const Car = function (make, speed) {
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
