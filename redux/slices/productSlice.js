import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  loadingProducts: false,
  cekOngkir:{},
  cart: [], // Jangan langsung akses localStorage di sini
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initializeCart: (state) => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cart");
        state.cart = savedCart ? JSON.parse(savedCart) : [];
      }
    },
    setCekOngkir:(state,action)=>{
      state.cekOngkir = action.payload
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.qty === 1 && action.payload.qty === -1) return;
        itemInCart.qty += action.payload.qty;
      } else {
        state.cart.push(action.payload);
      }

      // Simpan kembali cart ke localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { initializeCart, addToCart,deleteFromCart,setCekOngkir } = productSlice.actions;
export default productSlice.reducer;
