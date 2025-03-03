import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OurTeamSection from "./OurTeamSection";
import ContactUsSection from "./ContactUsSection";

// Make sure this path matches the actual location of AboutImg.svg in your project.
// For example, if it's in src/assets/AboutImg.svg:

function AboutPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header and Navbar remain the same */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Section: Image (left) + Text (right) */}
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          {/* Left side: About image */}
          <div className="md:w-1/2">
            <img
              src="/AboutImg.svg"
              alt="About Authify"
              className="w-full h-auto"
            />
          </div>

          {/* Right side: About text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 uppercase">ABOUT AUTHIFY</h2>
            <p className="mb-4">
              Authify is a cutting-edge decentralized platform revolutionizing
              the way credentials are verified. We empower applicants,
              employers, and verifiers with a seamless, tamper-proof system
              ensuring every record is trustworthy. By leveraging blockchain
              technology, we eliminate fake claims and provide instant,
              verifiable proof—because in a world full of possibilities,
              authenticity matters.
            </p>
            <p className="mb-4">
              With Authify, your credentials aren't just statements—they're
              undeniable proof. Applicants stand out more securely, while
              employers gain instant access to genuine qualifications. Fast,
              transparent, and future-proof—Authify is redefining trust in the
              hiring process, giving you one verified credential at a time.
            </p>
          </div>
        </section>

        {/* Bottom Statement */}
        <section className="bg-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl font-semibold">
              Every real achievement deserves a truly verified recognition.
            </p>
          </div>
        </section>
      </main>
      <section>
        {/* Our Team Section */}
        <OurTeamSection />
      </section>
      <section>
        {/* Contact Us Section */}
        <ContactUsSection />
      </section>

      {/* Footer remains the same */}
      <Footer />
    </div>
  );
}

export default AboutPage;
