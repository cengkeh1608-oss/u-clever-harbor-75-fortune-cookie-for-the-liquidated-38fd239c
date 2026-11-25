import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie for the Liquidated Trader — winner D1 (25/25, 20 drafts).
// 17 words, 88 chars: inside the 1-160 char gate and the 20-word cap.
// Tie-break over D20 (also 25/25): D1's second loss is the story the trader
// tells about it — a fresher double meaning that speaks to a liquidated
// trader replaying the trade at 3am, where D20's "taught you everything"
// is a more familiar consolation. The oracular opening also breaks harder
// when the punchline lands on the story, not the money.
const ENTRY =
  "You will lose everything twice: once to the market, once to the story you tell about it.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
