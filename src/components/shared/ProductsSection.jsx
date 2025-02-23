import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

export default function ProductsSection({ products, title, bgColor, discount=false }) {
  return (
    <section className={`${bgColor} py-22`}>
      <div className="flex flex-col justify-center items-center gap-10">
        <SectionTitle title={title} />
        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto ">
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {products?.map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                hasDiscount={discount}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
