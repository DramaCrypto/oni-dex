"use client";

const ButtonColor = ({
  text = "Home",
  className = "",
  icon,
  rightIcon = "",
  heigh = "h-[38px]",
  BgClass = "bg-gradient-to-r from-[#dd00ac] to-[#7130c3]",
  TxClass = "text-[#CCCEEF]",
  TxSize = "text-[14px]",
  px = "px-[16px]",
  py = "py-[8px]",
  rounded = "rounded-[20px]",
  onClick = () => {},
  capitalize = true,
  iconHeight = "",
  disabled = false,
}) => {
  return (
    <button
      className={`${className} ${px} ${py} relative z-1 flex items-center justify-center cursor-pointer px-2 py-3 transition-all hover:brightness-125 ${rounded} ${heigh} ${BgClass} hover:shadow-[0px_0px_10px_#ee82ee88] disabled:cursor-not-allowed disabled:shadow-none disabled:brightness-100 disabled:!bg-[#837698]  disabled:!bg-none`}
      onClick={(e) => onClick()}
      disabled={disabled}
    >
      {icon && (
        <img
          src={icon.src}
          height={iconHeight ? iconHeight : ""}
          alt="image"
          style={{ maxWidth: 30, maxHeight: 30, marginRight: 10 }}
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
      {rightIcon && <img src={rightIcon.src} alt="image" />}
    </button>
  );
};

export default ButtonColor;
