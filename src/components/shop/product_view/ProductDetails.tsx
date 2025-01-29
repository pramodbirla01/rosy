import React, { useState } from 'react';

interface ProductDetailsProps {
  product: {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart logic
  };

  const handleBuyNow = () => {
    // Buy now logic
  };

  return (
    <div className='px-10 mt-10'>
      {/* Product Name */}
      <h1 className="text-4xl font-light mb-4">{product.name}</h1>

      {/* Product Price */}
      <p className="text-2xl  mb-6">${product.price.toFixed(2)}</p>

      {/* Product Description */}
      <p className="text-gray-500 mb-6 line-clamp-4 ">{product.description}</p>

      <hr className="my-6" />

      {/* Size Selection */}
      <div className="mb-6">
        <p className="text-lg  mb-2">Size: {selectedSize}</p>
        <div className="flex flex-wrap space-x-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border ${
                selectedSize === size ? 'border-black' : 'border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-6">
        <p className="text-lg  mb-2">Color: {selectedColor}</p>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? 'border-black' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Quantity and Action Buttons */}
      <div className="flex flex-wrap space-y-2 space-x-4 mb-6">
        <div className="flex items-center border rounded-full px-4 py-2">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span className="mx-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-white text-black border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-all"
        >
          Buy Now
        </button>
      </div>

      {/* Additional Information */}
      <div className="text-gray-600">
        <p>Vendor: Bohemian Bliss</p>
        <p>Type: Dress</p>
        <p>Available: In Stock</p>
        <p>🔥 Sale ends in 2 days!</p>
      </div>
    </div>
  );
};

export default ProductDetails;