import katex from "katex";
import type { Factor } from "../../logics/factorize";

function renderString(s: string): string {
  return katex.renderToString(s, { output: "html" });
}

function renderFactors(factors: Factor[]): string {
  if (factors.length === 0) {
    // 1の場合
    return renderString("1");
  }

  const s = factors
    .map((f: Factor): string => {
      if (f.exp === 1n) {
        return `${f.base}`;
      } else {
        return `${f.base}^${f.exp}`;
      }
    })
    .join(" \\cdot ");
  return renderString(s);
}

export { renderString, renderFactors };
