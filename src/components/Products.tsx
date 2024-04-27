import ProductBg from "./ProductBg";
import Heading from "./core/Heading";

const Products = () => {
  return (
    <div className="mt-3 px-6">
      <div className="text-center mb-2">
        <Heading
          blackText="Populwe"
          greenText="We Have"
          className="uppercase"
        />
        <p className="text">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 ">
        {[1, 2, 3, 4].map((item) => (
          <>
            <ProductBg key={item}>
              <div className="py-1 pb-2 text-center flex flex-col items-center justify-center text-whiteColor">
                <img
                  src="/products/tulip-chair.png"
                  className="pb-1"
                  width="60"
                  alt=""
                />
                <h2 className="text-[6px] font-medium">
                  Tulip Chair Furniture
                </h2>
                <div className="flex gap-[2px] pb-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <img key={item} src="/icons/star.png" width="6" alt="" />
                  ))}
                </div>

                <p className="text-[6px] font-semibold">$12.09</p>

                <button className="text-[6px] font-semibold bg-orangeColor text-black px-1 rounded-sm">
                  Buy Now
                </button>
              </div>
            </ProductBg>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
