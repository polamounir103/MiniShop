
import Banner from "../components/shared/Banner";
import ProductDetails from "../components/Product/ProductDetails";
import { useParams } from "react-router";
import { products } from "../utils/products";
import ProductReviews from "../components/Product/ProductReviews";

import RelatedProducts from "../components/Product/RelatedProducts";
export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const relatedproducts = products.filter(
    (p) => p.category === product.category
  );

  return (
    <div>
      <Banner title={product.productName} />
      <div className=" w-full md:w-[95%] lg:w-[%] m-auto p-3 md:p-20 flex flex-col gap-10">
        <ProductDetails product={product} />
        <ProductReviews desc={product.description} reviews={product.reviews} />
        <RelatedProducts products={relatedproducts} />
      </div>
    </div>
  );
}
