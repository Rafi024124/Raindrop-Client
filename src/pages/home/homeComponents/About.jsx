import { FaBookOpen } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { BiSolidCertification } from "react-icons/bi";
import React from "react";

const About = () => {
  const items = [
    {
      icon: <BiSolidCertification className="text-5xl text-[#26FF60]" />,
      title: "CERTIFICATIONS",
      desc: "Training and Certification to Start a Business",
    },
    {
      icon: <FaBookOpen className="text-5xl text-[#26FF60]" />,
      title: "EDUCATION",
      desc: "Learn More About Rainwater Harvesting",
    },
    {
      icon: <MdCardMembership className="text-5xl text-[#26FF60]" />,
      title: "ARCSA MEMBERSHIP",
      desc: "Become a Part of Our Organization",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-black to-[#000A3B] py-20 px-6 md:px-20 text-white">
      {/* Mission Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          OUR <span className="text-[#26FF60]">MISSION</span>
        </h2>

        <p className="text-lg md:text-xl mt-6 leading-relaxed text-gray-300">
          To provide resources and information on rainwater and stormwater
          collection, making rainwater conservation accessible to all and to
          work with communities and organizations to promote sustainable
          rainwater management.
        </p>
      </div>

      {/* Icon Items Section */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-white/10 border border-[#26FF60]/30 shadow-[0_0_15px_#26FF6044] mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-2 max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
