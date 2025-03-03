import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";

const SignUp = () => {
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
// const WalletSection = () => {
//     const [address, setWalletAddress] = useState(null);
  
//     // Function to connect to MetaMask Wallet
//     const connectWallet = async () => {
//       if (window.ethereum) {
//         try {
//           const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//           setWalletAddress(accounts[0]); // Set the connected MetaMask wallet address
//         } catch (error) {
//           console.error("Error connecting to MetaMask:", error);
//         }
//       } else {
//         alert("MetaMask is not installed. Please install it to use this feature.");
//       }
//     };
  
//     return (
//       <div className="wallet-section bg-blue-100 py-8">
//         <h2 className="text-4xl font-bold text-center mb-6">Connect Your Wallet</h2>
//         <div className="text-center">
//           <button
//             onClick={connectWallet}
//             className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg"
//           >
//             {walletAddress ? `Connected: ${walletAddress}` : "Connect MetaMask Wallet"}
//           </button>
//         </div>
//       </div>
//     );
//   };

  return (
    <div className="login-form">
      <div>
        <h2>Sign Up</h2>
        <p id="ep">Create your Account</p>
      </div>
      {error && <p className="error">{error}</p>}
      <input 
        type="text" 
        id="name"
        placeholder="Full Name" 
        value={name} 
        onChange={(e) => setFname(e.target.value)}
      />
      <input 
        type="text" 
        id="username"
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <button type="button" onClick={connectMetaMask} className="wallet-button">Connect Wallet</button>
        <input 
          type="text" 
          id="address"
          placeholder="Wallet Address" 
          value={address} 
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="student" id="student">Student</option>
        <option value="employer" id="employer">Employer</option>
      </select>
      <input 
        type="email"
        id="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-container">
        <input 
          type={showPassword ? "text" : "password"} 
          id="password"
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button className="login-button" onClick={handleSubmit}>CREATE</button>
      <p>Already have an account? <Link to="/" id="a">Login</Link></p>
    </div>
  );
};

export default SignUp;

