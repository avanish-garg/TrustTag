import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    console.log("Form submitted with", { email, password });
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });
      
        // Store JWT token in localStorage
        localStorage.setItem("token", response.data.token);
      
        alert("Login successful!");
      } catch (error) {
        setError(error.response?.data?.error || "Invalid credentials");
      }
      
  };

  return (
    <div className="login-form">
        <div>
      <h2>Log In</h2>
      <p id="ep">Enter your email and password</p></div>
      {error && <p className="error">{error}</p>}
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      /> */}
        <div className="password-container">
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
      <p className="forgot-password">
      <Link to="/forgotpassword" id="fg ">Forgot Password?</Link>
      </p>
      <button className="login-button" onClick={handleSubmit}>LOGIN</button>
      <p >Don't have an account? <Link to="/signup" id="a">Sign up</Link></p>
      <p>Log in with</p>
      <button className="google-login"> <SocialLogin /></button>
    </div>
    

  );
};

export default LoginForm;
