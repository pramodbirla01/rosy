// pages/cart/index.tsx
import Cart from '@/components/cart/Cart';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import Breadcrumbs from '@/components/shop/Breadcrumbs';
import React from 'react';

const CartPage: React.FC = () => {
  return (
    <>
    <Nav/>
    <Breadcrumbs page='cart'/>
    <Cart/>
    <Footer/>
    </>
  );
};

export default CartPage;