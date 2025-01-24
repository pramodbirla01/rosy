import BestSeller from "@/components/best_seller/BestSeller";
import Blog from "@/components/blog_home/Blog";
import Category from "@/components/categories/Category";
import Collection from "@/components/collection/Collection";
import Follow from "@/components/follow_home/Follow";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HomeCard from "@/components/home_card/HomeCard";
import Quote_home from "@/components/home_quote/Quote_home";
import Nav from "@/components/nav/Nav";
import Review_home from "@/components/review/Review_home";
import Trending from "@/components/trending/Trending";
import React from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Category />
      <HomeCard/> 
      <Trending/>
      <Quote_home/>
      <BestSeller/>
      <Collection/>
      <Blog/>
      <Review_home/>
      <Follow/>
      <Footer/>
    </>
  );
}
