import React, { useState, useEffect } from "react";

type TimeNumber = {
  deadLine: number;
};

export default function Timer({
  deadLine
}: TimeNumber) {
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

      if (diff > 0) {
        setDays(dayNum);
        setHours(hourNum);
        setMinutes(minNum);
        setSeconds(secNum);
      } else {
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [deadLine]);

  const numClass = "w-full items-center justify-center flex text-[40px] max-xl:text-[32px] text-[#CCCEEF] font-[700] rounded-2xl bg-[#27283855]";
  const colClass ="w-1/3 p-5 max-xl:p-1 flex flex-col items-center justify-center rounded-2xl gap-5";
  const textClass = "max-md:hidden text-[10px]";

  return (
    <div className="flex w-full ">
      {days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ? null : (
        <div className="flex w-full justify-between gap-2">
          <div className={colClass}>
            <div className={numClass} style={{background: 'linear-gradient(180deg, #EA04D8 50%, #C315B5 50%)'}}>
              <span>
                {Math.floor(days / 10)} <div className="bottom"></div>
              </span>
              <span>
                {days % 10}
                <div className="bottom"></div>
              </span>
            </div>
            <div className={textClass}>DAYS</div>
          </div>
          <div className={colClass}>
            <div className={numClass} style={{background: 'linear-gradient(180deg, #EA04D8 50%, #C315B5 50%)'}}>
              <span>
                {Math.floor(hours / 10)}
                <div className="bottom"></div>
              </span>
              <span>
                {hours % 10}
                <div className="bottom"></div>
              </span>
            </div>
            <div className={textClass}>HOURS</div>
          </div>
          <div className={colClass}>
            <div className={numClass} style={{background: 'linear-gradient(180deg, #EA04D8 50%, #C315B5 50%)'}}>
              <span>
                {Math.floor(minutes / 10)}
                <div className="bottom"></div>
              </span>
              <span>
                {minutes % 10}
                <div className="bottom"></div>
              </span>
            </div>
            <div className={textClass}>MINUTES</div>
          </div>
          {/* <div className={colClass}>
            <div className={numClass}>
              <span>
                {Math.floor(seconds / 10)}
                <div className="bottom"></div>
              </span>
              <span>
                {seconds % 10}
                <div className="bottom"></div>
              </span>
            </div>
            <div className={textClass}>SECONDS</div>
          </div> */}
        </div>
      )}
    </div>
  );
}
