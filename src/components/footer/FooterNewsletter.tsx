import React from "react";

function FooterNewsletter() {
  return (
    <div className="py-10 px-8 lg:px-28 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 border-b border-white">
      <h2 className="text-2xl text-white">
        Fashion Forward: Stay in the Know with Our Newsletter
      </h2>
      <div className="flex items-center space-x-4 w-full lg:w-auto">
        <div className="relative w-full lg:w-[400px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-4 px-4 rounded-full bg-white text-black focus:outline-none"
          />
          <button className="absolute right-1 top-1 px-6 py-3 bg-black text-white rounded-full  overflow-hidden group">
            <span className="relative z-10">Send Email →</span>
            <span className="absolute inset-0 bg-red-500 transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterNewsletter;
