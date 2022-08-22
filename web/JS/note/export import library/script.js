/* when we using module,'use strict' always by default
using module means,in html we write this:
<script type="module"></script>
then we using module
*/
//importing module
import { total as T, tq, addToCart } from './shoppingChart.js';
console.log('import');
console.log(tq);
console.log(T);
addToCart('airplane'.charAt(0).toUpperCase() + 'airplane'.slice(1), 100000);
import * as shopping from './shoppingChart.js'; //* means everything
console.log(shopping.total, shopping.tq);

//dirty is new name for import function so no need to {}
//the previous like total,addToChart has been decleared so can use {}
import dirty, { cart } from './shoppingChart.js'; //import default function
dirty('holy shit', ' god damn');
//when we call addToCart,it will modify cart,雖然cart不是在這個js所定義的
//但仍舊會被更改到，因為在另一個js中，cart有被export,而在這個js中，cart有被import
//因此，可以在這個js直接更改另一個js的cart
addToCart('car', 1000);
addToCart('pig', 30);
console.log(cart);
const getLasrtPost = async function () {
  //in module we don't need to put await inside the async
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  //the following code do this:
  //title=data.at(-1).title and return
  //text=data.at(-1).body and return
  return { title: data.at(-1).title, text: data.at(-1).body };
};
let lastPost = getLasrtPost();
console.log(lastPost); //it is not object but Promise
/*
async function會在背景作業，由於抓資料的部分都是以await定義，因此一定會等到有資料才會回傳
但lastPost在要資料的時候，getLastPost()還沒有產生出資料，這時候lastPost就會拿到一個
padding Promise(因為getLastPost()是async function)。
*/
const lastPost2 = await getLasrtPost();
//此時由於lastPost2所抓取的是await function,因此會等到任務都做完才asign給lastPost2
//所以下面lastPost2會拿到完整的資料，由於是await所以類型是object,而非Promise
console.log(lastPost2);
//closure
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 2350;
  const totalQuantity = 12;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} ${shoppingCost}`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
//call function inside the closure
//evne if ShoppingCart2 not return shoppingCost
//but when we call addToCart console.log still can print shoppingCost
ShoppingCart2.addToCart('apple', 4);
//only can call return value or function
console.log(ShoppingCart2.totalPrice);
