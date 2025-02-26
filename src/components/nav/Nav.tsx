import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";  
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
const { items } = useSelector((state: RootState) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const router = useRouter();
  // Detect screen width to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Product", href: "/product" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];


  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 ${
        isScrolled ? "shadow-none" : "shadow-none"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white md:bg-transparent hover:bg-white`}
    >
      {isMobile ? (
        <MobileNav />
      ) : (
        <div className="container flex gap-36 p-4 pl-28">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/nav/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="cursor-pointer h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-16 text-sm uppercase">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative hover:text-gray-600 transition before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-600 before:transition-all before:duration-300 hover:before:w-full"
              >
                {link.name}
              </a>
            ))}

           

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/nav/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/images/nav/profile.svg"
                alt="Profile"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <div className="relative">
      <Image
        src="/images/nav/cart.svg"
        alt="Cart"
        width={50}
        height={50}
        className="cursor-pointer w-7"
        onClick={() => router.push('/cart')}
      />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-black border border-black font-thin text-xs rounded-full px-1">
          {itemCount}
        </span>
      )}
    </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
