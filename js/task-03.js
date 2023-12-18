'use strict';

const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputName.addEventListener('input', e => {
	const takeValue = e.currentTarget.value.trim();

	nameOutput.textContent = takeValue || 'Anonymous';
});
