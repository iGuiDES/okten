'use strict';
// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const element of posts) {

            const usersPosts = document.getElementById('users-posts');
            const userPost = document.createElement('div');
            userPost.classList.add('post');

            const usersId = document.createElement('span');
            const id = document.createElement('p');
            const title = document.createElement('p');

            usersId.innerText = element.userId;
            id.innerText = element.id;
            title.innerText = element.title;

            userPost.append(usersId, id, title);
            usersPosts.appendChild(userPost);

        }
    });


// 2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


try {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {

                const usersComments = document.getElementById('users-comments');
                const userComment = document.createElement('div');
                const ul = document.createElement('ul');

                const postID = document.createElement('p');
                const id = document.createElement('span');
                const name = document.createElement('h3');
                const email = document.createElement('li');
                const body = document.createElement('li');

                userComment.classList.add('comment');

                postID.innerText = comment.postId;
                id.innerText = comment.id;
                name.innerText = comment.name;
                email.innerText = comment.email;
                body.innerText = comment.body;

                ul.append(email, body);
                userComment.append(postID, id, name, ul);
                usersComments.appendChild(userComment);

            }
        });
} catch (e) {
    console.log(e);
}
