
import Search from "@/assets/icons/search.svg";
import ExportedImage from "next-image-export-optimizer";

const SearchInput = ({onChange, value, className}) => {

  return (
    <div className={`relative max-sm:w-[100%] w-[300px] ${className}`}>
      <input
        type="text"
        // placeholder={placeholder}
        className="w-[100%] h-[44px] pl-5 py-3 pr-11 rounded-[26px] border border-[#ffffff1a] bg-[#0f1021] text-[#7376aa] placeholder:text-[#7376aa] text-[16px] outline-none"
        value={value}
        onChange={onChange}
      />
      <ExportedImage
        src={Search}
        alt="image"
        className="absolute top-4 right-5"
      />
    </div>
  );
};

export default SearchInput;
