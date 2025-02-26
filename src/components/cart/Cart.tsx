import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import Link from 'next/link';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem'; // Add this import

const Cart: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleRemove = (id: number, size: string, color: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleUpdateQuantity = (id: number, size: string, color: string, quantity: number) => {
    dispatch(updateQuantity({ id, size, color, quantity }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-text-primary">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}`}
                item={item}
                onRemove={handleRemove}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))
          ) : (
            <div className="text-center py-8 bg-bg-primary rounded-lg border border-border-light">
              <p className="text-text-secondary mb-4">Your cart is empty</p>
              <Link 
                href="/" 
                className="text-button-red hover:opacity-80 transition-opacity underline"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-4">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
