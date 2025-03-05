import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const FetchAcademicRecord = () => {
  const [tokenId, setTokenId] = useState("");
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async (e) => {
    e.preventDefault();
    setRecord(null);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/blockchain/get-academic-record/${tokenId}`);
      const data = await response.json();
      
      if (data.success) {
        setRecord(data.record);
        alert(`Academic Record: ${JSON.stringify(data.record)}`);
      } else {
        setError(data.error || "Failed to fetch record");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <LeftAdminBar />
        <main className="flex-1 p-6 flex justify-center items-start">
          <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-2">Fetch Academic Record</h2>
            <form onSubmit={handleFetch} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
              >
                Fetch Record
              </button>
            </form>
            {error && <p className="text-center mt-4 text-red-400">{error}</p>}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FetchAcademicRecord;
