import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Update this path if your SVG is located elsewhere (e.g., src/assets/contactUsImg.svg).

function ContactUsSection() {
  return (
    <section className="bg-gray-900 text-white">
      {/* Top bar with "CONTACT US" */}
      <div className="bg-gray-500 text-black px-4 py-2 uppercase font-bold text-xl font">
        CONTACT US
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start gap-8">
        {/* Left side: Image + Social Icons */}
        <div className="md:w-1/2 ">
          {/* Illustration */}
          <img
            src="/contactUsImg.svg"
            alt="Contact Us"
            className="w-full h-auto mb-4 "
          />

          {/* Social Icons */}
          <div className="flex space-x-4 text-white items-center justify-center mt-6">
            <a
              href="#"
              className="hover:text-gray-400 bg-white rounded-full p-2 text-black"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 bg-white rounded-full p-2 text-black"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 bg-white rounded-full p-2 text-black"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 bg-white rounded-full p-2 text-black"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="md:w-1/2 bg-black p-6 rounded">
          <h2 className="text-xl font-semibold mb-4 uppercase">
            Leave a Message
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm">Name :</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700
                           focus:outline-none rounded"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm">Email :</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700
                           focus:outline-none rounded"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 text-sm">Subject :</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700
                           focus:outline-none rounded"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm">Message :</label>
              <textarea
                placeholder="Your Message"
                className="w-full h-24 px-3 py-2 bg-gray-900 border border-gray-700
                           focus:outline-none rounded"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-cyan-500 text-black px-6 py-2 rounded
                           hover:bg-cyan-600 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
