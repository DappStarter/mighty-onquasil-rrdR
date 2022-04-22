require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name response right concert gesture opera force gather'; 
let testAccounts = [
"0x6952cab2ecfd796dd28996a3d8434f8bd33513be27a917785cc6d971c8cf0d3d",
"0xb946c9bd36d3f24429444cee8a0fd51e77281bd5ad17f98d8d77a2d83a20fd06",
"0x4f67a7adfc1d5884727c8af9fc6a684b0b88d8603d469271b046223905061af8",
"0xa042391bf0aba04bbc12f170f5645e09e1584240b61c7aa5c537ff59511d42f4",
"0x6a9a3a896128e2745a92bf2ccebe85090156fd14ab3556eb5eb8b5d553360840",
"0x517a52b5217a4f7cbb563502034892fc6afc172f01fe5b0c1232272fd908e24d",
"0x90881eebe3a8b557eea2226cceb5d643b924ab3c9428e05ed3c1ad8f23240a7b",
"0x68b47b22819d499396f464832b8aa75fab3b190adffaad46eef9dc5244e95346",
"0x66f828219a74703af871d125d4dcd08b5c2715b4e89559d154420a42067c80ec",
"0xda36c140c6293ef60a599d9289946af39f6bedb71d73e7d1daf515e099be122c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


