'use strict';


// 1 обычная функция this = window. Если стоит use strict = undefined
// function showThis(){
//     console.log(this);
// }
// showThis();


// function showThis(a,b){
//     console.log(this);
//     function sum () {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);


// 2 контекст у методов объектов = этот объект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }
// };

// obj.sum();


//3 this  в конструкторах и классах это новый экземпляр объектов
// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let Alex = new User('Alex', 23);


// 4 ручная привязка this: call, apply, bind
// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname); 
// }

// const user = {
//     name: 'Jhon'
// };

// //установка контекста
// sayName.call(user, 'Dot');  // разница в ситаксисе
// sayName.apply(user, ['Dot']); // разница в синтаксисе

// function count (num){
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

// если function то контекст вызова сам объект события
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'black';
    //console.log(this);
});

//у стрелочной функции нет контекста вызова, она всегда будет его брать у своего родителя
const obj = {
    num:5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

//
const double = a => a * 2;
console.log(double(4));