import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultView from './view/resultView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/*if (module.hot) {
  module.hot.accept();
}*/
const controlRecipe = async function (id = '#5ed6604591c37cdc054bc886') {
  try {
    //get the hash value of current location
    id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    //1) Loading recipe
    await model.loadRecipe(id);
    //2) Rendering recipe
    //put object to render function
    //因為繼承的關係，我們能夠直接在這裡使用render
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    //1) get search query
    const query = searchView.getQuery();
    searchView.clearInput();
    if (!query) return;
    //2)
    await model.loadSearchResult(query);
    console.log(model.state);
    //3) Render result
    resultView.render(model.getSearchResultPage(1));
    console.log('s');
  } catch (err) {
    console.error(err);
  }
};
const init = function () {
  controlRecipe();
  recipeView.addHandleRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
