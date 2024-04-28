import ProductBg from "../shared/ProductBg";

type Props = {
  title: string; // Title of the product
  image: string; // Image URL of the product
  price: string; // Price of the product
  stars: number; // Number of stars for rating
};

const ProductCard = ({ title, image, price, stars }: Props) => {
  return (
    <>
      {/* Product background container */}
      <ProductBg>
        <div className="py-1 pb-2 text-center flex flex-col items-center justify-center text-whiteColor">
          {/* Product image */}
          <img src={image} className="pb-1 product-image" height="60" alt="" />

          {/* Product title */}
          <h2 className="text font-medium">{title}</h2>

          {/* Star rating */}
          <div className="flex gap-[2px] pb-1">
            {/* Generating star icons based on the number of stars */}
            {Array.from({ length: stars }, (_, index) => (
              <img key={index} src="/icons/star.png" width="6" alt="" />
            ))}
          </div>

          {/* Product price */}
          <p className="text font-semibold">${price}</p>

          {/* Buy button */}
          <button className="text font-semibold bg-orangeColor hover:bg-[#e0b216] text-black px-1 pt-[2px] my-1 rounded-sm transition-all">
            Buy Now
          </button>
        </div>
      </ProductBg>
    </>
  );
};

export default ProductCard;
