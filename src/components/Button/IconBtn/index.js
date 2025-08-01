"use client";

import Home from "@/assets/icons/home.svg";
import ExportedImage from "next-image-export-optimizer";

const IconBtn = ({
  text = "Home",
  className = "",
  icon = Home,
  rightIcon = "",
  heigh = "h-[38px]",
  BgClass = "bg-[#070710]",
  TxClass = "text-[#fff]",
  TxSize = "text-[14px]",
  px = "px-[16px]",
  py = "py-[8px]",
  rounded = "rounded-[20px]",
  no_border = false,
  borderColor = "border-[#ffffff1a]",
  onClick = () => {},
  capitalize = true,
  iconHeight,
}) => {
  return (
    <div
      className={`${className} ${px} ${py} flex flex-row justify-center items-center gap-2 ${rounded} ${heigh} ${BgClass} ${no_border ?'':'border'} ${!no_border? borderColor:''} transition hover:brightness-125 hover:shadow-[0px_0px_10px_#ee82ee88]`}
      onClick={(e) => onClick()}
    >
      {icon && (
        <ExportedImage
          src={icon}
          height={iconHeight ? iconHeight : ""}
          alt="image"
          className = 'max-w-[30px] max-h-[30px]'
          placeholder=""
        />
      )}
      {text && (
        <p
          className={`${TxClass} ${TxSize} font-semibold whitespace-nowrap ${
            capitalize ? "capitalize" : ""
          }`}
        >
          {text}
        </p>
      )}
      {rightIcon && <ExportedImage src={rightIcon} alt="image" placeholder="" />}
    </div>
  );
};

export default IconBtn;
