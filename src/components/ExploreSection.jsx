import React from "react";

/**
 * ExploreSection
 * -------------
 * Renders a heading ("WHAT YOU WANT TO EXPLORE TODAY ?")
 * and three black cards (Applicant, Verifier, Employer).
 * The "Applicant" card has a hover effect that scales up.
 */
function ExploreSection() {
  return (
    <section className="bg-gray-700 text-white py-8 px-4">
      {/* Heading */}
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-6 uppercase">
        WHAT YOU WANT TO EXPLORE TODAY ?
      </h2>

      {/* Cards Container: 3 columns on md+ screens, 1 column on mobile */}
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Applicant Card (with hover effect) */}
        <div
          className="bg-black h-80 p-6 rounded-md flex  flex-col items-center justify-center text-center
                        transform transition hover:scale-105 cursor-pointer hover:bg-[#52DAEA] hover:text-white"
        >
          {/* Optional icon or placeholder */}
          <div className="mb-4">
            {/* Replace with your own icon or image path */}
            {/* <img src="/icons/applicant-icon.png" alt="Applicant" className="w-12 h-12" /> */}
            <span className="text-8xl">👤</span>
          </div>
          <h3 className="text-lg font-bold mb-2 uppercase">APPLICANT</h3>
          <p className="text-sm">Upload credentials and manage access.</p>
        </div>

        {/* Verifier Card */}
        <div className="bg-black p-6 rounded-md flex flex-col items-center text-center justify-center  transform transition  hover:bg-[#52DAEA] hover:text-white hover:scale-105 cursor-pointer">
          <div className="mb-4">
            {/* <img src="/icons/verifier-icon.png" alt="Verifier" className="w-12 h-12" /> */}
            <span className="text-7xl">✅</span>
          </div>
          <h3 className="text-lg font-bold mb-2 uppercase">VERIFIER</h3>
          <p className="text-sm">Validate credentials.</p>
        </div>

        {/* Employer Card */}
        <div className="bg-black p-6 rounded-md flex flex-col items-center text-center justify-center  transform transition  hover:bg-[#52DAEA] hover:text-white hover:scale-105 cursor-pointer">
          <div className="mb-4">
            {/* <img src="/icons/employer-icon.png" alt="Employer" className="w-12 h-12" /> */}
            <span className="text-7xl">🏢</span>
          </div>
          <h3 className="text-lg font-bold mb-2 uppercase">EMPLOYER</h3>
          <p className="text-sm">
            Request and verify credentials before hiring.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
