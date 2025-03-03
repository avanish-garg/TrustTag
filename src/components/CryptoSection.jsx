import React from "react";

const CryptoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-8">
      {/* Left Column: Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">CRYPTO CURRENCY</h1>
        <p className="text-gray-300 mb-6">
          Explicabo esse amet tempora quisquam laudantium, laborum eaque magnam
          fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
          molestias, veniam, vel architecto veritatis delectus impedit modi
          impedit sequi.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Read More
        </button>
      </div>

      {/* Right Column: Floating Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-64 bg-gray-800 rounded-lg overflow-hidden">
          {/* 
            Use your own image path. If your image is in /public/images,
            then src="/images/crypto.png"
          */}
          <img
            src="/slider-img.png"
            alt="Crypto"
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
  );
};

export default CryptoSection;
