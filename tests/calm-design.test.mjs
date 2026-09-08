import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("page entrypoints never mount forced motion or loading overlays", () => {
  const entry = read("app/page.tsx") + read("app/layout.tsx");
  assert.doesNotMatch(
    entry,
    /<(Preloader|SmoothScroll|CustomCursor|ScrollFx|Marquee)\b/,
  );
});
