require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.MNEMONIC;
const etherscanKey = process.env.ETHERSCAN_KEY;

const ropsten = {
  provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
  network_id: 3,       // Ropsten's id
  gas: 5500000,        // Ropsten has a lower block limit than mainnet
  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200   // # of blocks before a deployment times out  (minimum/default: 50)
};

const kovan = {
  provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
  network_id: 42,      // Kovan's id
  gas: 5500000,
  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200   // # of blocks before a deployment times out  (minimum/default: 50)
};

const mainnet = {
  provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
  network_id: 1,      // Mainnet's id
  gas: 5500000,
  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200   // # of blocks before a deployment times out  (minimum/default: 50)
};

module.exports = {
  networks: {
    ropsten: ropsten,
    kovan: kovan,
    mainnet: mainnet
  },

  // Configure your compilers
  compilers: {
    solc: {}
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: etherscanKey
  }
}
