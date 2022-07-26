/**
 * 2つの整数の最大公約数を求める.
 * 引数が負の場合、絶対値を取る.
 */
function gcd(x: bigint, y: bigint): bigint {
  if (x < 0n) x = -x;
  if (y < 0n) y = -y;

  if (x < y) [x, y] = [y, x];

  while (y !== 0n) [x, y] = [y, x % y];
  return x;
}

export default gcd;
