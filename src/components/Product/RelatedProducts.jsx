import { lazy, Suspense } from "react";
import Loader from "../shared/Loader/Loader"; 
const ProductCard = lazy(() => import("../shared/ProductCard"));

export default function RelatedProducts({ products }) {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold py-5 self-start">
          You might also like
        </h2>
        <div className="w-[100%] lg:w-[95%] mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {products?.map((item) => (
              <Suspense key={item.id} fallback={<Loader />}>
                <ProductCard product={item} />
              </Suspense>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
