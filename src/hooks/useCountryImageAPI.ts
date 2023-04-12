import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import imgNotFound from "../assets/images/globe-video.gif";

const fetchImage = async (name: string, quantity: number = 1) =>
  await axios.get(
    `https://api.pexels.com/v1/search?query=${name}&per_page=${quantity}`,
    {
      headers: {
        Authorization:
          "k403MNKTY3Wn8DU8NYgJdULOqXXyUcmXor4mkdogpqg66HqbiZNtgGS0",
      },
    }
  );

const useCountryImageAPI = (name: string, quantity: number = 1) => {
  return useQuery(
    ["country-image", name, quantity],
    () => fetchImage(name, quantity),
    {
      enabled: !!name,
      select: (data: AxiosResponse<any>) => data?.data?.photos ?? imgNotFound,
    }
  );
};

export default useCountryImageAPI;
