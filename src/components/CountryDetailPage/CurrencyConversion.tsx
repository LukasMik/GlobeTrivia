import React from "react";
import useCurrencyAPI from "../../hooks/useCurrencyAPI";
import { useCountryContext } from "../../contexts/countryContext";

export const CurrencyConversion = () => {
  const country = useCountryContext();

  const { data: usdConversions } = useCurrencyAPI();

  const currencyName: string = Object.keys(country.currencies)[0];
  const currentConversion: string =
    usdConversions && usdConversions[currencyName]
      ? `${Math.round(usdConversions[currencyName] * 100) / 100} ${
          Object.values(country.currencies)[0].symbol
        }`
      : "No data";

  return (
    <div className="text-center font-bold text-gray-300">
      <p className="text-3xl whitespace-nowrap">US$ 1</p>
      <p className="text-3xl mb-2">=</p>
      <p className="text-3xl mb-2 whitespace-nowrap">{currentConversion}</p>
    </div>
  );
};
