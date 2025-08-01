"use client";

import { useRouter } from "next/navigation";

import Right from "@/assets/icons/small-right.svg";
import ExportedImage from "next-image-export-optimizer";

import {
  GAMES,
  GAMESPHERES,
  GAMESPHEREDASH,
} from "@/components/Layouts/SideBar/menu_index";

const NavItem = ({
  text = "Presales",
  img = 'grid',
  icon,
  right = false,
  BgClass = "bg-[#070710]",
  active = false,
  childItems = "",
  path = "",
  index = "",
  onClick = "",
  onCloseMenu1,
  onCloseMenu2,
  setActive,
  state,
}) => {
  const router = useRouter();
  const handleClick = () => {

    if (childItems) {

      onClick && onClick();
    } else {
      router.push(path);
      onClick && onClick();
    }
    onCloseMenu1 && onCloseMenu1()
  };

  const handleItemClick = (url, idx) => {
    router.push(url);
    onCloseMenu2 && onCloseMenu2()
    setActive && setActive(idx);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-x-4 py-4 pl-10 pr-2.5 relative cursor-pointer ${BgClass}`}
        style={{ background: `${active && index !== -1 ? "#0f1021" : ""}` }}
        onClick={() => handleClick()}
      >
        <div className="relative w-[32px] overflow-hidden h-[32px] border border-[#ffffff0a] flex items-center justify-center text-[24px] rounded-lg bg-gradient-to-b from-[#1d1c2d] to-[#201f36]">
          {icon ? <div className={`${active && index !== -1 ? 'text-[#7064e9]' : 'text-[#7376aa]'} `}>{icon}</div> :
            <i className={`z-[1] feather-${img} ${active && index !== -1 ? 'text-[#7064e9]' : 'text-[#7376aa]'}`}></i>
          }
          {active && index !== -1 && <div className="absolute w-[16px] h-[16px] bg-[#7064e999] bottom-[-10px] blur-[2px]"></div>}
        </div>
        <p className={`text-[16px] capitalize ${active && index !== -1 ? 'text-[#7064e9]' : 'text-[#7376aa]'}`}>
          {text}
        </p>
        {right && <ExportedImage src={Right} alt="right" height={20} placeholder="" />}
        {active && index !== -1 && (
          <div className="h-[52px] w-[6px] absolute right-0 top-0 bg-[#7064e9] rounded-l-2xl"></div>
        )}
        {state && (
          <div
            className={`text-[#fff] text-[12px] px-3 rounded-full bg-gradient-to-r ${
              [GAMESPHERES, GAMESPHEREDASH, GAMES].includes(index)
                ? 'from-[#009ad2] to-[#174150]'
                : 'from-[#dd00ac] to-[#7130c3]'
            }`}
          >
            {state}
          </div>
        )}
      </div>
      {childItems && active && (
        <div className="flex flex-col gap-3 mt-3" >
          {childItems.map((item, k) => (
            <div
              className="py-[8px] pl-[52px] flex flex-row gap-3 items-center cursor-pointer"
              key={k}
              onClick={() => handleItemClick(item.path, item.index)}
              style={{ background: `${item.active ? "#0f1021" : ""}` }}
            >
              <div className={`w-[8px] h-[8px] ${item.active ? "bg-[#7064e9]" : "bg-[#7376aa]"}  rounded-full`}
              ></div>
              <p className={`text-md ${item.active ? "text-[#7064e9]" : "text-[#7376aa]"} `}
              >
                {item.label}
              </p>
              {item?.state && <div className=" text-[#fff] text-[12px] px-3  rounded-full  bg-gradient-to-r from-[#dd00ac] to-[#7130c3]  ">
                {item?.state}
              </div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
