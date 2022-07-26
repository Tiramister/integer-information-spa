import katex from "katex";
import type { Factor } from "../../logics/factorize";

export function tex(s: string): string {
  return katex.renderToString(s, { output: "html" });
}

export function factorsToString(factors: Factor[]): string {
  if (factors.length === 0) {
    // 1の場合
    return "1";
  }

  return factors
    .map((f: Factor): string => {
      if (f.exp === 1n) {
        return `${f.base}`;
      } else {
        return `${f.base}^${f.exp}`;
      }
    })
    .join(" \\cdot ");
}
