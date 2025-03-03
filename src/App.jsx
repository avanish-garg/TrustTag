import React from "react";
import ApplicantDashboard from "./components/ApplicantDashboard";
import "./index.css"; // Tailwind CSS import
import RegisterPage from "./components/RegisterPage";
import CredentialPage from "./components/CredentialPage";
import RequestsPage from "./components/RequestsPage";
import ProfileUpdatePage from "./components/ProfileUpdatePage";
import RecordPage from "./components/RecordPage";
import VerificationRequestPage from "./components/VerificationRequestPage";
import VerificationRequestCheckPage from "./components/VerificationRequestCheckPage";
import ProgressSecondPage from "./components/ProgressSecondPage";
import HomePage from "./components/HomePage";
import "./styles/Login.css";
import SignUp from "./components/Signup";
import Forgot from "./components/Forgot";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ApplicantDashboard />
      <RegisterPage />
      <CredentialPage />
      <RequestsPage />
      <ProfileUpdatePage />
      <RecordPage />
      <VerificationRequestPage />
      <VerificationRequestCheckPage />
      <ProgressSecondPage />
      <HomePage />
      <Router>
      <div className="login-container">
        <div className="login-box">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
