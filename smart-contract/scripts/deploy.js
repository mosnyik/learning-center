
const { ethers} = require("hardhat");


async function main() {
  // instantiate MintCert contaract using ether's ContractFactory
  const mintCertNFT = await ethers.getContractFactory('MintCert');
  // await deployment
  const deployedmintCertNFT = await mintCertNFT.deploy();

  await deployedmintCertNFT.deployed();
  // log out deployment address
  console.log('MintCert Contract Address: ',deployedmintCertNFT.address);

  console.log('Sleeping....')

  // wait until the deployed contract is recognized by etherscan
  await sleep(60000);

  // verify the contract
  await hre.run('verify:verify',{
    address: deployedmintCertNFT.address,
    constructorArguments: [],
  });

  function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
  }
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1)
});


/**
 * contract address: 0x148814E006C1E79D8F732aC2a39eF5802Efa6E82
 * last or recent: 0xE22C5356F6e744e9a1957C9E13355d1C297aa933
 * polyscan: https://mumbai.polygonscan.com/address/0x148814E006C1E79D8F732aC2a39eF5802Efa6E82#code
 * 
 * contract address: 0xE87ab744B35dE7B0b7C216c927d21f8B72e6fcBb
 * zkEVM Scan : https://public.zkevm-test.net:8443/address/0xE87ab744B35dE7B0b7C216c927d21f8B72e6fcBb#code
 */