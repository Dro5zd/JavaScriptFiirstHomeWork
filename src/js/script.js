"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);