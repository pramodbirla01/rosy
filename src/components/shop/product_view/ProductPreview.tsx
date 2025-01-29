import React, { useState } from 'react';
import Image from 'next/image';

interface ProductPreviewProps {
  product: {
    image: string;
    additionalImages: string[];
  };
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div>
      {/* Main Image (Full Image Display) */}
      <div className="relative w-full px-10 pt-5 mb-4">
        <Image
          src={selectedImage}
          alt="Main Product Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      {/* Additional Images (Show in Grid, No Rounding) */}
      <div className="grid px-10 md:px-11 grid-cols-4 gap-4">
        {[product.image, ...product.additionalImages].map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer border ${
              selectedImage === image ? 'border-black' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
