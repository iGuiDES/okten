import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsersPosts = (id) => axiosInstance('/' + id + '/posts').then(value => value);

export {
    getUsersPosts
};

