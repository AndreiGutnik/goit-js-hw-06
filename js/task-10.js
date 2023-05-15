function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberRef = document.querySelector("input[type='number']");
const boxesRef = document.querySelector("div#boxes");
const creatBtneRef = document.querySelector('[data-create]');
const destroyBtneRef = document.querySelector("[data-destroy]");

function createBoxes(amount) {
	let counter = 0;
	const elements = [];
	while (counter < amount) {
		const newEl = document.createElement("div");
		if (counter === 0) {
			newEl.style.width = "30px";
      newEl.style.height = "30px";
		} else {
			newEl.style.width = 30 + counter * 10 + 'px';
      newEl.style.height = 30 + counter * 10 + "px";
		};		
    newEl.style.backgroundColor = getRandomHexColor();
		
		elements.push(newEl);
		counter += 1;
	};
	boxesRef.append(...elements);
}

function destroyBoxes() {
	const boxesElements = [...boxesRef.children];
	boxesElements.map(element => element.remove());
	numberRef.value = '';
}

creatBtneRef.addEventListener("click", () => {
  const amount = Number(numberRef.value);
  createBoxes(amount);
});

destroyBtneRef.addEventListener("click", () => {
  destroyBoxes();
});