// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13; // Set the Solidity version to ^0.8.13

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StudentCredentials is ERC721, Ownable {

    mapping(address => string) public resumeHashes;
    mapping(address => string) public academicRecords;

    uint public nextTokenId;

    event ResumeUploaded(address indexed student, string resumeHash);
    event AcademicRecordMinted(address indexed student, uint indexed tokenId, string record);

    // Constructor: Removed unnecessary argument for Ownable()
    constructor() ERC721("StudentCredentials", "SC") Ownable() {
        nextTokenId = 1; // Initialize token ID counter
    }

    // Function to upload a resume hash
    function uploadResume(string memory resumeHash) external {
        resumeHashes[msg.sender] = resumeHash;
        emit ResumeUploaded(msg.sender, resumeHash);
    }

    // Function to mint an academic record (NFT)
    function mintAcademicRecord(address student, string memory record) external onlyOwner {
        uint tokenId = nextTokenId;
        _safeMint(student, tokenId); // Mint NFT to student
        academicRecords[student] = record; // Store academic record
        nextTokenId++; // Increment token ID counter
        emit AcademicRecordMinted(student, tokenId, record);
    }

    // Function to get a student's resume hash
    function getResume(address student) external view returns (string memory) {
        return resumeHashes[student];
    }

    // Function to get a student's academic record
    function getAcademicRecord(address student) external view returns (string memory) {
        return academicRecords[student];
    }
}