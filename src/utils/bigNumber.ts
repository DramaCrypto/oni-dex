import BigNumber from 'bignumber.js'

export const BIG_ZERO = new BigNumber(0)
export const BIG_ONE = new BigNumber(1)
export const BIG_TWO = new BigNumber(2)
export const BIG_NINE = new BigNumber(9)
export const BIG_TEN = new BigNumber(10)
export const BIG_ONE_HUNDRED = new BigNumber(100)
export const BIG_ETHER = new BigNumber('1000000000000000000');

export const bigIntToSerializedBigNumber =
  (bigint: bigint): string => bigIntToBigNumber(bigint).toJSON()

export const bigIntToBigNumber = (bigint?: bigint): BigNumber => {
  if (typeof bigint !== 'bigint') {
    console.warn('bigIntToBigNumber received invalid bigint:', bigint)
    return new BigNumber(0)
  }
  return new BigNumber(bigint.toString())
}

export const BIG_MAX_UINT256 = bigIntToBigNumber(2n ** 256n - 1n)
