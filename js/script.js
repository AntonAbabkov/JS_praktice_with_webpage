/* 5 практика. Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //Если обернуть все скрипты в метод addEventListener с атрибутом DOMContentLoaded и последующей callBack функцией, тогда скрипты начнут работать только после полной загрузки DOM структуры. Код нужно помещать в тело функции.
    const movieDB = { //Изначальная БД
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    /* объявление переменных оформил одним списком */
    const advertising = document.querySelectorAll('.promo__adv img'),
                genre = document.querySelector('.promo__genre'),
                   BG = document.querySelectorAll('.promo__bg'),
            movieList = document.querySelector('.promo__interactive-list'),
              addForm = document.querySelector('form.add'),
             addInput = addForm.querySelector('.adding__input'),
             checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {         //Создание события
        event.preventDefault();                             //отмена стандартного поведения браузера
        let newFilm = addInput.value;                       //Новая переменная, в которую поместится введённый текст
        const favorite = checkbox.checked;                  //Переменная для проверки отметки чекбокса.
        if (newFilm) {                                      //проверка на пустую строку.
            if (newFilm.length > 21) {                      //Проверка на длинну символов
                newFilm = `${newFilm.substring(0, 22)}...`; //Метод substring делает вырез из строки по заданным индексам.
            }
            movieDB.movies.push(newFilm);                   //Добавление нового фильма в БД
            sortArr(movieDB.movies);                        //отсортировали обновлённый список
            createMovieList(movieDB.movies, movieList);     //Сформировали новый список на странице
        }
        if (favorite) {                                     //Проверка на добавление либимого фильма
            console.log('Добавляем любимый фильм');   
        }
        event.target.reset();                               //сбросили надпись в области действия. в данном случае это поле ввода текста
    });

    const deleteAdv = (arr) => { //функция для удаления рекламы
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {                             //Функция с изменениями текста и зф.
        genre.textContent = 'Драма';                        //замена текста
        BG[0].style.backgroundImage = 'url("img/bg.jpg")';  //изменение заднего фона
    };
    
    const sortArr = (arr) => { //создание функции сортировки
        arr.sort();
    };
    
    /* movieList.innerHTML = ""; */ //стёр старый список фильмов
    
    movieDB.movies.sort(); //отсортировал изначальный список
    
    
    function createMovieList(films, parent) { //Функция для автоматической генерации списка фильмов.
        parent.innerHTML = "";                //Стёр старый список фильмов
        sortArr(films);                       //Сортировка списка фильмов
        films.forEach((film, i) => {          //оператор += добавляет новое значение к уже имеющемуся
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {  //Получаем список всех элементов .delete и сразу назначем перебор forEach.
            btn.addEventListener('click', () => {                   //создали событие по клику.
                btn.parentElement.remove();                         //Удаление родительского элемента(названте фильма к которому подвешенна корзина при помощи CSS)
                movieDB.movies.splice(i, 1);                        //Удаление элемента массива (названия фильма) из БД
                
                createMovieList(films, parent);                     //Пересоздание списка для правильной нумерации после удаления 1 названия
            });
        });
    }

    

/* 6 практика. Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


    //вызов функций
    deleteAdv(advertising);                     //удаление рекламы
    makeChanges();                              //Замена комедии на драму
    createMovieList(movieDB.movies, movieList); //Создание нового отсортированного списка

});