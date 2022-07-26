import { isPrime } from "./isPrime";
import random from "./random";
import gcd from "./gcd";

type Factor = {
  base: bigint;
  exp: bigint;
};

/**
 * 愚直 O(sqrt(n))
 *
 * @param n - 合成数
 */
function findDivisorNaive(n: bigint): bigint {
  console.assert(
    n !== 1n && isPrime(n) === false,
    "n must be a composite number"
  );

  let base = 2n;
  while (n % base !== 0n) ++base;
  return base;
}

/**
 * Pollard's rho 法. Heuristic O(n^{1/4})
 *
 * @param n - 合成数
 */
function findDivisor(n: bigint): bigint {
  console.assert(
    n !== 1n && isPrime(n) === false,
    "n must be a composite number"
  );

  if (n % 2n === 0n) return 2n;

  while (true) {
    const seed = random(n);
    const offset = random(n);
    const f = (x: bigint) => (x * x + offset) % n;

    let [x, y] = [seed, seed];
    do {
      [x, y] = [f(x), f(f(y))];
    } while (gcd(x - y, n) === 1n);

    const g = gcd(x - y, n);
    if (g !== n) return g;
  }
}

/**
 * 素因数分解を行う。
 *
 * @param findDivisor - 合成数の非自明な約数を返す関数
 */
function factorizeGeneric(
  findDivisor: (n: bigint) => bigint,
  n: bigint
): Factor[] {
  if (n === 1n) return [];

  // 素数の積に分解
  let primes: bigint[] = [];
  let stack = [n];
  while (true) {
    const divisor = stack.pop();
    if (divisor === undefined) break;

    if (isPrime(divisor)) {
      primes.push(divisor);
    } else {
      const smallerDivisor = findDivisor(divisor);
      stack.push(smallerDivisor);
      stack.push(divisor / smallerDivisor);
    }
  }

  // ランレングス圧縮
  let factors: Factor[] = [];
  primes.sort();

  let base = 0n;
  let exp = 0n;
  for (const prime of primes) {
    if (prime !== base) {
      if (exp !== 0n) factors.push({ base, exp });
      base = prime;
      exp = 0n;
    }
    ++exp;
  }
  factors.push({ base, exp });

  return factors;
}

const factorizeNaive = (n: bigint) => factorizeGeneric(findDivisorNaive, n);
const factorize = (n: bigint) => factorizeGeneric(findDivisor, n);

export type { Factor };
export { factorizeNaive, factorize };
