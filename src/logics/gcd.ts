function gcd(x: bigint, y: bigint): bigint {
  if (x < y) [x, y] = [y, x];

  while (y !== 0n) [x, y] = [y, x % y];
  return x;
}

export default gcd;
