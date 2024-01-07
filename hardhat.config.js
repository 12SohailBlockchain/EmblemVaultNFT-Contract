require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.6.2",

  // 2: For Sepolia Testne

  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/64d5a638c6834dddb6a59aa830e93f09",
      chainId: 11155111,
      accounts: ["Your metamask wallet private key here",
      ], // this is 2nd profile address
      // gasPrice: 20000000000,
    },
  },

  // For the Goerli network

  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Tr17UxALC-7mYsqYMdjvOydC5DHM9sHo",
      chainId: 5,
      accounts: [
        `Your metamask wallet private key here`,
      ], // this is 2nd profile address
      // gasPrice: 20000000000,
    },
  },

  // 1:Etherscan Explore
  etherscan: {
    apiKey: {
      goerli: "Your Etherscan Explore key here",
    },
  },

  mocha: {
    timeout: 20000,
  },
};
