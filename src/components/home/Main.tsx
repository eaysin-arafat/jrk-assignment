import Blog from "../Blog";
import Hero from "../Hero";
import ProductAds from "../ProductAds";
import Products from "../Products";
import Thumbnail from "../Thumbnails";

const Main = () => {
  return (
    <div>
      {/* Render the Hero Section */}
      <Hero />

      {/* Render the Products Section */}
      <Products />

      {/* Render the Thumbnail Section */}
      <Thumbnail />

      {/* Render the ProductAds Section */}
      <ProductAds />

      {/* Render the Blog Section */}
      <Blog />
    </div>
  );
};

export default Main;
