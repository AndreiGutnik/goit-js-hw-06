const inputEl = document.querySelector("input#name-input");
const nameEl = document.querySelector("span#name-output");

inputEl.addEventListener('input', (event) => { nameEl.textContent = event.currentTarget.value;});

inputEl.addEventListener('blur', (event) => {
  if (event.currentTarget.value === '') {
		nameEl.textContent = "Anonymus";
  }
});