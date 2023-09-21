
const hre = require("hardhat");

async function main() {
  const Bank = await hre.ethers.getContractFactory("bank"); //fetching bytecode and ABI
  const bank = await Bank.deploy(); //creating an instance of our smart contract

  await bank.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${bank.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xa64e3144835aF8781c750ceC432784a68d883266