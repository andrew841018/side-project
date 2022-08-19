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
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function (country) {
    const [data] = JSON.parse(this.responseText);
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
    console.log(data);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('India');
getCountryData('Taiwan');
getCountryData('China');
