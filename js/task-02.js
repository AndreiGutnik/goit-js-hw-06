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
ingredients.forEach(element => {
	const newEl = document.createElement('li');
	newEl.textContent = element;
	newEl.setAttribute('class', 'item');
	ulEl.append(newEl);
});

//Version 2
// ulEl.innerHTML = ingredients
// 	.map(ingr => `<li class="item">${ingr}</li>`)
// 	.join("");