import SearchIcon from "@/assets/icons/search.svg";
import ExportedImage from "next-image-export-optimizer";

const CustomSearchInput = ({ onChange, value, className }) => {
  return (
    <div className={`relative max-sm:w-[100%] w-full ${className}`}>
      <input
        type="text"
        placeholder="Search NFTs..."
        className="w-[100%] h-[44px] pl-5 py-3 pr-11 rounded-[8px] border border-[#ffffff1a] bg-[#0f1021] text-[#7376aa] placeholder:text-[#7376aa] text-[16px] outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ExportedImage
        src={SearchIcon}
        alt="Search"
        className="absolute top-4 right-5"
      />
    </div>
  );
};

export default CustomSearchInput;
