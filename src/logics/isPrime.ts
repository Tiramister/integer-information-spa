import gcd from "./gcd";
import pow from "./pow";

/**
 * 2^64まで判定するのに必要な基底.
 *
 * @see https://miller-rabin.appspot.com/
 */
const bases: readonly bigint[] = [
  2n,
  325n,
  9375n,
  28178n,
  450775n,
  9780504n,
  1795265022n,
];

/** Miller-Rabin 法. O(log n) */
export default function isPrime(n: bigint): boolean {
  if (n === 1n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;

  let odd = n - 1n;
  let two = 0n;
  while (odd % 2n === 0n) {
    odd /= 2n;
    ++two;
  }

  for (const basis of bases) {
    const g = gcd(n, basis);
    if (g !== 1n && g !== n) return false;

    let x = pow(basis, odd, n);
    if (x === 0n || x === 1n) continue;

    let judge = false;
    for (let i = 0n; i < two; i++) {
      if (x === n - 1n) {
        judge = true;
        break;
      }
      x = pow(x, 2n, n);
    }
    if (judge === false) return false;
  }

  return true;
}
