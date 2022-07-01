'use strict';

// touchstart касание 
// touchmove
// touchend убрали палец
// touchenter ведем пальцем по экрану и натыкаемся на елемент с этим событием
// touchleave продолжили вести пальцем по экрану, но уже вышли за пределы элемента 
// touchcancel точка соприкосновения больше не регистрируется на поверхности


// touches кол-во пальцев сейчас на экране
// targetTouches - непосредственно с элементом



window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });

}); 