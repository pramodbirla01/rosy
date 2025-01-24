import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="bg-[#222222] text-white">
      <FooterNewsletter />
      <FooterMain />
      <FooterBottom />
    </div>
  );
}

export default Footer;
