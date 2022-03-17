'use strict';

let timerData = {
    timerId: 0
};

function resetForm() {
    console.log('resetForm()');
    document.querySelector('#nbrOfChars').textContent = '0';
    document.querySelector('#errorMsg').textContent = '';
}

function startTimer() {
    console.log('startTimer()');

    if(timerData.timerId !== 0) {
        stoppTimer();
    }

    timerData.timerId = setInterval(function() {
        console.log(Date.now());
        document.querySelector('#timerDemo').textContent += '#';
    }, 2000);    

}

function stoppTimer() {
    console.log('stoppTimer()');
    document.querySelector('#timerDemo').textContent = '';
    clearInterval(timerData.timerId);

}

function setFocusOnForm() {
    console.log('setFocusOnForm()');

    document.querySelector('#timerDemo').setAttribute('style', 'color: cyan');
    document.querySelector('#txtNamn').focus();
}

function checkForm() {
    console.log('checkForm()');

    try {

        let textRefs = document.querySelectorAll('input[type=text], textarea');
        let currentTextRef = null;

        for(let counter = 0; counter < textRefs.length; counter++) {

            currentTextRef = textRefs.item(counter);

            if(currentTextRef.value.length === 0) {

                throw { elementRef : currentTextRef };

            }

        }

        return true;

    } catch(oError) {

        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';

        oError.elementRef.focus();

        return false;

    }
}

function countNumberOfChars(textAreaRef) {
    console.log('countNumberOfChars()');
    document.querySelector('#nbrOfChars').textContent = textAreaRef.value.length;
}