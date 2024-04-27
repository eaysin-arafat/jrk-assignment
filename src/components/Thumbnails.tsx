import useWindow from "../hooks/useWindow";
import ThumbnailSingle from "./ThumbnailSingle";

const Thumbnail = () => {
  const w1024 = useWindow(1024);
  const w768 = useWindow(768);

  return (
    <div className="flex gap-2 items-center mt-6 px-6 lg:px-36">
      <div className="w-[60%]">
        <ThumbnailSingle
          color={{
            primaryColor: "bg-[#A8E1E4]",
            secondColor: "bg-[#49A9AE]",
          }}
          image={{
            alt: "big sail",
            url: "/public/thumbnail/big-sail.png",
            width: w768 ? "120" : w1024 ? "180" : "200",
            imageClassName: "ml-1 md:ml-8 lg:ml-10",
          }}
          height="h-[140px] md:h-[160px] lg:h-[200px]"
          childrenClassName="pt-2 lg:pt-5 pr-7 md:pr-16"
        >
          <>
            <h3 className="font-italianno text-[12px] md:text-[20px] lg:text-[30px] pr-5 md:pr-9">
              Furniture
            </h3>
            <h2 className="font-italianno text-[18px] md:text-[25px] lg:text-[38px] mt-[-6px]">
              Big Sale
            </h2>
            <button className="inner-shadow-thamnail text font-semibold px-2 md:px-3 pt-[3px] py-[2px] rounded-full">
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
            width: w768 ? "70" : w1024 ? "90" : "110",
            imageClassName: "!bottom-1 md:ml-10",
          }}
          height="h-[65px] md:h-[75px] lg:h-[95px]"
          childrenClassName="!text-center ml-3 pl-9 pt-1 w-[75%]"
        >
          <>
            <h3 className="font-italianno text-[8px] md:text-[15px] lg:text-[20px]">
              Furniture
            </h3>
            <h2 className="font-italianno text mt-[-5px]">Big Sale</h2>
            <button className="inner-shadow-thamnail-modern thamnail-btn transform translate-y-[-5px]">
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
              width: w768 ? "70" : w1024 ? "90" : "120",
              imageClassName: "!bottom-[2px] md:ml-[30px] items-center",
            }}
            primaryColorWidth="w-[50%]"
            childrenClassName="!pt-1"
            height="h-[65px] md:h-[75px] lg:h-[95px]"
          >
            <>
              <h3 className="font-italianno text-[10px] md:text-[15px] lg:text-[20px]">
                Home Comfort
              </h3>
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
