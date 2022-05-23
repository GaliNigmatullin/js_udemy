'use strict';
// Место для первой задачи
function sayHello(userName) {
    return 'Привет', ${userName};
}
sayHello('Антон');
// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
returnNeighboringNumbers(5);
// Место для третьей задачи
function getMathResult(number, repeats) {
    let result = number;
    if(typeof(repeats) !== 'number' || repeats < 0){
        return number;
    }
    let res = '';
    for (let i = 0; i <= repeats; i++){
        if(i === repeats){
            res += `${number * i}`;
        } else {
            res += `${number * i}---`;
        }
    }
      return res;
        
}
getMathResult(5, 3);