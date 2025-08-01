import Telegram from "@/assets/icons/telegram.svg";
import ExportedImage from "next-image-export-optimizer";

const SmallIconOnlyBtn = ({ icon = Telegram, shadow = true }) => {
  return (
    <div
      className={`w-[42px] h-[40px] flex px-2 py-2 items-center justify-center bg-gradient-to-b from-[#1d1c2d] to-[#201f36] border border-[#ffffff0a] rounded-lg cursor-pointer ${
        shadow && "shadow-xl"
      }`}
    >
      <ExportedImage src={icon} alt="icon"  placeholder=""/>
    </div>
  );
};

export default SmallIconOnlyBtn;
