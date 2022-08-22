//Exporting module
console.log('export');
export const cart = [];
export const addToCart = function (product, money) {
  cart.push({ product, money });
  console.log(`${product} cost ${money} dollars`);
};
const total = 500;
const totalQuantity = 50000;
export { total, totalQuantity as tq };
export default function (dirty_word, dirty_word2) {
  console.log(`${dirty_word}${dirty_word2}`);
}
