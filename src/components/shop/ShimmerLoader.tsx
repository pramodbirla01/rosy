import React from "react";

const ShimmerLoader: React.FC = () => (
  <div className="animate-pulse w-full">
    {/* Separate Image Placeholder */}
    <div className="bg-gray-300 h-72 w-full mb-4" />

    {/* Separate Text Placeholders */}
    <div className="space-y-3">
      <div className="bg-gray-300 h-4 w-3/4 mx-auto" />
      <div className="bg-gray-300 h-4 w-full mx-auto" />
      <div className="bg-gray-300 h-4 w-1/2 mx-auto" />
    </div>
  </div>
);

export default ShimmerLoader;
