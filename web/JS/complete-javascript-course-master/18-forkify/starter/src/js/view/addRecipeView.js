import View from './View.js';
import icon from '../../img/icons.svg';
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe was successfully uploaded 😀';
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHidenWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHidenWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(inputFunction) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const data_arr = [...new FormData(this)];
      const data = Object.fromEntries(data_arr);
      inputFunction(data);
    });
  }
  _generateMarkup() {}
}
export default new AddRecipeView();
