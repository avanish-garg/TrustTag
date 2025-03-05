// import React, { useEffect, useState } from "react";

// const RequestsPage = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       const response = await fetch("http://localhost:5000/api/resumes/fetch", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Send token in request header
//         },
//       });

//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setRequests(data);
//     } catch (error) {
//       console.error("Error fetching requests:", error);
//     }
//   };

//   const handleVerify = async (studentAddress, resumeHash) => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       const response = await fetch("http://localhost:5000/api/resumes/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Send token in request header
//         },
//         body: JSON.stringify({ studentAddress, resumeHash }),
//       });

//       const result = await response.json();
//       if (result.transactionHash) {
//         alert(`✅ Verified! Transaction Hash: ${result.transactionHash}`);
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error verifying resume:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
//       <h1 className="text-2xl font-semibold mb-4 text-center">Requests</h1>

//       <div className="w-full max-w-4xl overflow-x-auto">
//         <table className="w-full border border-gray-700 text-center">
//           <thead className="bg-gray-800">
//             <tr>
//               <th className="px-4 py-2 border-b border-gray-700">Student Name</th>
//               <th className="px-4 py-2 border-b border-gray-700">Student Address</th>
//               <th className="px-4 py-2 border-b border-gray-700">Resume Hash</th>
//               <th className="px-4 py-2 border-b border-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-gray-800">
          
//             {requests.map((request, index) => (
//               <tr key={index}>
//                 <td className="px-4 py-2 border-b border-gray-700">{request.studentName || "N/A"}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">{request.studentAddress || "N/A"}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">{request.resumeHash}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">
//                   <button
//                     className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-400"
//                     onClick={() => handleVerify(request.studentAddress, request.resumeHash)}
//                   >
//                     Approve
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RequestsPage;
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftAdminBar from "./LeftAdminBar";
import Footer from "./Footer";

const RequestsPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/resumes/fetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",


        },
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setRequests(data.filter(req => req.resumeHash)); // Show only valid requests
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const handleVerify = async (studentAddress, resumeHash) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/resumes/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ studentAddress, resumeHash }),
      });

      const result = await response.json();
      if (result.transactionHash) {
        alert(`✅ Verified! Transaction Hash: ${result.transactionHash}`);
        fetchRequests(); // Refresh list after approval
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error verifying resume:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1">
        <LeftAdminBar />

        {/* Content Section */}
        <main className="flex-1 p-6 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4 text-center">Verification Requests</h1>
          <div className="w-16 h-px bg-gray-400 mb-6"></div>

          {/* Table Container */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border border-gray-700 text-center">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700">Student Name</th>
                  <th className="px-4 py-2 border-b border-gray-700">Blockchain Address</th>
                  <th className="px-4 py-2 border-b border-gray-700">Resume Hash</th>
                  <th className="px-4 py-2 border-b border-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {requests.length > 0 ? (
                  requests.map((request, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b border-gray-700">{request.studentName || "N/A"}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{request.studentAddress || "N/A"}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{request.resumeHash}</td>
                      <td className="px-4 py-2 border-b border-gray-700">
                        <button
                          className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-400"
                          onClick={() => handleVerify(request.studentAddress, request.resumeHash)}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-4 py-4 text-gray-400">
                      No pending verification requests.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RequestsPage;
