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
