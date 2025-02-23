import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const notify = (msg, type) => {
  toast[type](msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
const storedCart =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const initialState = {
  cart: storedCart,
  totalPrice: 0,
};
/*
  order status {
  active    => from creation (with adding the first product) until buying 
  canceled  => if it canceled (by update status)
  completed => after buying and out for delivery (by update status)
  delivered => after delivery (by update status)
  }

  orde structure: {
    orderId: number,
    orderStatus: string,
    products: [
                {}
              ]
    totalPrice: number,
    orderDate: Date(),
    ## TODO
    userId: number,
    deliveryAddress: string,
    deliveryDate: string,
  }

  product structure: {
  ...product,
  quantity: number,
   }
  */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Product Logic
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const isProductInCart = state.cart.findIndex(
        (p) => p.product.id === product.id
      );
      if (isProductInCart === -1) {
        state.cart.push({ product, quantity });
        notify("Product added", "success");
        
      } else {
        if (quantity > 0) {
          state.cart[isProductInCart].quantity += +quantity;
          notify("Product added", "success");
        } else {
          state.cart[isProductInCart].quantity += +quantity;
          // console.log("Product removed from cart quantity decreased");
          if (state.cart[isProductInCart].quantity <= 0) {
            state.cart.splice(isProductInCart, 1);
            notify("Deleted", "warning");
            return;
          }
          notify("Product removed", "error");
        }
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;

      // console.log("Product removed from cart", productId);
      const productToRemove = state.cart.findIndex((p) => {
        return p.product.id === productId;
      });
      if (productToRemove !== -1) {
        state.cart.splice(productToRemove, 1);
        notify("Deleted", "warning");
      } else {
        notify("Product removed", "error");
      }
    },
    setProductQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const productToUpdate = state.cart.findIndex(
        (p) => p.product.id === product.id
      );
      if (productToUpdate !== -1) {
        if (quantity > state.cart[productToUpdate].quantity) {
          notify("Amount Inreased", "success");
        } else if (quantity < state.cart[productToUpdate].quantity) {
          if (quantity == 0) {
            state.cart.splice(productToUpdate, 1);
            notify("Product Deleted", "warning");
            return;
          } else {
            notify("Amount Decreased", "error");
          }
        }
        state.cart[productToUpdate].quantity = +quantity;
        // console.log("Product quantity updated");
      } else {
        if (quantity > 0) {
          state.cart.push({ product, quantity });
        }
      }
    },
  },
});

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("cart/")) {
    const cart = store.getState().cart.cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return result;
};

export const { updateQuantity, removeProduct, setProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
