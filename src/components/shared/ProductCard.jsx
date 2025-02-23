import { useState } from "react";
import RateingStars from "./RateingStars";
import { IoIosAdd } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../app/features/cart/cartSlice";
export default function ProductCard({ product, hasDiscount = false }) {
  const [hoverItem, setHoverItem] = useState(null);
  const dispatch = useDispatch();
  const handleHovering = (id) => {
    setHoverItem(id);
  };
  const handleHoverLeave = () => {
    setHoverItem(null);
  };
  const handleAddCart = (product, quantity) => {
    dispatch(updateQuantity({ product, quantity }));
  };
  return (
    <li key={product.id} className="h-full">
      <div
        className="bg-white border border-slate-300 border-b-sky-600 flex flex-col justify-between gap-3 rounded-lg overflow-hidden hover:shadow-blue-950 hover:shadow-md duration-100 relative after:content-[''] after:absolute after:bottom-0 after:start-0 after:right-full hover:after:end-0 after:duration-900 after:h-2 after:bg-blue-950 after:ease-snappy ease-snappy h-full"
        onMouseEnter={() => handleHovering(product.id)}
        onMouseLeave={handleHoverLeave}
      >
        {hoverItem === product.id && (
          <div className="absolute end-3 top-3 flex justify-center items-center">
            <button className="cursor-pointer text-xl">
              <IoHeartOutline />
            </button>
          </div>
        )}
        <Link to={`/products/${product.id}`}>
          <div className=" sm:px-10 lg:px-15 mt-3 ">
            {hasDiscount && (
              <div className=" absolute start-3 top-3 bg-blue-950 text-[10px] text-white px-3 py-1 rounded-full">
                <span>20% Off</span>
              </div>
            )}
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="aspect-square w-50 m-auto"
              loading="lazy"
            />
          </div>
        </Link>
        <div className=" relative">
          <Link
            to={`/products/${product.id}`}
            className="px-5 py-3 flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">{product.productName}</h3>
            <RateingStars rating={product.avgRating} />
            <div className="flex justify-between pb-3">
              <h3 className="text-2xl font-semibold">{product.price} $</h3>
            </div>
          </Link>
          <button
            className="w-8 h-8 rounded-full border py-2 px-4 flex justify-center items-center text-blue-900 hover:text-white hover:bg-blue-900 duration-300 absolute z-10 bottom-5 end-5"
            onClick={() => handleAddCart(product, 1)}
          >
            <span className="text-2xl">
              <IoIosAdd />
            </span>
          </button>
        </div>
      </div>
    </li>
  );
}
