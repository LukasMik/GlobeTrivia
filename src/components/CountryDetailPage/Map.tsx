import getZoomLevel from "../../services/services";
import React from "react";
import { useCountryContext } from "../../contexts/countryContext";

export const Map = () => {
  const country = useCountryContext();
  return (
    <div className="w-full mt-24 transition-all transform map h-48 hover:h-96 rounded-xl">
      <iframe
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBodXAJQpskTRrHyjn6F0w-gP9JWZ2oEhI&center=${
          country.latlng[0]
        },${country.latlng[1]}&zoom=${getZoomLevel(country.area)}`}
        width="100%"
        height="100%"
        loading="lazy"
        className="rounded-xl opacity-60 hover:opacity-100 transition-all"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
