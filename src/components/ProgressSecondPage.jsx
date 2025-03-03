import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

// A small helper to render a circular progress bar using SVG
function CircleProgress({ percentage, color }) {
  // Approx circumference for a circle with r=38 (viewBox=100x100)
  const circumference = 240;
  // Calculate dash offset for the "filled" portion
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle (track) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#1f2937" // Dark gray track
          strokeWidth="10"
          fill="none"
        />
        {/* Foreground circle (progress) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={color} // Dynamic color
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage text in the center */}
      <span className="absolute text-xl font-bold" style={{ color }}>
        {percentage}%
      </span>
    </div>
  );
}

const ProgressSecondPage = () => {
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
          <h1 className="text-2xl font-semibold mb-4 text-center">Progress</h1>
          {/* Optional line under the title */}
          <div className="w-16 h-px bg-gray-400 mb-6"></div>

          {/* Container for the two boxes (Approved / Rejected) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Approved Box */}
            <div className="bg-gray-800 p-6 w-64 h-64 border border-green-500 flex flex-col items-center justify-center">
              <CircleProgress percentage={90} color="#22c55e" />
              {/* #22c55e is Tailwind's green-500 */}
              <p className="mt-4 text-green-400 text-lg font-semibold">
                Approved
              </p>
              <p className="text-green-400 text-sm mt-1">9</p>
            </div>

            {/* Rejected Box */}
            <div className="bg-gray-800 p-6 w-64 h-64 border border-red-500 flex flex-col items-center justify-center">
              <CircleProgress percentage={60} color="#ef4444" />
              {/* #ef4444 is Tailwind's red-500 */}
              <p className="mt-4 text-red-400 text-lg font-semibold">
                Rejected
              </p>
              <p className="text-red-400 text-sm mt-1">6</p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProgressSecondPage;
