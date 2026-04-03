import { NextRequest } from "next/server";

export const maxDuration = 60; // Vercel max timeout in seconds

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
  if (!N8N_WEBHOOK_URL) {
    console.error("N8N_WEBHOOK_URL is not set in environment variables");
    return Response.json(
      { error: "Chatbot is not configured. N8N_WEBHOOK_URL missing." },
      { status: 500 }
    );
  }

  // Get the latest user message
  const lastUserMessage = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user");

  if (!lastUserMessage) {
    return Response.json({ error: "No user message found" }, { status: 400 });
  }

  // 55s timeout — gives n8n time to wake up from Render sleep
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55000);

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        message: lastUserMessage.content,
        history: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const err = await response.text();
      console.error("n8n webhook error:", response.status, err);
      return Response.json(
        { error: `n8n returned ${response.status}. It may still be waking up.` },
        { status: 502 }
      );
    }

    const data = await response.json();

    // Handle all output shapes n8n can return
    const reply =
      data.reply ??
      data.output ??
      data.text ??
      data.message ??
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return Response.json({ reply });

  } catch (err: unknown) {
    clearTimeout(timeout);

    const isTimeout = err instanceof Error && err.name === "AbortError";

    if (isTimeout) {
      console.error("n8n webhook timed out after 55s");
      return Response.json(
        { error: "The AI server took too long to respond. Please try again." },
        { status: 504 }
      );
    }

    console.error("Fetch error:", err);
    return Response.json(
      { error: "Failed to reach n8n webhook. Check if the server is running." },
      { status: 500 }
    );
  }
}