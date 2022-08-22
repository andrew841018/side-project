/* 
js在使用圖片時，由於parcel的關係，會根據原圖自動生成另一個圖檔提供js使用
,而非原本我們提供的，這裡就是去抓取實際使用圖檔的路徑
*/
//special solution by Angelica(not jonas version)
//combine of jonas version
//anyway the format should be "http://localhost:XXXX(fill yours)/icons.XXXX(fill yours).svg"
import icon from '../img/icons.svg';
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);

const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
const showRecipe = async function () {
  try {
    renderSpinner(recipeContainer);
    //(1)loading recipe
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();
    if (!res.ok) {
      //data.message->error message
      //res.status->error code number
      throw new Error(`${data.message}  ${res.status}`);
    }
    console.log(data);
    //destruct data.data object,get recipt property direct assign to recipt
    let { recipe } = data.data;
    //change object property name(ex:image_url->image...)
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    //(2) Rendering recipe
    const markup = `
    <figure class="recipe__fig">
      <img src=${recipe.image} alt=${recipe.title} class="recipe__img" />
      <h1 class="recipe__title">
        <span>Pasta with tomato cream sauce</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href=${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cookingtime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href=${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">4</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href=${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href=${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href=${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href=${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">${recipe.ingredients
        .map(ing => {
          return ` <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href=${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
         ${ing.description}
        </div>
      </li>`;
        })
        .join('')}
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          recipe.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href=${recipe.sourceUrl}
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href=${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
    //inner HTML will overwrite previous content
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};
showRecipe();
renderSpinner(recipeContainer);
