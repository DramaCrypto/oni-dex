import { IToken, INetwork } from '@/types/common'

export const defaultTokens: IToken[] = [
  {
    "chain": "BASE",
    "chainId": "8453",
    "ticker": "ETH",
    "identifier": "BASE.ETH",
    "symbol": "ETH",
    "name": "Ethereum",
    "decimals": 18,
    "logoURI": "https://storage.googleapis.com/token-list-swapkit/images/base.eth.png",
    "extensions": {
      "providerId": "nep141:base.omft.near"
    },
    "coingeckoId": "ethereum"
  },
  {
    "chain": "BTC",
    "chainId": "bitcoin",
    "ticker": "BTC",
    "identifier": "BTC.BTC",
    "symbol": "BTC",
    "name": "Bitcoin",
    "decimals": 8,
    "logoURI": "https://storage.googleapis.com/token-list-swapkit/images/btc.btc.png",
    "extensions": {
      "providerId": "nep141:btc.omft.near"
    },
    "coingeckoId": "bitcoin"
  }
]

export const AllNetworksOption: INetwork = {
  logoURI: '',
  name: 'ALL',
  count: 0,
  enabledChainIds: [],
  keywords: [],
  supportedActions: [],
  supportedChainIds: [],
  url: '',
  provider: 'ALL'
}

const testNetworks = [
  {
    "name": "NEAR",
    "provider": "NEAR",
    "keywords": [],
    "count": 61,
    "logoURI": "",
    "url": "https://storage.googleapis.com/token-list-swapkit/near.json",
    "enabledChainIds": ["43114", "56", "728126428", "10", "137"],
    "supportedActions": ["swap"],
    "supportedChainIds": ["42161", "43114", "8453", "56", "bitcoin", "dogecoin", "1", "solana", "ripple", "728126428", "10", "137"]
  },
  {
    "name": "CHAINFLIP",
    "provider": "CHAINFLIP",
    "keywords": [],
    "count": 10,
    "logoURI": "https://storage.googleapis.com/token-list-swapkit/images/eth.flip-0x826180541412d574cf1336d22c0c0a287822678a.png",
    "url": "https://storage.googleapis.com/token-list-swapkit/chainflip.json",
    "enabledChainIds": ["42161", "bitcoin", "1", "polkadot", "solana"],
    "supportedActions": ["swap"],
    "supportedChainIds": ["42161", "bitcoin", "1", "polkadot", "solana"]
  }
]
