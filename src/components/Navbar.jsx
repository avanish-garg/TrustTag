import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" p-4 flex items-center justify-between bg-[#2B2B2B]">
      {/* Left: "MY PROFILE" */}
      <div className="text-sm uppercase text-gray-300 tracking-wide"></div>

      {/* Right: Nav Container (rounded box) */}
      <div className="flex items-center space-x-2  border border-[#4A4A4A] px-3 py-2 rounded-md">
        {/* Home (default style) */}
        <button className="px-3 py-1 bg-[#2B2B2B] hover:bg-[#4A4A4A] text-gray-200 rounded-md">
          Home
        </button>

        {/* Dashboard (active/highlighted) */}
        <button className="px-3 py-1 bg-[#606060] text-gray-100 rounded-md flex flex-row items-center gap-1">
          Dashboard
          <IoIosArrowDown />
        </button>

        {/* About Us */}
        <button className="px-3 py-1 bg-[#2B2B2B] hover:bg-[#4A4A4A] text-gray-200 rounded-md flex flex-row items-center gap-1 justify-center">
          About Us <IoIosArrowDown />
        </button>

        {/* Services */}
        <button className="px-3 py-1 bg-[#2B2B2B] hover:bg-[#4A4A4A] text-gray-200 rounded-md">
          Services
        </button>

        {/* FAQs */}
        <button className="px-3 py-1 bg-[#2B2B2B] hover:bg-[#4A4A4A] text-gray-200 rounded-md">
          FAQs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
