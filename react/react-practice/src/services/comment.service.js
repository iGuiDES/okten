import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => axiosInstance.get(urls.comments)
}

export {
    commentService
}