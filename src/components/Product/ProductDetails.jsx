import React, { useEffect, useState } from "react";
import RateingStars from "../shared/RateingStars";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  setProductQuantity,
  removeProduct,
} from "../../app/features/cart/cartSlice";

export default function ProductDetails({ product }) {
  const { cart } = useSelector((state) => state.cart);
  const productId = product?.id;
  const [productQun, setProductQun] = useState(0);

  const dispatch = useDispatch();

  const addToCart = (quantity) => {
    dispatch(updateQuantity({ product, quantity }));
  };

  const handleQuantityChange = (productId, quantity) => {
    // console.log(quantity, productId);
    const cartProduct = cart?.find((item) => item.product.id === productId);
    if (quantity === 0) {
      dispatch(removeProduct(productId));
    } else {
      dispatch(
        setProductQuantity({
          product: cartProduct?.product || product,
          quantity,
        })
      );
    }
  };

  useEffect(() => {
    const cartProduct = cart?.find((item) => item.product.id === productId);
    setProductQun(cartProduct?.quantity || 0);
  }, [cart, productId]);

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full">
          <img
            src={product.imgUrl}
            alt={product.productName}
            className="aspect-square w-full lg:p-20"
          />
        </div>
        <div className="w-full pt-10 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{product.productName}</h1>
          <div className="flex justify-start items-center gap-5">
            <RateingStars rating={product.avgRating} />
            <h2>{product.avgRating} Rating</h2>
          </div>
          <h2 className="text-3xl font-bold">${product.price}</h2>
          <h2 className="text-xl">Category : {product.category}</h2>
          <p>{product.shortDesc}</p>
          <input
            type="number"
            value={productQun}
            min={0}
            name="productQuantity"
            className="p-3 border rounded-lg font-bold self-start"
            onChange={(e) => {
              const quantity = e.target.value;
              setProductQun(quantity);
              handleQuantityChange(product.id, quantity);
            }}
          />
          <button
            className="bg-blue-950 hover:bg-blue-900 py-3 px-10 self-start text-white rounded-4xl w-full"
            onClick={() => addToCart(1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
