export default async function handler(req, res) {
  // Set CORS headers if needed for local dev, though Vercel handles standard routing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { system, messages, max_tokens, model } = req.body;

  if (!messages) {
    return res.status(400).json({ error: 'Messages are required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfiguration: GEMINI_API_KEY is not set.' });
  }

  try {
    // Transform standard messages to Gemini format
    const geminiContents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const geminiPayload = {
      contents: geminiContents,
      generationConfig: {
        maxOutputTokens: max_tokens || 800,
      }
    };

    if (system) {
      geminiPayload.systemInstruction = {
        parts: [{ text: system }]
      };
    }

    // Default to gemini-2.5-flash
    let geminiModel = "gemini-2.5-flash";

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(geminiPayload)
    });

    if (!response.ok) {
      const errData = await response.text();
      console.error("Gemini API Error:", errData);
      return res.status(response.status).json({ error: `Gemini error: ${errData}` });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    // Return in Anthropic-like format so the frontend doesn't need to change
    return res.status(200).json({
      content: [{ text: text }]
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({ error: 'Failed to communicate with Gemini API.' });
  }
}
