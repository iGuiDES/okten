'use strict';

// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули



try {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(value => value.json())
        .then(users => {

            for (const user of users) {

                const usersBlock = document.createElement('div');
                const id = document.createElement('div');
                const name = document.createElement('h3');
                const button = document.createElement('button');
                const link = document.createElement('a');

                usersBlock.classList.add('user-block');
                button.classList.add('button');

                link.setAttribute('href', './user-details.html');
                link.setAttribute('value', user.id);

                button.setAttribute('id', 'details');


                link.innerText = 'User Details';
                id.innerText = user.id;
                name.innerText = user.name;

                button.appendChild(link);
                usersBlock.append(id, name, button);
                document.querySelector('.container').appendChild(usersBlock);

                button.onclick = (e) => {
                    localStorage.setItem('userID', user.id);
                }
            }
        });

} catch (e) {
    console.error(e);
}



// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
