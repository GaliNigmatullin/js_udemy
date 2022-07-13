'use strict';

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function(name){
    console.log(`пользователь ${this.name} ушел`);
};


const Ivan = new User('Ivan', 28);
const Alex = new User('Alex', 20);

Ivan.hello();
Ivan.exit();

console.log(Ivan);
console.log(Alex);