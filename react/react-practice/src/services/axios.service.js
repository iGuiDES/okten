import axios from "axios";
import {createBrowserHistory} from 'history';

import {baseURL} from "../constants";
import {authService} from "./auth.service";

const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
   const access = authService.getAccessToken();

   if (access) {
       config.headers.Authorization = `Bearer ${access}`;
   }

   return config;
});

let isRefreshing = false;

axiosService.interceptors.response.use((config) => {
    return config;
},
    async (errors) => {
        const refresh = authService.getRefreshToken();

        if (errors.response?.status === 401 && errors.config && !isRefreshing && refresh) {
            isRefreshing = true;
            try {
                const {data} = await authService.refresh(refresh);
                authService.setTokens(data);
            } catch (e) {
                authService.deleteTokens();
                return history.replace('/login?ExpSession=true');
            }
            isRefreshing = false;
            return axiosService(errors.config);
        }
        return Promise.reject(errors);
    }
);

export {
    axiosService,
    history
}