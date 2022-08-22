import icon from '../../img/icons.svg';
/* 
js在使用圖片時，由於parcel的關係，會根據原圖自動生成另一個圖檔提供js使用
,而非原本我們提供的，這裡就是去抓取實際使用圖檔的路徑
*/
//special solution by Angelica(not jonas version)
//combine of jonas version
//anyway the format should be "http://localhost:XXXX(fill yours)/icons.XXXX(fill yours).svg"
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class RecipeView {
  #data;
  #parentEl = document.querySelector('.recipe');
  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  //public because controller will need it.
  renderSpinner = function () {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this.#parentEl.innerHTML = '';
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  };
  #clear() {
    //inner HTML will overwrite previous content
    this.#parentEl.innerHTML = '';
  }
  #generateMarkup() {
    return `
        <figure class="recipe__fig">
        <img src=${this.#data.image} alt=${
      this.#data.title
    } class="recipe__img" />
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
              this.#data.cookingtime
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
        <ul class="recipe__ingredient-list">${this.#data.ingredients
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
              this.#data.publisher
            }</span>. Please check out
            directions at their website.
        </p>
        <a
            class="btn--small recipe__btn"
            href=${this.#data.sourceUrl}
            target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href=${icons}#icon-arrow-right"></use>
            </svg>
        </a>
        </div>`;
  }
}
export default new RecipeView();
