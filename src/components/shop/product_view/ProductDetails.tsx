import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { toggleCart } from "@/store/slices/cartSlice";
interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    sizes: string[];
    colors: string[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]); // Default to the first size
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]); // Default to the first color
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color");
      return;
    }

    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    dispatch(addToCart(productToAdd)); // Add product to cart
    dispatch(toggleCart()); // Open the cart sidebar
    console.log('Dispatching toggleCart'); // Add this line

  };


  const handleBuyNow = () => {
    // Buy now logic
  };

  return (
    <div className="px-10 mt-10">
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
                selectedSize === size ? "border-black" : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-6">
        <p className="text-lg mb-2">Color: {selectedColor}</p>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              {/* Outer transparent div when selected */}
              {selectedColor === color && (
                <div className="absolute w-10 h-10 rounded-full border-2 border-gray-400 bg-transparent"></div>
              )}

              {/* Inner color circle */}
              <div
                className={`w-8 h-8 rounded-full border  ${
                  selectedColor === color ? "" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Action Buttons */}
      <div className="flex flex-wrap  space-x-4 mb-6">
        <div className="flex items-center border rounded-full px-7 py-1">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button
          onClick={handleAddToCart}
          className="relative overflow-hidden border border-black rounded-full px-6 py-2 text-black transition-all duration-300 group"
        >
          <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Add to Cart
          </span>
        </button>

        <button
          onClick={handleBuyNow}
          className="relative overflow-hidden rounded-full px-6 py-2 bg-black text-white transition-all duration-300 border border-black group"
        >
          <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Buy Now
          </span>
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
