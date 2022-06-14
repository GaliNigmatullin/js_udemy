'use strict';

const options = {
    name:'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){  //метод объекта
        console.log("test");
    }
};
options.makeTest(); // запускаем метод обекта 

//console.log(Object.keys(options).length); // kol-vo klyuchey v objecte

const {border, bg} = options.colors;  //деструктуризация объекта
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log (options);

// let counter = 0;
// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойсвто ${i} имеет значение ${options[key][i]}`);
           
//         }
//     } else {
//         console.log(`Свойсвто ${key} имеет значение ${options[key]}`);
        
//     }
// }
// console.log(counter);