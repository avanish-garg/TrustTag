import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const VerificationRequestCheckPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Body: Left Sidebar + Main Content */}
      <div className="flex flex-1">
        <LeftAdminBar />

        <main className="flex-1 p-6 flex flex-col items-center">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Verification Requests
          </h1>
          {/* Optional small line under the title */}
          <div className="w-16 h-px bg-gray-400 mb-6"></div>

          {/* Table Container */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border border-gray-700 text-center">
              {/* Table Head */}
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Applicant Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Credential Type
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">Status</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-800">
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Aastha Kanade
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Higher Secondary Schooling
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700 text-green-400">
                    Approved
                  </td>
                </tr>

                {/* Row 2 (placeholders) */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    ------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    ------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700 text-yellow-400">
                    Pending / Denied
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerificationRequestCheckPage;
