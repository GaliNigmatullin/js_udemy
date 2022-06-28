'use strict';

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button');

// плохой вариант обработчика
// btn.onclick = function () {   
//     alert('click'); 
// };

// btn.addEventListener('mouseenter', ()  => {
//     console.log('click');
// });

// btn.addEventListener('click', (e)  => {
//     e.target.remove();
//     console.log('click');
// });

// const deleteElement = (e) => {
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElement);

btns.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('1111');
    });
});

//отмена стандартного поведения браузера preventDefault(). Ставится в начало
const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('ddd');
});