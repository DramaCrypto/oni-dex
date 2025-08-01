import sal from "sal.js";
import React, { useEffect } from "react";

const DefaultCard = ({
  children,
  header = "Security Detection",
  footer = false,
  footerWrapper,
}) => {

  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  return (
    <div className="bg-[#1B1B1B] rounded-2xl  bg-flashlight">
      <div className="p-7 max-sm:p-4 border-b border-b-[#ffffff1a]">
        <p className="text-[24px] text-white font-bold">{header}</p>
      </div>
      <div className="p-7 max-sm:p-4">{children}</div>
      {footer && (
        <div className="border-t border-t-[#ffffff1a] p-7">{footerWrapper}</div>
      )}
    </div>
  );
};

export default DefaultCard;
