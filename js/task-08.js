const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', (event) => {
	event.preventDefault();
	const {
    elements: { email, password },
	} = event.currentTarget;
	
	if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const resObject = {};
    resObject.email = email.value;
		resObject.password = password.value;
		console.log(resObject);
		event.currentTarget.reset();
  }
});