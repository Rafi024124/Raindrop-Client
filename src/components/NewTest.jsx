import React from "react";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    year: "FY 2021-2022",
    left: {
      title: "Pre-budget policy briefs",
      desc: "Hygiene: A pandemic policy priority for Bangladesh",
      links: ["Read in English", "Read in Bangla"],
    },
    right: {
      title: "Post-budget policy briefs",
      desc: "Spatial inequities and pandemic priorities ignored: WASH allocations in budget 2021-2022 fall short on SDG 6",
      links: ["Read in English", "Read in Bangla"],
    },
  },
  {
    year: "FY 2020-2021",
    left: {
      title: "Pre-budget policy briefs",
      desc: "Fight back COVID-19 by giving WASH due attention in proposed national budget 2020-2021",
      links: ["Read in English", "Read in Bangla"],
    },
    right: {
      title: "Post-budget policy briefs",
      desc: "WASH budget scenario in proposed national budget FY 2020-2021",
      links: ["Read in English", "Read in Bangla"],
    },
  },
  {
    year: "FY 2019-2020",
    left: {
      title: "Pre-budget policy briefs",
      desc: "Realising SDG 6 hinges on mainstreaming WASH and WASH financing",
      links: ["Read in English", "Read in Bangla"],
    },
    right: {
      title: "Post-budget policy briefs",
      desc: "National budget 2019-2020 and the challenges of achieving SDG 6 and 7th five year plan targets",
      links: ["Read in English", "Read in Bangla"],
    },
  },
];

const PolicyBriefs = () => {
  return (
    <div className="w-full bg-[#f8f2e8] p-8 md:p-16 space-y-12">
      {data.map((section, idx) => (
        <div key={idx} className="space-y-6">
          {/* YEAR */}
          <h2 className="text-xl font-semibold">{section.year}</h2>

          {/* 2-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT CARD */}
            <div>
              <h3 className="text-orange-600 font-semibold text-lg">
                {section.left.title}
              </h3>
              <p className="mt-2 text-gray-800 leading-relaxed">
                {section.left.desc}
              </p>

              <div className="mt-4 space-y-2">
                {section.left.links.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-blue-700 font-semibold cursor-pointer hover:underline"
                  >
                    <FaArrowRight className="mr-2 text-xs" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div>
              <h3 className="text-orange-600 font-semibold text-lg">
                {section.right.title}
              </h3>
              <p className="mt-2 text-gray-800 leading-relaxed">
                {section.right.desc}
              </p>

              <div className="mt-4 space-y-2">
                {section.right.links.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-blue-700 font-semibold cursor-pointer hover:underline"
                  >
                    <FaArrowRight className="mr-2 text-xs" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicyBriefs;
