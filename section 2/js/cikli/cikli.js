"use strict";

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);

// for (let i = 1; i < 8; i++){
//     console.log(i);
// }

// let star = "*";
// let lenght = 7;
// for (let i = 1; i < lenght; i++){
//     console.log(star);
//     star += "*";
// }

let result = '';
const lenght = 7;
for (let i = 1; i < lenght; i++){

    for (let j = 0; j < i; j++){
        result += "*";
    } 

    result += '\n';
}
