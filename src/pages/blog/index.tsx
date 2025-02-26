import React from "react";
// import Blog from "../../components/Blog"; // Import Blog component
// import Navbar from "../../components/Navbar"; // Import Navbar
// import Footer from "../../components/Footer"; // Import Footer
import Nav from "@/components/nav/Nav";
import Blog from "@/components/blog/Blog";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

const BlogPage: React.FC = () => {
  return (
    <div>
     <Breadcrumbs page="Blog"/>
      <Nav />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
