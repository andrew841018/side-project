'use strict'; //較安全的模式，會將某些錯誤顯示出來．．．strict mode
let fake_name = 'Tim';
let real_name = 'andrew';
//使用字串的一種寫法，較為方便
//叫做 template literal，使用``取代"" or ''
const andrew = `I am ${real_name} not ${fake_name}`;
// in js, 換行符號是：\n\
console.log('hello world \n\
if else\n\
function');
//cmd+control+space=圖示
// ``可以直接換行不需要\n\，但是"" or '' 需要加上\n\，否則會出錯
console.log(`a
b
c`);
let John = 28.3;
let Tom = 23.9;
if (John > Tom) {
  console.log(`John's BMI is higher than Tom's!`);
} else {
  console.log(`Tom's BMI is higher than John's!`);
}
//String to number-->NUmber(String)
console.log(Number('333'));
//Number to String-->String(Number)
console.log(String(3));
//console will automatic change datatype,according to its content.
console.log('I am ' + 32 + ' years old'); //cosole output string
//只有『+』會將數字以字串形式串起來，其餘會以數字形式作運算
console.log('4' * 3 * '23'); //cosole output 276-->number
//大部分只輸入數字字串，會被視為數字，但遇到『+』會被當成String串起來
let n = 2 - 3 - 4 + '5'; //2-3=-1, -1-4=-5, -5+"5"=-55
n = n - 1; //-55-1=-56
console.log(n); //n=-56
//five falsy value:0,'',undefined(沒有宣告值的變數),null,NaN
//除了上述以外，其餘的Boolean值都是True
console.log(Boolean({}));
let p;
console.log(Boolean(p));
//以下兩種條件式，"=="較為寬鬆，因此有時即使不完全相同，js會做強制轉型，結果仍為true
//但"==="比較嚴格，兩邊結果必須完全一樣才會為true，不接受"8"===8這種。
//與"==="對應的not equeal是"!=="，也是較為嚴格，會斷定"18"!=18
let age = 18;
if (age === '18') console.log('I am 18!');
if (age == '18') console.log('I am 18');
if (age !== '18') console.log('oh no');
//提示符號（String)，會回傳使用者輸入的值（以String表示）
//let test = prompt("just type:");
//console.log(typeof test);
//switch(strict comparison)
let day = 'Tuesday';
switch (day) {
  case 'Monday':
    console.log('Mon');
    break;
  //這裡有個新技巧，如果上一個case沒有break,也沒有敘述，那"Tuesday","Wednesday"
  //就通通會去執行"Wednesday"下面的敘述,實際效果類似or
  case 'Tuesday':
  case 'Wednesday':
    console.log('Tuesday,Wednesday');
    break;
  case 'Thursday':
  case 'Friday':
    console.log('Thursday,Friday');
    break;
}
const k = 455; //代表k無法再被變更
//另一種${}的操作方法
console.log(`hi,my name is andrew,I am ${20 + 6} years old!`);
let killer = 40;
//faster expression
killer >= 10
  ? console.log("you can't be serious")
  : console.log('it is acceptable!');
//another way
let safety = killer > 10 ? 'dangerous' : 'safe';
console.log(safety);
//expression= will return a value
//${}裡面可以放expression
console.log(`Taiwan is ${killer > 20 ? 'danger' : 'safe'} country!`);
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
console.log(`bill:${bill} tip:${tip} total:${total}`);
/* function expression(you can't call it before define)  */
//age2func is function name.....(this call anonymous function)
const age2func = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = age2func(1990); //call function
console.log(age2);
/* arrow function declaration */
const func_1 = birth => 2038 - birth;
const age3 = func_1(1002);
console.log(age3);
const yearuntilretire = (birthyear, firstname) => {
  let age = 2037 - birthyear;
  let retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};
console.log(yearuntilretire(1919, `John`));
/* Array */
let arr = new Array(1, 2, 3);
let friend = ['Tim', 'andrew', 'John'];
console.log(friend.length);
/* 對array declare const，仍然可以更改array的element，但不能更改array本身
ex:
const arr=[2,3,4];
arr[1]=11;//ok!
arr=['Tim','John'];//error
*/
let str = 'andrew';
let arr_1 = [1, 2, 3, 4, 5];
let arr1 = ['Tim', 'John', str, arr_1];
console.log(`arr1 length:${arr1.length}`);
length = arr1.push('end'); //it push item to the end of arr
//and push will return current array length
let new_length = arr1.unshift('John1'); //unshift will return array length too
//but unshift will put item to the begin of arr.
arr1.pop(); //it return pop item,and pop the item at the end of array
arr1.shift(); // 將arr往左移一位-->arr1[0]會被刪除
let arr2 = ['a', 'b', 'c'];
// arr1.indexOf('b') will return 1
arr2.push('23');
arr2.includes(23); //return false,因為在incloudes中，會將string,int
//視為不同的東西
arr2.includes('23'); //這個就會return true
// obejct  //
let object = {
  firstname: 'andrew',
  fakename: 'Tim',
  age: 2022 - 1995,
  friends: ['binla', 'den', 'siTa', 'la'],
  //you can declear the function inside the object
  func_new: function (birthyear) {
    return 2022 - birthyear;
  },
};
//下面三個會得到同樣結果
let Name = 'name';
console.log(object.firstname);
console.log(object['firstname']);
console.log(object['first' + Name]);
//let input = prompt("input object type:");
//object[input] = "change...";
//console.log(object[input]);
//object.friends.length-->朋友個數
//object.friends[1]--->第2個朋友名稱
console.log(object['func_new'](1995));
console.log(object.func_new(1991));
let object1 = {
  firstname: 'andrew',
  fakename: 'Tim',
  age: 1995,
  friends: ['binla', 'den', 'siTa', 'la'],
  //you can declear the function inside the object
  func_new: function () {
    this.age = 2022 - this.age;
    return this.age;
  },
};
//object1內部定義的function會直接使用this呼叫age,因此不需要引數即可return
//this.age可直接回傳object1內定義的age
//概念類似c++ OO,在class內呼叫private variable
console.log(object1.func_new());
//在call function時同時更改this.age的內容，其實就等同於更改object1.age
//因此之後可直接藉由object1.age得到目標值
console.log(object1.age);
let John1 = {
  full_name: 'Mark',
  mass: 78,
  height: 1.69,
  //another way //
  /* value:prompt('input something:')*/
  callBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
let Mark = {
  full_name: 'John',
  mass: 92,
  height: 1.95,
  callBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
// challenge 3 //
John1.callBMI();
Mark.callBMI();
if (Mark.BMI < John1.BMI) {
  console.log(
    `${John1.full_name}'s BMI(${John1.BMI}) is higher than ${Mark.full_name}'s (${Mark.BMI})`
  );
} else {
  console.log(
    `${Mark.full_name}'s BMI(${Mark.BMI}) is higher than ${John1.full_name}'s (${John1.BMI})`
  );
}
/*   loop  */
let i;
for (i = 1; i <= 10; i++) {
  console.log(`${i}🏆`);
}
console.log(typeof John1.height); //data type of height
// array 不須宣告大小即可直接使用
let arr3 = [];
for (i = 0; i < arr1.length; i++) {
  arr[i] = arr1[i];
  console.log(`${arr[i]}`);
}
Math.trunc(i); //如果i是小數，無條件捨去
/* challenge 4 */
bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tip = [];
let totals = [];
let calcTip = function (index) {
  tip.push(bill[index] * 0.2);
  totals.push(tip[index] + bill[index]);
};

let avg = function (arr) {
  let i,
    sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
for (i = 0; i < 10; i++) {
  calcTip(i);
  console.log(totals[i]);
}
console.log('average:\n ');
console.log(avg(totals), avg(tip));
// 取消註解：command + 『\』
// label  //
/*Bug
can wait 
fixed
important
To do*/
/*  ***    debugger    */
// study clearfully in google chrome console->source,it is vary much like gdb
//debugger; //這行等同於在console->source下中斷點
let printForecast = function (arr) {
  str = '';
  for (let i = 0; i < arr.length; i++) {
    str += '...' + String(arr[i]) + 'C ';
  }
  console.log(str);
};
let arr4 = [17, 21, 23];
printForecast(arr4);
//connect js and html
//use h1 or .class_name as like css to get the html value
console.log(document.querySelector('h1').textContent);
//modify html in js
document.querySelector('h1').textContent = 'JavaScript is important';
//get value from input
document.querySelector('.btn').addEventListener('click', function () {
  let input_number = document.querySelector('.input').value;
  console.log(input_number);
});
//we can modify background color by the following code
//要注意的是，這裡的background color是用『background』指定
//而非background-color,因此這邊也是用background
//否則一般情況，會用style.backgroundColor來更改
document.querySelector('body').style.background = '#603';
//  *** call elements with same class name ****
/*
let class_1=document.querySelectorAll('.class_name');
for(let i=0;i<class_1.length;i++){
  //this code will output every element with class name:class_name.
  //it works like array.
  console.log(class_1[i].textContent);
}
*/

/* 點擊後出現-->下面省略點擊的code ***/

/* in css
.hidden{
  display:none;//代表會隱藏
}
//in js
let dice=document.querySelector('.dice');
//注意，這裡即使是class也不需要.dice,單純傳遞字串
//remove hidden 之後 display:none就會失效，原本的內容就會被顯示出來
dice.classList.remove('hidden');
*/

/*   function+click  
//將要做的事寫進function

let open=function(){
  dice.classList.remove('hidden');//在class dice移除class hidden的設定
}
let close=function(){
  dice.classList.add('hidden');//在class dice加入class hidden的設定
}

//在這裡就可以直接使用，不需要寫一大串
button.addEventListener('click',close);
button.addEventListener('click',open);
*/
/*   key    */

// e可自由設定，也可以是s or g....
//e.key代表在鍵盤上按下的按鍵
//下面程式代表：當按下Escape，要做的事
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    //do something
  }
});

/*   change img */
//show img

//let rand = Math.trunc(Math.random() * 6) + 1; //1~6;
//document.querySelector('.img').classList.remove('hidden');

//change img source-->更改顯示的圖片
//document.querySelector('.dice').src = `img-${rand}`;

//classList.toggle--->需要再去查，用途：沒有就新增，有就刪除

//function scope->var,代表由var定義的變數只要在function內都可被存取，哪怕是從if
//中定義
//block scope->let,const,適用範圍僅限block,好比他在if中定義，就只能在if內被存取
//ex
let func = function () {
  if (1) {
    var a = 6;
    let b = 3;
    const c = 4;
  }
  console.log(a); //it can work.
  console.log(b, c); //it will return error.
};

//destruct //
let arr5 = [2, 3, 4];
//assign 2,3,4 to x,y,z
let [x, y, z] = arr5;
//only assign 2,4 to first,last-->skip the middle element
let [first, , last] = arr5;
console.log(x, y, z);
console.log(first, last);
//using destruct to swap value
[first, last] = [last, first];
console.log(first, last);
let arr6 = [2, 3, [4, 5]];
let [a, , [b, c]] = arr6;
//a=2,b=4,c=5;
console.log(a, b, c);
let s = {
  student_name: ['John', 'peter', 'Cindy'],
  id: [0, 1, 2],
  s_child: {
    name: 'andrew',
    year: 2022,
    job: 'sw',
  },
  //下面的year,month,day,time為預設值，沒有參數時就會以下面為準
  //否則以引入的參數為準
  func_new: function ({ year = 1911, month = 1, day = 0, time = 0 }) {
    console.log(year, month, day, time);
  },
  //this is new way define function in object
  fun1() {
    //do somthing
  },
};
//從s中抓取對應欄位的值
let { student_name, id } = s;
console.log(student_name, id);
//assign a new variable student to replace with student_name
let { menu = [], student_name: student = [] } = s;
//menu=[], student=s.student_name
console.log(menu, student);

//抓取s內的s_child,在抓取s_child裡面的name,year，同時將name,year assign給新的變數
//n1,y1
let {
  s_child: { name: n1, year: y1 },
} = s;
console.log(n1, y1);
//put object in function,it will print following info
s.func_new({
  year: 2022,
  month: 8,
  day: 3,
  time: 20,
});
//spread array
let arr7 = [1, 5, 8];
//...代表會將arr7的element一個一個複製到arr8內
//『...arr』同時也可以當作n個element傳入function
let arr8 = [...arr7];
console.log(arr8);
// copy object content
let object_new = { ...s };
//spread+rest

//a1=1,b1=2,the rest put in arr9,記住，spread arr一定要放在最後一個element
//否則js不會知道實際上要將哪些element放入arr9
let [a1, b1, ...arr9] = [1, 2, ...[3, 4]]; //ok
//let [a2,b2,...arr10,c2]=[1,2,...[3,4]]//error->3 & 4哪個放入arr10?那個放入c2?
//a2=s.student_name[0] b2=s.student_name[2],other=s.id(array)
let [a2, , b2, ...other] = [...s.student_name, ...s.id];
let add = function (...number) {
  console.log(number); //number is an array
};
add(2, 3);
add(2, 3, 4, 5, 6, 7, 8); //add will automaticly put this number into array number
let x2 = [23, 5, 6];
add(...x2); //in here x=number;
//return null,因為是or所以在看到true以前會一直看下去，但最後看到的是null
//所以就return null
console.log(undefined || null);
//return hello,因為一開始就看到true了，就直接return
console.log('hello' || 23);
console.log('hi' && 23); //return 23,因為and一定會看到最後
console.log(null && 23); //return null，因為看到null就沒必要再往下看了
//nullish:只將null & undefined認為false,其餘都是true(0也是)
//除了false的定義以外其餘和or幾乎一樣
let a3 = 0;
//?? purpose:if variable is not assign,assign new value otherwise,
//keep the original value.
let test = a3 ?? 10; //a3=0,so return 0
let a4;
test = a4 ?? 10; //a4 undefined,so return 10;
// if not define,give a value to it
let food;
food ||= 10; //food=food || 10;-->if not define,food=10;

food ??= 10; //如果定義food=0,在上面會被認為是false,因此需要用nullish解決
let a5 = 4,
  b5 = 8;
a5 < b5 && console.log(a5); //前者成立後者就印，原因是，後者會是true,所以當前者成立後者就印
//for
let arr10 = [0, 1, 4, 5, 6];
//i=element inside arr10
for (i of arr10) {
  console.log(i);
}
//entry-->let each element in array become another array
//i is an array
for (i of arr10.entries()) {
  console.log(i);
}
//index,content是將上面的i拆成兩個element變數
for (let [index, content] of arr10.entries()) {
  console.log(`${index} ${content}`);
}
//another to write object
let weekday = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
let openhour = {
  [weekday[0]]: {
    open: 7,
    close: 19,
  },
  [weekday[1]]: {
    open: 10,
    close: 22,
  },
  [weekday[2]]: {
    open: 12,
    close: 3,
  },
};
//prevent error->only when openhour.Thur exist ".open" will be executed
//or it return undefined.(這裡不存在也同樣只包含null & undefined)
console.log(openhour.Thur?.open);
//another example
for (let day of weekday) {
  let open = openhour[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open} `);
}
//property name
//property = array-->store each property name
let property = Object.keys(openhour); //return object內的每個property name
console.log(property);
// property value
let value = Object.values(openhour); //將object內的每個property的內容回傳ex:open,close
//Entire object
let entry = Object.entries(openhour);
//key=property name;open,close-->content inside property
for (let [key, { open, close }] of entry) {
  console.log(key, open, close);
}
//set
//不會重複->會自動刪除重複的內容
let set = new Set(['apple', 'pig', 'andrew', 'apple']);
console.log(set.size); //size=length in array
console.log(set.has('andrew')); //true/false
//other usage:add,delte,clear
let staff = [
  'Waiter',
  'engineer',
  'softe_engineer',
  'waiter',
  'Waiter',
  'hardwere engineer',
];
//array->set
let set_1 = new Set(staff);
//array->set(no duplicate)->array,so array is unique.
let staff_unique = [...new Set(staff)];
console.log(staff.length, staff_unique.length);

//Map
let map = new Map(),
  map1;
map.set('key', 'corresponding value');
map1 = map.get('key'); //return a map too.
console.log(map1);
let bool = map.has('key'); //only can search by key....true/false
map.delete('key'); //delete
console.log(map);
map.size; //size
map.set([1, 2], 'init'); //can't retrive by key=[1,2]
arr = [1, 2];
map.set(arr, 'init'); //this will work
console.log(map.set(arr));
//more example
let title = map.set(document.querySelector('h1'), 'Heading');
//declear by array
let question = new Map([
  ['question', 'how to get a job'],
  [1, 'more friends'],
  [2, 'more ability'],
  [3, 'you have good father'],
  ['ans', 'who knows'],
]);
//covert object to map
let hour = new Map(Object.entries(openhour)); //因為entry格式與map一樣，都是兩個（index,content)
//conver map to array
arr = [...hour]; //return all object
arr1 = [...hour.keys()]; //return each key
arr2 = [...hour.values()]; //return each  value(content)
//String
let str1 = 'I will become best software engineer';
let index = str1.indexOf('s'); //the first "s" index
index = str1.lastIndexOf('r'); //the last "r" index
let substr = str1.slice(7); //from "become"(index 7) to the end
str1.slice(4, 7); //extract str1 index 4~6
console.log(str1.slice(-9)); //從最後面開始算，抓取9個字元
console.log(str1.slice(1, -3)); //一樣從index 1開始，但最後面3個字元不會被抓取
str1.toLowerCase(); //小寫
str1.toUpperCase(); //大寫
str1[0].toUpperCase() + str1.slice(1); //首字母大寫，其餘維持小寫
str1.trim(); //將頭尾非字串本身字元刪除（ex:換行符號,空格．．．）
str1 = str1.replace('engineer', ''); //replace
str1.startsWith('I'); //start with "I"-->true/false
str1.includes('become'); //include "bceome"-->true/false
str1.endsWith('engineer'); //end with "engineer"-->true/false
str1.split(' '); //以空格切格字串，會回傳array
console.log(str1);
let new_name = ['Mr.', 'andrew', 'Huang'].join(' '); //在每個字串中間加入空格
console.log(new_name);
str1 = str1.trim();
//每個字串首字母為大寫
let str_1 = str1.split(' ');
arr1 = [];
for (let n of str_1) {
  //one way
  //arr1.push(n.replace(n[0], n[0].toUpperCase()));
  //another way
  arr1.push(n[0].toUpperCase() + n.slice(1));
}
console.log(arr1.join('-'));
console.log(str1.padEnd(30, ' ').length);
console.log(str1.length);
str1.padStart(25, ' '); //如果長度不足25,在前面填充空格，直到長度=25
str1.padEnd(25, '+'); //同上，不同的是從後面填充『＋』
//應用-->將字串最後面4個字元替換成"+"
str_1 = str1.slice(0, -4); //from 0~length-5
str_1 = str_1.padEnd(str1.length, '+'); //fill + in the end(4 char)
console.log(str_1);
console.log(`${'🚝'.repeat(10)}`); //string repeat 10 times
//function 可給予預設值，object可以宣告變數卻不給初始值
test = function (
  name = 'andrew',
  number = 1,
  value = name == 'andrew' ? 100000 : -1
) {
  let object = {
    //declear object without init
    name,
    number,
    value,
  };
  console.log(value);
};
//function return another function
let greet = function (greeting) {
  return function (name) {
    return console.log(`${greeting} ${name}`);
  };
};
let func_new = greet('Hey');
func_new('Andrew');
func_new('Tim');
//use arrow
greet = greeting => name => console.log(`${greeting} ${name}`);
func_new = greet('hey');
func_new('Andrew');
func_new('John');
object = {
  price: '2.5M',
  job: 'softwere engineer',
  experience: '5 years',
  person_info(name = 'Andrew', hire = 'false') {
    console.log(`${name} is hire?${hire}`);
    console.log(`related info:
salary:${this.price}
job:${this.job}
experience:${this.experience}
    `);
  },
};
let Tim = {
  price: '1.8M',
  job: 'hardwere engineer',
  experience: 'less than 1 year',
};
John = {
  price: '3.4M',
  job: 'softwere engineer',
  experience: '5 years',
};
//function.call可以將指定的object引入，因此當function使用this的時候
//就會有目標對象可使用了，如下。
let info = object.person_info;
info.call(object, 'andrew', 'True');
arr = ['John', 'True'];
info.call(John, ...arr);
//bind
//直接綁定this的相關資訊，不用使用call去指派this
let John_info = info.bind(John);
John_info('John', 'True');
let test_func = (rate, value) => value + value * rate;
//不去設定this-->null,0.23-->rate
//下面這行等同於做：value+value*0.23;
let new_func = test_func.bind(null, 0.23);
//new_func=(value)=>value+value*0.23;
console.log(new_func(50));
//function only access once
//由scope包起來，外部無法存取
(function () {
  console.log('Only access once');
})();
(() => console.log('Access once'))();
//closure
//closure會記住上次的資訊，即使每次都有會從新宣告
//一般來說，優先度：closure>parent，因此當你呼叫function
//首先他會去看clousre（存上次資訊）有沒有東西，沒有才會從parent找
let secure_booking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
let book = secure_booking();
//因此呼叫三次，輸出的passenger會是：1,2,3
//即使每次parent都重新宣告passenger=0,還是一樣，因為closure優先度更高
book();
book();
book();
//  ＊＊＊＊＊＊＊＊ array ＊＊＊＊＊＊＊＊＊＊
arr.slice(2); //from index 2~end
arr.slice(2, 4); //index 2~3(not include 4)
arr.slice(-1); //the last 1
arr.slice(-2); //最後兩個
arr.slice(1, -2); //排除最後兩個
//splice vs slice
//差別在於slice會不影響到原本的array而是return 1 new array
//splice會直接從原先的array抓資料出來（操作細節可能有些微差異，但大部分一樣）

// reverse
arr.reverse(); //return array and also change original array
//concat(串接)
arr.concat(arr2); //return an array not change original array
//you can use this too.
arr = [...arr, ...arr2];
//three way to get value from array
//one
arr[arr.length - 1];
//two
arr.slice(-1);
//three--->at同樣可用於字串，用法相同
arr.at(-1); //the last element of array
arr.at(-2); //倒數第二個．．．與slice不同，slice會抓最後兩個
arr.at(0); //the first element of array
//for each
arr = [1, 3, 45, 6, 5, 3, 5, 42];
//foreach不見得要有3個參數，可以使用1 or 2個，但順序不變
//一定是，array內容，array index,array本身
//此外，foreach是無法break or continue
//foreach類似宣告個function，然後自動把每個值套進去
arr.forEach(function (content, i, arr) {
  if (content % 2 == 0) {
    console.log(i, content);
  } else {
    console.log(`oh no ${i} ${content}`);
  }
});
/* Hint: when using bind or this,using arrow function too,because normal
function will change this value somehow....(like undefined) */
//foreach use in map & set
//for map=>key=index,value=content
//for set,because there is no index & content
//所以，對於set來說index & content都會輸出一樣的內容->content
set = new Set(['a', '5', 'df', '12', 'Y']);
set.forEach(function (value, key, set) {
  console.log(`${value} ${key}`); //value=key--->both is set element
});
//Array-map->以function的形式運作
//會自動執行類似foreach的動作，掃過arr每個element,return as array
arr = [1, 5, 8, 5, 44, 3435, 43, 413];
//noraml function way
/*arr1 = arr.map(function (content, index) {
  console.log(content * 3.14, index);
  return content * 3.14;
});*/
//arrow way
arr1 = arr.map(content => content * 3.14);
console.log(arr1);
//array filter
//arrow function=>elem是丟進function的參數，這裡會自動抓取arr裡面
//的每個element,當elem%2==1為true,才會將資料回傳，因此
//array positive只會存基數的內容
arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
let negative = arr.filter(elem => elem < 0);
console.log(negative);
//array reduce
//sum
//acc是累加總和,回傳值會被加入acc=>(acc=acc+cur),0代表acc初始值
let reduce = arr.reduce((acc, cur) => acc + cur, 0);
console.log(reduce);

//challenge 2
test = [5, 2, 4, 1, 15, 8, 3];
let test_1 = [16, 6, 10, 5, 6, 1, 4];
// acc=acc+cur/arr.length==>average(將每個element加起來，變成整體平均)
/*
let human_age = dog_age =>
  dog_age
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
*/
//array-find
//find return a element(int or float...)
//find only return the "first one element" which meet the requirement.
let first_target = test.find(mov => mov > 0);
console.log(first_target);
console.log(test);

let charCount = function (str) {
  //str是否為a- z or 0-9--->正則表示
  return /[a-z0-9]/.test(str);
};
//findindex-->類似find,但是會return index
// some vs inclouds
//some會指定一個明確的條件，存在符合的element就return true
//incloude則必須存在某個element，才return true
//incloude相當於在some設立相等的條件
arr.includes(450); //true or false
arr.some(elem => elem > 300); //true or false
//every elemet meet the condition,then return true
arr.every(elem => elem > 0);
//anther way to implement some/every
//remember:this function only accept one argument
let using_func = elem => elem * 3 + 8 > 15;
arr.every(using_func);
arr.some(using_func);
// flat
//會直接將arr內部的element抓出，最深可以抓到第二層
arr = [1, 2, 3, 4, 5, [6]]; //第二層的例子
arr.flat();
//最深可以抓取到第三層的資料
arr = [1, 2, 3, [4], [5, 6, [7]]]; //第三層的例子
arr.flat(2); //什麼都不打預設是1,所以能抓到第二層的資料
console.log(arr.flat(2));
//map+flat
//flatMap中，flat只能深入2層（預設）無法更深入
arr.flatMap(elem => elem * 9); //先將each element*9 return new array,再抓出每個element.
//sort
/*
return<0,A,B不變
return>0 A,B switch-->swap(a,b)
return 0,A,B不變
*/
//他在做a-b,所以負數代表a<b,反之，a>b
//ascending order
arr.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
//descending order
arr.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
//簡化
//ascending order(預設的做法就是遞增)
arr.sort((a, b) => a - b); //a>b就會return positive,反之negative
//descending order
arr.sort((a, b) => b - a);
//init Array
arr = new Array(7); //assign new space witout value
arr1 = new Array(1, 2, 34, 5, 3, 53, 4, 3);
console.log(arr);
//fill   fill(element,start_index,end_index);
arr.fill(1); //fill up all space wit 1
arr.fill(1, 3); //fill 1 from index 3 to the end
arr.fill(2, 2, 5); //fill 2 from index 2 to index 4(not incloude index 5)
// array-from
arr2 = Array.from({ length: 18 }, () => 1); //init to 1 and set size
arr2 = Array.from({ length: 8 }, (elem, index) => index + 1); //後半段類似map,可使用element & index
arr2 = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1); //後半段類似map,可使用element & index
// document.querySelectorAll return an array
/* example:
Array.from(document.querySelectoryAll('.class_name')
,str=>Number(str.textContent));
*/
/* reduce(advance)*/
/*
example:
const{deposits,withdrawals}=accounts.flatMap.reduce((sum,cur)=>{
  // one way to implement
  //這裡是對物件做計算，因此需要手動return,所以算完的結果要自己加回去
  cur>0?(sum.deposits+=cur):(sum.withdrawals+=cur);
  //another way to implement
  sum[cur>0?'deposits':'withdrawals']+=cur;
  //由於目標是物件，因此reduce沒辦法幫忙assign
  //ex:sum=sum.deposits+cur(這是reduce如果要做的做法，但語法是錯的
  只適用於數字，因此這裡return & assign都要自己來）
  return sum;
  //inital:這裡是初始化物件，所以是物件的形式，相當於宣告一個物件
},{deposits:0,withdrawals:0});*/

/* challenge: transform 'this is a nice title' to
'This Is a Nice Title'  */
const converTitleCase = function (title) {
  let capital = str => str[0].toUpperCase() + str.slice(1);
  let exception = [
    'a',
    'with',
    'is',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
  ];
  let ans = title
    .split(' ')
    .map(elem => (exception.includes(elem) ? elem : capital(elem)));
  return capital(ans.join(' ')); //讓第一個詞的首字母大寫
};
console.log(converTitleCase('and here is another title with an example'));

// +與Number具有一樣功能
console.log(+'23' == Number('23'));
//convert to int
console.log(Number.parseInt('308px', 10)); //10 base,it will skip px,just return 30

//開根號
Math.sqrt(100);
console.log(9 ** (1 / 2));
//to fiexed
console.log((2.3333).toFixed(1)); /* 回傳小數後1位 */
console.log((2.8).toFixed(0)); /* 回傳小數後0位 */
/* big integer */
//下面這種表示法有個限制：底線不能放在小數點前後，也不能放在第一個字元之前or最後一個字元之後
let bigint = 34333_0000_0000_0000; // js會自動忽略底線，為了可讀性，可以用左側方式表示大數
console.log(bigint);
console.log(4888888888888888888n); //數字後面＋n代表轉換成bigint,與bigint(number)用途一樣
test = 344444444444444n * 2232348888888888888888444444444444n;
console.log(test >= 15); //ok-->因為>=會強制轉型，將15轉成bigint
console.log(20n === 20); //false,因為===不會做強制轉型，不同data type之間不能做比較＆計算,所以直接判定為不同的東西-->結果會出錯
/* Math.sqrt(test); //error,不能這麼做  */
console.log(12n / 4n); //return 3n
//Date
day = new Date(); //current day/time
console.log(new Date(2034, 5, 1, 23, 10, 5)); //year,moth,day,hour,min,second
console.log(new Date('December 23,2019')); //Date可以抓取部分字串直接幫你判斷出當下時間日期資訊
console.log(day.getFullYear()); //year
console.log(day.getMonth()); //month(0~11)
console.log(day.getDate()); //day of month
console.log(day.getDay()); //day of week(0~6)
console.log(day.getHours()); //hour
console.log(day.getMinutes()); //min
console.log(day.getSeconds()); //sec
console.log(day.getTime()); //經過的毫秒數
console.log(Date.now()); //當下時間經過的毫秒數
console.log(new Date(Date.now())); //可利用毫秒數直接抓出當下時間
//Date to String
//toISOString();

//  *****  Date format  ********
//experimenting api

//current Date & time
let now = new Date();
//format
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long', //long:所有內容都會印出
};
//將now,以navigator.language的方式呈現，呈現所涵蓋的內容定義在options
document.querySelector('h2').textContent = new Intl.DateTimeFormat(
  //當前瀏覽器所屬的國家(英國＆法國．．．)
  navigator.language,
  options //這行可有可無
).format(now);
document.querySelector('h2').classList.add('color');
//timer

/* 前面的參數給多少個（obj1,obj2)後面就要有對應的字串（'andrew','Tim')數量，3000代表的是等待時間（毫秒）
，時間一到，js會自動呼叫setTimeout這個function */
arr = ['andrew', 'Tim'];
let pizza = setTimeout(
  (obj1, obj2) => console.log(`Here is your pizza with ${obj1} and ${obj2} 🍕`),
  3000,
  'andrew', //這裡也可以用...arr 來表示
  'Tim'
);
clearTimeout(pizza); //disable Timeout因此SetTimeout function不會執行
//SetTimeout

//每一秒執行一次，模擬時鐘
setInterval(function () {
  let now = new Date();
  console.log(now);
}, 1000 * 60 * 60);
//可將function套入setInterval,指定function就會反覆執行

/*
setInterval(function_name,1000);
*/
// document.head會印出整個head的html code，body,h1,h2....也是

//專門用於button element,會儲存button相關資訊，"button"不是class name
//且getElementsByTagName會自動更新資訊，querySelectorAll不會
document.getElementsByTagName('button');
//修改＆新增
let message = document.createElement('div');
message.classList.add('cookie');
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn">Got it!</button>`;
let head = document.querySelector('body');
head.style.color = '#fff';
head.style.fontSize = '26px';
message.style.margin = '80px';
head.prepend(message); //將message放到head的上方
head.append(message.cloneNode(true)); //將message放到head的下方，與head.append(message)同樣功用
//CSS 中的before,after
/*
head.before(message);
head.after(message);*/

/* set property */
//更改某個class property
//document.documentElement.style.setProperty('class_name','some property(ex:color...)');

// ***   attribute  ***//
//可透過下面方式，直接存取到class attribute
let logo = document.querySelector('body');
//logo.alt = 'alt';
//logo.src = 'src';
//logo.className;

//Non-standart(自定義的attribute)

//logo.designer; //error
//logo.getAttribute('designer'); //ok
/* Date attribute
以下作法的條件:
1. html中，要有一個property name叫做data-?,?可以是任何字元，但前面必須是data-
2.假設定義的property name叫做：data-designer,那存取方式就會像下面。
如果 data-designer="John"
那這幾種方式就能夠抓取到John
1. logo.dataset.designer; //collect designer=>attribute info store into dataset
2. const {designer}=logo.dataset;//類似object抓取方式
此外，如果在html中，property name叫做data-software-Engineer='John';
那存取時，可直接：
1. logo.dataset.softwareEngineeer;//normal way
2. const {softewareEngineer}=logo.dataset;//object way
簡而言之，data後面的『-』可直接省略
//classes
/*
logo.classList.add('', '');
logo.classList.remove('');
logo.classList.toggle('');
logo.classList.contains('');
*/
//Don't use=>don't overwrite class name

//logo.className = 'jonas';

//scrolling

document.documentElement.clientHeight; //可看到的長
document.documentElement.clientWidth; //可看到的寬
let coords = document.querySelector('body').getBoundingClientRect(); //獲取body的座標相關資訊（x,y,top,bottom...)

//  ** getBoundingClientRect  **
/* 
coords.height=>元素的height+padding
coords.width=>元素的width+padding

x=left->from element left to the end(viewport left end)
y=top->from element top to the viewport top
bottom->from element bottom to the viewport top
right->from element right side to the viewport left end
因此viewport的left/right/top/bottom end會根據視窗大小而有所變動，切記！

*/
//window.scrollTo(x_coord,y_coord); scroll to (x_coord,y_coord)

/*
window.scrollTo({
    left: coord.left + window.pageXOffset, //window.pageXOffset=viewport left~頁面最左端的距離（使用者看不到的長度）
    top: coord.top + window.pageYOffset, //window.pageYOffset=viewport top~頁面最上面的距離（使用者看不到的部分長度）
    behavior: 'smooth',//js define smooth speed
  });
因此上面的方式可以直接讓頁面跳轉到指定的絕對位置，因為
將『使用者看到的部分』＋『看不到的部分』=實際的座標

//modern way
logo.scrollIntoView({behavior:'smooth'});//the rest js will auto calculate...

btn.addEventListener('click',function(e){
  //in here--->e.target=btn
});
*/

/* add and remove event listener */
let h1 = document.querySelector('body');
let alert_ = function (e) {
  //alert('addEvent Listener');
  h1.removeEventListener('mouseenter', alert_); //remove listener
};
//mouseenter-->when hover,altert!
h1.addEventListener('mouseenter', alert_); //add listener

// Event
/*
e.target->當前事件（比如說某個button)
e.currentTarget->事件監聽者（也就是this)
e.stopPropagation();//停止事件
*/
//the last argument=true-->capture(往下傳)，false-->bubble(往回傳)
document.querySelector('h1').addEventListener('click', function (e) {}, true);
h1.children; //list all h1 child element
h1.firstElementChild; //first child
h1.lastElementChild; //last child
h1.parentElement; //parent
h1.closest('.header'); //h1的parent中，最近的class header(header is class name)
h1.closest('h1'); //h1的parent中，最近的h1......就是h1自己，沒別人了

//sibling 兄弟姐妹
h1.previousSibling; //上一個兄弟
h1.nextSibling; //下一個兄弟
h1.parentElement.children; //父親的小孩-->所有兄弟

//deal with other sibling
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    //not myself-->other sibling
    //do something
  }
});

//當條件（condition)滿足，會呼叫這個function
const obsCallback = function (entries, observer) {
  //observer->second argument=>可有可無，需要時再指定
  entries.forEach(entry => {
    entry.isIntersecting; //可用於判斷當前狀態是否符合條件
    //符合的話Intersecting=true,反之=false
  });
};
//root,threshold這兩個變數名稱是固定的，不能更改
const condition = {
  //when root=null && threshold==0 || threshold==0.2就呼叫function
  root: null,
  threshold: [0, 0.2], //當完全看不見element & 當elemnt超過頁面的10%會做一些事
};
//using IntersectionObserver implement sticky class
//sticky class=>往下滑到某個地方，Nav bar(最上一列)會附在頁面最上方呈現半透明狀態
const observer = new IntersectionObserver(obsCallback, condition);
//observer element logo
observer.observe(logo);
observer.unobserve(logo); //stop obeserve

//advance class

//img[data-src]-->可以在img宣告一個data-src，在透過左側方是取得img的data-src值

//下面這種作法是透過class:dots__dot去存取該class內定義的data-slide property
//由於該class有多個data-slide value，因此後面會給定要存取的data-slide value,
//這樣js才知道要抓取哪個element
//document.querySelector(.dots__dot[data-slide="${slide}"]);

//protect object element from modify--->類似const
//雖然是這樣，但也只能保護第一層，programmer還是能夠修改第二層（含）以下的內容
Object.freeze();

/*  principle
1. don't change any outside variable in function(use pure function-no side effect)
2. not change original(ex:create a new array instead of modify origin array)
*/
const obj = {
  time: {
    John: '12:00',
    Cindy: '1300',
    Andrew: '01-18',
  },
  day: '4',
  status: 'good',
};
//destruct time from object obj,so time=obj['time]
//其餘也是一樣
let { time } = obj;
console.log(time);
//modify time--->the only one way
time = {
  John: time.John,
  Cindy: time.Cindy,
  Andrew: '0000',
};
