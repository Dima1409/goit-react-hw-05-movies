import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7df42cbfe556b51b9350073f107b848c';
const TREND_DAY = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
// const ID_URL = '';

const getMovieTrendDay = async () => {
    try {
        const {data} = await axios.get(`${TREND_DAY}`);
        return data;
    }
    catch(error) {
        return console.log(error);
    }
}


export {getMovieTrendDay};