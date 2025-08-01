
//! import icons
import WarningIcon from "@/assets/icons/warning.svg";
import ExportedImage from "next-image-export-optimizer";

const Warning = ({ children, icon = true }) => {
  return (
    <div className="bg-[#7064e9]/[0.06] px-6 py-5 flex flex-row gap-3 rounded-[8px] border items-center border-[#B78103] max-sm:px-[14px] max-sm:py-2">
      {icon && <ExportedImage src={WarningIcon} alt="image" />}
      {children}
    </div>
  );
};

export default Warning;
