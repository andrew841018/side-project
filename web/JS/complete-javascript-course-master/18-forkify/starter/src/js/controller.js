import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultView from './view/resultView.js';
import pageinationView from './view/pageinationView.js';
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/*if (module.hot) {
  module.hot.accept();
}*/
const controlRecipe = async function (e) {
  try {
    //get the hash value of 網址列
    const id = window.location.hash.slice(1);
    if (!id) return;
    if (e['type'] !== 'hashchange') recipeView.renderSpinner();
    //0) Update results view to mark selected search result
    resultView.update(model.getSearchResultPage());
    //e['type']
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
    resultView.renderSpinner();
    //1) get search query
    const query = searchView.getQuery();
    searchView.clearInput();
    if (!query) return;
    //2)
    await model.loadSearchResult(query);
    //3) Render result
    resultView.render(model.getSearchResultPage());
    //4) Render initial pagination button
    pageinationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
const controlPagination = function (goToPage) {
  //1) Render NEW results
  resultView.render(model.getSearchResultPage(goToPage)); //it will update model.state.search too
  //2)Render NEW pagination buttons
  pageinationView.render(model.state.search);
};
const controlServings = function (servings) {
  //update the recipe servings(in state)
  model.updateServing(servings);
  //update the recipe view
  recipeView.update(model.state.recipe);
};
const init = function () {
  recipeView.addHandleRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  pageinationView.addHandlerClick(controlPagination);
};
init();
