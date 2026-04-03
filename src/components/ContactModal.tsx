"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      />

      {/* Modal */}
      <div style={{
        position: "relative", width: "100%", maxWidth: 480,
        borderRadius: 16, padding: 24,
        background: "var(--bg)", border: "1px solid var(--border)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
      }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", margin: 0 }}>
              Send an Email
            </h2>
            <p style={{ fontSize: 13, color: "var(--muted)", margin: "4px 0 0" }}>
              I&apos;ll get back to you within 24–48 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 30, height: 30, borderRadius: 8, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, background: "var(--surface)", color: "var(--sub)",
            }}
          >
            ✕
          </button>
        </div>

        {/* Success state */}
        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✉️</div>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", margin: "0 0 6px" }}>
              Email sent!
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 20px" }}>
              Thanks for reaching out. I&apos;ll reply soon — check your inbox for a confirmation.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: "10px 24px", borderRadius: 8, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                background: "var(--text)", color: "var(--bg)",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Name + Email row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%", padding: "8px 12px", borderRadius: 8,
                    fontSize: 13, outline: "none", boxSizing: "border-box",
                    background: "var(--surface)", border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: "100%", padding: "8px 12px", borderRadius: 8,
                    fontSize: 13, outline: "none", boxSizing: "border-box",
                    background: "var(--surface)", border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  fontSize: 13, outline: "none", boxSizing: "border-box",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--muted)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Email *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hi JC, I'd like to talk about..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  fontSize: 13, outline: "none", resize: "none", boxSizing: "border-box",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  color: "var(--text)", fontFamily: "inherit",
                }}
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <div style={{
                padding: "10px 13px", borderRadius: 8, fontSize: 12,
                background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)",
                color: "#ef4444",
              }}>
                ❌ {errMsg}
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  flex: 1, padding: "10px", borderRadius: 8, border: "none",
                  fontSize: 13, fontWeight: 600, cursor: status === "sending" ? "not-allowed" : "pointer",
                  background: "var(--text)", color: "var(--bg)",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? "Sending..." : "✉ Send Email"}
              </button>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: "10px 16px", borderRadius: 8, cursor: "pointer",
                  fontSize: 13, background: "var(--surface)",
                  border: "1px solid var(--border)", color: "var(--sub)",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}