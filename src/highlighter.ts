// Week 4 subset: status banners only; no verdicts or link highlighting.
function getOrCreateBanner(bodyEl: HTMLElement): HTMLElement {
  let banner = document.getElementById("phishguard-banner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "phishguard-banner";
    banner.setAttribute("role", "status");
    bodyEl.before(banner);
  }
  return banner;
}

export function renderAiLoading(bodyEl: HTMLElement): void {
  const banner = getOrCreateBanner(bodyEl);
  banner.className = "phishguard-banner phishguard-loading";
  banner.textContent = "🤖 CatPhish: analyzing with AI...";
}

export function renderAiError(bodyEl: HTMLElement, message: string): void {
  const banner = getOrCreateBanner(bodyEl);
  banner.className = "phishguard-banner phishguard-error";
  banner.textContent = `CatPhish: analysis unavailable — ${message}`;
}
