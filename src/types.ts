import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
> & {
  queryKeyGroups?: string[];
};

export interface CountryData {
  cca2: string;
  area: number;
  capital: string[] | [];
  currencies: Record<string, Currency>;
  flag: string;
  flags: Record<"png" | "svg" | "alt", string>;
  languages: Record<string, string>;
  latlng: number[];
  name: Record<string, string>;
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface WeatherCode {
  icon: IconDefinition;
  name: string;
  codes: number[];
}
