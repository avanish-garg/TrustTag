import React, { useState } from "react";
// import SocialLogin from "./SocialLogin";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Forgot= () => {
  
  const [email, setEmail] = useState("");
   const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Field is required.");
      return;
    }
    setError("");
    console.log("Form submitted with", { email });
  };

  return (
    <div className="login-form">
        <div>
      <h2>Frogot Password</h2>
      <p id="ep">Create your new one</p></div>
      {error && <p className="error">{error}</p>}
     
           
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />

      
      {/* <p className="forgot-password">
        <a id="fg" href="#">Forgot Password?</a>
      </p> */}
      <button className="login-button" onClick={handleSubmit}>SET</button>
      <p >Already have an account? <Link to="/" id="a">Login</Link></p>
      {/* <p>Log in with</p>
      <button className="google-login"> <SocialLogin /></button> */}
    </div>
    

  );
};

export default Forgot;
