import express from "express";

export const app = express();
app.use(express.json({ limit: "100kb" }));

app.post("/analyze", (req, res) => {
  const body = req.body;
  // Same basic field/type check discussed in Week 4.
  // Blank strings still pass; stronger validation is future work.
  if (
    !body ||
    typeof body.senderEmail !== "string" ||
    typeof body.bodyText !== "string"
  ) {
    res.status(400).json({ error: "Missing required email fields" });
    return;
  }

  // Receipt only: do not invent an AI verdict for this early checkpoint.
  res.json({
    status: "input-accepted",
    analysisAvailable: false,
    message: "Required field types accepted. AI analysis is not connected in this Week 4 checkpoint."
  });
});
