import api from 'api';
import API_KEY from "config/apiKey";

export default function setup() {
    api.interceptors.request.use((config) => {
        if (!config.params) {
            config.params = {apiKey: API_KEY}
        } else {
            config.params['apiKey'] = API_KEY
        }
        config.url = `https://cors-anywhere.herokuapp.com/${config.baseURL}${config.url}`
        return config;
    })
}
