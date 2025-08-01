const DefaultSelect = ({
  label = "Token Type",
  required = false,
  placeholder = "",
  optons = [],
  labelClass = 'text-[white] text-[14px]',
  error = false,
  border = 'border border-[#ffffff1a]'
  
}) => {
  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {label && (
        <p className={`${labelClass} ${error ? '!text-[#AE2012]' : ''}`}>
          {label}
          {required && <span className="text-[#cac8ec]">*</span>}
        </p>
      )}
      <select
        placeholder={placeholder}
        className={`w-[100%] h-[52px] p-4 bg-[#070710] ${border} rounded-[8px] outline-none text-xl text-[#86888C]`}
      >
        {optons.map((item, index) => (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefaultSelect;
