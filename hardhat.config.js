require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY = `50ebadf7f79845c1952826d9e26a0911`;

const SEPOLIA_PRIVATE_KEY = "61d1ad98e20459102c8f290de3873479a44b3adb8d498c1da732f3b1825ca51f";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};