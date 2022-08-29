import View from './View.js';
import icon from '../../img/icons.svg';
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _generateMarkup() {}
}
export default new AddRecipeView();
