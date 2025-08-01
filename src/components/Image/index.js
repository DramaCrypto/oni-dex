import { useEffect, useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";

const MyImage = ({ src = undefined, height = 'pb-[100%]', round = 'rounded-2xl', size = 'w-full', object_fit = 'object-cover' }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }
  const image = useRef()
  useEffect(() => {
    if (image.current.complete) setIsLoading(false)
  }, [image.current?.complete])

  return (
    <div className={size}>
      <div className={`relative w-full h-0 ${height} ${round} overflow-hidden`}>
        <div className="absolute w-full h-full top-0 left-0 ">
          <div className={`absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#dd00ac] to-[#7130c3]  ${!isLoading ? 'opacity-0' : 'opacity-100'}`}></div>
          <Image ref={image} src={src} alt="" className={`w-full h-full ${object_fit} transition-all duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`} onLoad={handleLoad} loader={src} />
        </div>
      </div>
    </div>
  );
};

export default MyImage;
