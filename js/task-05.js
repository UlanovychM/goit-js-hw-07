'use strict';

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const button = document.querySelector('[type="button"]');

button.addEventListener('click', e => {
	const body = document.querySelector('body');

	body.style.backgroundColor = getRandomHexColor();
	const spanValue = document.querySelector('.color');
	spanValue.textContent = body.style.backgroundColor;
});
