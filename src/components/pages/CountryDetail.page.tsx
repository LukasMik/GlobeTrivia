import { useCountryContext } from "../../contexts/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import useCountryImageAPI from "../../hooks/useCountryImageAPI";
import noImage from "../../assets/images/globe-video.gif";
import { InfoList } from "../CountryDetailPage/InfoList";
import { Time } from "../CountryDetailPage/Time";
import { CurrencyConversion } from "../CountryDetailPage/CurrencyConversion";
import { Weather } from "../CountryDetailPage/Weather";
import { Map } from "../CountryDetailPage/Map";

type direction = 1 | -1;

const CountryDetailPage = () => {
  const country = useCountryContext();

  const [activeImg, setActiveImg] = useState(0);
  const [opacity, setOpacity] = useState(0.65);
  const [opacityReverse, setOpacityReverse] = useState(0);

  const { data: image } = useCountryImageAPI(country.name.common, 7);

  const bgImage = image?.[activeImg]?.src.large2x ?? noImage;
  const getActiveImage = (direction: direction) => {
    if (image) {
      const imageCount = image.length;
      setActiveImg((activeImg + direction + imageCount) % imageCount);
    }
  };
  const opacityOnScroll = () => {
    const maxScrollY: number =
      document.documentElement.scrollHeight - window.innerHeight;
    const maxOpacity: number = 0.65;
    const step: number = maxOpacity / maxScrollY;
    setOpacity(Math.round((maxOpacity - window.scrollY * step) * 100) / 100);
    setOpacityReverse(Math.round(window.scrollY * step * 100) / 100);
  };
  window.addEventListener("scroll", () => opacityOnScroll());

  return (
    <>
      <div className="relative z-20 pt-20 w-11/12 2xl:w-2/3 mx-auto">
        <h2 className="text-gray-100 text-center md:text-left sm:text-6xl md:text-8xl mb-1 font-bold">
          {country.name.common}
        </h2>
        <h3 className="text-gray-200 md:pl-20 text-2xl md:text-4xl pb-8 text-center md:text-left">
          {country.region} {country.subregion ? `, ${country.subregion}` : ""}
        </h3>
        <div className="lg:flex items-stretch">
          <div className="mt-12 w-full lg:w-1/3 ">
            <InfoList />
          </div>
          <div className="w-full lg:w-2/3 pl-12 flex flex-col justify-around px-8 mt-12 lg:mt-0">
            <Time />
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-8 lg:mt-0">
              <CurrencyConversion />
              <Weather />
            </div>
          </div>
        </div>
        <Map />
      </div>
      <div className="h-screen"></div>
      <div
        className="fixed h-full w-screen top-0 flex justify-between"
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div
          className="h-screen w-48 flex items-center justify-center gradient-left-to-right transition-all sm:text-6xl left-0 z-20 cursor-pointer"
          onClick={() => getActiveImage(-1)}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ opacity: `${opacityReverse}` }}
          />
        </div>
        <div
          className="h-screen w-48 flex items-center justify-center gradient-right-to-left transition-all text-6xl right-0 z-20 cursor-pointer"
          onClick={() => getActiveImage(+1)}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ opacity: `${opacityReverse}` }}
          />
        </div>
      </div>
      <img
        className=" h-screen w-screen top-0 -z-20 object-cover fixed top-0"
        src={bgImage}
        alt="Country Image"
      />
    </>
  );
};

export default CountryDetailPage;
