import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) }, waitUntil() {}, passThroughOnException() {} });
}

test("renders the Fitness Buddy homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Fitness Buddy/i);
  assert.match(html, /Personalized cardio guidance/i);
  assert.match(html, /Download APK/i);
});

test("includes the stable download route and public pages", async () => {
  const [route, config, privacy] = await Promise.all([
    readFile(new URL("../app/download/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/site-client.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(route, /NextResponse\.redirect/);
  assert.match(config, /OFFICIAL_DRIVE_URL/);
  assert.match(privacy, /Privacy policy/);
  assert.match(privacy, /Installation guide/);
});
