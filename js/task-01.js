'use strict';

const liCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${liCategories.length}`);
liCategories.forEach(item => {
	let elemOfLi = item.querySelectorAll('li').length;
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${elemOfLi}`);
});
