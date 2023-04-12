import { useCountryContext } from "../../contexts/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const InfoList = () => {
  const country = useCountryContext();
  const languagesArray = Object.values(country.languages);
  const currencyArray = Object.values(country.currencies).map(
    (curr) => `${curr.name}, ${curr.symbol}`
  );
  return (
    <ul className="text-gray-200 text-lg flex flex-col gap-4">
      <li className="text-center md:text-left">
        Capital: <b className="ml-4 text-xl">{country.capital.join(", ")}</b>
      </li>
      <li className="text-center md:text-left">
        Population:
        <b className="ml-4 mr-2 text-xl">
          {country.population.toLocaleString()}
        </b>
        <FontAwesomeIcon icon={faUser} />
      </li>
      <li className="text-center md:text-left">
        Area:
        <b className="ml-4 text-xl">{country.area.toLocaleString()} km&#178;</b>
      </li>
      <li className="text-center md:text-left">
        Currencies:
        <b className="ml-4 text-xl">{currencyArray.join(" | ")}</b>
      </li>
      <li className="text-center md:text-left">
        Languages:
        <b className="ml-4 text-xl">{languagesArray.join(", ")}</b>
      </li>
      <li className="text-center md:text-left">
        Timezone:<b className="ml-4 text-xl">{country.timezones[0]}</b>
      </li>
      <li className="flex mx-auto md:ml-0">
        Flag:
        <img
          className="ml-4 h-8 w-auto transform transition-all flag relative z-20 inline"
          src={country.flags.png}
          alt={country.flag}
        />
      </li>
    </ul>
  );
};
