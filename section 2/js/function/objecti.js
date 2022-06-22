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

let counter = 0;
for (let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойсвто ${i} имеет значение ${options[key][i]}`);
           
        }
    } else {
        console.log(`Свойсвто ${key} имеет значение ${options[key]}`);
        
    }
}
console.log(counter);


// копируем объект через циклы 
function copy(mainObj){
    let objCopy = {};
    
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5, 
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(numbers);
// console.log(newNumbers);

// объединяе объекты

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); 


// копируем массив

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'n';

console.log(oldArray);
console.log(newArray);

// копируем массив с учетом новых стандартов ес6 ес8 спред оператор - опретаор разворота

const video = ['youtuvbe', 'dfdfdf', 'dfdff'],
      blogs = ['dsfsdf', 'dfsfd', 'dsfsd'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6];

log(...num);

const array = ["a", "b", "c"];
const array2 = [...array];

// копируем object с учетом новых стандартов ес6 ес8 спред оператор - опретаор разворота'

const q = {
    one: 1,
    two: 2,
    three: 3
}; 

const qNew = {...q};

console.log(q);
console.log(qNew);