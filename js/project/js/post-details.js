'use strict';

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postID = localStorage.getItem('postID');
const userID = localStorage.getItem('userID');

const postContainer = document.getElementById('post-container');

try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(value => value.json())
        .then(posts => {
            const headingPost = document.getElementById('heading-post');
            const postInformation = document.createElement('div');
            const id = document.createElement('div');
            const title = document.createElement('h3');
            const body = document.createElement('p');

            postInformation.classList.add('post-information');

            for (const post in posts) {

                headingPost.innerText = `Comments title: ${posts['title']}`;

                id.innerHTML = `<p>ID : ${posts['id']}</p>`;
                title.innerText = `${posts['title']}`;
                body.innerText = `${posts['body']}`;

            }

            postInformation.append(id, title, body);

            document.getElementById('post').appendChild(postInformation);

        });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {

                const comments = document.getElementById('comments');
                const postBlock = document.createElement('div');
                const groupIDs = document.createElement('div');
                const name = document.createElement('h2');
                const email = document.createElement('p');
                const body = document.createElement('p');

                postBlock.classList.add('post-block');
                email.classList.add('user-email');

                comments.innerText = `Comment from the user:`;

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