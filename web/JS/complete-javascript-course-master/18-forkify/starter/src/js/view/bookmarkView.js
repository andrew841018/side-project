import View from './View.js';
import icon from '../../img/icons.svg';
import previewView from './previewView.js';

let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmark yet. Find a nice recipe and bookmark it 😏';
  _message = '';
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
