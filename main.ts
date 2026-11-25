import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge locks itself after midnight like it's my mum — except Mum at least let me have the leftovers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
