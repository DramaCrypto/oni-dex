//! import icon
import ExportedImage from "next-image-export-optimizer";

const Input = ({
  label = "",
  value = "",
  onChange,
  placeholder = "",
  required = false,
  icon = "",
  type = 'text',
  size = 'md',
  labelClass = 'text-[white] text-[14px]',
  className = '',
  error = false,
  border = 'border border-[#ffffff1a]'

}) => {
  return (
    <div className="flex flex-col gap-2 w-[100%] relative">
      {label && (
        <p className={`${labelClass} ${error ? '!text-[#AE2012]' : ''}`}>
          {label}
          {required && <span className="text-[#cac8ec]">*</span>}
        </p>
      )}
      {icon && (
        <ExportedImage
          src={icon}
          alt="icon"
          className="absolute bottom-[16px] left-3 w-[18px]"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-[100%] ${border} bg-[#070710] ${size === 'md'? 'h-[52px]':'h-[46px]'} text-white outline-none ${size === 'md'? 'p-5':'p-3'} ${icon && "pl-11"} rounded-lg text-[#86888C] text-xl ${className} ${error ? '!border-[#AE2012]' : ''}`}
        onChange={(e)=>onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
