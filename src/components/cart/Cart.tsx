import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import Image from 'next/image';
import { removeFromCart } from '@/store/slices/cartSlice';

const Cart: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (id: number, size: string, color: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg" />
              <div className="flex-1">
                <h3 className="text-xl">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id, item.size, item.color)}
                className="text-red-500 text-xl"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-6 border-t pt-6">
        <p className="text-2xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
