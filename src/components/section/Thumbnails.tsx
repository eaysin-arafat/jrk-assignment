import useWindow from "../../hooks/useWindow";
import SectionLayout from "../../layout/SectionLayout";
import ThumbnailCard from "../card/ThumbnailCard";

const Thumbnail = () => {
  // Using the useWindow hook to determine window size
  const w1024 = useWindow(1024);
  const w768 = useWindow(768);

  return (
    <SectionLayout>
      <div className="flex gap-2 items-center mt-6">
        {/* First Section */}
        <div className="w-[60%]">
          <ThumbnailCard
            color={{
              primaryColor: "bg-[#A8E1E4]",
              secondColor: "bg-[#49A9AE]",
            }}
            image={{
              alt: "big sail",
              url: "/thumbnail/big-sail.png",
              width: w768 ? "95" : w1024 ? "180" : "200",
              imageClassName: "ml-1 md:ml-8 lg:ml-10",
            }}
            height="h-[110px] md:h-[160px] lg:h-[200px]"
            childrenClassName="pt-2 lg:pt-5 pr-7 md:pr-16"
          >
            {/* Content for the first ThumbnailCard */}
            <>
              <h3 className="font-italianno text-[12px] md:text-[20px] lg:text-[30px] pr-5 md:pr-9">
                Furniture
              </h3>
              <h2 className="font-italianno text-[18px] md:text-[25px] lg:text-[38px] mt-[-6px]">
                Big Sale
              </h2>
              <button className="inner-shadow-thamnail text font-semibold px-2 md:px-3 pt-[3px] py-[2px] rounded-full transform translate-y-[-8px] md:translate-y-[0px]">
                Order Now
              </button>
            </>
          </ThumbnailCard>
        </div>

        {/* Second Section */}
        <div className="w-[40%] space-y-2">
          <ThumbnailCard
            color={{
              primaryColor: "bg-[#FFCDA7] pt-[7px] lg:pt-[13px]",
              secondColor: "bg-[#EEA874]",
            }}
            primaryColorWidth="w-[25%]"
            image={{
              alt: "big sail",
              url: "/thumbnail/big-sail.png",
              width: w768 ? "55" : w1024 ? "90" : "110",
              imageClassName: "!bottom-1 md:ml-10",
            }}
            height="h-[50px] md:h-[75px] lg:h-[95px]"
            childrenClassName="!text-center ml-3 pl-9 pt-1 w-[75%]"
          >
            {/* Content for the second ThumbnailCard */}
            <>
              <h3 className="font-italianno text-[8px] md:text-[15px] lg:text-[20px]">
                Furniture
              </h3>
              <h2 className="font-italianno text mt-[-5px]">Big Sale</h2>
              <button className="inner-shadow-thamnail-modern thamnail-btn transform translate-y-[-5px]">
                Order Now
              </button>
            </>
          </ThumbnailCard>

          <div className="h-[50%]">
            <ThumbnailCard
              color={{
                primaryColor: "bg-[#E2FBB2]",
                secondColor: "bg-[#B9DB75]",
              }}
              image={{
                alt: "big sail",
                url: "/thumbnail/home-confort.png",
                width: w768 ? "70" : w1024 ? "90" : "120",
                imageClassName: "!bottom-[2px] md:ml-[30px] items-center",
              }}
              primaryColorWidth="w-[50%]"
              childrenClassName="!pt-1 md:pr-7"
              height="h-[50px] md:h-[75px] lg:h-[95px]"
            >
              {/* Content for the third ThumbnailCard */}
              <>
                <h3 className="font-italianno text-[10px] md:text-[15px] lg:text-[20px]">
                  Home Comfort
                </h3>
                <button className="inner-shadow-thamnail-comfort thamnail-btn">
                  Order Now
                </button>
              </>
            </ThumbnailCard>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Thumbnail;
