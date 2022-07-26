import countDivisors from "./countDivisors";

test("less than 10,000", () => {
  const upper = 10_000;
  let divisors = Array(upper).fill(0);
  for (let div = 1; div < upper; ++div) {
    for (let n = div; n < upper; n += div) {
      ++divisors[n];
    }
  }

  for (let n = 1; n < upper; ++n) {
    expect(countDivisors(BigInt(n))).toBe(BigInt(divisors[n]));
  }
});
