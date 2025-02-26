import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define CartItem interface
interface CartItem {
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
      console.log('Removing item:', { id, size, color }); // Add debug log
      console.log('Before removal:', state.items); // Add debug log
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      );
      console.log('After removal:', state.items); // Add debug log
    },
  },
});

// Export actions and reducer
export const { addToCart, toggleCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
