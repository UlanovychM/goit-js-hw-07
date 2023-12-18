'use strict';

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', e => {
	e.preventDefault();

	const emailInput = document.querySelector('[type="email"]');
	const passwordInput = document.querySelector('[type="password"]');

	if (emailInput.value === '' || passwordInput.value === '') {
		alert('All form fields must be filled in');
	}

	let formValue = {
		email: emailInput.value,
		password: passwordInput.value,
	};

	console.log(formValue);

	registerForm.reset();
});
