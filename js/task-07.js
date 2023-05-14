const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', () => {
	//Version 1
	textEl.style = `font-size: ${inputEl.value}px`;
	//Version 2
	// textEl.setAttribute("style", `font-size: ${inputEl.value}px;`);
});
