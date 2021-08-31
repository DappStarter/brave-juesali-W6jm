require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove deny noise history hockey end army gesture'; 
let testAccounts = [
"0x6a2fcfbda13fbd539b2762ee78457d3fa689d982b72e63641419a788fd25615b",
"0x4694f5ce3b7885e90150a46f11af142f023078fa5a4d1eba9af40044153dc8a4",
"0x636b05952054357e59beb8688934f06e84b1f69d890d2fbe2060d39c61377ab0",
"0xd89bc7246fc000904174e36bfa3dfc161509f83f8bce69e68b9228a7eb6a3ac8",
"0xaaf3aecaf6d5b3b3abfc8b7c9dd168ea9762252f5624986351fdee20b7d40896",
"0xb231765826ab80f32f395cd238a5b2df5065cc50fab08a00ec0ac4f622f50485",
"0xa80c2121205c764a0cdce26dd830259d632c1c345b903d28560a62ad05b000ce",
"0xbe7eb0c6d288f3a2729f90440351593be136ae4e0ca1066ef45d7dd7aa513864",
"0xff7b422cc7cb98e6e27aefe927b65a07be60ed267e0efb3dd51fe466c1dd13df",
"0x5a12b78b42ce5df0b4047cf1efe4dbdf81af31948512e15a0cbd5c75240a82b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

