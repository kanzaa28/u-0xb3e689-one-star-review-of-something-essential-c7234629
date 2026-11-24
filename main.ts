// One-Star Review of Something Essential — entrypoint.
// Writes one single-line deadpan one-star review (<=160 chars) to /output/entry.txt.
// The grader sandbox provides /output; locally, fall back to ./output.
import * as fs from "node:fs";

const REVIEW =
  "One star. Oxygen is free, everywhere, and completely non-negotiable, yet somehow my lungs still run out of it halfway up a single flight of stairs.";

const outDir = fs.existsSync("/output") ? "/output" : "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
