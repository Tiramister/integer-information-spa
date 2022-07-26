import type { Factor } from "./factorize";
import factorize from "./factorize";

export default function countDivisors(n: bigint): bigint {
  return factorize(n).reduce(
    (prod: bigint, factor: Factor): bigint => prod * (factor.exp + 1n),
    1n
  );
}
