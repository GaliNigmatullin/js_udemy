"use strict";

const arr = [1, 2, 3, 4, 5];

// sjrtirovka 
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}

//arr.pop(); // удаляет ласт элемент
//arr.push(10); // добавление в конец массива

// shift unshift добавляет и убирает первый эл массива (не надо особо юзать изза того что будут меняться индексы)

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} vnutri massiva ${arr}`);
// });


//перебор массива

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", "); // разделение массива по определенному разделителю
products.sort(); // сортировка !! все значения как строки т.е цифры норм не сортирует(по первому символу)
console.log(products.join('; ')); // слепили из массива строку черех разделитель