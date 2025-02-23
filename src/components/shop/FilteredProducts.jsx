import { products } from "../../utils/products";
import ProductCard from "../shared/ProductCard";
export default function FilteredProducts({ category, searchTerm }) {
  const filteredProducts = products.filter(
    (product) =>
      product.category.includes(category) &&
      product.productName.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="min-h-[20vh]">
      {filteredProducts.length === 0 && (
        <div className="text-center w-full ">
          <h2 className="text-3xl font-bold p-10">No Products Found</h2>
        </div>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProducts.map((p) => (
          <ProductCard product={p} key={p.id}/>
        ))}
      </ul>
    </div>
  );
}
