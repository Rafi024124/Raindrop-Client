import React, { useState } from "react";

const faqs = [
  {
    question: "When is the RainDrop Convention taking place?",
    answer:
      "The convention will be held from July 15th to July 17th, 2025. Exact timings will be shared with registered participants.",
  },
  {
    question: "Where is the event located?",
    answer:
      "The convention will be hosted at the Green Conference Center, Dhaka, Bangladesh. Directions will be sent via email after registration.",
  },
  {
    question: "Who can attend the RainDrop Convention?",
    answer:
      "Anyone interested in rainwater harvesting, conservation, sustainability, or environmental projects is welcome to attend.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Currently, registration is free. However, some workshops or special sessions may have a small fee. Details will be shared upon registration.",
  },
  {
    question: "How can I contact the organizers?",
    answer:
      "You can contact us via email at info@raindropconvention.com or through the contact form on the website.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  mx-auto min-h-screen bg-linear-to-b from-[#000A3B] to-black py-16 px-6 md:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked <span className="text-[#26FF60]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
    bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-4 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg
  "
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                <span className="text-3xl hover:text-[#26FF60]">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;