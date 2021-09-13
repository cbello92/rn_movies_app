import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e123788078417d05258ddc1cd80a5dc6',
        language: 'es-ES'
    }
});

export default movieDB;