import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data)
}

export {
    carService
}