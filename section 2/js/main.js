"use strict";





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы посмотрели', '');
     }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
          const a = prompt('Один из последних просмотренных фильмов', '').trim(),
                b = prompt('оценка', '');
          
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('done');
          } else {
              console.log('error');
              i--;
           }
        }
     },
     detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            console.log('prosmotreno malo filmov');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('vi klassicheskiy zritel');
        } else if (personalMovieDB.count >= 30){
            console.log('ti kinoman');
        } else {
            console.log('error kakoy to');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    }, 
    toogleVisibleMyDb: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        // for(let i = 1; i <= 3; i++){
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (genre == "" || genre == null){
        //         console.log('не то ввелеи');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }            
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });
        
        
        // более красивый вариант
        for(let i = 1; i < 2; i++){
        let genres = prompt(`введите любимые жанры через запятую`).toLowerCase();

        if (genres === '' || genres == null){
            console.log('не то ввелеи');
            i--;
        } else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

        

        }
    }
};









