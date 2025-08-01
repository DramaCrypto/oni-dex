import memoize from "lodash/memoize";
import { getAddress } from "viem";

// returns the checksummed address if the address is valid, otherwise returns false
export const isAddress = memoize((value: any): string | false => {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
});
export const putCommas = (value) => {
  try {
    if (value >= 0) {
      const cn1 = value
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      // const cn1 = value.toLocaleString('en-US');
      return cn1;
    } else {
      return "";
    }
  } catch (err) {
    return value;
  }
};

export function truncateWalletString(walletAddress) {
  if (!walletAddress) return ('Connect Wallet');
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateGalaWalletString(walletAddress) {
  if (!walletAddress) return ('Connect Wallet');
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(2, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return 'eth|' + startStr + "..." + endStr;
}

export function galaWalletString(walletAddress) {
  if (!walletAddress) return ('Connect Wallet');
  const lengthStr = walletAddress.length;
  const realAddress = walletAddress.substring(2, lengthStr);
  return ('eth|' + realAddress);
}

export function truncateWalletStringSmall(walletAddress) {
  if (!walletAddress) return "Connect Wallet";
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(2, 4);
  const endStr = walletAddress.substring(lengthStr - 3, lengthStr);
  return startStr + "..." + endStr;
}


export function truncateGalaWalletStringSmall(walletAddress) {
  walletAddress = 'eth|' + walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 8);
  const endStr = walletAddress.substring(lengthStr - 3, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateHashString(txhash) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + "..." + endStr;
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;

export const getFormattedTimeDiff = (sec) => {
  if (sec <= 0) return "0s";

  let res = "";
  let tmp = sec;

  const s = Math.floor(tmp % 60);
  tmp = Math.floor(tmp / 60);

  const m = Math.floor(tmp % 60);
  tmp = Math.floor(tmp / 60);

  res = `${m}m ${s}s`;

  const h = Math.floor(tmp % 24);
  if (h > 0) {
    res = ` ${h}h ${res}`;
  }

  if (tmp / 24 >= 1) {
    if (h == 0) res = ` ${h}h ${res}`;
    res = `${Math.floor(tmp / 24)}d ${res}`;
  }

  return res;
};

// Convert timestamp to YYYY-MM-DD H:i:s
export const formatDateFromTimestamp = (_timestamp) => {
  const date = new Date(_timestamp * 1000); // multiply by 1000 if in seconds
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');
  const secs = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
}
