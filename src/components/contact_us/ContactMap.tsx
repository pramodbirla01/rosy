import React from "react";

const ContactMap = () => {
  return (
    <div className="relative w-full min-h-[450px]">
      {/* Google Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55008.90821272649!2d138.407055!3d-30.491144000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a91693244257183%3A0x4033654628eee30!2sCopley%20SA%205732%2C%20Australia!5e0!3m2!1sen!2sin!4v1738134082696!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Card Content */}
      <div className="absolute text-center  md:left-40 top-1/2 transform -translate-y-1/2 z-10 max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg w-full sm:w-2/5">
        <h2 className="text-3xl mb-4">Our Store</h2>
        <p className="text-gray-700">Copley, South Australia 5732</p>
        <p className="text-gray-700 mt-4">
          Mon - Fri, 10am - 9pm
          <br />
          Saturday, 11am - 9pm
          <br />
          Sunday, 11am - 5pm
        </p>
        <button className="w-full md:w-auto bg-white text-black px-8 py-3 rounded-full mt-6 mx-auto block relative overflow-hidden group border-2 border-black">
          <span className="relative z-10 transition-colors duration-200 delay-100 group-hover:text-white">
            Get Location
          </span>
          <span className="absolute inset-0 bg-red-600 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
        </button>
      </div>
    </div>
  );
};

export default ContactMap;
