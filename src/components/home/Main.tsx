import Blog from "../Blog";
import Hero from "../Hero";
import ProductAds from "../ProductAds";
import Products from "../Products";
import Thumbnail from "../Thumbnails";

const Main = () => {
  return (
    <div className="">
      <Hero />
      <Products />
      <Thumbnail />
      <ProductAds />
      <Blog />
    </div>
  );
};

export default Main;
