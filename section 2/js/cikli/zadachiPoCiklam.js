"use strict";

for (let i = 5; i <= 10; i++){
    console.log(i);
}

for (let i = 20; i > 10; i--){
    if (i === 13) break;
    console.log(i);
}

for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}