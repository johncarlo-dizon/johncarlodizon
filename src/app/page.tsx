"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import ContactModal from "@/components/ContactModal";
import Chatbot from "@/components/Chatbot";
import {
  personalInfo, skills, projects, experience,
  education, achievements, softSkills, forteItems,
} from "@/lib/data";

const S = {
  text:    { color: "var(--text)" },
  sub:     { color: "var(--sub)" },
  muted:   { color: "var(--muted)" },
  dim:     { color: "var(--dim)" },
  divider: "1px solid var(--border)",
};

const PROJECTS_DEFAULT = 4;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 0,
        color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  );
}

function TechStack({
  skills,
  forteItems,
}: {
  skills: { category: string; items: string[] }[];
  forteItems: string[];
}) {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hiddenCount = skills.reduce((acc, group) => {
    return acc + group.items.filter((item) => !forteItems.includes(item)).length;
  }, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Section header with inline toggle */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: -4 }}>
        <SectionTitle>Tech Stack</SectionTitle>
        <button
          onClick={() => setShowAll((v) => !v)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 12, fontWeight: 500,
            color: hovered ? "var(--text)" : "var(--muted)",
            background: "none", border: "none", cursor: "pointer",
            padding: 0, marginBottom: 16,
            transition: "color 0.15s",
            letterSpacing: "0.01em",
          }}
        >
          {showAll ? (
            <>show less <span style={{ fontSize: 10, opacity: 0.7 }}>↑</span></>
          ) : (
            <>{`+${hiddenCount}`} more <span style={{ fontSize: 10, opacity: 0.7 }}>↓</span></>
          )}
        </button>
      </div>

      {skills.map((group) => {
        const forte   = group.items.filter((item) => forteItems.includes(item));
        const visible = showAll || forte.length === 0 ? group.items : forte;

        return (
          <div key={group.category}>
            <h3 style={{
              fontSize: 14, fontWeight: 700,
              color: "var(--text)", margin: "0 0 10px 0",
            }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {visible.map((item) => {
                const isForte = forteItems.includes(item);
                return (
                  <span
                    key={item}
                    style={{
                      fontSize: 13, padding: "4px 12px", borderRadius: 6,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--sub)",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const { theme, toggle } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatOpen, setChatOpen]       = useState(false);
  const [showAllProjects, setShowAll] = useState(false);

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, PROJECTS_DEFAULT);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 40px 120px" }}>

        {/* ── HERO ── */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 24,
          paddingBottom: 40, borderBottom: S.divider, marginBottom: 0,
        }}>
          {/* Avatar */}
          <div style={{
            width: 110, height: 110, borderRadius: 8, flexShrink: 0,
            background: "#111", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 28, fontWeight: 700, color: "#fff",
          }}>
            {personalInfo.initials}
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 4, lineHeight: 1.1 }}>
              {personalInfo.name}
            </h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 5 }}>
              📍 {personalInfo.location}
            </p>
            <p style={{ fontSize: 16, color: "var(--sub)", marginBottom: 18 }}>
              {personalInfo.title} · {personalInfo.subtitle}
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 12, fontWeight: 500, padding: "6px 12px", borderRadius: 7,
                background: theme === "dark" ? "#0c1f17" : "#f0faf5",
                border: `1px solid ${theme === "dark" ? "#152a1e" : "#c3e6d3"}`,
                color: "#2e7d52",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2e7d52", display: "inline-block", animation: "pulse 2s infinite" }} />
                Open to Work
              </span>

              <button onClick={() => setContactOpen(true)} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 7,
                background: "var(--text)", color: "var(--bg)", border: "none", cursor: "pointer",
              }}>
                ✉ Send Email
              </button>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", textDecoration: "none",
              }}>
                ⌨ GitHub
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", textDecoration: "none",
              }}>
                💼 LinkedIn
              </a>

              <button onClick={toggle} style={{
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", cursor: "pointer", marginLeft: "auto",
              }}>
                {theme === "dark" ? "☀ Light" : "☾ Dark"}
              </button>
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN GRID ── */}
        <div
          className="portfolio-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "0 60px", paddingTop: 44 }}
        >

          {/* ── MAIN COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* ABOUT */}
            <section>
              <SectionTitle>About</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {personalInfo.about.map((p, i) => (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: "var(--sub)", margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* TECH STACK */}
            <section>
              <TechStack skills={skills} forteItems={forteItems} />
            </section>

            {/* PROJECTS */}
            <section>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
                <SectionTitle>Recent Projects</SectionTitle>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>
                  {showAllProjects ? projects.length : PROJECTS_DEFAULT} of {projects.length}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {visibleProjects.map((proj, i) => (
                  <div key={proj.title} style={{
                    padding: "20px 0",
                    borderTop: i === 0 ? "none" : S.divider,
                    marginTop: i === 0 ? 12 : 0,
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
                        {proj.title}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--dim)", flexShrink: 0 }}>
                        {proj.category}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--sub)", margin: "0 0 10px 0" }}>
                      {proj.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {proj.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: 11.5, padding: "2px 9px", borderRadius: 4,
                          background: "var(--surface)", border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAll((v) => !v)}
                style={{
                  marginTop: 8, background: "none", border: "none", cursor: "pointer",
                  padding: 0, fontSize: 12, fontWeight: 500,
                  color: "var(--muted)", transition: "color 0.15s",
                  display: "flex", alignItems: "center", gap: 4,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}
              >
                {showAllProjects
                  ? <>show less <span style={{ fontSize: 10, opacity: 0.7 }}>↑</span></>
                  : <>{`+${projects.length - PROJECTS_DEFAULT}`} more projects <span style={{ fontSize: 10, opacity: 0.7 }}>↓</span></>}
              </button>
            </section>

          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

            {/* EXPERIENCE */}
            <section>
              <SectionTitle>Experience</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {experience.map((exp, i) => (
                  <div key={exp.company} style={{
                    display: "flex", gap: 12, padding: "14px 0",
                    borderTop: i === 0 ? "none" : S.divider,
                    marginTop: i === 0 ? 4 : 0,
                  }}>
                    <div style={{
                      width: 9, height: 9, borderRadius: 2, flexShrink: 0,
                      marginTop: 5, background: "var(--border)", border: "1px solid var(--dim)",
                    }} />
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 2, marginTop: 0 }}>
                        {exp.role}
                      </p>
                      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 1, marginTop: 0 }}>
                        {exp.company}
                      </p>
                      <p style={{ fontSize: 12, color: "var(--dim)", margin: 0 }}>
                        {exp.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <SectionTitle>Education</SectionTitle>
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 3, marginTop: 0 }}>
                {education.degree}
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>{education.school}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>{education.address}</p>
              <p style={{ fontSize: 12, color: "var(--dim)", marginTop: 3 }}>{education.period}</p>
            </section>

            {/* ACHIEVEMENTS */}
            <section>
              <SectionTitle>Achievements</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {achievements.map((ach, i) => (
                  <div key={ach.title} style={{
                    display: "flex", alignItems: "flex-start", gap: 10, padding: "11px 0",
                    borderTop: i === 0 ? "none" : S.divider,
                    marginTop: i === 0 ? 4 : 0,
                  }}>
                    <span style={{ fontSize: 13, flexShrink: 0, marginTop: 2 }}>{ach.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--sub)", lineHeight: 1.4, margin: 0 }}>
                        {ach.title}
                      </p>
                      <p style={{ fontSize: 11, color: "var(--dim)", marginTop: 2, marginBottom: 0 }}>
                        {ach.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SOFT SKILLS */}
            <section>
              <SectionTitle>Soft Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {softSkills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: 12, padding: "4px 11px", borderRadius: 6,
                    background: "var(--surface)", border: "1px solid var(--border)",
                    color: "var(--sub)",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ── FLOATING CHAT BUTTON ── */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          style={{
            position: "fixed", bottom: 24, right: 24, zIndex: 40,
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 18px", borderRadius: 12,
            background: "var(--text)", color: "var(--bg)",
            fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          }}
        >
          💬 Ask JC&apos;s AI
        </button>
      )}

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
        button:hover { opacity: 0.85; }
        a:hover { opacity: 0.75; }
      `}</style>
    </main>
  );
}