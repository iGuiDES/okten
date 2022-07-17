const getAllTodos = () => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())

const getAllAlbums = () => fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())

const getAllComments = () => fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())

const getAllPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

const getSinglePost = (id) => fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())

export {
    getAllTodos,
    getAllAlbums,
    getAllComments,
    getAllPosts,
    getSinglePost
}
