

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const advPromo = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          promoGenre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();  //отключачем стандартное поведение браузера
        
        let newFilm = addInput.value; //достаем введенное из инпута
        const favorite = checkbox.checked; // проверка чекбокса на галочку

        if(newFilm){

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;  //обрезаем строку с 0 до 22(не включительно)
            }

            if(favorite){
                console.log('Добавляем любимый фильм');   // сообщение если отмечен чекбокс
            }

            movieDB.movies.push(newFilm);  // добавили новый фильм в массив фильмов
            sortArr(movieDB.movies);  // сортировка
            createMovieList(movieDB.movies, movieList);  // пересобираем список фильмов
        }

        addForm.reset(); // сбрасываем форму
    });      
    
    // удаляем рекламные блоки
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
   
    //меняем жанр фильма и бэкграунд
    const makeChanges = () => {
        promoGenre.textContent = 'Драма'; // меняем жанр
    
        poster.style.backgroundImage = 'url("img/bg.jpg")'; // меняем бэк
    };
    
    //сортировка массива фильмов
    const sortArr = (arr) => {
        arr.sort();
    };

    //генирируем список фильмов
    function createMovieList(films, parent) {
        parent.innerHTML = ''; //очистили родительский блок
        sortArr(films); // отсортировали массив фильмов что бы после удаления была норм нумерация

        films.forEach((film, i) => {
            //создаем html структуру. К пустому род блоку добавляем html
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        //удаление элементов (событие). Выбрали div delete и перебрали кнопки
        document.querySelectorAll('.delete').forEach ((btn, i) => {
            //вешаем событие на кнопку удаления
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); //удаляем родительский элемент (если удалим кнопку, сам фильм останется на месте)
                movieDB.movies.splice(i, 1); //удаляем i-фильм. 1 - один элемент
                createMovieList(films, parent); // генерим список фильмо заново
            });
        });
    }
    
    createMovieList(movieDB.movies, movieList);
    deleteAdv(advPromo);
    makeChanges();
    
});

