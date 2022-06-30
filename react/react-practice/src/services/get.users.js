const getUsersFetch = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

export {
    getUsersFetch
};