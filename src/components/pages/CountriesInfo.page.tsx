import Header from "../Header";
import {useQuery} from "react-query";
import {useState} from "react";
import axios from "axios";
import CountryItem from "../CountryItem";
import SearchBar from "../SearchBar";

const CountriesInfoPage = () => {
    const [search, setSearch] = useState('')
    const fetchCountries = () => axios.get('https://restcountries.com/v3.1/all')

    const {isLoading, isError, error, data} = useQuery('all-countries', fetchCountries)

    if (isLoading)
        return <div className="mt-24 text-center text-2xl">Loading...</div>

    if (isError)
        return <div className="mt-24 text-center text-2xl">{(error as Error).message}</div>

    const onQueryChange = (query: string) => setSearch(query)

    const filteredCountries = data?.data.filter((i: any) => i.name.common.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='p-8'>
            <Header heading='Countries information'
                    underHeading='Select a country and find out some interesting facts'/>
            <SearchBar placeholder='Find your country!' onQueryChange={onQueryChange}/>
            <div className="flex flex-wrap mx-12 justify-center">
                {filteredCountries.length === 0 ?
                        <p className="text-center mt-12 text-3xl">No countries found..</p> :
                        filteredCountries.map((i: any) => <CountryItem key={i.name.common} item={i}/>)}
            </div>
        </div>
    );
}
export default CountriesInfoPage;