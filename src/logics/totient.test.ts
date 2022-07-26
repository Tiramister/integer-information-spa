import totient from "./totient";
import gcd from "./gcd";
import random from "./random";

export function totientNaive(n: bigint): bigint {
  let result = 0n;
  for (let m = 1n; m <= n; ++m) {
    if (gcd(n, m) === 1n) ++result;
  }
  return result;
}

test("less than 1,000", () => {
  const upper = 1000n;

  for (let n = 1n; n < upper; ++n) {
    expect(totient(n)).toBe(totientNaive(n));
  }
});

test("100 random cases in [100,000, 200,000)", () => {
  const lower = 100_000n;
  const upper = 200_000n;

  for (let i = 0; i < 100; ++i) {
    let n = random(upper - lower) + lower;
    expect(totient(n)).toBe(totientNaive(n));
  }
});
