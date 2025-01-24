import React from "react";
import Image from "next/image";

function Follow() {
  return (
    <div className="md:py-14 py-5  px-1 lg:px-10 space-y-8">
      {/* Top Section */}
      <div className="text-center">
        <p className="text-sm uppercase text-red-600 mb-5">Connect with us</p>
        <h1 className="text-5xl">Follow us</h1>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-1">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-40 h-40 md:w-52 md:h-52 relative">
              <Image
                src={`/images/follow/follow${index + 1}.jpg`}
                alt={`Follow image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Follow;
