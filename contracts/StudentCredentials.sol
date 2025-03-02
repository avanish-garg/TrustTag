// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StudentCredentials is ERC721, Ownable {

    mapping(address => string) public resumeHashes;
    mapping(uint => string) public academicRecords;
    mapping(address => bool) public verifiedResumes;

    uint public nextTokenId;

    event ResumeUploaded(address indexed student, string resumeHash);
    event ResumeVerified(address indexed employer, address indexed student);
    event AcademicRecordMinted(address indexed student, uint indexed tokenId, string record);

    constructor() ERC721("StudentCredentials", "SC") {
        nextTokenId = 1;
    }

    // Function for students to upload a resume hash
    function uploadResume(string memory resumeHash) external {
        resumeHashes[msg.sender] = resumeHash;
        emit ResumeUploaded(msg.sender, resumeHash);
    }

    // Function for employers to verify a resume hash
    function verifyResume(address student, string memory providedHash) external {
        require(keccak256(abi.encodePacked(resumeHashes[student])) == keccak256(abi.encodePacked(providedHash)), "Resume hash mismatch!");
        verifiedResumes[student] = true;
        emit ResumeVerified(msg.sender, student);
    }

    // Function for students to mint academic credentials as NFTs
    function mintAcademicRecord(string memory record) external {
        uint tokenId = nextTokenId;
        academicRecords[tokenId] = record;
        _mint(msg.sender, tokenId);
        nextTokenId++;
        emit AcademicRecordMinted(msg.sender, tokenId, record);
    }

    // Function to get academic record by token ID
    function getAcademicRecord(uint tokenId) external view returns (string memory) {
        return academicRecords[tokenId];
    }
}