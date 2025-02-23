import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cart/CartProduct";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="cart-items min-h-[60dvh] px-2 md:px-5 bg-slate-100">
      <div className="p-3 w-[95%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto py-10">
        <div className="flex flex-col-reverse lg:items-start lg:grid lg:grid-cols-5 gap-5">
          <div className="col-span-1 lg:col-span-3">
            {cart?.product?.length == 0 ? (
              <div className="flex gap-5 flex-col p-5 bg-white">
                <div className="border-b border-gray-300 py-2">
                  <h2 className="text-xl font-semibold">Cart Items</h2>
                </div>
              </div>
            ) : (
              <div className="flex gap-5 flex-col">
                <ul className="flex flex-col gap-5">
                  {cart.map((item) => (
                    <li key={item.product.id}>
                      <CartProduct product={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="col-span-1 lg:col-span-2  bg-white rounded-lg">
            <div className="flex gap-7 flex-col p-5">
              <div className="border-b border-gray-300 py-2">
                <h2 className="text-xl font-semibold">Cart Sammary</h2>
              </div>
              <div>
                <h3 className="text-lg">Total Price:</h3>
                <h3 className="text-xl font-bold">$ {totalPrice}</h3>
              </div>
              <div className="flex justify-between gap-3 text-white font-semibold">
                <button className="px-5 py-2 rounded-full bg-red-600">
                  Empty Cart
                </button>
                <button className="px-5 py-2 rounded-full bg-blue-900">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
