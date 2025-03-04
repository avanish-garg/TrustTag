import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/**
 * OurTeamSection
 * -------------
 * Renders a heading "OUR TEAM", followed by four team member cards,
 * and ends with a bottom statement: "If it's real, it's worth verifying."
 */
function OurTeamSection() {
  // Example data for the 4 team members
  const teamMembers = [
    {
      name: "DEVANSHI LAHOTI",
      role: "Backend Developer",
      image: "/profile1.png",
    },
    {
      name: "AVANISH GARG",
      role: "Blockchain & Backend Lead",
      image: "/profile2.png",
    },
    {
      name: "AASTHA RATHI",
      role: "Frontend Developer",
      image: "/profile3.png",
    },
    {
      name: "AASTHA KANADE",
      role: "UI/UX Designer",
      image: "/profile4.png",
    },
  ];

  return (
    <section className="bg-gray-900 text-white w-full">
      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-center text-2xl font-bold uppercase mb-8">
          OUR TEAM
        </h2>

        {/* Cards Container: 4 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-cyan-500 rounded-md flex flex-col items-center text-center p-6"
            >
              {/* Profile Image (circular) */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-black uppercase">
                {member.name}
              </h3>
              <p className="text-sm text-black mb-4">{member.role}</p>

              {/* Social Icons (GitHub, LinkedIn, Twitter) */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="bg-black py-6">
        <p className="text-center text-white text-lg md:text-xl font-semibold">
          If it’s real, it’s worth verifying.
        </p>
      </div>
    </section>
  );
}

export default OurTeamSection;
