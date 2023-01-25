const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const approveAbi = require('./abis/ERC721.json');
const abi = require('./abis/abi.json');
const contractAddress = "0x0a706e66B681942B68f411Fce22d445BA380c1eb"; // replace with the address of your contract
const dtokenAddress = "0xe203d522f12bf67590aa39523d82ca55cc84ee85"; // replace with the address of the NFT token contract
const dtokenID = "39710781280930763537035987322981047694673486762719321314861334563512601542663"; // replace with the ID of the NFT token
const approve = new web3.eth.Contract(approveAbi, dtokenAddress);
web3 = new Web3(new Web3.providers.HttpProvider("https://avalanche.network/ext/bc/C/rpc"));
web3.ethereum.enable();
web3.eth.getAccounts().then(console.log);
approve.methods.approve(contractAddress, dtokenID).send({ from: '0x...', gas: 1000000 });


const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.acceptNewNFT(dtokenAddress, dtokenID).send({ from: '0x...', gas: 1000000 })
  .then(console.log)
  .catch(console.error);
