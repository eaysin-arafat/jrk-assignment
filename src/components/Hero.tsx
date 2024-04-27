const Hero = () => {
  return (
    <div>
      <div className="flex relative bg-gradient-to-r from-[#FFE481] via-[#FFE173] to-[#FFD63F] pt-3">
        <div className="">
          <div className="px-6 pb-3 w-[68%] md:w-[85%]">
            <h1 className="heading">
              We <span className="text-greenTextColor">Provide High</span>
            </h1>
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

          <div className="bg-orangeColor w-full flex items-end gap-1 px-6 py-5">
            <button className="primary-btn">Buy Now</button>
            <button className="flex items-center justify-center gap-1 text-[4px] font-semibold">
              <img
                src="/icons/redirect.png"
                className="text-whiteColor bg-whiteColor p-[1px] rounded-sm"
                width="7"
                alt=""
              />
              All Product
            </button>
          </div>
        </div>

        <div>
          <img
            className="absolute top-0 right-6"
            src="/hero/hero-bg.png"
            width="110"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-[-32px] transform">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] px-2 pt-2 rounded-xl flex flex-col items-center justify-between"
          >
            <img
              src="/hero/sofa.png"
              width="40"
              className="flex items-center justify-end"
              alt=""
            />
            <p className="text-[8px] font-medium pt-1.5 pb-1">Sofa</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
