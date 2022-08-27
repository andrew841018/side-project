import View from './View.js';
import icon from '../../img/icons.svg';
let icons = new URL('../img/icons.svg', import.meta.url);
icons = icons.href.replace('/img/icons.svg', icon);
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  addHandlerClick(inputFunction) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const goToPage = +btn.dataset.goto;
      inputFunction(goToPage);
    });
  }
  _pageMove(movePage, curPage) {
    return movePage > curPage
      ? `<button data-goto="${movePage}" class="btn--inline pagination__btn--next">
    <span>Page ${movePage}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`
      : `<button data-goto="${movePage}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${movePage}</span>
    </button>`;
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //inital page=1 and total page>1
    if (curPage === 1 && numPages > 1) {
      console.log(`hello`);
      return this._pageMove(curPage + 1, curPage);
    }
    //Page 1 without other pages
    //Last Page
    if (curPage === numPages && curPage > 1) {
      return this._pageMove(curPage - 1, curPage);
    }
    //Other Page
    if (curPage < numPages && curPage > 1) {
      return (
        this._pageMove(curPage - 1, curPage) +
        this._pageMove(curPage + 1, curPage)
      );
    }
    //Page 1 with other pages
    return '';
  }
}
export default new PaginationView();
