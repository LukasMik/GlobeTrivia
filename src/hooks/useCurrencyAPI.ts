import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCurrency = () =>
  axios.get(
    `https://v6.exchangerate-api.com/v6/125cc12614ad35d3eaa18635/latest/USD`
  );
const useCurrencyAPI = () => {
  return useQuery(["currency USD"], () => fetchCurrency(), {
    select: (data) => data?.data?.conversion_rates,
  });
};

export default useCurrencyAPI;
