exports.registerProduct = (req, res) => {
    const { serialNumber, name, ipfsHash } = req.body;
    // Logic for interacting with smart contract to register product
    res.send("Product registered!");
  };
  