module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.COHERE_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "no key" });

  try {
    const r = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const d = await r.json();
    return res.status(r.status).json(d);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
