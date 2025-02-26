import React from 'react';
import Link from 'next/link';

interface Props {
  subtotal: number;
  shipping?: number;
  tax?: number;
}

const OrderSummary: React.FC<Props> = ({ subtotal, shipping = 0, tax = 0 }) => {
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-bg-light p-6 rounded-lg border border-border-light space-y-4">
      <h2 className="text-xl font-semibold text-text-primary">Order Summary</h2>
      
      <div className="space-y-2">
        <div className="flex justify-between text-text-secondary">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-border-light pt-2 mt-2">
          <div className="flex justify-between text-text-primary font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link href="/checkout" className="block mt-6">
        <button 
          className="w-full px-6 py-3 text-sm font-medium text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
          disabled={subtotal === 0}
        >
          <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
            Proceed to Checkout
          </span>
          <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
