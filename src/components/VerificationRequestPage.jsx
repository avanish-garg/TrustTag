import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const VerificationRequestPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Body: Sidebar + Main Content */}
      <div className="flex flex-1">
        <LeftAdminBar />

        {/* Main Content: Form Card */}
        <main className="flex-1 p-6 flex justify-center items-start">
          {/* Form Container */}
          <div className="w-full max-w-md bg-gray-800 p-6 rounded-md shadow-md">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-center mb-2">
              Verification Requests
            </h1>

            {/* Form */}
            <form className="space-y-4">
              {/* Applicant Name */}
              <div>
                <label className="block mb-1 text-sm">Applicant Name :</label>
                <input
                  type="text"
                  placeholder="Applicant Name"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              {/* Applicant ID */}
              <div>
                <label className="block mb-1 text-sm">Applicant ID :</label>
                <input
                  type="text"
                  placeholder="Applicant ID"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              {/* Document Name */}
              <div>
                <label className="block mb-1 text-sm">Document Name :</label>
                <input
                  type="text"
                  placeholder="Document Name"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              {/* Document Type */}
              <div>
                <label className="block mb-1 text-sm">Document Type :</label>
                <input
                  type="text"
                  placeholder="Document Type"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            {/* Footer Note below form */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              By clicking on submit button a access request will be sent to the
              applicant.
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerificationRequestPage;
