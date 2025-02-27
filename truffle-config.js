require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  networks: {
    // Development network setup for Ganache
    development: {
      host: "127.0.0.1",     // Localhost
      port: 8545,            // Standard Ethereum port (default: 8545, used by Ganache)
      network_id: "*",       // Match any network ID (default: none)
    },

    // Goerli testnet setup using Infura
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
      network_id: 5,         // Goerli's network ID
      confirmations: 2,      // Number of confirmations to wait between deployments
      timeoutBlocks: 200,    // Number of blocks before a deployment times out
      skipDryRun: true       // Skip dry run before migrations (recommended for public networks)
    },
    
    // You can add more networks (like Rinkeby, Mainnet, etc.) as needed

  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",      // Solidity version used to compile contracts
    }
  },

  // Mocha testing configuration (optional)
  mocha: {
    // Increase timeout for longer tests if needed
    timeout: 100000,
  },

  // Enable Truffle DB for contract data storage (optional)
  db: {
    enabled: false,  // Keep disabled unless you need contract data storage
  }
};
