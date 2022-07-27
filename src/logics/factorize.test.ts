import type { Factor } from "./factorize";
import factorize from "./factorize";
import isPrime from "./isPrime";
import pow from "./pow";
import { bigRandom } from "./random";

function judge(n: bigint): void {
  const factors = factorize(n);

  let prevBase = 0n;
  for (const factor of factors) {
    expect(isPrime(factor.base)).toBeTruthy();
    expect(factor.base).toBeGreaterThan(prevBase);
    prevBase = factor.base;
  }

  const prod = factors.reduce(
    (partialProd: bigint, factor: Factor) =>
      partialProd * pow(factor.base, factor.exp),
    1n
  );
  expect(prod).toBe(n);
}

test("less than 10,000", () => {
  const upper = 10_000n;
  for (let n = 1n; n < upper; ++n) judge(n);
});

test("100 large numbers", () => {
  const upper = 1n << 60n;
  for (let i = 0; i < 100; ++i) {
    judge(bigRandom(upper));
  }
});
