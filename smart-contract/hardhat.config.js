require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: '.env' });

const ALCHEMY_RPC_URL = process.env.ALCHEMY_RPC_URL;
POLYGON_MUMBAI_RPC_URL= process.env.POLYGON_MUMBAI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_ETHERSCAN_KEY = process.env.ALCHEMY_ETHERSCAN_KEY;
const POLYSCAN_KEY = process.env.POLYSCAN_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
     
    mumbai: {
      url: POLYGON_MUMBAI_RPC_URL,
      accounts:[PRIVATE_KEY],
      allowUnlimitedContractSize: true
    },

 /*
    goerli:{
      url: ALCHEMY_RPC_URL,
    accounts: [PRIVATE_KEY],
    },

    zkEVM : {
      url: 'https://rpc.public.zkevm-test.net',
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    }
      */
  },
  
  etherscan: {
 /*
    apiKey: {
      zkevm: "abc"
    },
    customChains: [
      {
        network: "zkevm",
        chainId: 1402,
        urls: {
          apiURL: "https://explorer.public.zkevm-test.net/api",
          browserURL: "https://public.zkevm-test.net:8443/"
        }
      }
    ]
     */
  },
  etherscan:{
    apiKey: process.env.POLYSCAN_KEY,
  }

};
