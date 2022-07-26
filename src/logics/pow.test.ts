import pow from "./pow";

test("n^0 = 1 (n >= 0)", () => {
  for (let base = 0n; base < 100n; ++base) {
    expect(pow(base, 0n)).toBe(1n);
  }
});

test("0^n = 0 (n >= 1)", () => {
  for (let exp = 1n; exp < 100n; ++exp) {
    expect(pow(0n, exp)).toBe(0n);
  }
});

test("7^n mod 10^18+3", () => {
  const base = 7n;
  const mod = 1_000_000_000_000_000_003n;
  let naivePow = 1n;

  for (let exp = 0n; exp < 10_000n; ++exp) {
    expect(pow(base, exp, mod)).toBe(naivePow);

    naivePow *= base;
    naivePow %= mod;
  }
});

test("3^n without mod", () => {
  const base = 3n;
  let naivePow = 1n;

  for (let exp = 0n; exp < 10_000n; ++exp) {
    expect(pow(base, exp)).toBe(naivePow);
    naivePow *= base;
  }
});
