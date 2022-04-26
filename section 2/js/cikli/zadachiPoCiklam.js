"use strict";

for (let i = 5; i <= 10; i++){
    console.log(i);
}

for (let i = 20; i > 10; i--){
    if (i === 13) break;
    console.log(i);
}

for (let i = 2; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
         if (i % 2 === 0) {
             continue;
         } else {
             console.log(i);
        }
 }
     
 let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
    
    function firstTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
        
        let arrLenght = arr.length;
        for (let i = 0; i < arrLenght; i++){
            result[i] = arr[i];
        }
        console.log(result);
        return result;
    }

    function secondTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        // Пишем решение вот тут
        const a = data.length;
        for(let i = 0; i < a; i++){
            if(typeof(data[i]) === 'string'){
                data[i] = data[i] + '- done';
            } else {
                data[i] = data[i] * 2;
            }
        }
        console.log(data);
        // Не трогаем
        return data;
    }

    function thirdTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
    
        // Пишем решение вот тут
       
        for (let i = 1; i <= data.length; i++) {
            result[i - 1] = data[data.length - i];
        }
    
        console.log(result);
        // Не трогаем
        return result;
    }

    const lines = 5;
    let result = '';
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result);

