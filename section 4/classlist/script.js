'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//работа с классами элементов

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue')); // переключение классов


//Проверка на наличе класса
// if (btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', (e) => {
   
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    //то же самое 
    btns[1].classList.toggle('red');
});


// делегирование событий

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON"){
        console.log('hello');        
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);