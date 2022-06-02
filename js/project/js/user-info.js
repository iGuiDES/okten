'use strict';

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const userID = localStorage.getItem('userID');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(value => value.json())
    .then(user => {
        const infoBlock = document.getElementById('info-user');
        const postsBlock = document.createElement('div');
        const button = document.createElement('button');
        const link = document.createElement('a');

        for (const item in user) {

            const details = document.createElement('div');
            const subInformation = document.createElement('div');


            const ul = document.createElement('ul');
            const valueObj = user[item];

            details.classList.add('user-details-info');
            button.classList.add('button');
            button.setAttribute('id', 'user-post');
            link.setAttribute('href', '#');
            link.innerText = 'Post of current user';

            button.appendChild(link);

            if (typeof valueObj !== 'object') {

                details.innerHTML = `<div class="details-informations">${item} : ${user[item]}</div>`;

            } else {
                for (const item in valueObj) {
                    if (typeof valueObj[item] !== 'object') {

                        const li = document.createElement('li');
                        li.innerHTML = `<p class="addressing">${item} : ${valueObj[item]}</p>`;
                        ul.append(li);

                    } else {

                        const ol = document.createElement('ol');
                        for (const key in valueObj[item]) {

                            const li = document.createElement('li');
                            li.innerHTML = `<p class="geo">${key} : ${valueObj[item][key]}</p>`;
                            ol.appendChild(li);
                        }
                        ul.append(ol);
                    }
                    subInformation.append(ul);
                }
            }
            infoBlock.append(details, subInformation);
        }



        button.onclick = (ev) => {
            ev.preventDefault();

            fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {

                        const singlePost = document.createElement('div');
                        const titleLinks = document.createElement('a');

                        postsBlock.classList.add('posts-sections');
                        singlePost.classList.add('single-user-post');
                        titleLinks.classList.add('post-link');

                        titleLinks.innerText = `${post.id} - ${post.title}`;
                        titleLinks.setAttribute('href', './post-details.html');
                        titleLinks.setAttribute('postID', post.id);

                        singlePost.appendChild(titleLinks);
                        postsBlock.append(singlePost);

                        titleLinks.onclick = (ev) => {
                            localStorage.setItem('postID', post.id);
                        }

                    }
                    button.disabled = true;
                });
        }

        infoBlock.append(button, postsBlock);

    });

