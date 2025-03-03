const { Web3 } = require("web3");
const contractABI = require("../abi/StudentCredentials.json").abi; // Ensure the path is correct
const contractAddress = "0xA2e6575Ad46bCCD1E05Eb88527DFAAAb290fD168"; // Replace with your contract address

// Initialize Web3
const web3 = new Web3("http://127.0.0.1:7545"); // Replace with your Ganache or Polygon RPC URL

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to store resume hash on the blockchain
const uploadResume = async (studentAddress, resumeHash) => {
  try {
    // Validate inputs
    if (!studentAddress || !resumeHash) {
      throw new Error("Student address and resume hash are required.");
    }

    // Call the contract method
    const result = await contract.methods
      .storeResumeHash(resumeHash) // Corrected function name
      .send({ from: studentAddress, gas: 3000000 });

    // Return the transaction hash
    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error uploading resume to blockchain:", error);
    throw error;
  }
};

// Function to verify resume hash on the blockchain
const verifyResume = async (employerAddress, studentAddress, providedHash) => {
  try {
    // Validate inputs
    if (!employerAddress || !studentAddress || !providedHash) {
      throw new Error("Employer address, student address, and provided hash are required.");
    }

    // Call the contract method
    const result = await contract.methods
      .verifyResumeHash(studentAddress, providedHash) // Corrected function name
      .send({ from: employerAddress, gas: 3000000 });

    // Return the transaction hash
    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error verifying resume on blockchain:", error);
    throw error;
  }
};

// Function to mint academic record as NFT
const mintAcademicRecord = async (studentAddress, record) => {
  try {
    // Validate inputs
    if (!studentAddress || !record) {
      throw new Error("Student address and record are required.");
    }

    // Call the contract method
    const result = await contract.methods
      .mintAcademicRecord(record) // Call the contract function
      .send({ from: studentAddress, gas: 3000000 }); // Use student's address

    // Return the transaction hash
    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error minting academic record on blockchain:", error);
    throw error;
  }
};

// Function to get academic record by token ID
const getAcademicRecord = async (tokenId) => {
  try {
    // Validate inputs
    if (!tokenId) {
      throw new Error("Token ID is required.");
    }

    // Ensure tokenId is a valid numeric string
    if (typeof tokenId !== "string" || !/^\d+$/.test(tokenId)) {
      throw new Error("Token ID must be a valid number.");
    }

    // Convert tokenId to a BigInt
    const tokenIdNumber = BigInt(tokenId);

    // Call the contract method
    const record = await contract.methods
      .getAcademicRecord(tokenIdNumber) // Pass the converted tokenId
      .call();

    // Return the academic record
    return record;
  } catch (error) {
    console.error("❌ Error fetching academic record from blockchain:", error);
    throw error;
  }
};

// Export functions
module.exports = { uploadResume, verifyResume, mintAcademicRecord, getAcademicRecord };