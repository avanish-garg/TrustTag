import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const ProfileUpdatePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });
  const [editMode, setEditMode] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${apiBaseUrl}/user/student-profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/user/update-profile", {
        name: profile.name,
        email: profile.email,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <LeftAdminBar />
        <main className="flex-1 p-6 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
          <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
            <div className="mb-4">
              <label className="font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                // disabled={!editMode}
                className="w-full p-2 mt-1 bg-gray-700 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Username:</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                disabled
                className="w-full p-2 mt-1 bg-gray-700 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                // disabled={!editMode}
                className="w-full p-2 mt-1 bg-gray-700 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Wallet Address:</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                disabled
                className="w-full p-2 mt-1 bg-gray-700 rounded"
              />
            </div>
            {editMode ? (
              <button onClick={handleUpdate} className="w-full bg-green-600 py-2 rounded">
                Save Changes
              </button>
            ) : (
              <button onClick={() => setEditMode(true)} className="w-full bg-blue-600 py-2 rounded">
                Edit Profile
              </button>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUpdatePage;