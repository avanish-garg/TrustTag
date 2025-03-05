const { Web3 } = require("web3");
const contractABI = require("../abi/StudentCredentials.json").abi; // Ensure the path is correct
require("dotenv").config(); // Load environment variables

// Initialize Web3 with the RPC URL from .env
const web3 = new Web3(process.env.RPC_URL);

// Load the contract using the address from .env
const contract = new web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS);

// Function to store resume hash on the blockchain
const storeResumeHash = async (studentAddress, resumeHash) => {
  try {
    if (!studentAddress || !resumeHash) {
      throw new Error("Student address and resume hash are required.");
    }

    const result = await contract.methods
      .storeResumeHash(resumeHash)
      .send({ from: studentAddress, gas: 3000000 });

    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error uploading resume to blockchain:", error);
    throw error;
  }
};

// Function to verify resume hash on the blockchain
const verifyResume = async (employerAddress, studentAddress, providedHash) => {
  try {
    if (!employerAddress || !studentAddress || !providedHash) {
      throw new Error("Employer address, student address, and provided hash are required.");
    }

    const result = await contract.methods
      .verifyResumeHash(studentAddress, providedHash)
      .send({ from: employerAddress, gas: 3000000 });

    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error verifying resume on blockchain:", error);
    throw error;
  }
};

// Function to mint academic record as NFT
const mintAcademicRecord = async (studentAddress, record) => {
  try {
    if (!studentAddress || !record) {
      throw new Error("Student address and record are required.");
    }

    const result = await contract.methods
      .mintAcademicRecord(record)
      .send({ from: studentAddress, gas: 3000000 });

    return result.transactionHash;
  } catch (error) {
    console.error("❌ Error minting academic record on blockchain:", error);
    throw error;
  }
};

// Function to get academic record by token ID
const getAcademicRecord = async (tokenId) => {
  try {
    if (!tokenId) {
      throw new Error("Token ID is required.");
    }

    if (typeof tokenId !== "string" || !/^\d+$/.test(tokenId)) {
      throw new Error("Token ID must be a valid number.");
    }

    const tokenIdNumber = BigInt(tokenId);

    const record = await contract.methods
      .getAcademicRecord(tokenIdNumber)
      .call();

    return record;
  } catch (error) {
    console.error("❌ Error fetching academic record from blockchain:", error);
    throw error;
  }
};

// Export functions
module.exports = { storeResumeHash, verifyResume, mintAcademicRecord, getAcademicRecord };