import React from 'react';

const ContactDetails = () => {
  const details = [
    {
      icon: <i className="ri-map-pin-line text-xl"></i>,
      title: 'Address',
      content: 'Copley, South Australia 5732, Australia.',
    },
    {
      icon: <i className="ri-phone-line text-xl"></i>,
      title: 'Call Us',
      content: '+ (02) 6171 3859\n+ (07) 4088 1324',
    },
    {
      icon: <i className="ri-time-line text-xl"></i>,
      title: 'Opening Hours',
      content: 'Monday - Friday: 8am - 4pm\nSaturday - Sunday: 9am - 5pm',
    },
    {
      icon: <i className="ri-mail-line text-xl"></i>,
      title: 'Emails',
      content: 'example@example.com\nexample@example.co',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20 py-10">
      {details.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-6 border-none transition-all cursor-pointer group"
        >
          <div className="border text-gray-700 group-hover:text-black border-dashed border-gray-500 px-5 p-4 font-thin rounded-full group-hover:border-black group-hover:border-solid transition-all">
            {item.icon}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-sm mt-2 whitespace-pre-line text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
