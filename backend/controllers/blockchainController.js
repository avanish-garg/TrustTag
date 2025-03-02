const web3 = require("../utils/web3");

exports.uploadResume = async (req, res) => {
    try {
        const { studentAddress, resumeHash } = req.body;
        const tx = await web3.uploadResume(studentAddress, resumeHash);
        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.verifyResume = async (req, res) => {
    try {
        const { employerAddress, studentAddress, providedHash } = req.body;
        const tx = await web3.verifyResume(employerAddress, studentAddress, providedHash);
        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.mintAcademicRecord = async (req, res) => {
    try {
        const { studentAddress, record } = req.body;
        const tx = await web3.mintAcademicRecord(studentAddress, record);
        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAcademicRecord = async (req, res) => {
    try {
        const { tokenId } = req.params;
        const record = await web3.getAcademicRecord(tokenId);
        res.json({ success: true, record });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
