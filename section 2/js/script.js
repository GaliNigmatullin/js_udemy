"use strict";


const numberOfFilms = prompt('сколько фильмов вы посмотрели');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов'),
    b = prompt('оценка'),
    c = prompt('Один из последних просмотренных фильмов'),
    d = prompt('оценка');
   
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
