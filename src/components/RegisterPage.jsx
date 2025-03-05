import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios"; // Import axios for HTTP requests

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    credentialName: "",
    credentialType: "",
    organizationName: "",
    issueDate: "",
    file: null,
  });
  const [message, setMessage] = useState(""); // For success/error messages
  const [loading, setLoading] = useState(false); // To manage loading state

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true); // Start loading

    const dataToSend = new FormData();
    dataToSend.append("credentialName", formData.credentialName);
    dataToSend.append("credentialType", formData.credentialType);
    dataToSend.append("organizationName", formData.organizationName);
    dataToSend.append("issueDate", formData.issueDate);

    if (formData.file) {
      dataToSend.append("resume", formData.file);
    }

    try {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage

      if (!token) {
        alert("You are not logged in.");
        return;
      }

      // Send the file and other form data to the backend
      const response = await axios.post("http://localhost:5000/api/resumes/upload", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`, // Attach JWT token here
        },
      });

      if (response.status === 201) {
        setMessage("File uploaded successfully!");
        console.log("Response Data:", response.data); // Log transactionHash and resumeHash if needed
        // You could show the transactionHash and resumeHash if you wish
        alert(`Transaction Hash: ${response.data.transactionHash}`);
      }
    } catch (error) {
      setMessage("Error uploading file.");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <LeftAdminBar />
        <main className="flex-1 p-6 flex justify-center items-start">
          <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold text-center mb-2">
              Register a new credential
            </h1>
            <p className="text-center text-gray-300 mb-6">
              Enter the following details to register a new credential
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">First Name :</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <label className="block mb-1 text-sm invisible md:visible">&nbsp;</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Credential Name :</label>
                  <input
                    type="text"
                    name="credentialName"
                    value={formData.credentialName}
                    onChange={handleInputChange}
                    placeholder="Credential Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Credential Type :</label>
                  <input
                    type="text"
                    name="credentialType"
                    value={formData.credentialType}
                    onChange={handleInputChange}
                    placeholder="Credential Type"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm">Organization Name :</label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Organization Name"
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Issue Date :</label>
                  <input
                    type="text"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                    placeholder="dd / mm / yyyy"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 text-sm">Upload Document :</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600 focus:outline-none bg-gray-900 border border-gray-700"
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
                  disabled={loading} // Disable button during loading
                >
                  {loading ? "Uploading..." : "SUBMIT"}
                </button>
              </div>
            </form>

            {/* Display message */}
            {message && <p className="text-xs text-gray-400 mt-4 text-center">{message}</p>}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
