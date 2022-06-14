'use strict';

function fib (n){
    if(typeof(n) != 'number'){
        return "";
    } else {
        let sf = 0,
        f = 1,
        nf;
    for (let i = 0; i < n; i++){
        nf = sf + f;
        console.log(`${sf} `);
        sf = f;
        f = nf;
        
    }
    }
      
}
fib(4);