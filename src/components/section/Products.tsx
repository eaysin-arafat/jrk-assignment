import SectionLayout from "../../layout/SectionLayout";
import ProductCard from "../card/ProductCard";
import Heading from "../heading/Heading";
const Products = () => {
  return (
    <SectionLayout className="mt-4">
      {/* Heading */}
      <div className="text-center mb-2 lg:my-8">
        <Heading
          blackText="Populwe"
          greenText="We Have"
          className="uppercase"
        />
        {/* Description */}
        <p className="text">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
      </div>

      {/* Product cards */}
      <div className="flex items-center justify-between gap-3 ">
        {/* Render ProductCard for Tulip Chair */}
        <ProductCard
          image="/products/tulip-chair.png"
          price="12.09"
          stars={5}
          title="Tulip Chair Furniture"
        />

        {/* Render ProductCard for Beath Chair */}
        <ProductCard
          image="/products/beath-chair.png"
          price="12.09"
          stars={5}
          title="Beath Chair Furniture"
        />

        {/* Render ProductCard for Yellow Armchair */}
        <ProductCard
          image="/products/yellow-armchair.png"
          price="12.09"
          stars={5}
          title="Yellow armchair"
        />

        {/* Render ProductCard for Front View Chair */}
        <ProductCard
          image="/products/front-view-chair.png"
          price="12.09"
          stars={5}
          title="Front view Chair"
        />
      </div>
    </SectionLayout>
  );
};

export default Products;
