# ERC-721 Token Template

This is a very basic template for deploying a ERC-721 token on the Rinkeby testnet.

## Config

Create a `.env` and set -
- `URL`
- `KEY`

`URL` is the [Alchemy](https://www.alchemy.com/) endpoint to access the blockchain. It acts as a middlemen between the chain and the client interface. Get a Rinkeby URL from the dashboard, which should look like `eth-rinkeby.alchemyapi.io/v2`.

`KEY` is the private key for your ETH address, which you can get from your wallet.

Install dependencies -

```bash
npm install
```

You can change the name of the token in `contracts/NFTee.sol`

```javascript
contract NagarPalika is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("NagarPalika", "NGP") {}
```

`NagarPalika` is the token name and `NGP` is the symbol.

Compile the project

```bash
npx hardhat compile
```

Deploy !

```bash
npx hardhat run --network rinkeby scripts/deploy.js
```