import React, { useState } from "react";
import Image from "next/image";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Product", href: "/product" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "Buy Now", href: "/buy" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Left Side: Menu & Search Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src="/images/nav/menu.svg"
              alt="Menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>

          <Image
            src="/images/nav/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>

        {/* Logo in the center */}
        <div className="flex justify-center items-center flex-1">
          <Image
            src="/images/nav/logo.png"
            alt="Logo"
            width={400}
            height={200}
            className="cursor-pointer w-20 h-auto"
          />
        </div>

        {/* Right Side: Profile & Cart Icons */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/nav/profile.svg"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/images/nav/cart.svg"
            alt="Cart"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-600"
        >
          &times;
        </button>

        {/* Menu Items */}
        <div className="p-8 space-y-4 bg-white  h-screen">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-gray-700 hover:text-gray-900 text-lg"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Background Shadow Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        ></div>
      )}
    </nav>
  );
};

export default MobileNav;
