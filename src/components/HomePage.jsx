import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * This component displays:
 * - Left side: Title, paragraph, and button
 * - Right side: An image that floats up/down
 * All wrapped by your existing Header, Navbar, and Footer.
 */
function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
          {/* Left Column: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl font-bold mb-4">CRYPTO CURRENCY</h1>
            <p className="text-gray-300 mb-6">
              Explicabo esse amet tempora quisquam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus impedit modi impedit sequi.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Read More
            </button>
          </div>

          {/* Right Column: Moving Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md h-64">
              {/* 
                Replace /images/crypto.png with your actual image path. 
                The animate-float-up-down class triggers the up/down motion.
              */}
              <img
                src="/slider-img.png"
                alt="Crypto Illustration"
                className="absolute animate-float-up-down"
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
