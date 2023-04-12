import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faTemperatureHigh,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { WEATHERCODES } from "../../constants";
import useWeatherAPI from "../../hooks/useWeatherAPI";
import { useCountryContext } from "../../contexts/countryContext";
import { CountryData, WeatherCode } from "../../types";

export const Weather = () => {
  const country: CountryData = useCountryContext();

  const { data: weather } = useWeatherAPI(country.latlng[0], country.latlng[1]);
  const [weatherCode, setWeatherCode]: any = useState(null);

  useEffect(() => {
    if (weather) {
      const matchedCode: WeatherCode | undefined = WEATHERCODES.find(
        (wc: WeatherCode) => wc.codes.find((c) => c === weather.weathercode)
      );
      if (matchedCode) {
        setWeatherCode(matchedCode);
      } else if (!matchedCode && weather.weathercode === 0) {
        setWeatherCode(WEATHERCODES[0]);
      }
    }
  }, [weather]);
  return (
    <>
      <div className="font-bold text-gray-300 text-center">
        <p className="text-4xl mb-4 text-center">
          <FontAwesomeIcon icon={faTemperatureHigh} />
        </p>
        <p className="text-3xl whitespace-nowrap">{`${weather?.temperature}˚C`}</p>
      </div>
      <div className="font-bold text-gray-300 text-center">
        <p className="text-4xl mb-4 text-center">
          <FontAwesomeIcon
            icon={weatherCode === null ? faSpinner : weatherCode.icon}
          />
        </p>
        <p className="text-3xl whitespace-nowrap">
          {weatherCode === null ? "No data" : weatherCode.name}
        </p>
      </div>
      <div className="font-bold text-gray-300 text-center">
        <p className="text-4xl mb-4 text-center">
          <FontAwesomeIcon icon={faWind} />
        </p>
        <p className="text-3xl whitespace-nowrap">{`${weather?.windspeed} km/h`}</p>
      </div>
    </>
  );
};
