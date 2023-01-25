const NFTExchange = artifacts.require("NFTExchange");

module.exports = function (deployer) {
    deployer.deploy(NFTExchange);
    console.log("NFTExchange deployed to:", NFTExchange.address);    
};