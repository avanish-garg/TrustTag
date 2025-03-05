import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";
import axios from "axios";

const AddResume = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    file: null,
  });
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true); 

    const dataToSend = new FormData();
    dataToSend.append("firstName", formData.firstName);
    dataToSend.append("lastName", formData.lastName);
    dataToSend.append("resume", formData.file);

    try {
      const token = localStorage.getItem("token"); 

      if (!token) {
        alert("You are not logged in.");
        return;
      }

      const response = await axios.post("http://localhost:5000/api/resumes/upload", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        setMessage("File uploaded successfully!");
        alert(`Transaction Hash: ${response.data.transactionHash}`);
      }
    } catch (error) {
      setMessage("Error uploading file.");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
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
            <h1 className="text-2xl font-semibold text-center mb-4">
              Upload Your Resume
            </h1>

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
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Last Name :</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm">Upload Resume :</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600 focus:outline-none bg-gray-900 border border-gray-700"
                  required
                />
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "SUBMIT"}
                </button>
              </div>
            </form>

            {message && <p className="text-xs text-gray-400 mt-4 text-center">{message}</p>}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AddResume;
