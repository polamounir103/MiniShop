import { useState } from "react";
import Banner from "../components/shared/Banner";
import { products } from "../utils/products";
import ShopProducts from "../components/shop/ShopProducts";
const Shop = () => {
  const [filterTerm, setFilterTerm] = useState("");

  return (
    <>
      <section className="filter-bar">
        <Banner title="product" />
        <ShopProducts />
      </section>
    </>
  );
};

export default Shop;
