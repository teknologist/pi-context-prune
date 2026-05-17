import type { ContextPruneConfig } from "./types.js";

export type NotifyType = "info" | "warning" | "error";

export function isHiddenWarningMessage(
  config: ContextPruneConfig,
  message: string,
  type: NotifyType = "info",
): boolean {
  if (!config.hideWarningMessages) return false;
  return type === "warning" || message.trimStart().startsWith("Warning:");
}

export function notifyUnlessHidden(
  ctx: { ui: { notify: (message: string, type?: NotifyType) => void } },
  config: ContextPruneConfig,
  message: string,
  type: NotifyType = "info",
): void {
  if (isHiddenWarningMessage(config, message, type)) return;
  ctx.ui.notify(message, type);
}
