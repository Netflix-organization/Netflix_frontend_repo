import axios from 'axios';

export default axios.create({
    baseURL:'http://13.247.214.191:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
