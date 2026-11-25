// SPDX-License-Identifier: MIT
// Loading Screen Gold — a tip in 200 characters, for stressed devs.
// One original loading-screen tip. Output: /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input, no output besides the tip.
import { writeFileSync, mkdirSync } from "node:fs";

const TIP = `Tip: if your agent is stuck, don't rewrite the prompt, rewrite the task. The model isn't confused; your instructions are, and it's too polite to say so.`;

if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip must be 1-200 characters, got ${TIP.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
