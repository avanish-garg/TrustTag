import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    // console.log("Form submitted with", { email, password });
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store JWT token in localStorage
      localStorage.setItem("token", response.data.token);
      
      //  alert("Login successful!");
       navigate("/home");
    } catch (error) {
      setError(error.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/public/background.svg')" }}>
      <div className="bg-gray-900 p-10 rounded-xl text-center shadow-lg w-96">
        <h2 className="text-white text-2xl mb-2">Log In</h2>
        <p className="text-gray-400 mb-6">Enter your email and password</p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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
        <p className="text-right w-4/5 text-red-400 text-sm">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </p>
        <button
          className="w-3/5 p-2 mt-4 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-700"
          onClick={handleSubmit}
        >
          LOGIN
        </button>
        <p className="text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-yellow-400 font-bold hover:underline">Sign up</Link>
        </p>
        <p className="text-gray-400 mt-4">Log in with</p>
        <button className="bg-white p-2 rounded-full shadow-md mt-2">
          <SocialLogin />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
