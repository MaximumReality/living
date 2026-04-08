// api/cohere.js — Vercel serverless function
// Proxies requests to Cohere, keeping the API key server-side.

export default async function handler(req, res) {
// Only allow POST
if (req.method !== ‘POST’) {
return res.status(405).json({ error: ‘Method not allowed’ });
}

const apiKey = process.env.COHERE_API_KEY;
if (!apiKey) {
return res.status(500).json({ error: ‘COHERE_API_KEY not configured’ });
}

try {
const cohereRes = await fetch(‘https://api.cohere.com/v2/chat’, {
method: ‘POST’,
headers: {
‘Authorization’: `Bearer ${apiKey}`,
‘Content-Type’: ‘application/json’,
‘Accept’: ‘application/json’,
},
body: JSON.stringify(req.body),
});

```
const data = await cohereRes.json();

if (!cohereRes.ok) {
  return res.status(cohereRes.status).json(data);
}

return res.status(200).json(data);
```

} catch (err) {
console.error(‘Cohere proxy error:’, err);
return res.status(500).json({ error: ‘Proxy error’, detail: err.message });
}
}
