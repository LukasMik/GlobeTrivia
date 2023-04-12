import {useQuery} from "@tanstack/react-query";
import axios from "axios";

    const fetchWeather = (lat: number, lng: number) => axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`)
const useWeatherAPI = (lat: number, lng: number) => {
    return useQuery(['weather', lat, lng], () => fetchWeather(lat, lng), {
        enabled: !!lat && !!lng,
        select: (data) => data?.data?.current_weather
    })

}

export default useWeatherAPI
