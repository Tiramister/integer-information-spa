import { Factor, factorize } from "./factorize";
import pow from "./pow";

export default function totient(n: bigint): bigint {
  return factorize(n).reduce((result: bigint, factor: Factor) => {
    const prod = pow(factor.base, factor.exp);
    return result * (prod - prod / factor.base);
  }, 1n);
}
