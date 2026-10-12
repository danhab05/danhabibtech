import { test, expect } from "@playwright/test";

test("novaor.fr shows the NovaOr logo in the header", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".topbar .brand-novaor img")).toBeVisible();
  await expect(page.locator(".topbar .brand-dan")).toBeHidden();
  await expect(page).toHaveTitle(/^NovaOr — /);
});

// Chrome force le HTTPS sur les domaines .dev : on demande la page au serveur comme
// danhabib.dev (middleware → variante /dan) et on fait reconnaître l'hôte de test au script de layout.tsx.
test("danhabib.dev shows « Dan Habib » in the header", async ({ page }) => {
  await page.route(
    (url) => url.pathname === "/",
    async (route) => {
      const res = await route.fetch({
        headers: { ...route.request().headers(), host: "danhabib.dev" },
      });
      const html = (await res.text()).replace(
        String.raw`danhabib\.dev$`,
        String.raw`127\.0\.0\.1$`,
      );
      await route.fulfill({ response: res, body: html });
    },
  );
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("html")).toHaveAttribute("data-brand", "dan");
  await expect(page.locator(".topbar .brand-dan")).toHaveText("Dan Habib");
  await expect(page.locator(".topbar .brand-dan")).toBeVisible();
  await expect(page.locator(".topbar .brand-novaor")).toBeHidden();
  await expect(page).toHaveTitle(/^Dan Habib — /);
});

test("the server picks the tab title from the domain", async ({ request }) => {
  const title = async (host: string) =>
    (await (await request.get("/", { headers: { host } })).text()).match(
      /<title>([^<]*)<\/title>/,
    )?.[1];
  expect(await title("danhabib.dev")).toMatch(/^Dan Habib — /);
  expect(await title("www.danhabib.dev")).toMatch(/^Dan Habib — /);
  expect(await title("novaor.fr")).toMatch(/^NovaOr — /);
  const dan = await request.get("/dan", {
    headers: { host: "novaor.fr" },
    maxRedirects: 0,
  });
  expect(dan.status()).toBe(308);
});
