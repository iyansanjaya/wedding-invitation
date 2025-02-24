"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-16T10:00:00").getTime(); // Pindahkan ke dalam useEffect

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft()); // Hitung waktu saat pertama kali di-render

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Tetap gunakan dependency array kosong

  return (
    <div className="flex gap-4 text-xl">
      <div className="flex flex-col items-center">
        <div className="font-bold text-3xl">{timeLeft.days}</div>
        <p className="text-base">Days</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-3xl">{timeLeft.hours}</div>
        <p className="text-base">Hours</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-3xl">{timeLeft.minutes}</div>
        <p className="text-base">Minutes</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-3xl">{timeLeft.seconds}</div>
        <p className="text-base">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
