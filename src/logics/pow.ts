function pow(x: bigint, e: bigint, mod: bigint | undefined) {
  let base = 1n;
  let result = 1n;

  while (e !== 0n) {
    if (e % 2n !== 0n) {
      result *= base;
      if (mod !== undefined) result %= mod;
    }

    base *= base;
    if (mod !== undefined) base %= mod;
    e /= 2n;
  }

  return result;
}

export default pow;
