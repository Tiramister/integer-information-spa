import gcd from "./gcd";

test("gcd(0, n) = n", () => {
  for (let n = 0n; n < 100n; ++n) {
    expect(gcd(0n, n)).toBe(n);
  }
});

test("100 * 100 pairs", () => {
  // 約数の前計算
  const upper = 100;
  let divisors: number[][] = Array(upper)
    .fill(undefined)
    .map((_): number[] => []);

  for (let div = 1; div < upper; ++div) {
    for (let n = div; n < upper; n += div) {
      divisors[n].push(div);
    }
  }

  // テスト
  for (let n = 1; n < upper; ++n) {
    for (let m = 1; m <= n; ++m) {
      let g = 0;
      for (let div of divisors[n]) {
        if (divisors[m].includes(div)) g = div;
      }
      expect(gcd(BigInt(n), BigInt(m))).toBe(BigInt(g));
    }
  }
});
