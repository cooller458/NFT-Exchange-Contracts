const { network } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  let nftAuction = await deploy("NFTAuction", {
    from: deployer,
    log: true,
  });
  let erc20 = await deploy("ERC20MockContract", {
    from: deployer,
    log: true,
    args: ["Mock ERC20", "MER"],
  });

  let erc721 = await deploy("ERC721MockContract", {
    from: deployer,
    args: ["New Mocks", "NMK"],
    log: true,
  });
  console.log("NFTAuction deployed to:", nftAuction.address);
  console.log("ERC20 deployed to:", erc20.address);
  console.log("ERC721 deployed to:", erc721.address);
};
module.exports.tags = ["all", "Auction"];