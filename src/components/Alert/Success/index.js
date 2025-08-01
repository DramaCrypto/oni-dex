//! import icons
import SuccessIcon from "@/assets/icons/success_01.svg";
import ExportedImage from "next-image-export-optimizer";

const AlertSuccess = ({ children }) => {
  return (
    <div className="bg-[#7064e9] px-6 py-5 flex flex-row items-start gap-2 rounded-[8px]">
      <ExportedImage src={SuccessIcon} alt="icon" />
      {children}
    </div>
  );
};

export default AlertSuccess;
