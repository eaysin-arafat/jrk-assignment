import useWindow from "../../hooks/useWindow";
import HorizontalPaddingLayout from "../../layout/HorizontalPaddingLayout";
import HeroProductCard from "../card/HeroProductCard";
import Heading from "../heading/Heading";

const Hero = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <div>
      {/* Hero section */}
      <div className="flex relative bg-gradient-to-r from-[#FFE481] via-[#FFE173] to-[#FFD63F] pt-3">
        <div className="">
          {/* Text content */}
          <HorizontalPaddingLayout>
            <div className="pb-3 w-[62%] md:w-[75%] lg:py-5">
              {/* Heading */}
              <Heading
                blackText="We"
                greenText="Provide High"
                className="text-start"
              />
              <h3 className="heading-primary mt-[-4px]">Quality Furniture</h3>

              {/* Description */}
              <p className="text pt-2.5">
                Choose and buy from wide and largest sofa collection of
                Bangladesh. Regal, the most loved and selling furniture brand in
                Bangladesh, brought to you modern, ergonomic, budget friendly
                sofa. Choose among various types of Sofa Such as Fabric Sofa,
                Wooden Sofa, Sofa cum beds, L-shaped Sofa at affordable prices,
                redefine your living room with our most unique ergonomically and
                quality crafted Sofas that suit your needs best.
              </p>
            </div>
          </HorizontalPaddingLayout>

          {/* Buttons */}
          <HorizontalPaddingLayout className="bg-orangeColor flex items-center gap-1 md:gap-2 py-5 lg:py-8">
            <button className="primary-btn">Buy Now</button>
            <button className="flex items-center justify-center gap-1  text font-semibold">
              <img
                src="/icons/redirect.png"
                className="text-whiteColor bg-whiteColor p-[1px] rounded-sm"
                width={w768 ? "7" : "10"} // Dynamic width based on window width
                alt=""
              />
              All Product
            </button>
          </HorizontalPaddingLayout>
        </div>

        {/* Image */}
        <div>
          <img
            className="absolute top-0 right-6 lg:right-56"
            src="/hero/hero-bg.png"
            width={w768 ? "110" : w1024 ? "130" : "150"} // Dynamic width based on window width
            alt=""
          />
        </div>
      </div>

      {/* Product cards */}
      <div className="flex items-center justify-center gap-2 mt-[-25px] lg:mt-[-45px] transform">
        {/* Render HeroProductCard for Sofa */}
        <HeroProductCard title="Sofa" image="/hero/sofa.png" />

        {/* Render HeroProductCard for Chair */}
        <HeroProductCard title="Chair" image="/hero/chair.png" />

        {/* Render HeroProductCard for Bed */}
        <HeroProductCard title="Bed" image="/hero/bed.png" />
      </div>
    </div>
  );
};

export default Hero;
