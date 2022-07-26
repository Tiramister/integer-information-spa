import isPrime from "./isPrime";

export function previousPrime(n: bigint): bigint | undefined {
  while (--n > 1n) {
    if (isPrime(n)) return n;
  }
  return undefined;
}

export function nextPrime(n: bigint): bigint {
  while (!isPrime(++n));
  return n;
}
