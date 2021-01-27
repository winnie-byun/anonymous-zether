const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const privateKey = "0x8a1b191dd20f4e0636f828bb8bab202a6df55d79a852a3416bd862b9a0fd4ebf";

module.exports = {
    networks: {
        // development: {
        //   host: "localhost",
        //   port: 8545,
        //   network_id: "*" // Match any network id
        // },
        baobab: {
            provider: () => new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),
            network_id: '1001', //Klaytn baobab testnet's network id
            gas: '8500000',
            gasPrice: null
        },
        cypress: {
            provider: () => new HDWalletProvider(privateKey, "https://api.cypress.klaytn.net:8651"),
            network_id: '8217', //Klaytn mainnet's network id
            gas: '8500000',
            gasPrice: null
        }
    },
    compilers: {
        solc: {
            version: "0.7.0",
        }
    }
};
