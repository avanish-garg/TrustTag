import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const ProfileUpdatePage = () => {
  // State to hold the currently displayed profile picture.
  // Default is "profile.jpg" (replace with your own path or a placeholder).
  const [profilePic, setProfilePic] = useState("profile.jpg");
  //frtxh and updae frontend logic
// const ProfileUpdatePage = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   // Fetch user profile on component mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Ensure token is stored in localStorage
//         const res = await axios.get("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(res.data);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/profile", profile, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  // Handler for file input change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      // Once file is read, set the profilePic state to the base64 result
      reader.onload = (readerEvent) => {
        setProfilePic(readerEvent.target.result);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Body: Sidebar + Main Content */}
      <div className="flex flex-1">
        <LeftAdminBar />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold mb-4 text-center">Profile</h1>

          {/*
            Container: two columns on md+ screens:
            1) Left: Profile picture & button
            2) Right: Info fields (Name, Profession, etc.)
          */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 w-full max-w-4xl">
            {/* Left Column: Avatar & Button */}
            <div className="flex flex-col items-center mb-6 md:mb-0">
              {/* Profile Picture (circular) */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-700">
                {/* Display the current profilePic (default or newly uploaded) */}
                <img
                  src={profilePic}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Update Button + Hidden File Input */}
              <div className="mt-4 flex flex-col items-center">
                <label
                  htmlFor="profilePicInput"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded cursor-pointer"
                >
                  Update Profile Picture
                </label>
                <input
                  id="profilePicInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Right Column: User Info (Form Inputs) */}
            <div className="flex-1">
              {/* Name */}
              <div className="mb-2">
                <span className="font-semibold">Name :</span>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>

              {/* Profession */}
              <div className="mb-2">
                <span className="font-semibold">Profession :</span>
                <input
                  type="text"
                  placeholder="Enter profession"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>

              {/* Personal Details Heading */}
              <p className="mt-6 mb-2 text-lg font-semibold uppercase">
                Personal Details
              </p>

              {/* D.O.B. */}
              <div className="mb-2">
                <span className="font-semibold">D.O.B. :</span>
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>

              {/* Gender */}
              <div className="mb-2">
                <span className="font-semibold">Gender :</span>
                <input
                  type="text"
                  placeholder="Male/Female/Other"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>

              {/* Nationality */}
              <div className="mb-2">
                <span className="font-semibold">Nationality :</span>
                <input
                  type="text"
                  placeholder="e.g. American"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>

              {/* Languages Known */}
              <div className="mb-2">
                <span className="font-semibold">Languages known :</span>
                <input
                  type="text"
                  placeholder="e.g. English, Spanish"
                  className="bg-transparent border-none focus:outline-none ml-2 text-gray-100"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfileUpdatePage;
