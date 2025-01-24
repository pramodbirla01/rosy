import React from "react";
import Image from "next/image";

function FooterBottom() {
  return (
    <div className="border-t border-dashed border-white py-6 px-8 lg:px-28 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
      {/* Currency Dropdown */}
      <select className="bg-transparent text-white py-2 px-10 border bg-gray-950 border-white rounded-lg focus:outline-none">
        <option>🇺🇸 USD</option>
        <option>🇬🇧 GBP</option>
        <option>🇪🇺 EUR</option>
        <option>🇮🇳 INR</option>
        <option>🇦🇺 AUD</option>
      </select>

      {/* Copyright */}
      <p className="text-sm text-white">
        Copyright © 2023 Rosyz. All rights reserved.
      </p>

      {/* Payment Gateways */}
      <div className="flex flex-wrap space-x-2">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-14 h-10 relative">
              <Image
                src={`/images/footer/download (${index + 1}).svg`}
                alt={`Payment method ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FooterBottom;
