import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosInstance.get(urls.posts)
}

export {
    postService
}