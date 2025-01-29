import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
}

interface ProductDataProps {
  product: Product;
}

const ProductData: React.FC<ProductDataProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'specification' | 'reviews'>('description');

  return (
    <div className="mt-10 py-10 ">
      {/* Tabs Navigation */}
      <div className="flex justify-center md:justify-start space-x-6 border-b border-gray-300 pb- relative">
        {['description', 'specification', 'reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'description' | 'specification' | 'reviews')}
            className={`relative md:text-xl capitalize font-semibol  px-4 py-2 transition-colors ${
              activeTab === tab ? 'text-black ' : 'text-gray-700'
            }`}
          >
            {tab}

            {/* Animated Underline with gray transition */}
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-black transition-all duration-300 ${
                activeTab === tab ? 'w-full' : 'w-0'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === 'description' && <p>{product.description}</p>}
        {activeTab === 'specification' && <p>Product specifications go here...</p>}
        {activeTab === 'reviews' && <p>Customer reviews go here...</p>}
      </div>
    </div>
  );
};

export default ProductData;
