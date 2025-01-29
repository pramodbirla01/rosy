import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    additionalImages: string[];
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/${product.id}`);
  };

  return (
    <div className="group relative overflow-hidden text-center cursor-pointer" onClick={handleClick}>
      {/* Product Image with Hover Effect */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        {product.additionalImages.length > 0 && (
          <Image
            src={product.additionalImages[0]}
            alt={`${product.name} - Hover`}
            width={500}
            height={500}
            className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-700 group-hover:scale-110 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="mt-3">
        <h3 className="text-gray-500 text-md">{product.brand}</h3>
        <h4 className="text-xl">{product.name}</h4>
        <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;