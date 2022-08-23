class SearchView {
  _parentEl = document.querySelector('.search');
  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }
  addHandlerSearch(inputFunction) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      inputFunction();
    });
  }
  clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
