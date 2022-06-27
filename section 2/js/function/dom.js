'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), // const btns = document.getElementsByTagName('button')[1] для получения конкретного
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = 'blue';
box.style.width = '600px';
box.style.cssText = 'background-color: red; width: 20px';

btns[1].style.borderRadius = '100%';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
//const text = document.createTextNode('fffff');

div.classList.add('black');

wrapper.append(div); // добавление в конец
//wrapper.appendChild(div);

//wrapper.prepend(div); // добавление в начало

//wrapper.insertBefore(div, hearts[0]);
//hearts[0].before(div);
//hearts[1].after(div);


//circles[1].remove();
//wrapper.removeChild(hearts[1]); // старый вариант

//hearts[1].replaceWith(circles[1]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>hello world</h1>";
//div.textContent = "Hello"; 
div.insertAdjacentHTML('afterbegin', '<h2>hello</h2>');