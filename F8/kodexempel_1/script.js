'use strict';
//Samma sak som function() {}
window.addEventListener('load', ()=> {
    renderPage();
});

function renderPage() {
    /*
    document.writeln('<main>');
    document.writeln('<h1>');
    document.writeln('Väldigt jobbigt');
    document.writeln('</h1>');
    document.writeln('<button class="btn btn-primary" >click me</button>');
    document.writeln('</main>');

    */
    let body = document.querySelector('body');
    //body.innerHTML='<main><h1>Väldigt jobbigt</h1><button class="btn btn-primary" >click me</button></main>';
    let main = document.createElement('main');
    let h1 = document.createElement('h1');
    //h1.textContent='Inte så jobbigt...';
    let textnode = document.createTextNode('Inte så jobbigt');
    h1.appendChild(textnode);
    main.appendChild(h1);


    body.appendChild(main);

    let btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent="Push me";
    main.appendChild(btn);






}