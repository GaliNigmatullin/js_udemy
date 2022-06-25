
// Работа светофора для пешеходов запрограммирована следующим образом: в начале каждого часа в течение трех минут горит зеленый сигнал, 
// затем в течение двух минут – красный, в течение трех минут – опять зеленый и т. д. 
// Дано вещественное число t, означающее время в минутах, прошедшее с начала очередного часа. 
// Определить, сигнал какого цвета горит для пешеходов в этот момент. 
// На экран вывести сообщение (без кавычек) "green" - для зеленого и "red" - для красного.

// function getLightColor(time){

// let min = Math.floor(time) % 5;
// switch (min){
//     case 1: console.log('green');
//     break; 
//     case 2: console.log('green');
//     break; 
//     case 3: console.log('green');
//     break;  
//     case 4: console.log('red');
//     break; 
//     case 0: console.log('red');
//     break; 
// }
// }

// getLightColor(33.6);

function getLightColor(min){
    let sec = min * 60;
    let time = sec % 300;
    time <= 180 ? console.log('green') : console.log ('red')
}

getLightColor(8);



