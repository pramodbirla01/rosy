import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  additionalImages: string[];
}

const RecentlyViewed: React.FC = () => {
  const [viewedProducts, setViewedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('recentlyViewed');
    if (storedProducts) {
      try {
        setViewedProducts(JSON.parse(storedProducts) as Product[]);
      } catch (error) {
        console.error('Error parsing recently viewed products:', error);
      }
    }
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-2xl md:text-3xl mb-6">Recently Viewed</h2>
      <div className="flex justify-center overflow-x-auto hide-scrollbar">
        {viewedProducts.slice(-5).map((product) => (
          <div key={product.id} className="min-w-[200px] max-w-[200px] mr-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
