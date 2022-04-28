/* let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt("На сколько оцените его?", ''),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("На сколько оцените его?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
 */



/* 
if (4 == 9) {
    console.log('ok');
} else {
console.log('Error');
} */

/* const num = 50;

if (num<49) {
    console.log('Error');
} else if (num > 100) {
    console.log("Много");
}else {
    console.log('OK!');
}

(num === 50) ? console.log('OK!') : console.log('Error'); */

const num = 50;

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;


}