"use strict"; //較安全的模式，會將某些錯誤顯示出來．．．strict mode
let fake_name = "Tim";
let real_name = "andrew";
//使用字串的一種寫法，較為方便
//叫做 template literal，使用``取代"" or ''
const andrew = `I am ${real_name} not ${fake_name}`;
// in js, 換行符號是：\n\
console.log("hello world \n\
if else\n\
function");
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
console.log(Number("333"));
//Number to String-->String(Number)
console.log(String(3));
//console will automatic change datatype,according to its content.
console.log("I am " + 32 + " years old"); //cosole output string
//只有『+』會將數字以字串形式串起來，其餘會以數字形式作運算
console.log("4" * 3 * "23"); //cosole output 276-->number
//大部分只輸入數字字串，會被視為數字，但遇到『+』會被當成String串起來
let n = 2 - 3 - 4 + "5"; //2-3=-1, -1-4=-5, -5+"5"=-55
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
if (age === "18") console.log("I am 18!");
if (age == "18") console.log("I am 18");
if (age !== "18") console.log("oh no");
//提示符號（String)，會回傳使用者輸入的值（以String表示）
//let test = prompt("just type:");
//console.log(typeof test);
//switch(strict comparison)
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Mon");
    break;
  //這裡有個新技巧，如果上一個case沒有break,也沒有敘述，那"Tuesday","Wednesday"
  //就通通會去執行"Wednesday"下面的敘述,實際效果類似or
  case "Tuesday":
  case "Wednesday":
    console.log("Tuesday,Wednesday");
    break;
  case "Thursday":
  case "Friday":
    console.log("Thursday,Friday");
    break;
}
const k = 455; //代表k無法再被變更
//另一種${}的操作方法
console.log(`hi,my name is andrew,I am ${20 + 6} years old!`);
let killer = 40;
//faster expression
killer >= 10
  ? console.log("you can't be serious")
  : console.log("it is acceptable!");
//another way
let safety = killer > 10 ? "dangerous" : "safe";
console.log(safety);
//expression= will return a value
//${}裡面可以放expression
console.log(`Taiwan is ${killer > 20 ? "danger" : "safe"} country!`);
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
const func = (birth) => 2038 - birth;
const age3 = func(1002);
console.log(age3);
const yearuntilretire = (birthyear, firstname) => {
  let age = 2037 - birthyear;
  let retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};
console.log(yearuntilretire(1919, `John`));
/* Array */
let arr = new Array(1, 2, 3);
let friend = ["Tim", "andrew", "John"];
console.log(friend.length);
/* 對array declare const，仍然可以更改array的element，但不能更改array本身
ex:
const arr=[2,3,4];
arr[1]=11;//ok!
arr=['Tim','John'];//error
*/
let str = "andrew";
let arr_1 = [1, 2, 3, 4, 5];
let arr1 = ["Tim", "John", str, arr_1];
console.log(`arr1 length:${arr1.length}`);
length = arr1.push("end"); //it push item to the end of arr
//and push will return current array length
let new_length = arr1.unshift("John1"); //unshift will return array length too
//but unshift will put item to the begin of arr.
arr1.pop(); //it return pop item,and pop the item at the end of array
arr1.shift(); // 將arr往左移一位-->arr1[0]會被刪除
let arr2 = ["a", "b", "c"];
// arr1.indexOf('b') will return 1
arr2.push("23");
arr2.includes(23); //return false,因為在incloudes中，會將string,int
//視為不同的東西
arr2.includes("23"); //這個就會return true
// obejct  //
let object = {
  firstname: "andrew",
  fakename: "Tim",
  age: 2022 - 1995,
  friends: ["binla", "den", "siTa", "la"],
};
//下面三個會得到同樣結果
let Name = "name";
console.log(object.firstname);
console.log(object["firstname"]);
console.log(object["first" + Name]);
//let input = prompt("input object type:");
//object[input] = "change...";
//console.log(object[input]);
//object.friends.length-->朋友個數
//object.friends[1]--->第2個朋友名稱
console.log(object.firstname, object.friends.length, object.friends[1]);
