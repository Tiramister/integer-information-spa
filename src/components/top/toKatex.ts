import katex from "katex";

function toKatex(s: string): string {
  return katex.renderToString(s, { output: "html" });
}

export default toKatex;
