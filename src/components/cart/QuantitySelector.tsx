import React from 'react';

interface Props {
  quantity: number;
  onUpdate: (quantity: number) => void;
}

const QuantitySelector: React.FC<Props> = ({ quantity, onUpdate }) => {
  return (
    <div className="flex items-center border border-border-light rounded-lg">
      <button
        className="px-3 py-1 text-text-primary hover:bg-bg-hover transition-colors"
        onClick={() => quantity > 1 && onUpdate(quantity - 1)}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="px-4 py-1 text-text-primary border-x border-border-light">
        {quantity}
      </span>
      <button
        className="px-3 py-1 text-text-primary hover:bg-bg-hover transition-colors"
        onClick={() => onUpdate(quantity + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
