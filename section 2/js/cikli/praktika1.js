"use strict";


const numberOfFilms = +prompt('сколько фильмов вы посмотрели', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
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

if (personalMovieDB.count < 10){
    console.log('prosmotreno malo filmov');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('vi klassicheskiy zritel');
} else if (personalMovieDB.count > 30){
    console.log('ti kinoman');
} else {
    console.log('error kakoy to');
}


   

console.log(personalMovieDB);

