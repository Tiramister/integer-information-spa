type Factor = {
  base: bigint;
  exp: bigint;
};

function factorize_naive(n: bigint): Factor[] {
  let result: Factor[] = [];
  for (let base = 2n; base * base <= n; ++base) {
    if (n % base !== 0n) continue;

    let exp = 0n;
    while (n % base === 0n) {
      n /= base;
      ++exp;
    }
    result.push({ base, exp });
  }
  if (n !== 1n) {
    result.push({ base: n, exp: 1n });
  }
  return result;
}

export type { Factor };
export { factorize_naive };
