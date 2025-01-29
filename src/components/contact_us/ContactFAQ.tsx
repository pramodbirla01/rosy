import React, { useState } from 'react';

const ContactFAQ = () => {
  const faqs = [
    {
      question: 'How long will shipping take?',
      answer: 'Shipping typically takes 5-7 business days.',
    },
    {
      question: 'How do I know if my order is confirmed?',
      answer: 'You will receive a confirmation email once your order is placed.',
    },
    {
      question: 'Can I change my shipping address after my order is placed?',
      answer: 'Please contact customer service immediately if you need to change your shipping address.',
    },
    {
      question: 'What are your store hours?',
      answer: 'Our store is open from 9 AM to 9 PM, Monday to Saturday.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-10">
      <h2 className="md:text-5xl text-2xl text-center mb-6">FAQs</h2>
      <p className="text-center md:text-md text-gray-700 mb-8">
        Below are some of our common questions
      </p>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <div className="flex justify-between items-center">
              <p
                className="text-lg cursor-pointer hover:text-gray-600 transition-colors duration-200"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </p>
              <i
                className={`ri-${expandedIndex === index ? 'subtract' : 'add'}-line text-xl cursor-pointer transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
                onClick={() => toggleAnswer(index)}
              ></i>
            </div>
            <div
              className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === index ? 'max-h-40 opacity-100' : 'max-h-10 opacity-0'
              }`}
            >
              {expandedIndex === index && <p className="pt-2">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;