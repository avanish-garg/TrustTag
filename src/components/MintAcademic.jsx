// import { useState } from "react";

// const MintAcademicRecord = () => {
//   const [studentAddress, setStudentAddress] = useState("");
//   const [record, setRecord] = useState("");
//   const [txHash, setTxHash] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTxHash(null);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:5000/api/blockchain/mint-academic-record", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ studentAddress, record }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setTxHash(data.txHash);
//       } else {
//         setError(data.error || "Failed to mint record");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Mint Academic Record</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Student Address"
//           value={studentAddress}
//           onChange={(e) => setStudentAddress(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Record"
//           value={record}
//           onChange={(e) => setRecord(e.target.value)}
//           required
//         />
//         <button type="submit">Mint</button>
//       </form>
//       {txHash && <p>Transaction Hash: {txHash}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default MintAcademicRecord;
// import React, { useState } from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import LeftAdminBar from "./LeftAdminBar";
// import Footer from "./Footer";

// const MintAcademicRecord = () => {
//   const [studentAddress, setStudentAddress] = useState("");
//   const [record, setRecord] = useState("");
//   const [txHash, setTxHash] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTxHash(null);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:5000/api/blockchain/mint-academic-record", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ studentAddress, record }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setTxHash(data.txHash);
//       } else {
//         setError(data.error || "Failed to mint record");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
//       <Header />
//       <Navbar />
//       <div className="flex flex-1">
//         <LeftAdminBar />
//         <main className="flex-1 p-6 flex justify-center items-start">
//           <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-semibold text-center mb-2">Mint Academic Record</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Student Address"
//                 value={studentAddress}
//                 onChange={(e) => setStudentAddress(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Record"
//                 value={record}
//                 onChange={(e) => setRecord(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
//               />
//               <div>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
//               >
//                 Mint
//               </button>
//               </div>
//             </form>
//             {txHash && <p className="text-center mt-4 text-green-400">Transaction Hash: {txHash}</p>}
//             {error && <p className="text-center mt-4 text-red-400">{error}</p>}
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MintAcademicRecord;
import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const MintAcademicRecord = () => {
  const [studentAddress, setStudentAddress] = useState("");
  const [record, setRecord] = useState("");
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTxHash(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/blockchain/mint-academic-record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentAddress, record }),
      });

      const data = await response.json();
      if (data.success) {
        setTxHash(data.txHash);
        alert(`Transaction Hash: ${data.txHash}`);
      } else {
        setError(data.error || "Failed to mint record");
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
            <h2 className="text-2xl font-semibold text-center mb-2">Mint Academic Record</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Student Address"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Record"
                value={record}
                onChange={(e) => setRecord(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
              />
              <div>
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 focus:outline-none"
              >
                Mint
              </button>
              </div>
            </form>
            {error && <p className="text-center mt-4 text-red-400">{error}</p>}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MintAcademicRecord;
