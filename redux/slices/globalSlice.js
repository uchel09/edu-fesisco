import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "product",
  initialState: {
    openMenuLink: false,
    openCart: false,
    cartSpin: 1,
  },
  reducers: {
    setOpenCart: (state, action) => {
      state.openCart = action.payload;
    },
    setOpenMenuLink: (state, action) => {
      state.openMenuLink = action.payload;
    },
    setCartSpin : (state,action) =>{
      state.cartSpin = action.payload
    }
  },
});

export const { setOpenCart, setOpenMenuLink,setCartSpin } = globalSlice.actions;
export default globalSlice.reducer;
