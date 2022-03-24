'use strict';
let oGame = {};
oGame.score = null;
oGame.time = null;
oGame.intervalId = null;

window.addEventListener('load', prepareGame);


function prepareGame() {

    //Gömma spelplan
    document.querySelector('#gameArea').classList.add('hidden');
    let target = document.createElement('div');
    target.classList.add('target');
    document.querySelector('#gameArea').appendChild(target);

    //Lägg lyssnare på länk
    document.querySelector('.mybtn').addEventListener('click', startGame);

}

function startGame() {
    document.querySelector('#gameArea').classList.remove('hidden');

    //Sätt startvärden i gameobj
    oGame.score = 0;
    oGame.time = 11;

    //Skriv ut startvärden
    document.querySelector('#score').textContent = 'Score: ' + oGame.score;
    
    moveTarget();

    oGame.intervalId = setInterval(moveTarget,1000);

    //lägg på lyssnare på target
    document.querySelector('.target').addEventListener('click', updateScore);


}

function moveTarget() {

    let target = document.querySelector('.target');
    let gameArea = document.querySelector('#gameArea');

    oGame.time--;
    document.querySelector('#time').textContent = 'Time remaining: ' + oGame.time;

    if(oGame.time<=0) {
        //Spelet slut
        clearInterval(oGame.intervalId);

        //Ta bort lyssnare på target
        document.querySelector('.target').removeEventListener('click', updateScore);
    }
    else {
        let left = Math.floor(Math.random() * (gameArea.offsetWidth - 20));
        let top = Math.floor(Math.random() * (gameArea.offsetHeight - 20));
    
        target.style.left = left + 'px';
        target.style.top = top + 'px';
    }




}

function updateScore() {
    oGame.score++;
    document.querySelector('#score').textContent = 'Score: ' + oGame.score;
}