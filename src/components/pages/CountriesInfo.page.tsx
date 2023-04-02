import Header from "../Header";
import {useQuery} from "react-query";
import axios from "axios";
import CountryItem from "../CountryItem";

const CountriesInfoPage = () => {
    const fetchCountries = () => axios.get('https://restcountries.com/v3.1/all')

    const {isLoading, isError, error, data} = useQuery('all-countries', fetchCountries)

    if (isLoading)
        return <div className="mt-24 text-center text-2xl">Loading...</div>

    if (isError)
        return <div className="mt-24 text-center text-2xl">{(error as Error).message}</div>

    return (
        <>
            <Header heading='Countries information'
                    underHeading='Select a country and find out some interesting facts'/>
            <div className="flex flex-wrap mx-12 justify-center">
                {data?.data.map((c: any) => <CountryItem key={c.name.common} item={c}/>)}
            </div>
        </>
    );
}

export default CountriesInfoPage;