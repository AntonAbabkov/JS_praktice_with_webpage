/* 5 практика. Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

/* 1) Удалить все рекламные блоки со страницы (правая часть сайта) */
const advertising = document.querySelectorAll('.promo__adv img');
advertising.forEach(item => {
    item.remove();
});
/* advertising.forEach(function (item) { //Альтернативный вариант написания функции
    item.remove();
}); */


/* 2) Изменить жанр фильма, поменять "комедия" на "драма" */
const genre = document.querySelector('.promo__genre');
/* genre.forEach(item => { //Решение при получении элемента при помощи querySelectorAll
    item.textContent = 'драма';
}); */
genre.textContent = 'драма'; //Решение при получении элемента при помощи querySelector

/* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS */
const BG = document.querySelectorAll('.promo__bg');
/* BG[0].style.background = 'url(../img/bg.jpg) center center/cover no-repeat'; */ //1 вариант 
BG[0].style.backgroundImage = 'url("img/bg.jpg")'; //2 вариант

/* 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту  */
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ""; //очистил

/* 5) Добавить нумерацию выведенных фильмов  */
movieDB.movies.sort(); //отсортировал

movieDB.movies.forEach((film, i) => { //оператор += добавляет значение
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} - ${film}
            <div class="delete"></div>
        </li>
    `;
});