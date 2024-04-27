import useWindow from "../hooks/useWindow";
import HeroProductCard from "./HeroProductCard";
import Heading from "./core/Heading";

const Hero = () => {
  const w1024 = useWindow(1024);
  const w768 = useWindow(768);

  console.log(w1024);

  return (
    <div>
      <div className="flex relative bg-gradient-to-r from-[#FFE481] via-[#FFE173] to-[#FFD63F] pt-3">
        <div className="">
          <div className="px-6 lg:px-36 pb-3 w-[68%] md:w-[75%] lg:py-5">
            <Heading
              blackText="We"
              greenText="Provide High"
              className="text-start"
            />
            <h3 className="heading-primary mt-[-4px]">Quality Furniture</h3>

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

          <div className="bg-orangeColor flex items-center gap-1 md:gap-2 px-6 lg:px-36 py-5 lg:py-8">
            <button className="primary-btn">Buy Now</button>
            <button className="flex items-center justify-center gap-1  text font-semibold">
              <img
                src="/icons/redirect.png"
                className="text-whiteColor bg-whiteColor p-[1px] rounded-sm"
                width={w768 ? "7" : "10"}
                alt=""
              />
              All Product
            </button>
          </div>
        </div>

        <div>
          <img
            className="absolute top-0 right-6 lg:right-36"
            src="/hero/hero-bg.png"
            width={w768 ? "110" : w1024 ? "130" : "150"}
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-[-32px] lg:mt-[-45px] transform">
        <HeroProductCard title="Sofa" image="/hero/sofa.png" />

        <HeroProductCard title="Chair" image="/hero/chair.png" />

        <HeroProductCard title="Bed" image="/hero/bed.png" />
      </div>
    </div>
  );
};

export default Hero;
