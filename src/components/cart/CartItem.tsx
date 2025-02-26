import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/store/slices/cartSlice';
import QuantitySelector from './QuantitySelector';
import CountUp from 'react-countup'; // Add this import

interface Props {
  item: CartItemType;
  onRemove: (id: number, size: string, color: string) => void;
  onUpdateQuantity: (id: number, size: string, color: string, quantity: number) => void;
}

const CartItem: React.FC<Props> = ({ item, onRemove, onUpdateQuantity }) => {
  const itemTotal = Math.round(item.price * item.quantity);

  return (
    <div className="flex gap-4 p-4 bg-bg-primary rounded-lg border border-border-light">
      <Image 
        src={item.image} 
        alt={item.name} 
        width={120} 
        height={120} 
        className="rounded-md object-cover"
      />
      <div className="flex-1 space-y-2">
        <h3 className="text-text-primary font-medium">{item.name}</h3>
        <p className="text-text-secondary text-sm">
          {item.size} • {item.color}
        </p>
        <p className="text-text-primary font-medium flex items-center">
          $<CountUp
            end={itemTotal}
            decimals={0}
            duration={0.5}
            separator=","
            useEasing={true}
            enableScrollSpy
            scrollSpyOnce
          />
        </p>
        <div className="flex items-center">
          <QuantitySelector
            quantity={item.quantity}
            onUpdate={(newQuantity) => 
              onUpdateQuantity(item.id, item.size, item.color, newQuantity)
            }
          />
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id, item.size, item.color)}
        className="text-text-light hover:text-button-red transition-colors p-2"
        aria-label="Remove item"
      >
        <i className="ri-delete-bin-line text-xl" />
      </button>
    </div>
  );
};

export default CartItem;
