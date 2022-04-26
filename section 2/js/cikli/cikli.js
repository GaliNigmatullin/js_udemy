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

console.log(result);

// метки

first: for (let i = 0; i < 3; i++){
        console.log(`first level: ${i}`);
        for (let j = 0; j < 3; j++){
            console.log(`second level: ${j}`);
            for (let k = 0; k < 3; k++){
                if (k === 2) continue first;
                console.log(`third level: ${k}`);
                
            }
        }
    }