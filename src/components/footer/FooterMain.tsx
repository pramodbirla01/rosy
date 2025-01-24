import React, { useState, useEffect } from "react";
import { footerData } from "./footerData";

function FooterMain() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures `window` is accessible after hydration
  }, []);

  const toggleExpand = (heading: string) => {
    setExpanded((prev) => (prev === heading ? null : heading));
  };

  return (
    <div className="py-10 px-8 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {footerData.map((section, sectionIndex) => (
          <div key={section.heading}>
            <h3
              className={`${
                sectionIndex === footerData.length - 1
                  ? "text-white font-bold text-5xl" // Last column styles
                  : "uppercase text-red-400 font-semibold"
              } mb-4 flex justify-between items-center cursor-pointer lg:cursor-default`}
              onClick={() => toggleExpand(section.heading)}
            >
              {section.heading}
              <span
                className={`ml-2 text-red-500 transition-transform ${
                  expanded === section.heading ? "rotate-45" : "rotate-0"
                } lg:hidden`}
              >
                +
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                expanded === section.heading || (isClient && window.innerWidth >= 768)
                  ? "block"
                  : "hidden"
              }`}
            >
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className={`text-white ${
                    sectionIndex !== 0 && sectionIndex !== footerData.length - 1
                      ? "relative hover:text-red-500 w-fit transition before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterMain;
