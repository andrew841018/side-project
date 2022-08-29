import icon from '../../img/icons.svg';
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
export default class View {
  _data;
  _message = ''; //success message-->for future used.
  _errorMessage = "we couldn't find recipe, please try another one";
  _parentEl = document.querySelector('.recipe');
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup; //markup is an html code-->String
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  //public because controller will need it.
  //flickering...
  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    //inner HTML will overwrite previous content
    this._parentEl.innerHTML = '';
  }
  update(data) {
    this._data = data;
    //new html-->after update
    const newMarkup = this._generateMarkup();
    //createRange->針對某部分html內容做修改
    //createContextualFragment-->直接將html code當成input放入
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newEl = Array.from(newDOM.querySelectorAll('*')); //multi element-->array(because select all)
    const curEl = Array.from(this._parentEl.querySelectorAll('*')); //multi element-->array(because select all)
    newEl.forEach((newElem, i) => {
      const currentEl = curEl[i];
      //nodevalue return null if there is not text, otherwise return string
      //Update changed TEXT
      if (
        !newElem.isEqualNode(currentEl) &&
        newElem.firstChild?.nodeValue.trim() !== ''
      ) {
        //
        currentEl.textContent = newElem.textContent;
      }
      //update changed Attributed
      if (!newElem.isEqualNode(currentEl))
        Array.from(newElem.attributes).forEach(attr => {
          currentEl.setAttribute(attr.name, attr.value);
        });
    });
  }
}
