import { test } from "node:test";
import assert from "node:assert/strict";
import { app } from "../backend/src/app";

test("Week 4 basic request checks (no model calls)", async () => {
  const server = app.listen(0, "127.0.0.1");
  await new Promise<void>(resolve => server.once("listening", resolve));
  try {
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const post = (body: unknown) => fetch(`http://127.0.0.1:${address.port}/analyze`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    });
    const valid = await post({ senderEmail: "team@example.com", bodyText: "Meet Friday at 2 PM." });
    assert.equal(valid.status, 200);
    const receipt = await valid.json();
    assert.equal(receipt.analysisAvailable, false);
    assert.equal("verdict" in receipt, false);
    const missing = await post({ senderEmail: "team@example.com" });
    assert.equal(missing.status, 400);
    assert.equal((await missing.json()).error, "Missing required email fields");
    assert.equal((await post({ senderEmail: 12, bodyText: "Hello" })).status, 400);
    // Documents the current limitation, not a claim that blanks are good input.
    assert.equal((await post({ senderEmail: "", bodyText: "" })).status, 200);
  } finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
