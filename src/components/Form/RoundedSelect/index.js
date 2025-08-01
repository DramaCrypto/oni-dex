const RoundedSelect = ({
  label = "Networks",
  optons = [
    { text: "BNB", value: "bnb" },
    // { text: "ETH", value: "eth" },
    // { text: "BSC", value: "bsc" },
    // { text: "opBNB", value: "opbnb" },
  ],
}) => {
  return (
    <div className="relative">
      <div className="px-1 absolute left-[25px] -top-2 text-[#7376aa] text-[11px] bg-[#0f1021]">
        {label}
      </div>
      <div className="h-[44px] max-sm:h-[44px] pr-3 rounded-[26px] border border-[#ffffff1a] bg-[#0f1021]">
        <select className="pl-[25px] py-[10px] pr-3 max-sm:pl-[19px] max-sm:py-[10px] rounded-[26px] bg-[#0f1021] outline-none text-white text-[16px]">
          {optons.map((item, index) => (
            <option value={item.value} key={index}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RoundedSelect;
