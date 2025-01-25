import React, { useState } from "react";
import Image from "next/image";
import filterData from "./filterData";

const ProductFilter: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "availability",
    "price",
    "size",
    "productType",
    "brand",
    "color",
    "material",
  ]);

  const [viewMore, setViewMore] = useState<{ [key: string]: boolean }>({});
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]); // Allow multiple size selections
  const [selectedColors, setSelectedColors] = useState<string[]>([]); // Allow multiple color selections

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleViewMore = (section: string) => {
    setViewMore((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSizeSelection = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const toggleColorSelection = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const renderCheckboxes = (
    items: { label: string; count: number }[],
    section: string,
    maxVisible = 10
  ) => {
    const isExpanded = viewMore[section];
    const visibleItems = isExpanded ? items : items.slice(0, maxVisible);
    const hasMore = items.length > maxVisible;

    return (
      <>
        {visibleItems.map((item, index) => (
          <label key={index} className="block my-2">
            <input
              type="checkbox"
              className="mr-2 accent-black"
            />
            {item.label} ({item.count})
          </label>
        ))}
        {hasMore && (
          <button
            onClick={() => handleViewMore(section)}
            className="text-blue-500 mt-2"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        )}
      </>
    );
  };

  const renderColorSwatches = (colors: string[]) => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className={`w-8 h-8 rounded-full border ${
            selectedColors.includes(color) ? "border-black" : "border-gray-300"
          } cursor-pointer`}
          onClick={() => toggleColorSelection(color)}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-6 pl-20">
      <h3 className="text-3xl">Filters</h3>

      {/* Sections */}
      {[
        { label: "Availability", key: "availability" },
        { label: "Price", key: "price" },
        { label: "Size", key: "size" },
        { label: "Product Type", key: "productType" },
        { label: "Brand", key: "brand" },
        { label: "Color", key: "color" },
        { label: "Material", key: "material" },
      ].map(({ label, key }, idx) => (
        <React.Fragment key={key}>
          <div className="py-1">
            <h4
              onClick={() => toggleSection(key)}
              className="text-lg cursor-pointer flex justify-between items-center"
            >
              {label}
              <span>
                <Image
                  src={
                    expandedSections.includes(key)
                      ? "/images/shop/down.svg"
                      : "/images/shop/up.svg"
                  }
                  alt="toggle icon"
                  width={16}
                  height={16}
                />
              </span>
            </h4>

            {expandedSections.includes(key) &&
              (key === "availability"
                ? renderCheckboxes(filterData.availability, key)
                : key === "price" ? (
                  <div className="my-1">
                    <div className="flex justify-between text-sm">
                      <span>${filterData.price.min}</span>
                      <span>${filterData.price.max}</span>
                    </div>
                    <input
                      type="range"
                      min={filterData.price.min}
                      max={filterData.price.max}
                      step={filterData.price.step}
                      className="w-full cursor-pointer accent-black h-[2px] rounded-full"
                    />
                  </div>
                ) : key === "size" ? (
                  <div className="flex gap-4 mt-2">
                    {filterData.size.map((size, index) => (
                      <div
                        key={index}
                        className={`w-14 h-10 flex justify-center items-center border text-sm cursor-pointer ${
                          selectedSizes.includes(size.label)
                            ? "border-black bg-gray-200"
                            : "border-gray-300"
                        }`}
                        onClick={() => toggleSizeSelection(size.label)}
                      >
                        {size.label}
                      </div>
                    ))}
                  </div>
                ) : key === "productType"
                ? renderCheckboxes(filterData.productType, key)
                : key === "brand"
                ? renderCheckboxes(filterData.brand, key)
                : key === "color"
                ? renderColorSwatches(filterData.color)
                : key === "material"
                ? renderCheckboxes(filterData.material, key)
                : null)}
          </div>
          {idx !== 6 && <hr className="border-gray-200" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductFilter;
