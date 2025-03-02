require("dotenv").config();
const Web3 = require("web3");
const fs = require("fs");
const path = require("path");

// Load contract ABI and address
const contractPath = path.resolve(__dirname, "../../contracts/StudentCredentials.json");

if (!fs.existsSync(contractPath)) {
  console.error("❌ Contract ABI file is missing! Please compile & migrate the contract.");
  process.exit(1);
}

const contractABI = JSON.parse(fs.readFileSync(contractPath, "utf-8"));

const contractAddress = "0x847c85B40d60aaA72633c4563C98bE23fB91fAa5"; // Replace with deployed contract address

// Connect to Blockchain (Ganache or Mumbai Testnet)
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545")); // Change if using Testnet

// Get contract instance
const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

// Function to store resume hash on blockchain
async function storeResumeHash(userAddress, resumeHash) {
  try {
    const accounts = await web3.eth.getAccounts(); // Fetch accounts from blockchain
    const tx = await contract.methods.uploadResume(resumeHash).send({
      from: accounts[0], // Use first account to sign transaction
      gas: 500000,
    });

    console.log("Resume hash stored on blockchain:", tx.transactionHash);
    return tx.transactionHash;
  } catch (error) {
    console.error("Error storing resume hash:", error);
    throw error;
  }
}

module.exports = { storeResumeHash };
