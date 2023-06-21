require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY = `2ddab4e2d805494a9528dec9808ac8ba`;

const PRIVATE_KEY = "61d1ad98e20459102c8f290de3873479a44b3adb8d498c1da732f3b1825ca51f";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  }
};