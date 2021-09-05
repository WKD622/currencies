import axios from 'axios';

const index = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/',
});

export default index;
