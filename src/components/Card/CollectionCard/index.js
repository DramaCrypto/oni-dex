import collection_img from "@/assets/image/nft-market/collection.svg";
import bookmark_img from "@/assets/image/nft-market/bookmark.svg";

const CollectionCard = ({ data }) => {
  return (
    <div className="w-full relative p-[23px] rounded-[16px] bg-[radial-gradient(33.67%_128.37%_at_-5.14%_-6.25%,_#3E1A61_0%,_#0F1021_100%)]">
      <img src={bookmark_img?.src} alt="bookmark" className="absolute top-0 left-0"/>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between">
          <h5 className="text-[18px] leading-[25px]">{data.name}</h5>

          <div className="flex flex-col">
            <p className="text-[16px] leading-[24px] text-[#7073A6]">
              Total Collections: {data?.totalItemCnt}
            </p>
            <p className="text-[16px] leading-[24px] text-[#7073A6]">
              Total NFT: {data?.totalNft}
            </p>
            <p className="text-[16px] leading-[24px] text-[#7073A6]">
              Status: {data?.status}
            </p>
          </div>
        </div>

        <div className="w-[112px] h-[112px] flex flex-row justify-center items-center rounded-full bg-[#191921]">
          <img src={collection_img?.src} alt="collection"/>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
