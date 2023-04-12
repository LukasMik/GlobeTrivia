import Header from "../Header";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import CountryItem from "../CountryItem";
import SearchBar from "../SearchBar";
import { CountryData } from "../../types";

const ExploreCountriesPage = () => {
  const [search, setSearch] = useState("");
  const fetchCountries = () =>
    axios.get<CountryData[]>("https://restcountries.com/v3.1/all");

  const { isLoading, isError, error, data } = useQuery(
    ["all-countries"],
    fetchCountries
  );

  if (isLoading)
    return <div className="mt-24 text-center text-2xl">Loading...</div>;

  if (isError)
    return (
      <div className="mt-24 text-center text-2xl">
        {(error as Error).message}
      </div>
    );

  const onQueryChange = (query: string) => setSearch(query);

  const filteredCountries = data?.data.filter((i: CountryData) =>
    i.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <Header
        heading="Countries information"
        underHeading="Select a country and find out some interesting facts"
      />
      <SearchBar
        placeholder="Find your country!"
        onQueryChange={onQueryChange}
      />
      <div className="flex flex-wrap mx-12 justify-center">
        {filteredCountries.length === 0 ? (
          <p className="text-center mt-12 text-3xl">No countries found..</p>
        ) : (
          filteredCountries.map((i: CountryData) => (
            <CountryItem key={i.cca2} country={i} />
          ))
        )}
      </div>
    </div>
  );
};
export default ExploreCountriesPage;
