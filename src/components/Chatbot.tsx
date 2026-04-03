"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED = ["His skills", "Recent projects", "Work experience", "How to contact him"];

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm JC's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Thinking...");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, loadingText]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const startLoadingMessages = () => {
    setLoadingText("Thinking...");
    const t1 = setTimeout(() => setLoadingText("Waking up the AI server..."), 5000);
    const t2 = setTimeout(() => setLoadingText("Server was sleeping, almost there..."), 15000);
    const t3 = setTimeout(() => setLoadingText("Still loading, thanks for your patience..."), 30000);
    timersRef.current = [t1, t2, t3];
  };

  const stopLoadingMessages = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setLoadingText("Thinking...");
  };

  const send = async (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;

    const userMsg: Message = { role: "user", content: userText };
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    startLoadingMessages();

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 65000);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`${res.status}`);

      const data = await res.json();
      const reply = data.reply ?? "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: unknown) {
      const isTimeout = err instanceof Error && err.name === "AbortError";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isTimeout
            ? "⏱️ The server took too long to respond — it was likely sleeping. Please try again, it should be faster now!"
            : "❌ Couldn't reach the server. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
      stopLoadingMessages();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chat-scroll::-webkit-scrollbar { width: 3px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        .chat-suggested-btn:hover { opacity: 0.7; }
        .chat-close-btn:hover { opacity: 0.7; }
        .chat-send-btn:hover:not(:disabled) { opacity: 0.85; }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "340px",
          maxWidth: "calc(100vw - 32px)",
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--bg)",
          animation: "chatFadeIn 0.2s ease",
        }}
      >
        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", borderBottom: "1px solid var(--border)",
          background: "var(--surface)", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
              background: "var(--text)", color: "var(--bg)",
            }}>
              JC
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: 0, lineHeight: 1.2 }}>
                Ask JC&apos;s Assistant
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: loading ? "#f59e0b" : "#22c55e",
                  display: "inline-block",
                }} />
                <p style={{ fontSize: 11, color: "var(--muted)", margin: 0 }}>
                  {loading ? loadingText : "AI-powered · n8n"}
                </p>
              </div>
            </div>
          </div>
          <button className="chat-close-btn" onClick={onClose} style={{
            fontSize: 12, padding: "4px 8px", borderRadius: 6, cursor: "pointer",
            color: "var(--sub)", background: "var(--border)", border: "none",
          }}>
            ✕
          </button>
        </div>

        {/* ── Messages ── */}
        <div ref={scrollRef} className="chat-scroll" style={{
          height: 300, overflowY: "auto",
          display: "flex", flexDirection: "column", gap: 10, padding: 16,
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}>
              <div style={{
                maxWidth: "88%", padding: "8px 12px",
                fontSize: 13, lineHeight: 1.6,
                whiteSpace: "pre-wrap", wordBreak: "break-word",
                ...(msg.role === "user"
                  ? { background: "var(--text)", color: "var(--bg)", borderRadius: "14px 14px 4px 14px" }
                  : { background: "var(--surface)", color: "var(--sub)", border: "1px solid var(--border)", borderRadius: "14px 14px 14px 4px" }
                ),
              }}>
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-start" }}>
              <div style={{
                padding: "10px 14px",
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "14px 14px 14px 4px",
                display: "inline-flex", gap: 4, alignItems: "center",
              }}>
                {[0, 200, 400].map((delay) => (
                  <span key={delay} style={{
                    display: "inline-block", width: 6, height: 6, borderRadius: "50%",
                    background: "var(--muted)",
                    animation: `typingBounce 1.2s infinite ${delay}ms`,
                  }} />
                ))}
              </div>
              <p style={{ fontSize: 11, color: "var(--dim)", margin: 0, paddingLeft: 4 }}>
                {loadingText}
              </p>
            </div>
          )}
        </div>

        {/* ── Suggested questions ── */}
        {messages.length === 1 && !loading && (
          <div style={{ padding: "0 16px 8px", display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SUGGESTED.map((q) => (
              <button key={q} className="chat-suggested-btn" onClick={() => send(q)} style={{
                fontSize: 11, padding: "4px 10px", borderRadius: 20, cursor: "pointer",
                border: "1px solid var(--border)", background: "var(--surface)", color: "var(--sub)",
              }}>
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Wake-up notice */}
        {messages.length === 1 && !loading && (
          <p style={{
            fontSize: 10, color: "var(--dim)", textAlign: "center",
            padding: "0 16px 8px", margin: 0, lineHeight: 1.4,
          }}>
            ⚡ First response may take ~30s while the server wakes up
          </p>
        )}

        {/* ── Input ── */}
        <div style={{
          display: "flex", gap: 8, padding: "10px 12px",
          borderTop: "1px solid var(--border)", flexShrink: 0,
        }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && send()}
            placeholder={loading ? "Waiting for response..." : "Ask me anything..."}
            disabled={loading}
            style={{
              flex: 1, padding: "8px 12px", borderRadius: 8,
              fontSize: 13, outline: "none",
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text)", opacity: loading ? 0.6 : 1,
            }}
          />
          <button
            className="chat-send-btn"
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              padding: "8px 12px", borderRadius: 8,
              fontSize: 14, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              border: "none", background: "var(--text)", color: "var(--bg)",
              opacity: !input.trim() || loading ? 0.4 : 1,
            }}
          >
            {loading ? "…" : "↑"}
          </button>
        </div>
      </div>
    </>
  );
}