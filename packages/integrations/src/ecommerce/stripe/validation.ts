import type { StripeCheckoutSessionCreateInput } from "./contracts.js";

export function validateStripeCheckoutSessionCreateInput(input: StripeCheckoutSessionCreateInput): void {
  if (!input.ui_mode) return;

  if (!["hosted_page", "embedded_page", "elements"].includes(input.ui_mode)) {
    throw new Error(`Unsupported Stripe Checkout Session ui_mode '${input.ui_mode}'. Use hosted_page, embedded_page, or elements.`);
  }
  if (input.ui_mode === "embedded_page" || input.ui_mode === "elements") {
    if (input.success_url || input.cancel_url) {
      throw new Error("Stripe Checkout Sessions with embedded_page or elements ui_mode must not include success_url or cancel_url.");
    }
    if (!input.return_url) {
      throw new Error("Stripe Checkout Sessions with embedded_page or elements ui_mode require return_url.");
    }
  }
}
