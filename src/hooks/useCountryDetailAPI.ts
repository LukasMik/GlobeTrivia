import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { CountryData, QueryOptions } from "../types";

interface IRequestParams {
  cca2: string | undefined;
}

const fetchCountry = async (params: IRequestParams): Promise<CountryData> => {
  const data = await axios.get<CountryData[]>(
    `https://restcountries.com/v3.1/alpha/${params.cca2}`
  );
  return {
    name: data.data[0].name,
    region: data.data[0].region,
    subregion: data.data[0].subregion,
    population: data.data[0].population,
    currencies: data.data[0].currencies,
    capital: data.data[0].capital,
    languages: data.data[0].languages,
    area: data.data[0].area,
    timezones: data.data[0].timezones,
    flags: data.data[0].flags,
    flag: data.data[0].flag,
    latlng: data.data[0].latlng,
    cca2: data.data[0].cca2,
  };
};
const useCountryDetailAPI = (
  params: IRequestParams,
  options: QueryOptions<CountryData>
): UseQueryResult<CountryData> => {
  return useQuery(
    ["country-detail", params.cca2] as QueryKey,
    () => fetchCountry(params),
    options
  );
};

export default useCountryDetailAPI;
