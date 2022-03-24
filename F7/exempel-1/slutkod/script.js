'use strict';

window.addEventListener('load', (prepareColorPicker));

function prepareColorPicker() {

    let fields = document.querySelectorAll('.field');

    for(let i=0; i < fields.length; i++) {

        let input = fields[i].querySelector('input');
        let span = fields[i].querySelector('.value');

        let slump = Math.floor((Math.random() * 256));

        input.value = slump;
        span.textContent = slump;
        fields[i].addEventListener('input', handleValueChange);

    }

    updateBackground();

}

function updateBackground() {
    
    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;

    let body = document.querySelector('body');

    //i CSS background-color: #ffffff eller rgb(xxx,xxx,xxx)
    let colorvalue = 'rgb(' + red + ',' + green + ',' + blue + ')';
    body.style.backgroundColor = colorvalue;
}

function handleValueChange(event) {
    let span = event.currentTarget.querySelector('.value');
    let newvalue = event.target.value;
    span.textContent = newvalue;
    updateBackground();
}