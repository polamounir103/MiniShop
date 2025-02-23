import Slider from "../components/home/slider/Slider";
import Wrapper from "../components/home/wrapper/Wrapper";
import ProductsSection from "../components/shared/ProductsSection";
import { products, discoutProducts } from "../utils/products";

export default function Home() {
  const newArrivalsProducts = products.filter((product) => product.isNew );
  const bestSalesProducts = products.filter((product) => product.isBestSeller);
  return (
    <div>
      <div>
        <Slider />
        <Wrapper />
        {/* <Offers />
        <NewArrivals /> */}
        <ProductsSection
          products={discoutProducts}
          title="big discount"
          bgColor="bg-slate-100"
          discount
        />
        <ProductsSection
          products={newArrivalsProducts}
          title="new arrivals"
          bgColor="bg-slate-50"
        />
        <ProductsSection 
        products={bestSalesProducts}
        title="best sales"
        bgColor="bg-slate-100"
        
        />

      </div>
    </div>
  );
}
