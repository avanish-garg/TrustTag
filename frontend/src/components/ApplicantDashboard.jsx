import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

const ApplicantDashboard = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Top Header (login button only) */}
      <Header />
      {/* Secondary Navbar (brand + links) */}
      <Navbar />

      {/* Body Section */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <LeftAdminBar />
        {/* Main Content */}
        <MainContent />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplicantDashboard;
