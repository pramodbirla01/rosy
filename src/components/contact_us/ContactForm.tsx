import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-10">
      <h2 className="text-5xl text-center mb-6">Got Any Questions?</h2>
      <p className="text-center text-gray-500 mb-8">
        Use the form below to get in touch with the sales team
      </p>
      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email *"
            className="p-3 border border-gray-300 rounded"
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded mt-6"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded mt-6"
          rows={5}
        />
        <button
          type="submit"
          className="mt-6 px-8 py-2 text-sm w-fit font-medium text-black uppercase hover:text-white delay-75 border border-black rounded-full relative overflow-hidden group mx-auto block"
        >
          <span className="relative z-10">
            Send <i className="ri-arrow-right-s-line text-lg"></i>
          </span>
          <span className="absolute inset-0 bg-red-600 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
        </button>

        {/* <p className="text-lg text-gray-500 mt-10 text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p> */}
      </form>
    </div>
  );
};

export default ContactForm;
