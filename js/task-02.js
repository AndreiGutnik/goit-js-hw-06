const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul#ingredients')
//Version 1
const elements = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");

  return newEl;
});
ulEl.append(...elements);

//Version 2
// const elements = [];
// ingredients.forEach(element => {
// 	const newEl = document.createElement('li');
// 	newEl.textContent = element;
// 	newEl.classList.add('item');
// 	elements.push(newEl);
// });
// ulEl.append(...elements);

//Version 3
// ulEl.innerHTML = ingredients
// 	.map(ingr => `<li class="item">${ingr}</li>`)
// 	.join("");