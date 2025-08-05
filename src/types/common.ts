export interface ITokenItem {
  icon?: string;
  name: string;
}

export interface INetwork {
  name: string;
  subTitle: string;
  icon: string;
  icon2?: string;
  description: string;
  selected?: boolean
}

export interface ITokenForm {
  name: string;
  value: boolean
}

export interface IChainSelect {
  id: string;
  icon: string;
  selected: boolean;
}