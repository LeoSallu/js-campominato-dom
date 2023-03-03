'use strict';

// Funzioni 
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;    
    return element;
}
function myAppendElement(containerElement,htmlElement){
    containerElement.append(htmlElement);
}
function pratoFiorito(){
    boardBox.innerHTML = '';
        // Switch Per Difficoltà 
    let cellNum;
    switch(selector.value){
        case 'Intermedio':
            cellNum=81;
            break
        case 'Pro':
            cellNum=49;
            break
        case 'Facile':
            default:
            cellNum=100;
    }
    // Ciclo for per generare celle 
    for(let i = 1 ; i <= cellNum; i++){
        const createdElement = elementCreator('div', 'cell', i);
        const punteggio = document.querySelector('.score');
        myAppendElement(boardBox,createdElement);
        createdElement.addEventListener('click',
        function(){
            if (bombIndex.includes(i)){
                createdElement.classList.add('bomb');
                console.log(i)
                alert('Hai perso')
            }
            else{createdElement.classList.add('azzurro');
            punteggio.innerText = `Il tuo punteggio è ${(cellNum)}`;
            console.log(i)
            }
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
            //Array Function
function arrayBombGenerator(maxNum) {
    let bombArray = [''];
    while (bombArray.length <= 16) {
      let randomNum = Math.floor(Math.random() * maxNum) + 1;
      if (!bombArray.includes(randomNum)) {
          bombArray.push(randomNum);
      }
    }
    return bombArray;
  }

// Board Box
const button = document.getElementById('match_start');
const reset = document.getElementById('reset');
const boardBox = document.querySelector('.board');
let selector = document.getElementById('selector');
let cellNum;
button.addEventListener('click', pratoFiorito);
let bombIndex = arrayBombGenerator(16);


