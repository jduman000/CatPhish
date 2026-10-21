import { renderAiLoading, renderAiError } from "./highlighter";

// Manual preview harness added for this checkpoint; no network request occurs.
const email = document.getElementById("email")!;
document.getElementById("loading")!.addEventListener("click", () => {
  renderAiLoading(email);
});
document.getElementById("unavailable")!.addEventListener("click", () => {
  renderAiError(email, "live analysis is not included in this checkpoint");
});
