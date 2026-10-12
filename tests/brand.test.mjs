import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const source = layout.match(/__html: `([^`]+)`/)[1].replaceAll("\\\\", "\\");

const brandFor = (hostname) => {
  const documentElement = { dataset: {} };
  new Function("location", "document", source)({ hostname }, { documentElement });
  return documentElement.dataset.brand;
};

test("the header brand script only switches on danhabib.dev", () => {
  assert.equal(brandFor("danhabib.dev"), "dan");
  assert.equal(brandFor("www.danhabib.dev"), "dan");
  assert.equal(brandFor("novaor.fr"), undefined);
  assert.equal(brandFor("www.novaor.fr"), undefined);
  assert.equal(brandFor("notdanhabib.dev"), undefined);
});
