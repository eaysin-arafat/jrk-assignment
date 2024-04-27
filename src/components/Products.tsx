import ProductCard from "./ProductCard";
import Heading from "./core/Heading";

const Products = () => {
  return (
    <div className="mt-4 px-6">
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
        <ProductCard
          image="/products/tulip-chair.png"
          price="12.09"
          stars={5}
          title="Tulip Chair Furniture"
        />

        <ProductCard
          image="/products/beath-chair.png"
          price="12.09"
          stars={5}
          title="Beath Chair Furniture"
        />

        <ProductCard
          image="/products/yellow-armchair.png"
          price="12.09"
          stars={5}
          title="Yellow armchair"
        />

        <ProductCard
          image="/products/front-view-chair.png"
          price="12.09"
          stars={5}
          title="Front view Chair"
        />
      </div>
    </div>
  );
};

export default Products;
