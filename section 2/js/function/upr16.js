'use strict';

function factorial (x){
    if(typeof(x) != 'number' || !Number.isInteger(x)){
        return 'error';
    }
    
    if(x >= 1){
        //console.log(x * factorial(x-1));
        return x * factorial(x - 1);
    } else {
        return 1;
    }
}

factorial(4);