"use strict";


let numberOfFilms;

function start(){
    numberOfFilms = +prompt('сколько фильмов вы посмотрели', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
      for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов', ''),
                b = prompt('оценка', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
         }
      }
   }
    rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('prosmotreno malo filmov');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('vi klassicheskiy zritel');
    } else if (personalMovieDB.count >= 30){
        console.log('ti kinoman');
    } else {
        console.log('error kakoy to');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}
writeYourGenres();

