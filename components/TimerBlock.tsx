"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  hours: string;
  minutes: string;
  seconds: string;
};

export default function TimerBlock() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect((): (() => void) => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft(): TimeLeft {
    const now: Date = new Date();
    const endOfDay: Date = new Date();

    endOfDay.setHours(23, 59, 59, 999);

    const diff: number = endOfDay.getTime() - now.getTime();

    if (diff <= 0) {
      return {
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const hours: string = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
      2,
      "0"
    );

    const minutes: string = String(
      Math.floor((diff / (1000 * 60)) % 60)
    ).padStart(2, "0");

    const seconds: string = String(Math.floor((diff / 1000) % 60)).padStart(
      2,
      "0"
    );

    return {
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="bg-[#2b2e36] text-white overflow-hidden">
      <div className="text-center py-4 border-b border-white/10">
        <div className="text-xs mb-2">До конца акции осталось:</div>

        <div className="flex justify-center gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs opacity-70">часов</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs opacity-70">минут</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs opacity-70">секунд</div>
          </div>
        </div>
      </div>
    </div>
  );
}
