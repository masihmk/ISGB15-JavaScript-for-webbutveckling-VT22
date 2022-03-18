'use strict';

window.addEventListener('load', ()=> {

    console.log('tjo!');
    let knappar = document.querySelectorAll('table button');

    for(let i=0; i< knappar.length; i++) {
        knappar[i].classList.add('btn','btn-primary');

    }

    knappar.forEach(knapp => {
        knapp.addEventListener('click', changeClass);
    })

});
    

function changeClass(oEvt) {

    console.log('click!');

    if(oEvt.currentTarget.getAttribute('id')==='btnEtt') {
        oEvt.currentTarget.classList.remove('btn-primary');
        oEvt.currentTarget.classList.add('btn-danger');
        oEvt.currentTarget.removeEventListener('click', changeClass);
    }
}