'use strict';

//()={}, shortcode för function() {}
window.addEventListener('load', ()=> {
	renderPage();
	
});

function renderPage() {
	
	let table = document.querySelector('table');
	table.addEventListener('click',addColor);
	let counter = 1;

	for(let rad=1; rad<=10; rad++) {
		let tr = document.createElement('tr');

		for(let kol=1; kol<=10;kol++) {
			let td = document.createElement('td');
			td.classList.add('p-3');

			let text = document.createTextNode(counter);
			counter++;

			td.appendChild(text);
			tr.appendChild(td);

		}

		table.appendChild(tr);

	}
	

	
}

function addColor(e) {
	e.target.style.backgroundColor='red';
}








