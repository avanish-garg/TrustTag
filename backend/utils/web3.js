const { Web3 } = require('web3');
const contractABI = require("../abi/StudentCredentials.json").abi;  // ✅ FIXED ABI IMPORT
const contractAddress = process.env.CONTRACT_ADDRESS;

// ✅ Ensure Web3 provider is correctly set (Ganache or Infura)
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));

// ✅ Contract Instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// ✅ Upload Resume to Blockchain
async function uploadResume(studentAddress, resumeHash) {
    return contract.methods.uploadResume(resumeHash).send({ from: studentAddress });
}

// ✅ Verify Resume
async function verifyResume(employerAddress, studentAddress, resumeHash) {
    return contract.methods.verifyResume(studentAddress, resumeHash).send({ from: employerAddress });
}

// ✅ Mint Academic Record as NFT
async function mintAcademicRecord(studentAddress, record) {
    return contract.methods.mintAcademicRecord(record).send({ from: studentAddress });
}

// ✅ Get Academic Record by Token ID
async function getAcademicRecord(tokenId) {
    return contract.methods.getAcademicRecord(tokenId).call();
}

module.exports = { uploadResume, verifyResume, mintAcademicRecord, getAcademicRecord, web3, contract };
