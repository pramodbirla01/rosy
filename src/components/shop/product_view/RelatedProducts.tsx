import React from 'react';
import productData from '../productData';
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  additionalImages: string[];
}

interface RelatedProductsProps {
  productId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const relatedProducts = productData.filter((p) => p.id !== productId).slice(0, 4);

  return (
    <div className="mt-16">
      <h2 className="text-2xl md:text-3xl mb-6">Related Products</h2>
      <div className="flex overflow-x-auto hide-scrollbar">
        {relatedProducts.map((product) => (
          <div key={product.id} className="min-w-[250px] max-w-[250px] mr-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
