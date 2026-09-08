import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

test("contact clearly prepares an email, not a server-side delivery", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.locator("#contact").scrollIntoViewIfNeeded();
  const submit = page.getByRole("button", { name: "Préparer mon email" });
  await expect(submit).toBeVisible();
  await submit.click();
  await expect(page.getByRole("status")).not.toContainText(
    "Aucun message n’a été envoyé",
  );
  await page.locator("#firstName").fill("Camille");
  await page.locator("#email").fill("camille@example.com");
  await page.locator("#company").fill("Atelier Exemple");
  await page.locator("#needType").selectOption("Automatisation");
  await page
    .locator("#message")
    .fill(
      "Je souhaite relier notre formulaire à notre CRM et automatiser les relances.",
    );
  await mkdir("test-results/captures", { recursive: true });
  await page
    .locator("#contact")
    .screenshot({
      path: `test-results/captures/${info.project.name}-contact-filled.png`,
    });
  await submit.click();
  await expect(page.getByRole("status")).toContainText(
    "Aucun message n’a été envoyé",
  );
  await page
    .locator("#contact")
    .screenshot({
      path: `test-results/captures/${info.project.name}-contact-result.png`,
    });
});

test("native navigation, all projects, FAQ, SEO and static hero", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("h1")).toHaveText(
    "Moins de tâches.Plus de possibles.",
  );
  await expect(page.locator(".landscape-art")).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(6);
  await expect(page.locator("video, canvas")).toHaveCount(0);
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(
    await page
      .locator(".landscape-art")
      .evaluate(
        (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
      ),
  ).toBe(true);
  await mkdir("test-results/captures", { recursive: true });
  await page.screenshot({
    path: `test-results/captures/${info.project.name}-hero.png`,
  });
  await page.getByRole("link", { name: "Explorer mes projets" }).click();
  await expect(page).toHaveURL(/#projets$/);
  await page.screenshot({
    path: `test-results/captures/${info.project.name}-projects.png`,
  });
  for (const id of ["services", "methode", "competences", "faq"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await expect(page.locator(`#${id} h2`)).toBeVisible();
  }
  const faq = page.locator("#faq details").first();
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");
  await expect(faq.locator("p")).toBeVisible();
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (a) => !document.getElementById(a.getAttribute("href")!.slice(1)),
        )
        .map((a) => a.getAttribute("href")),
    );
  expect(brokenAnchors).toEqual([]);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.danhabib.dev",
  );
  const graph = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  )["@graph"];
  expect(
    graph.find((n: { "@type": string }) => n["@type"] === "ItemList")
      .itemListElement,
  ).toHaveLength(6);
  for (const url of [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/manifest.webmanifest",
    "/opengraph-image",
  ]) {
    expect((await page.request.get(url)).status()).toBe(200);
  }
  expect(errors).toEqual([]);
});

test("content and contact remain reachable without JavaScript", async ({
  browser,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto(process.env.TEST_BASE_URL || "http://127.0.0.1:3147");
  await expect(page.locator("h1")).toBeVisible();
  await page.getByRole("link", { name: "Explorer mes projets" }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
  const faq = page.locator("#faq details").first();
  await faq.locator("summary").click();
  await expect(faq.locator("p")).toBeVisible();
  await expect(
    page.locator('.contact-channel[href="mailto:danhabibpro@gmail.com"]'),
  ).toBeVisible();
  await context.close();
});

test("reduced motion and narrow viewport never hide content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(page.locator("h1")).toBeVisible();
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});
