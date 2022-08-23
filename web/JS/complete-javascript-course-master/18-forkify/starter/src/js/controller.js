import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    //get the hash value of current location
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    //1) Loading recipe
    await model.loadRecipe(id);
    //2) Rendering recipe
    //put object to render function
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
controlRecipe();
//當window偵測到某事件發生（ex:load...)，window指的是整個介面（視窗）
['hashchange', 'load'].forEach(ev => addEventListener(ev, controlRecipe));
