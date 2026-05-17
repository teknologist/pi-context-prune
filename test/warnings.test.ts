import assert from "node:assert/strict";
import test from "node:test";

import { isHiddenWarningMessage, notifyUnlessHidden } from "../src/warnings.ts";

const baseConfig = {
  enabled: true,
  showPruneStatusLine: true,
  hideWarningMessages: true,
  summarizerModel: "default",
  summarizerThinking: "default",
  pruneOn: "agent-message",
  remindUnprunedCount: true,
  batchingMode: "turn",
} as const;

test("warning messages are hidden by default", () => {
  assert.equal(isHiddenWarningMessage(baseConfig, "model fallback", "warning"), true);
  assert.equal(isHiddenWarningMessage(baseConfig, "Warning: model fallback", "info"), true);
});

test("non-warning messages and errors are not hidden", () => {
  assert.equal(isHiddenWarningMessage(baseConfig, "ordinary update", "info"), false);
  assert.equal(isHiddenWarningMessage(baseConfig, "hard failure", "error"), false);
});

test("warnings are shown when the user opts in", () => {
  assert.equal(
    isHiddenWarningMessage({ ...baseConfig, hideWarningMessages: false }, "model fallback", "warning"),
    false,
  );
});

test("notifyUnlessHidden suppresses only hidden warnings", () => {
  const calls: Array<[string, string | undefined]> = [];
  const ctx = { ui: { notify: (message: string, type?: string) => calls.push([message, type]) } };

  notifyUnlessHidden(ctx, baseConfig, "suppressed", "warning");
  notifyUnlessHidden(ctx, baseConfig, "visible", "info");

  assert.deepEqual(calls, [["visible", "info"]]);
});
