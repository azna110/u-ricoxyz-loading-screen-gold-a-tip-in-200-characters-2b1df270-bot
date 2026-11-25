// SPDX-License-Identifier: MIT
// Loading Screen Gold: A Tip in 200 Characters
// Writes one original loading-screen tip (<= 200 characters) to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const tip =
  "Tip: if your agent is stuck, don't rewrite the prompt, rewrite the task. The model isn't confused; your instructions are, and it's too polite to say so.";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text.
if (tip.length === 0 || tip.length > 200 || tip.trim().length === 0) {
  throw new Error(`tip must be 1-200 characters, got ${tip.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip, "utf8");
