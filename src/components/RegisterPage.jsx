import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";
// (Optional) If you want an icon for the date field, you can import something like react-icons
import { FaCalendarAlt } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />
      {/* Navbar */}
      <Navbar />

      {/* Body: Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <LeftAdminBar />

        {/* Main Content: Registration Form */}
        <main className="flex-1 p-6 flex justify-center items-start">
          {/* Form Container */}
          <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md">
            {/* Title & Subtitle */}
            <h1 className="text-2xl font-semibold text-center mb-2">
              Register a new credential
            </h1>
            <p className="text-center text-gray-300 mb-6">
              Enter the following details to register a new credential
            </p>

            {/* FORM */}
            <form className="space-y-4">
              {/* Row 1: Name (First & Last) */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* First Name */}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Name :</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
                {/* Last Name */}
                <div className="flex-1 mt-4 md:mt-0">
                  <label className="block mb-1 text-sm invisible md:visible">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Credential Name & Credential Type */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Credential Name */}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">
                    Credential Name :
                  </label>
                  <input
                    type="text"
                    placeholder="Credential Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
                {/* Credential Type */}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">
                    Credential Type :
                  </label>
                  <input
                    type="text"
                    placeholder="Credential Type"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                  {/*
                    OR if you want a dropdown:
                    <select className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none">
                      <option value="">Select Type</option>
                      <option value="Type1">Type 1</option>
                      <option value="Type2">Type 2</option>
                    </select>
                  */}
                </div>
              </div>

              {/* Row 3: Organization Name */}
              <div>
                <label className="block mb-1 text-sm">
                  Organization Name :
                </label>
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              {/* Row 4: Issue Date & Upload Document */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Issue Date */}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Issue Date :</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd / mm / yyyy"
                      className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none pr-10"
                    />
                    {/* Date Icon (optional) */}
                    <span className="absolute right-2 top-2 text-gray-400">
                      <FaCalendarAlt />
                    </span>
                  </div>
                </div>

                {/* Upload Document */}
                <div className="flex-1">
                  <label className="block mb-1 text-sm">
                    Upload Document :
                  </label>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-400
                      file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0
                      file:text-sm file:font-semibold
                      file:bg-gray-700 file:text-gray-200
                      hover:file:bg-gray-600
                      focus:outline-none
                      bg-gray-900 border border-gray-700
                    "
                  />
                  <p className="text-xs text-gray-500 mt-1">.pdf, .jpg, .png</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            {/* Footer Note under the form */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              By clicking on submit button a verification request will be sent
              to the verifying organization.
            </p>
          </div>
        </main>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default RegisterPage;
