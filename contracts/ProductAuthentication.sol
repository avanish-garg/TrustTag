pragma solidity ^0.8.0;

contract ProductAuthentication {
    struct Product {
        string name;
        string serialNumber;
        address owner;
        string ipfsHash;
        bool isAuthentic;
    }

    mapping(string => Product) public products;

    event ProductRegistered(string serialNumber, string ipfsHash);

    function registerProduct(string memory _serialNumber, string memory _name, string memory _ipfsHash) public {
        products[_serialNumber] = Product(_name, _serialNumber, msg.sender, _ipfsHash, true);
        emit ProductRegistered(_serialNumber, _ipfsHash);
    }

    function verifyProduct(string memory _serialNumber) public view returns (bool, string memory, string memory) {
        Product memory product = products[_serialNumber];
        return (product.isAuthentic, product.name, product.ipfsHash);
    }

    function transferOwnership(string memory _serialNumber, address _newOwner) public {
        require(msg.sender == products[_serialNumber].owner, "Only the current owner can transfer ownership.");
        products[_serialNumber].owner = _newOwner;
    }
}
