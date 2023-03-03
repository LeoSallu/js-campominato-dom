'use strict';

// Funzioni 
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    return element;
}
function myAppendElement(containerElement , htmlElement){
    containerElement.append(htmlElement);
}
function pratoFiorito(){
    boardBox.innerHTML = '';
    // Ciclo for per generare celle 
    for(let i = 1 ; i <= cellNum; i++){
        const createdElement = elementCreator('div', 'cell', i);
        myAppendElement(boardBox,createdElement);
        createdElement.addEventListener('click',
        function(){
            createdElement.classList.add('azzurro');
            console.log(i);
        }
        )
        //Button Reset
        reset.addEventListener('click',
        function(){
            createdElement.classList.remove('azzurro'); 
            button.classList.remove('white_btn');
            button.classList.add('btn');
            button.innerHTML = ('Inizia Partita');
            window.location.reload();
        }
        )  
            // Button Utilities
        button.classList.add('white_btn');
        button.classList.remove('btn');
        button.innerHTML = ('Partita Iniziata');
    }}
// Board Box
const button = document.getElementById('match_start');
const reset = document.getElementById('reset');
const boardBox = document.querySelector('.board');
let cellNum;
let level = 1;
const facile = document.getElementById('facile');
const intermedio = document.getElementById('intermedio');
const pro = document.getElementById('pro');
// Switch Per Difficoltà 
switch(level){
    case 2:
        cellNum=81;
        break
    case 3:
        cellNum=49;
        break
        
    case 1:
        default:
        cellNum=100;

}
//Selezione difficoltà
facile.addEventListener('click',
function(){
    level=1;
})
intermedio.addEventListener('click',
function(){
    level=2;
})
pro.addEventListener('click',
function(){
    level=3;
})
//Button Generazione Celle
button.addEventListener('click', pratoFiorito);

