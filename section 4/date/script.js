'use strict';

const now = new Date();


// сеттеры все то же самое но через set




// геттеры
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset()); // отклонение от гринвича в минутах
//console.log(now.getTime());  // получение времени с милисекундах с 1970 года (можно подставить в date() и получить норм время) 


let start = new Date();

for (let i = 0; i < 10000000; i++){
    let some = i ** 3;
}

let end = new Date();

alert (`Цикл отработал за ${end - start} милисекунд`);