const express = require("express");
const { uploadResume, verifyResume, mintAcademicRecord, getAcademicRecord } = require("../controllers/blockchainController");

const router = express.Router();

router.post("/upload-resume", uploadResume);
router.post("/verify-resume", verifyResume);
router.post("/mint-academic-record", mintAcademicRecord);
router.get("/get-academic-record/:tokenId", getAcademicRecord);

module.exports = router;
