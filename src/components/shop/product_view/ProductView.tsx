import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import ProductData from './ProductData';
import RelatedProducts from './RelatedProducts';
import RecentlyViewed from './RecentlyViewed';
import productData from '../productData';
import AboutHome2 from '@/components/about/AboutHome2';
import Features from '@/components/about/AboutFeature';
import FeaturesProduct from './Product_feature';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  additionalImages: string[];
  description: string;
  sizes: string[];
  colors: string[];
}

interface ProductViewProps {
  productId: number;
}

const ProductView: React.FC<ProductViewProps> = ({ productId }) => {
  // Fetch product data based on productId
  const product = productData.find((p: Product) => p.id === productId);

  // Handle Recently Viewed Products
  useEffect(() => {
    if (product) {
      const storedProducts = localStorage.getItem('recentlyViewed');
      let viewedProducts: Product[] = storedProducts ? JSON.parse(storedProducts) : [];

      // Remove duplicate if it already exists
      viewedProducts = viewedProducts.filter((p) => p.id !== product.id);
      
      // Add current product to the beginning of the list
      viewedProducts.unshift(product);

      // Keep only the last 10 viewed products
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts.slice(0, 10)));
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-20 pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs page={product.name} />

      {/* Product Preview and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductPreview product={product} />
        <ProductDetails product={product} />
      </div>

      {/* Product Data Tabs (Description, Specification, Reviews) */}
      <ProductData product={product} />

      {/* Related Products Section */}
      <RelatedProducts productId={product.id} />
      <AboutHome2/>
      <FeaturesProduct/>
      {/* Recently Viewed Products Section */}
      <RecentlyViewed />
    </div>
  );
};

export default ProductView;
