module.exports = {
    networks: {
      development: {
        host: "127.0.0.1", // Localhost (Ganache)
        port: 7545,        // Ganache default port
        network_id: "*",   // Match any network ID
        gas: 6000000,      // Increased gas limit to 8 million
        gasPrice: 20000000000, // 20 Gwei (in wei)
      }
    },
  
    compilers: {
      solc: {
        version: "0.8.13",  // Set Solidity version to 0.8.13
      }
    }
  };