import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: 2 columns (50/50) */}
        <div className="flex flex-col md:flex-row">
          {/* LEFT COLUMN (Image) */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="empowerImg.png"
              alt="Empowering Trust - Verifying Truth"
              className="object-contain w-124 "
            />
          </div>
          <div className="w-px bg-gray-400 mx-4 mr-8" />

          {/* RIGHT COLUMN (Two sections side-by-side) */}
          <div className="md:w-1/2 flex flex-row justify-between space-x-8">
            {/* SECTION 1 (Links) */}
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-gray-300">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300">
                About Authify
              </a>
              <a href="#" className="hover:text-gray-300">
                Our Team
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </div>
            <div className="w-px bg-gray-400 mx-4" />

            {/* SECTION 2 (Contact, Settings, Social Icons) */}
            <div className="flex flex-col space-y-2 text-sm">
              {/* Social Icons row */}
              <div className="flex flex-col space-y-4 mr-16 mt-3">
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaXTwitter size={18} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Centered copyright */}
        <div className="text-center text-gray-500 text-xs mt-3">
          © 2025. All rights are reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
