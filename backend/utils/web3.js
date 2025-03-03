const Web3 = require("web3");
const contractABI = require("../abi/StudentCredentials.json"); // Replace with your contract ABI
const contractAddress = "0xA2e6575Ad46bCCD1E05Eb88527DFAAAb290fD168"; // Replace with your contract address

// Initialize Web3
const web3 = new Web3("http://localhost:7545"); // Replace with your Ganache or Polygon RPC URL

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to store resume hash on the blockchain
const storeResumeHash = async (userAddress, resumeHash) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods
      .storeResumeHash(resumeHash) // Call the updated function
      .send({ from: userAddress, gas: 3000000 }); // Use user's address

    return result;
  } catch (error) {
    console.error("❌ Error storing resume hash on blockchain:", error);
    throw error;
  }
};

// Function to verify resume hash on the blockchain
const verifyResumeHash = async (employerAddress, studentAddress, providedHash) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods
      .verifyResumeHash(studentAddress, providedHash) // Call the updated function
      .send({ from: employerAddress, gas: 3000000 }); // Use employer's address

    return result;
  } catch (error) {
    console.error("❌ Error verifying resume hash on blockchain:", error);
    throw error;
  }
};

// Export functions
module.exports = { storeResumeHash, verifyResumeHash };