'use strict';

/*
    onload="setFocusOnForm();"
    onsubmit="return checkForm();" 
    onreset="resetForm();"
    oninput="countNumberOfChars(this);"

    OBS i html-filen finns nu inga on-attribut!
*/

'use strict';

let timerData = {
    timerId: 0
};

window.addEventListener('load', function() {

    document.querySelector('#timerDemo').setAttribute('style', 'color: cyan');
    document.querySelector('#txtNamn').focus();

    let formRef = document.querySelector('#theForm');

    formRef.addEventListener('submit', function( e ) {

        try {
            //...
        } catch( oE ) {
            //...
            e.preventDefault(); //istället för return false;
        }
    })

    formRef.addEventListener('reset', function( e ) {
        //...
    });

    formRef.querySelector('#txtFritext').addEventListener('input', function( e ) {
        document.querySelector('#nbrOfChars').textContent = this.value.length;
    });

});

/*
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
*/