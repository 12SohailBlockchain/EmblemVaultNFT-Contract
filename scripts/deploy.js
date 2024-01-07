const hre = require("hardhat");


async function main() {
  const EmblemVault = await hre.ethers.getContractFactory("EmblemVault");
  const emblemVault = await EmblemVault.deploy();


// const NFTMarketplace = await hre.ethers.getContractFactory("MintSeaCollection");
// const nFTMarketplace = await NFTMarketplace.deploy();
  // await emblemVault.deployed();

  console.log("EmblemVault:", emblemVault.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
