# CatPhish

## Weeks 1–4 checkpoint

Early-stage submission for Elhadji (AI/security), Abiyag (frontend), and Jonathan (backend).
This is a reconstructed teaching checkpoint based on the Week 1–4 presentation scope, not an exact historical Git snapshot. A small manual preview and endpoint tests were added to make the checkpoint runnable.

### Included

- Chrome Manifest V3 configuration, guardian icons, and a basic toolbar popup.
- Neutral loading and unavailable banners.
- A local Express endpoint checking the types of `senderEmail` and `bodyText`.
- Draft AI guidance and two synthetic messages; no live model execution.

Later-stage features are excluded: Gmail/Outlook extraction, live Gemini calls, risk scores/verdicts, link highlighting, saved results, Firefox packaging, and cloud deployment. No API key is required. This checkpoint does not scan real email or establish detection accuracy.

### Open in VS Code

Use Node.js 20 or newer. Run these commands from the directory where you want to clone the repository:

```powershell
git clone https://github.com/jduman000/CatPhish.git
cd CatPhish
code .
npm install
npm run build
npm run check
npm test
```

In Chrome, open `chrome://extensions`, enable Developer mode, select **Load unpacked**, and choose the cloned CatPhish folder. Open the extension popup and use **Preview loading** or **Preview unavailable**. These buttons demonstrate status messages only; the loading message does not represent a real AI request.

### Backend field-check demo

```powershell
npm run dev
```

In a second terminal:

```powershell
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:8000/analyze -ContentType 'application/json' -Body '{"senderEmail":"team@example.com","bodyText":"Meet Friday at 2 PM."}'
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:8000/analyze -ContentType 'application/json' -Body '{"senderEmail":"team@example.com"}'
```

The first returns an input-accepted receipt, not a safety judgment. The second returns HTTP 400, displayed as an error by PowerShell. Empty strings still pass the basic type check, matching the Week 4 limitation. The popup and backend are separate demonstrations, not an end-to-end detector.

### Files by role

| Role | Files |
| --- | --- |
| Abiyag — frontend | `manifest.json`, `popup.html`, `src/popup.ts`, `src/highlighter.ts`, `src/content.css`, `icons/` |
| Jonathan — backend | `backend/src/app.ts`, `backend/src/server.ts`, `tests/backend.test.ts` |
| Elhadji — AI/security | `ai/review-guidance.ts` (draft guidance and sample messages, not measured results) |
