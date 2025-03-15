import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * FeaturesSection
 * ---------------
 * Renders a heading ("WHAT WE PROVIDE ?") and a list of FeatureCards.
 * Each FeatureCard is initially a small color circle, expanding into a pill
 * with black text and a black "EXPLORE ->" button.
 */
function FeaturesSection() {
  // Example data for 4 features
  const features = [
    {
      id: 1,
      title: "FEATURE 1",
      description: "DESCRIPTION OF 1 2 LINE ABOUT THE FEATURE",
      bgColor: "bg-[#CD87FFD1]",
    },
    {
      id: 2,
      title: "FEATURE 2",
      description: "DESCRIPTION OF 1 2 LINE ABOUT THE FEATURE",
      bgColor: "bg-[#A4FD8CCF]",
    },
    {
      id: 3,
      title: "FEATURE 3",
      description: "DESCRIPTION OF 1 2 LINE ABOUT THE FEATURE",
      bgColor: "bg-[#F58080]",
    },
    {
      id: 4,
      title: "FEATURE 4",
      description: "DESCRIPTION OF 1 2 LINE ABOUT THE FEATURE",
      bgColor: "bg-[#63D2FF]",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      {/* Section Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        WHAT WE PROVIDE ?
      </h2>

      {/* Stack of feature items */}
      <div className="flex flex-col space-y-6">
        {features.map((feat) => (
          <FeatureCard
            key={feat.id}
            title={feat.title}
            description={feat.description}
            bgColor={feat.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * FeatureCard
 * -----------
 * Collapsed: a small circle of color (e.g. 60px).
 * Expanded: a wide color pill (100%), black text, black "EXPLORE ->" button.
 * Surrounded by a black container for that distinct background look.
 */
function FeatureCard({ title, description, bgColor }) {
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded/collapsed state
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      // Outer black background container
      className="bg-black rounded-full p-2 transition-all duration-700 h-24"
    >
      {/* The color pill itself */}
      <div
        onClick={handleToggle}
        className={`
          relative flex items-center rounded-full overflow-hidden
          transition-all duration-700 cursor-pointer
          ${bgColor}
        `}
        style={{
          height: "80px",
          width: expanded ? "100%" : "80px", // collapsed circle => full pill
        }}
      >
        {/* Left Text: only visible when expanded */}
        {expanded && (
          <div className="ml-4 text-black flex flex-row gap-5 items-start">
            <h3 className="font-bold text-xl">{title}</h3>
            <div className="mx-4 w-px h-8 bg-black"></div>
            <p className="text-xl">{description}</p>
          </div>
        )}

        {/* "Explore ->" Button: only visible when expanded */}
        {expanded && (
          <div className="ml-auto mr-2  ">
            <button
              className="flex items-center space-x-2 bg-black text-white px-7 py-6
                         rounded-full hover:bg-gray-800 transition-colors "
            >
              <span>EXPLORE</span>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturesSection;