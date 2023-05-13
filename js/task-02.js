const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul#ingredients')
ingredients.forEach(element => {
	const newEl = document.createElement('li');
	newEl.textContent = element;
	newEl.setAttribute('class', 'item');
	ulEl.append(newEl);
});