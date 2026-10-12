import { test, expect } from "@playwright/test";

test("novaor.fr shows the NovaOr logo in the header", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".topbar .brand-novaor img")).toBeVisible();
  await expect(page.locator(".topbar .brand-dan")).toBeHidden();
});

// Chrome force le HTTPS sur les domaines .dev : on sert la vraie page en faisant
// reconnaître au script de layout.tsx l'hôte de test à la place de danhabib.dev.
test("danhabib.dev shows « Dan Habib » in the header", async ({ page }) => {
  await page.route(
    (url) => url.pathname === "/",
    async (route) => {
      const res = await route.fetch();
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
});
