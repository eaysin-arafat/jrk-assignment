import Blog from "../section/Blog";
import Hero from "../section/Hero";
import ProductAds from "../section/ProductAds";
import Products from "../section/Products";
import Thumbnail from "../section/Thumbnails";

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
