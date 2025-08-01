import React, { useState, useEffect } from "react";

type TimeNumber = {
  deadLine: number;
};

export default function BtnTimer({ deadLine }: TimeNumber) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      const currentDate: any = Date.now() / 1000;
      const diff = deadLine - currentDate;
      const dayNum = diff > 0 ? Math.floor(diff / 60 / 60 / 24) : 0;
      const hourNum = diff > 0 ? Math.floor(diff / 60 / 60) % 24 : 0;
      const minNum = diff > 0 ? Math.floor(diff / 60) % 60 : 0;
      const secNum = diff > 0 ? Math.floor(diff) % 60 : 0;

      if (currentDate < deadLine) {
        setDays(dayNum);
        setHours(hourNum);
        setMinutes(minNum);
        setSeconds(secNum);
      } else {
      }
    }, 0);
    return () => {
      clearInterval(myInterval);
    };
  }, [deadLine]);

  return (
    <div className="flex items-center gap-2 max-lg:gap-1">
      <span className="rounded-full text-white text-[22px] max-lg:text-[16px]  bg-[#12121F] px-10 max-xl:px-[14px] py-3 max-md:px-5 max-md:py-1">
        {days < 10 ? `0${days}` : days} 
      </span>:
      <span className="rounded-full text-white text-[22px] max-lg:text-[16px]  bg-[#12121F] px-10 max-xl:px-[14px] py-3 max-md:px-5 max-md:py-1">
        {hours < 10 ? `0${hours}` : hours}{" "}
      </span>:
      <span className="rounded-full text-white text-[22px] max-lg:text-[16px]  bg-[#12121F] px-10 max-xl:px-[14px] py-3 max-md:px-5 max-md:py-1">
        {minutes < 10 ? `0${minutes}` : minutes}
      </span>
    </div>
  );
}
