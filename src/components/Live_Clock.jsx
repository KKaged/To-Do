import React, { useState, useEffect } from "react";

const Live_Clock = () => {
  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
    name: "",
    day: 0,
    year: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const d = new Date();
      setTime({
        hour: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
        name: month[d.getMonth()],
        day: d.getDate(),
        year: d.getFullYear(),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col">
      <span className="font-bold text-2xl">
        {time.hour}:{time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
        {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </span>
      <span className="font-bold text-2xl">
        {time.name} {time.day}, {time.year}
      </span>
    </div>
  );
};

export default Live_Clock;
