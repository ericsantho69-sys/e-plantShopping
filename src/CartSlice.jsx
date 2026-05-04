import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // ✅ Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // ✅ Update quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(item => item.name === name);

      if (item) {
        item.quantity = quantity;
      }
    },

    // ✅ Remove item completely
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // ✅ Clear entire cart (optional but useful)
    clearCart: (state) => {
      state.items = [];
    }

  }
});

export const {
  addItem,
  updateQuantity,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
