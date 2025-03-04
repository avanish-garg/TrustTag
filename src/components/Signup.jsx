import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [name, setFname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [address, setWalletAddress] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password||!address || !name || !username || !role) {
      setError("All fields are required.");
      return;
    }
    
    setError("");
    // console.log("Form submitted with", { name, username, email, password, role, address });
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
          name,
          username,
          email,
          password,
          role,
          address,
        });
    
        // Store JWT token in localStorage
        localStorage.setItem("token", response.data.token);
    
        alert("User registered successfully!");
      } catch (error) {
        setError(error.response?.data?.error || "Something went wrong");
      }
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        console.log("Connected Account: ", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask: ", error);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/public/background.svg')" }}>
      <div className="bg-gray-900 p-10 rounded-xl text-center shadow-lg w-96">
        <h2 className="text-white text-2xl mb-2">Sign Up</h2>
        <p className="text-gray-400 mb-6">Create your account</p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input 
        type="text" 
        id="name"
        placeholder="Full Name" 
        value={name} 
        onChange={(e) => setFname(e.target.value)}
        className="w-4/5 p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
      />
       <input 
        type="text" 
        id="username"
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        className="w-4/5 p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
      />
      <button type="button" onClick={connectMetaMask} className="wallet-button">Connect Wallet</button>
      <div>
        <input 
          type="text" 
          id="address"
          placeholder="Wallet Address" 
          value={address} 
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-4/5 p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
          />
          </div>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="student" id="student">Student</option>
        <option value="employer" id="employer">Employer</option>
      </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-4/5 p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-4/5 p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
          />
          <span
            className="absolute right-12 top-3 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        
        <button
          className="w-3/5 p-2 mt-4 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-700"
          onClick={handleSubmit}
        >
          SIGN UP
        </button>
        <p className="text-gray-400 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-400 font-bold hover:underline">Log in</Link>
        </p>
        <p className="text-gray-400 mt-4">Or sign up with</p>
        <button className="bg-white p-2 rounded-full shadow-md mt-2">
          <SocialLogin />
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
