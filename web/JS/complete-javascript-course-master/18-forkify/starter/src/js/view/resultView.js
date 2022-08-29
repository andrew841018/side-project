import View from './View.js';
import icon from '../../img/icons.svg';
import previewView from './previewView.js';

let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class ReusltView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipe for your query, please try again later 😏';
  _message = '';
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ReusltView();
