'use strict';

// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('[type="number"]');

const boxForDiv = document.querySelector('#boxes');

function createBoxes(amount) {
	if (amount <= 100 && amount > 1) {
		destroyBoxes();
		let size = 30;
		for (let i = 0; i < amount; i++) {
			const divElem = document.createElement('div');

			divElem.style.width = `${size}px`;
			divElem.style.height = `${size}px`;
			divElem.style.background = getRandomHexColor();
			size += 10;
			boxForDiv.append(divElem);
		}
	} else if (amount > 100 && amount > 1) {
		alert('Please! Enter the numbers from 1 to 100 ');
	}
}

function destroyBoxes() {
	boxForDiv.innerHTML = '';
	inputValue.value = '';
}

buttonCreate.addEventListener('click', e => {
	createBoxes(inputValue.value);
});

buttonDestroy.addEventListener('click', () => destroyBoxes());
