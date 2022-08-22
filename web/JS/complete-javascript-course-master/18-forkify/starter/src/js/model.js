export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    //(1)loading recipe
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) {
      //data.message->error message
      //res.status->error code number
      throw new Error(`${data.message}  ${res.status}`);
    }
    console.log(data);
    //destruct data.data object,get recipt property direct assign to recipt
    const { recipe } = data.data;
    //change object property name(ex:image_url->image...)
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.log(`model.js_error:${err}`);
  }
};
