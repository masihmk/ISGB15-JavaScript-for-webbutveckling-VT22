"use strict";

window.addEventListener("load", function() {
	
	setFocusOnForm();
	toggleTextArea();

	
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
	try {
	
	
	
	}
	catch(oError) {
		

	
	}
}
