import React from "react";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  updateQuantity,
} from "../../app/features/cart/cartSlice";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  const { imgUrl, productName, price, id } = product.product;
  const { quantity } = product;

 
  const handleAddProduct = () => {
    dispatch(updateQuantity({ product: product.product, quantity: 1 }));
   
  };
  const handleRemoveProduct = () => {
    dispatch(updateQuantity({ product: product.product, quantity: -1 }));

  };
  const handleDeleteProduct = () => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="relative p-3 rounded-lg bg-white">
      <button
        className="p-2 absolute end-3 top-2 cursor-pointer text-3xl"
        onClick={handleDeleteProduct}
      >
        <IoClose />
      </button>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-3">
        <div className="flex justify-center items-center p-5">
          <img src={imgUrl} alt={productName} className="h-40 w-full sm:w-40" />
        </div>
        <div className="grow flex flex-col justify-center items-center sm:items-start gap-5">
          <h3>{productName}</h3>
          <div className="flex items-center gap-5">
            <h4 className="text-gray-400">
              ${price} * {quantity}
            </h4>
            <h4 className="font-bold">${price * quantity}</h4>
          </div>
        </div>
        <div className="flex gap-5 items-end sm:self-end">
          <button
            className="p-2 border border-gray-200 rounded cursor-pointer"
            onClick={handleAddProduct}
          >
            <FiPlus />
          </button>
          <button
            className="p-2 border border-gray-300 bg-gray-200 rounded cursor-pointer"
            onClick={handleRemoveProduct}
          >
            <FiMinus />
          </button>
        </div>
      </div>
    </div>
  );
}
