import axios from "axios";
import {useQuery} from "react-query";

import imgNotFound from '../assets/images/globe-video.gif'

const CountryItem = ({item}: any) => {

    const fetchImage = () => axios.get(`https://api.pexels.com/v1/search?query=${item.name.common}&per_page=1`,
        {
            headers: {
                Authorization: 'k403MNKTY3Wn8DU8NYgJdULOqXXyUcmXor4mkdogpqg66HqbiZNtgGS0',
            },
        })
    const {isLoading, isError, error, data} = useQuery(['country-image', item.name.common], fetchImage, {
        select: (data) => data?.data?.photos?.[0]?.src?.medium ?? imgNotFound
    })
    const getImg = () => {
        if (isError) {
            return (
                <div className="bg-gray-400 w-52 h-52 pt-12">
                    <div className="text-center text-xs h-full object-cover"
                         style={{backgroundImage: "url('https://source.unsplash.com/400x400/?not-found')"}}>{(error as Error).message}</div>
                </div>
            )
        } else if (isLoading) {
            return (
                <div className="bg-gray-400 w-52 h-52 pt-12">
                    <div className="text-center text-xs">Loading...</div>
                </div>
            )
        } else {
            return <img src={data} className="w-full h-52 object-cover bg-gray-300" alt="Country Photo"/>
        }
    }
    return (
        <div className="w-52">
            <div
                className="relative overflow-hidden m-1 transform hover:scale-105 transition-all rounded-md hover:rounded-xl">
                {getImg()}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
                    <h2 className="text-lg font-bold line-clamp-1">{item.name.common}</h2>
                    <p className="text-sm">Region</p>
                </div>
            </div>
        </div>
    );
}

export default CountryItem;

