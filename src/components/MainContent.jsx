import React from "react";

/**
 * A small helper component that renders a circular progress bar
 * using SVG. You can pass in:
 *   - percentage (number): e.g. 90
 *   - color (string): e.g. "#06b6d4" (Tailwind's cyan-400)
 */
function CircleProgress({ percentage, color }) {
  // Approximate circumference for a circle with r=38 (in the SVG viewBox)
  const circumference = 240;
  // Calculate the stroke-dashoffset so the "filled" portion
  // matches the percentage (0% = empty, 100% = full circle)
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* 
        We rotate the SVG -90 degrees so the progress starts at the top 
        (like a typical progress ring).
      */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle (track) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#1f2937" // A dark gray track
          strokeWidth="10"
          fill="none"
        />
        {/* Foreground circle (progress) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={color} // The color passed in (cyan, yellow, pink, etc.)
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage text, centered in the circle */}
      <span className="absolute text-xl font-bold" style={{ color }}>
        {percentage}%
      </span>
    </div>
  );
}

/**
 * MainContent Component
 * ----------------------------------------------------
 * Renders the "Progress" title, the large Verified box,
 * two smaller boxes (Pending, Denied), and a button to
 * add new credentials.
 */
const MainContent = () => {
  return (
    <main className="flex-1 p-6">
      {/*
        PAGE TITLE
        We center the "Progress" text and give some margin below.
      */}
      <h2 className="text-xl font-bold text-center mb-6">Progress</h2>

      {/*
        WRAPPER FOR VERIFIED (LARGE BOX) AND THE TWO SMALLER BOXES
        We'll use a flex container to place the large box on the left
        and the smaller boxes on the right. On small screens, they'll stack.
      */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* VERIFIED BOX (Large) */}
        <div className="bg-gray-800 p-6 rounded-md flex flex-col items-center justify-center w-64 h-64 border border-cyan-400">
          {/* Circular progress ring for 90% */}
          <CircleProgress percentage={90} color="#06b6d4" />
          {/* Label text */}
          <div className="mt-4 text-cyan-400 text-lg font-semibold">
            VERIFIED
          </div>
          {/* Count text (9) */}
          <div className="mt-2 text-cyan-400 text-sm">9</div>
        </div>

        {/*
          RIGHT SIDE: Two smaller boxes (Pending, Denied).
          We stack them vertically with a gap between.
        */}
        <div className="flex flex-col gap-6">
          {/* PENDING BOX */}
          <div className="bg-gray-800 p-6 rounded-md flex flex-col items-center justify-center w-64 h-32 border border-yellow-400">
            {/* Circle for 40% */}
            <CircleProgress percentage={40} color="#facc15" />
            <div className="mt-2 text-yellow-400 text-sm font-semibold">
              PENDING
            </div>
            <div className="text-yellow-400 text-xs">4</div>
          </div>

          {/* DENIED BOX */}
          <div className="bg-gray-800 p-6 rounded-md flex flex-col items-center justify-center w-64 h-32 border border-pink-400">
            {/* Circle for 60% */}
            <CircleProgress percentage={60} color="#ec4899" />
            <div className="mt-2 text-pink-400 text-sm font-semibold">
              DENIED
            </div>
            <div className="text-pink-400 text-xs">6</div>
          </div>
        </div>
      </div>

      {/*
        ADD NEW CREDENTIAL BUTTON
        Centered below the boxes, with a prompt and a button that
        includes a "+" icon and label.
      */}
      <div className="mt-8 text-center">
        <p className="mb-3">Want to add more credentials?</p>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
          <span className="text-xl font-bold">+</span>
          <span>Add New Credential</span>
        </button>
      </div>
    </main>
  );
};

export default MainContent;
