export interface INetwork {
  logoURI: string;
  name: string;
  selected?: boolean;
  count: number;
  enabledChainIds: Array<string>;
  keywords: Array<string>;
  supportedActions: Array<string>;
  supportedChainIds: Array<string>;
  url: string;
  provider: string;
}

export interface ITokenForm {
  name: string;
  value: boolean
}

export interface IToken {
  chain: string;
  chainId: string;
  coingeckoId: string;
  decimals: number;
  extensions: {
    providerId: string;
  };
  identifier: string;
  logoURI: string;
  name?: string;
  symbol: string;
  ticker: string;
  selected?: boolean;
  address?: string;
}

export enum TransactionFeeType {
  Normal = 'Normal',
  Fast = 'Fast',
  Fastest = 'Fastest'
}

export interface ITransactionSetting {
  feeType: TransactionFeeType,
  isExpertMode: boolean,
  isCustomRecipient: boolean,
}