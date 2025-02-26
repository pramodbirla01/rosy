import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleCart, removeFromCart } from '@/store/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';

const SidebarCart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state: RootState) => state.cart);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (e: React.MouseEvent, id: number, size: string, color: string) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log('Removing item with ID:', id, 'Size:', size, 'Color:', color); // Add debug log
    dispatch(removeFromCart({ id, size, color }));
  };

  // Add body scroll lock when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Dark overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch(toggleCart())}
      />

      {/* Cart sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 z-50 bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <button 
              onClick={() => dispatch(toggleCart())} 
              className="text-2xl hover:text-primary transition-colors"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Scrollable Product List */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4">
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-4 animate-slide-up group relative bg-white hover:bg-gray-50 p-4 rounded-lg transition-all duration-200"
                >
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={80} 
                    height={80} 
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1 pr-8"> {/* Added right padding for remove button */}
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                    <p className="text-gray-600 text-sm">
                      {item.size} • {item.color}
                    </p>
                  </div>
                  <button 
                    onClick={(e) => handleRemove(e, item.id, item.size, item.color)}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors duration-200"
                    type="button"
                  >
                    <i className="ri-close-line text-lg text-gray-400 hover:text-buttonRed transition-colors duration-200"></i>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center py-8">Your cart is empty.</p>
            )}
          </div>
        </div>

        {/* Fixed Bottom Section */}
        <div className="border-t px-6 py-4 bg-white">
          <div className="mb-4">
            <p className="text-xl font-semibold flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
          </div>
          <Link href="/cart" className="block">
            <button 
              onClick={() => dispatch(toggleCart())} 
              className="w-full px-6 py-3 text-sm font-medium text-gray-800 uppercase border border-gray-800 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Go to Cart</span>
              <span className="absolute inset-0 bg-buttonRed transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;