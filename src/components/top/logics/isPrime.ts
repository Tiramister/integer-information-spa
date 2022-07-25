function isPrimeNaive(n: bigint): boolean {
  if (n === 1n) return false;
  for (let p = 2n; p * p <= n; ++p) {
    if (n % p === 0n) return false;
  }
  return true;
}

export default isPrimeNaive;
