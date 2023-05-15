function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector('button.change-color');
const spanColorRef = document.querySelector('span.color');

changeColorBtnRef.addEventListener("click", () => {
  const newColor = getRandomHexColor();
	document.body.style.backgroundColor = newColor;
	spanColorRef.textContent = newColor;
});