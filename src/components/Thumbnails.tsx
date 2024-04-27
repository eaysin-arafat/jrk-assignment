import ThumbnailSingle from "./ThumbnailSingle";
import React from "react";

const Thumbnail = () => {
  return (
    <div className="flex gap-2 items-center mt-4 px-6">
      <div className="w-[60%]">
        <ThumbnailSingle
          color={{
            primaryColor: "bg-[#A8E1E4]",
            secondColor: "bg-[#49A9AE]",
          }}
          image={{
            alt: "big sail",
            url: "/public/thumbnail/big-sail.png",
            width: "140",
          }}
          height="h-[140px]"
          childrenClassName="pt-2 pr-6"
        >
          <>
            <h3 className="font-italianno text-[12px] pr-5">Furniture</h3>
            <h2 className="font-italianno text-[18px] mt-[-6px]">Big Sale</h2>
            <button className="inner-shadow-thamnail text-[5px] font-semibold px-2 pt-[3px] py-[2px] rounded-full">
              Order Now
            </button>
          </>
        </ThumbnailSingle>
      </div>

      <div className="w-[40%] space-y-2">
        <ThumbnailSingle
          color={{
            primaryColor: "bg-[#FFCDA7] pt-[7px]",
            secondColor: "bg-[#EEA874]",
          }}
          primaryColorWidth="w-[25%]"
          image={{
            alt: "big sail",
            url: "/public/thumbnail/big-sail.png",
            width: "70",
            imageClassName: "!bottom-1 ml-2",
          }}
          height="h-[65px]"
          childrenClassName="!text-center ml-3 pl-9 pt-1 w-[75%]"
        >
          <>
            <h3 className="font-italianno text-[8px]">Furniture</h3>
            <h2 className="font-italianno text-[6px]">Big Sale</h2>
            <button className="inner-shadow-thamnail-modern thamnail-btn">
              Order Now
            </button>
          </>
        </ThumbnailSingle>

        <div className="h-[50%]">
          <ThumbnailSingle
            color={{
              primaryColor: "bg-[#E2FBB2]",
              secondColor: "bg-[#B9DB75]",
            }}
            image={{
              alt: "big sail",
              url: "/public/thumbnail/home-confort.png",
              width: "90",
              imageClassName: "!bottom-[2px] ml-[5px] items-center",
            }}
            primaryColorWidth="w-[50%]"
            childrenClassName="!pt-1"
            height="h-[65px]"
          >
            <>
              <h3 className="font-italianno text-[8px]">Home Comfort</h3>
              <button className="inner-shadow-thamnail-comfort thamnail-btn">
                Order Now
              </button>
            </>
          </ThumbnailSingle>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
