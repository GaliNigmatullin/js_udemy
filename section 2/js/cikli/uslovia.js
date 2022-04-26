"use strict";

const num = 50;
(num == 50) ? console.log('ok') : console.log('ne ok'); // тернарный оператор:  условие ? первый вариант : иначе
switch (num) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('fasle');
        break;
    case 50:
        console.log('ok');
        break; 
}