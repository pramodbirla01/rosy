import React from 'react';
import { useRouter } from 'next/router';
import ProductView from '@/components/shop/product_view/ProductView';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
const ProductViewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  return (
    <>
      <Nav /> 
      <ProductView productId={Number(id)} />
      <Footer /> 
    </>
  );
};

export default ProductViewPage;
