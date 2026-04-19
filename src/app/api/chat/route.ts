import { NextRequest } from "next/server";
import { chatbotContext } from "@/lib/data";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const GROQ_MODEL = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

  if (!GROQ_API_KEY) {
    return Response.json(
      { error: "GROQ_API_KEY is not set in environment variables." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          { role: "system", content: chatbotContext },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", response.status, err);
      return Response.json(
        { error: `Groq returned ${response.status}.` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return Response.json({ reply });

  } catch (err) {
    console.error("Fetch error:", err);
    return Response.json(
      { error: "Failed to reach Groq API." },
      { status: 500 }
    );
  }
}