import totient from "./totient";
import gcd from "./gcd";

function totientNaive(n: bigint): bigint {
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
