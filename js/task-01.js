const catEl = document.querySelector('#categories');
const catAllEl = [...catEl.children];
console.log('Number of categories: ', catAllEl.length);

catAllEl.forEach(element => {
	console.log("Category: ", element.firstElementChild.textContent);
  console.log('Elements: ', element.querySelector('ul').children.length);
});