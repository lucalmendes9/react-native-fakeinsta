import axios from  'axios';

const api = axios.create({
    baseURL: 'https://back-insta.herokuapp.com'
})

export default api;