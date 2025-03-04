// import React from "react";
// import { FaPlus, FaClipboardList, FaBell, FaCog, FaUser } from "react-icons/fa";


// const LeftAdminBar = () => {
//   return (
//     <aside className="w-64 bg-gray-900 p-4 text-white ">
//       {/* Profile Section */}
//       <div className="mb-6">
//         <h2 className="text-sm text-gray-400 uppercase">MY PROFILE</h2>
//         <div className="flex items-center mt-3 space-x-3">
//           {/* Avatar */}
//           <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
//             <img src="/profile.jpg" alt="Profile" className="w-full h-full" />
//           </div>
//           <div>
//             <p className="text-xs text-gray-400">WELCOME</p>
//             <p className="font-semibold text-lg">Abhishek</p>
//           </div>
//         </div>
//       </div>

//       {/* Role Dropdown */}
//       <div className="mb-4">
//         <select className="w-full bg-gray-800 text-white py-2 px-3 rounded border border-gray-700">
//           <option>Applicant</option>
//           <option>Admin</option>
//           <option>Reviewer</option>
//         </select>
//       </div>

//       {/* Sidebar Menu */}
//       <nav className="space-y-2">
//         <button className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
//           <FaPlus />
//           <span>Add New Credential</span>
//         </button>
//         <button className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
//           <FaClipboardList />
//           <span className="text-sm">Credential Management</span>
//         </button>
//         <button className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
//           <FaBell />
//           <span>Access Requests</span>
//         </button>
//         <button className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
//           <FaCog />
//           <span>Settings</span>
//         </button>
//       </nav>
//     </aside>
//   );
// };

// export default LeftAdminBar;

import React from "react";
import { FaPlus, FaClipboardList, FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftAdminBar = () => {
  return (
    <aside className="w-64 bg-gray-900 p-4 text-white">
      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-400 uppercase">MY PROFILE</h2>
        <div className="flex items-center mt-3 space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full" />
          </div>
          <div>
            <p className="text-xs text-gray-400">WELCOME</p>
            <p className="font-semibold text-lg">Abhishek</p>
          </div>
        </div>
      </div>

      {/* Role Dropdown */}
      <div className="mb-4">
        <select className="w-full bg-gray-800 text-white py-2 px-3 rounded border border-gray-700">
          <option>Applicant</option>
          <option>Admin</option>
          <option>Reviewer</option>
        </select>
      </div>

      {/* Sidebar Menu */}
      <nav className="space-y-2">
        <Link
          to="/register"
          className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          <FaPlus />
          <span>Add New Credential</span>
        </Link>

        <Link
          to="/credential"
          className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          <FaClipboardList />
          <span className="text-sm">Credential Management</span>
        </Link>

        <Link
          to="/requests"
          className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          <FaBell />
          <span>Access Requests</span>
        </Link>

        <Link
          to="/profile-update"
          className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          <FaCog />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default LeftAdminBar;

