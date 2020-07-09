import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c7a30fd77288d71f84a2f19110f800d4";

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY
        }
    });
    return data;
};