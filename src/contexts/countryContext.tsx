import { createContext, ReactNode, useContext } from "react";
import { CountryData } from "../types";
import { useParams } from "react-router-dom";
import useCountryDetailAPI from "../hooks/useCountryDetailAPI";

interface IProps {
  children: ReactNode;
}

export const CountryContext = createContext<CountryData>({} as CountryData);

export const CountryContextProvider = ({ children }: IProps) => {
  const { cca2 } = useParams();
  const { isLoading, isError, error, data } = useCountryDetailAPI(
    { cca2: cca2 },
    { enabled: !!cca2 }
  );

  if (isLoading)
    return <div className="mt-24 text-center text-2xl">Loading...</div>;

  if (isError)
    return (
      <div className="mt-24 text-center text-2xl">
        {(error as Error).message}
      </div>
    );

  if (!data) return null;

  return (
    <CountryContext.Provider value={data}>{children}</CountryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CountryContext);
