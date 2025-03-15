import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const CredentialPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Body: Left Sidebar + Main Table Content */}
      <div className="flex flex-1">
        {/* Left Admin Panel */}
        <LeftAdminBar />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Credentials
          </h1>

          {/* Table Container */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border border-gray-700 text-center">
              {/* Table Head */}
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Credential Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">Date</th>
                  <th className="px-4 py-2 border-b border-gray-700">Status</th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Access Permission
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-800">
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Higher Secondary Schooling
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    21/04/2019
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Verified
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">
                      Share Access
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    B.Tech Degree
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    20/06/2024
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Pending
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    <button className="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-300">
                      Share Access
                    </button>
                  </td>
                </tr>

                {/* Row 3 (placeholder row) */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    -------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    -------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    -------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    -------------
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

export default CredentialPage;
