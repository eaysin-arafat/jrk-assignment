import ProductBg from "./ProductBg";

type Props = {
  title: string;
  image: string;
  price: string;
  stars: number;
};

const ProductCard = ({ title, image, price, stars }: Props) => {
  return (
    <>
      <ProductBg>
        <div className="py-1 pb-2 text-center flex flex-col items-center justify-center text-whiteColor">
          <img src={image} className="pb-1 product-image" height="60" alt="" />
          <h2 className="text font-medium">{title}</h2>
          <div className="flex gap-[2px] pb-1">
            {Array.from({ length: stars }, (_, index) => (
              <img key={index} src="/icons/star.png" width="6" alt="" />
            ))}
          </div>

          <p className="text font-semibold">${price}</p>

          <button className="text font-semibold bg-orangeColor text-black px-1 pt-[2px] rounded-sm">
            Buy Now
          </button>
        </div>
      </ProductBg>
    </>
  );
};

export default ProductCard;
