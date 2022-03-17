'use strict';


//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event


//load vs. DOMContentLoaded
/*
window.addEventListener('load', function() {
    
    console.log('onload');

    let tableRef = document.querySelector('table');

    tableRef.addEventListener('mouseover', function( e ) {
        console.log('omouseover', e);
    });

    tableRef.addEventListener('mousedown', function( e ) {
        console.log('onmousedown', e);
    });

    document.querySelector('body').addEventListener('keydown', function( e ) {
        console.log('onkeydown', e );
    });
    
});

*/
addEventListener('load', function() {

    let tdRefs = document.querySelectorAll('td');
    console.log( tdRefs );

    for(let i = 0; i < tdRefs.length; i++) {
        tdRefs.item(i).addEventListener('click', function( e ) {
            console.log( e.target, e.currentTarget );
            e.stopPropagation();
        });
    };

    
    document.querySelector('tbody').addEventListener('click', function( e ) {
        console.log( e.target, e.currentTarget );
    });

    document.querySelector('table').addEventListener('click', function( e ) {
        console.log( e.target, e.currentTarget );
    });

    document.querySelector('.container-fluid').addEventListener('click', function( e ) {
        console.log( e.target, e.currentTarget );
    });

    document.querySelector('body').addEventListener('click', function( e ) {
        console.log( e.target, e.currentTarget );
    });

    document.querySelector('html').addEventListener('click', function( e ) {
        console.log( e.target, e.currentTarget );
    });

});

