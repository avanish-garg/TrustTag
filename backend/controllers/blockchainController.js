const web3 = require("../utils/web3");

exports.uploadResume = async (req, res) => {
  try {
    const { studentAddress, resumeHash } = req.body;
    const txHash = await web3.uploadResume(studentAddress, resumeHash);
    res.json({ success: true, txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyResume = async (req, res) => {
  try {
    const { employerAddress, studentAddress, providedHash } = req.body;
    const txHash = await web3.verifyResume(employerAddress, studentAddress, providedHash);
    res.json({ success: true, txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.mintAcademicRecord = async (req, res) => {
  try {
    const { studentAddress, record } = req.body;
    const txHash = await web3.mintAcademicRecord(studentAddress, record);
    res.json({ success: true, txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getAcademicRecord = async (req, res) => {
  try {
    const { tokenId } = req.params; // Extract tokenId from route parameters

    // Validate tokenId
    if (!tokenId) {
      throw new Error("Token ID is required.");
    }

    // Fetch the academic record
    const record = await web3.getAcademicRecord(tokenId);
    res.json({ success: true, record });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};