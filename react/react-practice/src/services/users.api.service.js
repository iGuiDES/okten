import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosInstance('').then(value => value);
const getUser = (id) => axiosInstance('/' + id).then(value => value.data);

export {
    getUsers, getUser
}