require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers:[
    {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }]
  },
  networks: {
    local: {
      url: 'http://localhost:8545'
    },
    apothem: {
      url: 'https://erpc.apothem.network',
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: 'https://erpc.xinfin.network',
      accounts: [process.env.PRIVATE_KEY],
    },
    xdai: {
      url: 'https://dai.poa.network',
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      //url: 'https://matic-mumbai.chainstacklabs.com',
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/8d4b9c6cf9a942bd9c0468942a96fce0',
      accounts: [process.env.PRIVATE_KEY],
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/8d4b9c6cf9a942bd9c0468942a96fce0',
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon:{
        url: 'ALCHEMY_URL',
        accounts: [process.env.PRIVATE_KEY],
    },
    goerli:{
      url: 'https://goerli.infura.io/v3/8d4b9c6cf9a942bd9c0468942a96fce0',
      accounts: [process.env.PRIVATE_KEY],
  }
  },  
  paths: {
    artifacts: "./app/src/artifacts"
  }
};
