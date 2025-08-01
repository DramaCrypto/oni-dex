import { useMemo } from "react"

const SwtichTab = ({label1 = "Live", label2 = "Finish", onChange, switched}) => {

  const contentClass = "flex items-center rounded-full h-[48px] max-md:h-[36px] bg-[#27262C]"
  const lockBtnClass1 = "px-10 max-md:px-5 min-w-[80px] max-md:min-w-[70px] text-center h-full rounded-full font-semibold text-white bg-gradient-to-r from-[#dd00ac] to-[#7130c3]"
  const lockBtnClass2 = "px-10 max-md:px-5 min-w-[80px] max-md:min-w-[70px] text-center h-full rounded-full font-semibold text-[#909090]"
  
  const butnBtnClass1 = "px-10 max-md:px-5 min-w-[80px] max-md:min-w-[70px] text-center h-full font-semibold rounded-full text-[#909090]"
  const butnBtnClass2 = "px-10 max-md:px-5 min-w-[80px] max-md:min-w-[70px] text-center h-full font-semibold bg-gradient-to-r from-[#dd00ac] to-[#7130c3] rounded-full text-[#fff] "

  const isChecked = useMemo(() => switched, [switched])
  const handleChange = (value) => {
    if (onChange) onChange(value);
  };

    return (
      <div className={contentClass}>
      <button className={!isChecked ? lockBtnClass1:lockBtnClass2} onClick={()=>handleChange(false)}>
        <span>{label1}</span>
      </button>

      <button className={!isChecked ? butnBtnClass1 : butnBtnClass2} onClick={()=>handleChange(true)}>

        <span>{label2}</span>
      </button>
    </div>
    );
  };
  
  export default SwtichTab;
  