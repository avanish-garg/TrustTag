import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ApplicantDashboard from "./components/ApplicantDashboard";
import RegisterPage from "./components/RegisterPage";
import CredentialPage from "./components/CredentialPage";
import RequestsPage from "./components/RequestsPage";

import ProfileUpdatePage from "./components/ProfileUpdatePage";
import RecordPage from "./components/RecordPage";
import VerificationRequestPage from "./components/VerificationRequestPage";
import VerificationRequestCheckPage from "./components/VerificationRequestCheckPage";
import ProgressSecondPage from "./components/ProgressSecondPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import FetchAcademicRecord from "./components/GetAcademicRecord"
import "./index.css"; // Tailwind CSS import
import "./Login.css";
import AddResume from "./components/Add Resume";
import MintAcademicRecord from "./components/MintAcademic";

function App() {
  return (
    
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
    
        {/* Dashboard and Other Pages */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/applicant-dashboard" element={<ApplicantDashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload" element={<AddResume />} />
        <Route path="/mint" element={<MintAcademicRecord/>} />
        <Route path="/getacademic" element={<FetchAcademicRecord />} />
        <Route path="/credential" element={<CredentialPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/verification-request" element={<VerificationRequestPage />} />
        <Route path="/verification-request-check" element={<VerificationRequestCheckPage />} />
        <Route path="/progress-second" element={<ProgressSecondPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;