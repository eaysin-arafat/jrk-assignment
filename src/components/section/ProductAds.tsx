import useWindow from "../../hooks/useWindow";
import HorizontalPaddingLayout from "../../layout/HorizontalPaddingLayout";
import ProductBg from "../shared/ProductBg";

const ProductAds = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <HorizontalPaddingLayout>
      <div className="flex items-center gap-4 lg:gap-16 py-4">
        {/* Product main image */}
        <div className="">
          <ProductBg className="!bg-[#CFE9E1]">
            <div className="">
              <img src="/show/image.png" width="450" alt="" />
            </div>
          </ProductBg>
        </div>

        {/* Product lists */}
        <div className="flex flex-col gap-2 ">
          <ProductBg className="!bg-[#CFE9E1] !py-2.5">
            <img src="/show/image01.png" width="140" alt="" />
          </ProductBg>

          <ProductBg className="!bg-[#CFE9E1]">
            <img src="/show/image02.png" width={"140"} alt="" />
          </ProductBg>

          <ProductBg className="!bg-[#CFE9E1]">
            <img src="/show/image03.png" width="140" alt="" />
          </ProductBg>
        </div>

        {/* Product description */}
        <div className="">
          {/* Heading */}
          <h2 className="heading-primary font-semibold">
            <p>Designed to Fit</p>
            <p>Your Home</p>
          </h2>

          {/* Description */}
          <p className="text">
            Furniture Concepts is a contract furniture wholesaler serving the
            needs of group living environments including Community Housing,
            Treatment & Recovery Centers, Assisted Living, Camps, Conference
            Centers, Student Housing, Military Dorms & Quarters, and more!
            Behavioral Healthcare Facility Furniture.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-2">
            <button className="primary-btn">Shop Now</button>
            <button className="text flex items-center gap-[2px] pt-1">
              <img
                src="/icons/video-play.png"
                width={w768 ? "5" : w1024 ? "10" : "13"}
                className="pb-[2.5px]"
                alt=""
              />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </HorizontalPaddingLayout>
  );
};

export default ProductAds;
