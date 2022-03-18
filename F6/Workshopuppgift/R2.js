"use strict";

window.addEventListener("load", function() {
	
	setFocusOnForm();
	toggleTextArea();
	document.querySelector('#theForm').addEventListener('submit', checkForm);

	
}, false);

function toggleTextArea() {
	
	
}

function setFocusOnForm() {
	document.querySelector("#txtNamn").focus();
}


function countNbrOfChars(){
	
}

function resetForm() {
	document.querySelector("#nbrOfChars").innerHTML = 0;
	document.querySelector("#errorMsg").innerHTML = "";
	document.querySelector("#txtNamn").focus();
	document.querySelector("#errorMsg").removeAttribute("class");
}


function checkForm(oEvent) {

	//Kontrollera att alla input type=text + textarean har värden om inte kasta undantag!	
	let textrutor = document.querySelectorAll('input[type=text]');
	let error = document.querySelector('#errorMsg');

	try {


		for(let i=0; i<textrutor.length; i++) {
			if(textrutor[i].value.length<3) {
				throw("För kort...");
			}
		}
	
	
	}
	catch(oError) {
		error.textContent = oError;
		error.classList.add('alert', 'alert-danger');

		oEvent.preventDefault();
	
	}
}
