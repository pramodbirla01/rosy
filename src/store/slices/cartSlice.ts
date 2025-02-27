import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define and export CartItem interface
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

// Define the initial state with a specific type
interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isCartOpen: false,
};

// Create slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    removeFromCart(state, action: PayloadAction<{ id: number, size: string, color: string }>) {
      const { id, size, color } = action.payload;
      const itemIndex = state.items.findIndex(
        item => item.id === id && item.size === size && item.color === color
      );
      
      if (itemIndex > -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number, size: string, color: string, quantity: number }>) {
      const { id, size, color, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.size === size && item.color === color
      );
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
  },
});

// Export actions and reducer
export const { addToCart, toggleCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
