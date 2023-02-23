import React, { useEffect, useState } from "react";
import "./countDown.css";

const CountDown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countDownDate = new Date("Mar 17, 2023 09:00:00").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes and seconds left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state variables with the new values
      setDays(days < 10 ? "0" + days : days.toString());
      setHours(hours < 10 ? "0" + hours : hours.toString());
      setMinutes(minutes < 10 ? "0" + minutes : minutes.toString());
      setSeconds(seconds < 10 ? "0" + seconds : seconds.toString());

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-10 sm:px-6 sm:py-8 h-auto max-w-screen-7xl mx-auto bg-black">
      <h3 className="text-2xl lg:text-6xl pb-12 text-center text-white tracking-widest celestraHeroFont">
        <span className="text-4xl lg:text-6xl text-red-500">C</span>ounter Until The Big
        Event
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 place-content-center gap-20">
     
        <li className="flex flex-col items-center text-white celestraHeroFont">
          <span className="text-7xl text-red-500 tracking-widest">
            {days}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-red-500">D</span>ays
          </div>
        </li>
        <li className="flex flex-col items-center text-white celestraHeroFont">
          <span className="text-7xl text-red-500 tracking-widest">
            {hours}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-red-500">H</span>ours
          </div>
        </li>
        <li className="flex flex-col items-center text-white celestraHeroFont">
          <span className="text-7xl text-red-500 tracking-widest">
            {minutes}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-red-500">M</span>inutes
          </div>
        </li>
        <li className="flex flex-col items-center text-white celestraHeroFont">
          <span className="text-7xl text-red-500 tracking-widest">
            {seconds}
          </span>
          <div className="text-2xl tracking-wider">
            <span className="text-3xl text-red-500">S</span>econds
          </div>
        </li>
       
      </ul>
    </div>
  );
};

export default CountDown;
