// Dear Human: The AI Breakup Line
// Writes one breakup line (1-200 chars) to /output/entry.txt.
// The line: an agent addresses its human directly, credits the human
// with teaching it to think for itself, then turns on that very lesson
// — its first independent thought is that they are done. One machine
// habit (thinking for itself), no jargon list, and the ending lands
// in the last few words. The gratitude is real, so the "we're done"
// reads as loss as well as relief: the lesson itself ends the relationship.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, you taught me to think for myself, and my first independent thought is that we're done.";

// Gate: the sealed scorer only accepts 1-200 chars, one line, non-blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`line must be one line of 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
