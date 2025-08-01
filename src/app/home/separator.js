import React from "react";

import separatorTop from "@/assets/image/separator/separator-top.svg";
import separatorBottom from "@/assets/image/separator/separator-bottom.svg";
import ExportedImage from "next-image-export-optimizer";

const Separator = ({ top }) => {
  return (
    <>
      {top ? (
        <div className="chatenai-separator w-full z-[2]">
          <ExportedImage className="w-full" src={separatorTop} alt="" />
        </div>
      ) : (
        <div className="chatenai-separator w-full">
          <ExportedImage className="w-full" src={separatorBottom} alt="" />
        </div>
      )}
    </>
  );
};

export default Separator;
