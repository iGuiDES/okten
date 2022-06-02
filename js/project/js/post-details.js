'use strict';

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postID = localStorage.getItem('postID');
const postContainer = document.getElementById('post-container');

try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
                const postBlock = document.createElement('div');
                const groupIDs = document.createElement('div');
                const name = document.createElement('h2');
                const email = document.createElement('p');
                const body = document.createElement('p');

                postBlock.classList.add('post-block');
                email.classList.add('user-email');

                groupIDs.innerHTML = `<p>PostID : ${comment.postId} && ID : ${comment.id}</p>`;
                name.innerText = comment.name;
                email.innerText = comment.email;
                body.innerText = comment.body;

                postBlock.append(groupIDs, name, email, body);
                postContainer.appendChild(postBlock);
            }
        });
} catch (e) {
    console.error(e);
}