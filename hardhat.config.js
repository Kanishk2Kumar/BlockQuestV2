require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia.publicnode.com", // ✅ Public RPC for Sepolia
      accounts: privateKey(),
      gasPrice: 1000000000, // ✅ Set gas price (1 Gwei)
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY, // ✅ Ensure this is an Etherscan API key
  },
};
