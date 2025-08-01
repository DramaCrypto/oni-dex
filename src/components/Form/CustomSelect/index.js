const CustomSelect = ({
  label = "",
  required = false,
  placeholder = "",
  options = [
    {
      value: "",
      label: "All",
    },
  ],
  labelClass = "text-[16px] leading-[25px] text-[#7073A6]",
  inputClass = "text-[18px] text-[#86888C]",
  error = false,
  border = "border border-[#ffffff1a]",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <p className={`${labelClass} ${error ? "!text-[#AE2012]" : ""}`}>
          {label}
          {required && <span className="text-[#cac8ec]">*</span>}
        </p>
      )}
      <select
        placeholder={placeholder}
        className={`w-[100%] h-[49px] px-[17px] bg-[#21212D] ${border} rounded-[8px] outline-none border border-[#272838] ${inputClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
