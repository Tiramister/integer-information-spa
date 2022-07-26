/** [0, n)内の整数を乱択. */
export function random(n: number): number {
  return Math.floor(Math.random() * n);
}

/** 100(=50*2)bit 符号なし整数を乱択. */
function random100(): bigint {
  const two50 = 1 << 50;
  const upper = BigInt(Math.floor(Math.random() * two50));
  const lower = BigInt(Math.floor(Math.random() * two50));
  return (upper << 50n) + lower;
}

/**
 * [0, n)内の整数を乱択.
 *
 * @param n - 2^100 より十分小さい整数
 */
export function bigRandom(n: bigint): bigint {
  return random100() % n;
}
