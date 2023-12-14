import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/movie/"
const baseUrl = axios.create({
    baseURL: `${BASE_URL}`,

});
baseUrl.interceptors.request.use(
    async function (config) {
        config.headers = {
            ...config.headers,
        };

        config.params = { api_key: "171b8590dc351100b0f90316718834ac" }
        // console.log("config header", config, userLang)
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
console.log(baseUrl, "baseUrl")
baseUrl.interceptors.response.use(function (response) {
    if (response.status === 401) {
    }
    return response;
});

export { baseUrl };
