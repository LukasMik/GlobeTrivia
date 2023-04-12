import { NavLink } from "react-router-dom";
import { CountryData } from "../types";

interface IProps {
  country: CountryData;
}

const CountryItem = ({ country }: IProps) => {
  return (
    <NavLink to={`/country-detail/${country.cca2}`}>
      <div className="w-52 group">
        <div className="relative overflow-hidden m-1 transform hover:scale-105 transition-all rounded-md hover:rounded-xl">
          <img
            src={`https://source.unsplash.com/400x400?${
              country.capital ? country.capital[0] : country.name.common
            }`}
            className="w-full h-52 object-cover bg-gray-300"
            alt="Country Photo"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50 h-20 group-hover:h-full card-content transition-all duration-200">
            <h2 className="text-lg font-bold line-clamp-1 group-hover:line-clamp-4">
              {country.name.common}
            </h2>
            <p className="text-sm line-clamp-1 group-hover:line-clamp-4">
              {country.region}{" "}
              {country.subregion ? `, ${country.subregion}` : ""}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryItem;
