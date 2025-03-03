import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const RequestsPage = () => {
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
          <h1 className="text-2xl font-semibold mb-4 text-center">Requests</h1>
          {/* Optional line under the title */}
          <div className="w-16 h-px bg-gray-400 mb-6"></div>

          {/* Table Container */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border border-gray-700 text-center">
              {/* Table Head */}
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Requester’s Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Credential Name
                  </th>
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
                    Mr. Abhishek Sah( Google )
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    Higher Secondary Schooling
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-400">
                        Approve
                      </button>
                      <button className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-400">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 (placeholder row) */}
                <tr>
                  <td className="px-4 py-2 border-b border-gray-700">
                    ------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    ------------
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    ------------
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

export default RequestsPage;
