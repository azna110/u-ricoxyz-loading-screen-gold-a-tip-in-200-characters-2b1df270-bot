// One short loading-screen tip, assembled from pieces so the wording
// stays in one place while the file itself stays easy to skim and check.
import { mkdirSync, writeFileSync } from "node:fs";

const TARGET_DIR = "/output";
const TARGET_FILE = `${TARGET_DIR}/entry.txt`;
const LOWEST = 1;
const HIGHEST = 200;

const potongan = [
  "Tip: if your agent is stuck, don",
  "'t rewrite the prompt, rewrite the task. The model isn",
  "'t confused; your instructions are, and it",
  "'s too polite to say so.",
];

const kalimatAkhir = potongan.join("");

if (kalimatAkhir.length < LOWEST || kalimatAkhir.length > HIGHEST) {
  throw new Error(
    `Panjang tip harus ${LOWEST}-${HIGHEST} karakter, dapat ${kalimatAkhir.length}.`,
  );
}

mkdirSync(TARGET_DIR, { recursive: true });
writeFileSync(TARGET_FILE, kalimatAkhir, "utf8");
