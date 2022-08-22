'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//some change //
/*
 URL change for All api
if API URL is https://restcountries.eu/rest/v2/ 
you need to know that need to change to https://restcountries.eu/v2/
*/

const renderCountry = function (data) {
  const html = `<article class="country">
    <img class="country__img" src="${data.flags['png']}" />
    <div class="country__data">
        <h3 class="country__name">${data.name['common']}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages['zho']}</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[String(Object.keys(data.currencies)[0])]['symbol']
        }</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
//old way
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function (country) {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
  });
};
getCountryData('India');
*/

//mordern way

const getJSON = function (url, errorMsg = 'Something went wrong') {
  //fetch return an promise
  //return everything we fetch
  return fetch(url).then(response => {
    //response.ok=true=>ok,false=>error
    //一但進入條件是，出建立一個error message,然後直接結束這個function,接著就會
    //被catch 抓到
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    //'then' always return an promise no matter we return or not
    .then(function (data) {
      //data[0] is body,so we put into renderCountry
      return renderCountry(data[0]);
    })
    //as same as jave try & catch=>catch error message
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      //由於catch也是return promise所以後面可以接finally
      //finally不論發生什麼都會執行
      countriesContainer.style.opacity = 1;
    });
};
//getCountryData('India');

console.log('Test start'); //sync
setTimeout(() => console.log('0 sec timer'), 0); //call back queue
//resolve代表回傳的肯定是true,不會有error出現
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //micro queue
console.log('Test end'); //sync
//execute order----sync=>micro queue=>call back queue
//由於micro queue(也就是Promise)會比call back queue優先，因此雖然setTimeout設為0
//但只要給予micro queue更重的工作，就會因此拖延到setTimeout的時間，因此其實在js
//無法勝任精準度很高的工作（因為不一定會在設定好的時間執行）

//這裡的resolve,reject不是隨機的變數，是兩個現存的function
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lotter draw is happing...🇹🇼`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      //等同於用Promise呼叫resolve
      resolve('You win 💰');
    } else {
      //reject是Promise的function，呼叫了一定會回傳Error
      reject(new Error('You lose you money 🔪'));
    }
  }, 200);
});
//如果出現error,這邊的catch就會抓出來
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//create timer
const wait = function (seconds) {
  //timer won't fail so only resolve
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//wait 2 seconds,then print and wait 1 seconds and print

/*
wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 seconds`));
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //get current location,success->resolve,fail->reject
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
//get location and print
getPosition().then(pos => console.log(pos));

//await vs promise
//promise要用then去抓資料，await不需要，可以直接回傳值(no call back function)
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    //with await we can get value from fetch without 'then'
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting country');
    //with await we can get value from resGeo.json without 'then'
    const dataGeo = await resGeo.json();
    return `You are in ${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}💥`);
  }
};
//using async way
(async function () {
  try {
    let city = await whereAmI();
    console.log(`${city}`);
  } catch (err) {
    console.error(err.message);
  }
  console.log('Finish');
})(); //<---remember this...it will call function
//async always return promise
/* normally await is insdie the async---like this:
    const func=async function(){
        let test=await hello();
    }
*/
const get3Countries = async function (c1, c2, c3) {
  try {
    //when we using Promise.all it run parallel-->同時執行
    //and in Promise.all one element reject it return error
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    //d->each JSON  object,d[0]->JSON
    //data.map(d => d[0].capital).forEach(k => console.log(k));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('Taiwan', 'China', 'Japan');
//Promise race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/Japan`),
    getJSON(`https://restcountries.com/v3.1/name/Taiwan`),
    getJSON(`https://restcountries.com/v3.1/name/China`),
  ]);
  //every element in res will not execute at same time
  //so who print depents on who is fastest element
  console.log(res[0].capital);
})();
//Set Timeout
//when time is out -->reject
const timeout = function (sec) {
  return new Promise(function (reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
//when first arrive?if timeout first,then return error,otherwise,print
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/Taiwan`),
  timeout(1),
])
  .then(res => console.log(res[0].capital))
  .catch(err => console.error(err));
//Promise.any ignore reject only return resolve
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('another suceess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
//async can just use any function not by 'then'

//challenge 2
let global_img;
const imgclass = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    //set src doesn't need .style ,because it is not style.
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgclass.append(img);
      resolve(img); //success
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
  global_img = img;
};
//add img_1 then wait 2 sec then disappear
// then add img_2 then wait 2 sec then disappear
//challenge 3
const loadNPause = async function () {
  try {
    //some example of using await & async just take a look...
    await createImage('img/img-1.jpg');
    await wait(2);
    global_img.style.display = 'none';
    await createImage('img/img-2.jpg');
    await wait(2);
    global_img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img_elem => await createImage(img_elem));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img_elem => img_elem.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
//loadNPause();
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
