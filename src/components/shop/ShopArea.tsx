import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Banner from './Banner';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGrid';
import ProductTypes from './ProductTypes';

const ShopArea: React.FC = () => {
  return (
    <div>
      <Breadcrumbs page="Shop" />
      <Banner />
      <ProductTypes />
      <div className="flex">
        <div className="w-1/4 hidden lg:block">
          <ProductFilter />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
