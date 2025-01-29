import React from 'react';
import ProductView from './ProductView';
import { useRouter } from 'next/router';

const ProductViewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  return <ProductView productId={Number(id)} />;
};

export default ProductViewPage;