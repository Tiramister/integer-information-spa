import { isPrime } from "./isPrime";
import { random } from "./random";

test("Less than 10,000", () => {
  const upper = 10_000;

  let isp: boolean[] = Array(upper).fill(true);
  isp[1] = false;
  for (let div = 2; div < upper; ++div) {
    if (!isp[div]) continue;
    for (let n = div * 2; n < upper; n += div) {
      isp[n] = false;
    }
  }

  for (let n = 1; n < upper; ++n) {
    expect(isPrime(BigInt(n))).toBe(isp[n]);
  }
});

test("random continuous 10,000 numbers beginning within [1,000,000, 2,000,000)", () => {
  const length = 10_000;
  const lower = 1_000_000;
  const upper = 2_000_000;

  const begin = random(upper - lower) + lower;

  let smallIsp: boolean[] = Array(length).fill(true);
  let largeIsp: boolean[] = Array(length).fill(true);

  for (let div = 2; div < upper; ++div) {
    if (!smallIsp[div]) continue;
    for (let n = div * 2; n < upper; n += div) {
      smallIsp[n] = false;
    }

    for (let n = Math.floor(begin / div) * div; n < begin + length; n += div) {
      if (n >= begin) largeIsp[n - begin] = false;
    }
  }

  for (let d = 0; d < length; ++d) {
    expect(isPrime(BigInt(begin + d))).toBe(largeIsp[d]);
  }
});
