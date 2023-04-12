import React, { useEffect, useState } from "react";
import { useCountryContext } from "../../contexts/countryContext";

export const Time = () => {
  const country = useCountryContext();
  const [time, setTime] = useState("Loading...");
  useEffect(() => {
    const interval = setInterval(() => {
      const timezone: string =
        !country.timezones[0] || country.timezones[0] === "UTC"
          ? "UTC+00:00"
          : country.timezones[0];
      const offset: number = parseInt(timezone.substring(3), 10);
      const now: Date = new Date();
      now.setHours(now.getHours() + offset + 1);
      setTime(now.toLocaleTimeString("en-US", { timeZone: "UTC" }));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <p className="text-5xl md:text-8xl font-bold text-gray-300 whitespace-nowrap text-center">
      {time}
    </p>
  );
};
