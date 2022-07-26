import { isPrime } from "./isPrime";

function previousPrime(n: bigint): bigint | undefined {
  while (--n > 1n) {
    if (isPrime(n)) return n;
  }
  return undefined;
}

function nextPrime(n: bigint): bigint {
  while (!isPrime(++n));
  return n;
}

export { previousPrime, nextPrime };
