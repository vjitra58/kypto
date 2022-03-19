// https://eth-ropsten.alchemyapi.io/v2/DNQ2yyZLycwbXpTWpiLSp5jAdCsjbS07
//0x88867c76aA152B95247735A6e1CF61E6F9C87B32 --Transaction Adress

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DNQ2yyZLycwbXpTWpiLSp5jAdCsjbS07',
      accounts: ['1a16761b6be267fa0a35f49863479a6890116640a27fe00c6d4e77d6bec5502a'],
    },
  },
};