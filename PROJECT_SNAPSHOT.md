# Project Snapshot
> Generated: 4/3/2026, 11:41:07 AM  
> Root: `D:\.CODES PROJECT\jc-portfolio`  
> Files included: 19

---

## File Tree

```
jc-portfolio/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   │   └── route.ts
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Chatbot.tsx
│   │   ├── ContactModal.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       └── data.ts
├── .env
├── .env.local.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── snapshot-watcher.js
└── tsconfig.json
```

---

## Database Schema

_No migration or schema files detected._

---

## UI Components

_No UI component files detected._

---

## Source Code

### `.env`

```
# .env.local
N8N_WEBHOOK_URL=https://jc-portfolio-n8n.onrender.com/webhook/portfolio-chat
```

### `.env.local.example`

```
# No API keys required for the free setup!
# The chatbot is rule-based (no API needed)
# The contact form uses EmailJS (free, client-side)
#
# Only fill this in if you later want the AI-powered chatbot upgrade:
# ANTHROPIC_API_KEY=your_key_here

```

### `AGENTS.md`

```markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

```

### `CLAUDE.md`

```markdown
@AGENTS.md

```

### `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.100.9"],
};

export default nextConfig;

```

### `package.json`

```json
{
  "name": "jc-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "chokidar": "^5.0.0",
    "emailjs-com": "^3.2.0",
    "next": "16.2.2",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "resend": "^6.10.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

### `README.md`

```markdown
# JC Dizon — Portfolio (100% Free Setup)

Built with Next.js 14. Dark mode, mobile responsive, contact form, and a portfolio chatbot — all completely free.

## What's free and how

| Feature | Service | Cost |
|---|---|---|
| Hosting | Vercel | Free forever |
| Contact Form | EmailJS | Free (200 emails/month) |
| Chatbot | Rule-based (no API) | Free forever |
| Dark Mode | Built-in | Free |

---

## Setup

### 1. Install & run
```bash
npm install
npm run dev
```

### 2. Set up EmailJS (contact form — takes 5 minutes)

1. Go to [emailjs.com](https://emailjs.com) and sign up free
2. Click **Add New Service** → choose Gmail → connect your Gmail account → copy the **Service ID**
3. Click **Email Templates** → **Create New Template**
   - Set **To Email** to your Gmail address
   - In the body, use these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy the **Template ID**
4. Go to **Account** → **API Keys** → copy your **Public Key**
5. Open `src/components/ContactModal.tsx` and replace these 3 lines at the top:

```ts
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // paste here
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // paste here
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";    // paste here
```

That's it — emails go straight to your Gmail inbox. No backend, no credit card.

---

### 3. Deploy free on Vercel

```bash
npx vercel
```

No environment variables needed for the free setup.

---

## Customize your content

All your info is in **one file**: `src/lib/data.ts`

Edit that file to update your name, projects, skills, experience, etc.

## Chatbot

The chatbot uses smart keyword matching and knows about all of JC's:
- Skills & tech stack
- Projects
- Experience & internship
- Education & achievements
- Contact info & availability

No API key, no cost, works offline. It handles 30+ question types.

```

### `snapshot-watcher.js`

```javascript
/**
 * PROJECT SNAPSHOT WATCHER
 * ========================
 * Run: node snapshot-watcher.js
 * 
 * On every file save, rebuilds PROJECT_SNAPSHOT.md with:
 *   - File tree
 *   - Full source code (all tracked extensions)
 *   - DB schema (SQL migration files)
 *   - UI component list
 *
 * Requirements: npm install chokidar
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ─── CONFIG ────────────────────────────────────────────────────────────────

const CONFIG = {
  // Root of your project (change this to your project path)
  projectRoot: process.cwd(),

  // Output snapshot file (placed in project root)
  outputFile: "PROJECT_SNAPSHOT.md",

  // File extensions to include as source code
  sourceExtensions: [
    ".js", ".ts", ".jsx", ".tsx",   // JavaScript / TypeScript
    ".php",                          // PHP
    ".py",                           // Python
    ".vue", ".svelte",               // Frontend frameworks
    ".css", ".scss", ".sass",        // Styles
    ".html", ".htm",                 // HTML
    ".json",                         // Config / package files
    ".env", ".env.example",          // Environment
    ".yaml", ".yml",                 // Config files
    ".sql",                          // DB migrations / schemas
    ".prisma", ".graphql",           // ORM / GraphQL schemas
    ".md",                           // Markdown docs (optional)
  ],

  // Folders to completely ignore
  ignoreFolders: [
    "node_modules",
    ".git",
    "vendor",
    "dist",
    "build",
    ".next",
    ".nuxt",
    "storage",
    "cache",
    ".cache",
    "coverage",
    "__pycache__",
    ".venv",
    "venv",
  ],

  // Specific files to ignore (exact filenames)
  ignoreFiles: [
    "PROJECT_SNAPSHOT.md",
    "package-lock.json",
    "yarn.lock",
    "composer.lock",
    ".DS_Store",
  ],

  // Max file size to include (bytes). Larger files are skipped.
  maxFileSizeBytes: 100 * 1024, // 100 KB

  // DB schema detection: file patterns that contain schema info
  dbSchemaPatterns: [
    /migration/i,
    /schema\.sql/i,
    /schema\.prisma/i,
    /\d{4}_\d{2}_\d{2}/,   // timestamp migrations
    /_migration\./i,
    /create_table/i,
  ],

  // UI component detection: folders/file patterns
  uiComponentPatterns: [
    /components\//i,
    /views\//i,
    /pages\//i,
    /layouts\//i,
    /widgets\//i,
  ],
};

// ─── HELPERS ────────────────────────────────────────────────────────────────

function shouldIgnore(filePath) {
  const relative = path.relative(CONFIG.projectRoot, filePath);
  const parts = relative.split(path.sep);

  // Ignore if any parent folder is in ignoreFolders
  for (const part of parts) {
    if (CONFIG.ignoreFolders.includes(part)) return true;
  }

  // Ignore specific filenames
  const basename = path.basename(filePath);
  if (CONFIG.ignoreFiles.includes(basename)) return true;

  return false;
}

function shouldInclude(filePath) {
  if (shouldIgnore(filePath)) return false;
  const ext = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath);

  // Include .env files (no extension match needed)
  if (basename.startsWith(".env")) return true;

  return CONFIG.sourceExtensions.includes(ext);
}

function getAllFiles(dir, results = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!CONFIG.ignoreFolders.includes(entry.name)) {
        getAllFiles(fullPath, results);
      }
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function buildFileTree(dir, prefix = "", isRoot = true) {
  let output = isRoot ? `${path.basename(dir)}/\n` : "";
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
      .filter(e => !CONFIG.ignoreFolders.includes(e.name) && !CONFIG.ignoreFiles.includes(e.name))
      .sort((a, b) => {
        // Dirs first, then files
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });
  } catch {
    return output;
  }

  entries.forEach((entry, i) => {
    const isLast = i === entries.length - 1;
    const connector = isLast ? "└── " : "├── ";
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    if (entry.isDirectory()) {
      output += `${prefix}${connector}${entry.name}/\n`;
      output += buildFileTree(path.join(dir, entry.name), childPrefix, false);
    } else {
      output += `${prefix}${connector}${entry.name}\n`;
    }
  });

  return output;
}

function getLanguage(ext) {
  const map = {
    ".js": "javascript", ".jsx": "javascript",
    ".ts": "typescript", ".tsx": "typescript",
    ".php": "php", ".py": "python",
    ".vue": "vue", ".svelte": "svelte",
    ".css": "css", ".scss": "scss", ".sass": "sass",
    ".html": "html", ".htm": "html",
    ".json": "json", ".yaml": "yaml", ".yml": "yaml",
    ".sql": "sql", ".prisma": "prisma",
    ".graphql": "graphql", ".md": "markdown",
    ".env": "bash", ".sh": "bash",
  };
  return map[ext] || "";
}

// ─── SNAPSHOT BUILDER ────────────────────────────────────────────────────────

function buildSnapshot() {
  const timestamp = new Date().toLocaleString();
  const allFiles = getAllFiles(CONFIG.projectRoot).filter(shouldInclude);

  const dbFiles = [];
  const uiFiles = [];
  const sourceFiles = [];

  for (const f of allFiles) {
    const rel = path.relative(CONFIG.projectRoot, f);
    const isDB = CONFIG.dbSchemaPatterns.some(p => p.test(rel));
    const isUI = CONFIG.uiComponentPatterns.some(p => p.test(rel));

    if (isDB) dbFiles.push(f);
    else if (isUI) uiFiles.push(f);
    else sourceFiles.push(f);
  }

  let out = "";

  // ── Header
  out += `# Project Snapshot\n`;
  out += `> Generated: ${timestamp}  \n`;
  out += `> Root: \`${CONFIG.projectRoot}\`  \n`;
  out += `> Files included: ${allFiles.length}\n\n`;
  out += `---\n\n`;

  // ── File Tree
  out += `## File Tree\n\n`;
  out += "```\n";
  out += buildFileTree(CONFIG.projectRoot);
  out += "```\n\n";
  out += `---\n\n`;

  // ── DB Schema
  out += `## Database Schema\n\n`;
  if (dbFiles.length === 0) {
    out += `_No migration or schema files detected._\n\n`;
  } else {
    for (const f of dbFiles) {
      const rel = path.relative(CONFIG.projectRoot, f);
      const ext = path.extname(f).toLowerCase();
      const lang = getLanguage(ext);
      const stat = fs.statSync(f);

      out += `### \`${rel}\`\n\n`;

      if (stat.size > CONFIG.maxFileSizeBytes) {
        out += `_File too large to include (${Math.round(stat.size / 1024)} KB)._\n\n`;
        continue;
      }

      try {
        const content = fs.readFileSync(f, "utf8");
        out += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      } catch {
        out += `_Could not read file._\n\n`;
      }
    }
  }
  out += `---\n\n`;

  // ── UI Components
  out += `## UI Components\n\n`;
  if (uiFiles.length === 0) {
    out += `_No UI component files detected._\n\n`;
  } else {
    for (const f of uiFiles) {
      const rel = path.relative(CONFIG.projectRoot, f);
      const ext = path.extname(f).toLowerCase();
      const lang = getLanguage(ext);
      const stat = fs.statSync(f);

      out += `### \`${rel}\`\n\n`;

      if (stat.size > CONFIG.maxFileSizeBytes) {
        out += `_File too large (${Math.round(stat.size / 1024)} KB)._\n\n`;
        continue;
      }

      try {
        const content = fs.readFileSync(f, "utf8");
        out += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      } catch {
        out += `_Could not read file._\n\n`;
      }
    }
  }
  out += `---\n\n`;

  // ── Source Code
  out += `## Source Code\n\n`;
  if (sourceFiles.length === 0) {
    out += `_No source files detected._\n\n`;
  } else {
    for (const f of sourceFiles) {
      const rel = path.relative(CONFIG.projectRoot, f);
      const ext = path.extname(f).toLowerCase();
      const lang = getLanguage(ext);
      const stat = fs.statSync(f);

      out += `### \`${rel}\`\n\n`;

      if (stat.size > CONFIG.maxFileSizeBytes) {
        out += `_File too large (${Math.round(stat.size / 1024)} KB)._\n\n`;
        continue;
      }

      try {
        const content = fs.readFileSync(f, "utf8");
        out += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      } catch {
        out += `_Could not read file._\n\n`;
      }
    }
  }

  // ── Write output
  const outputPath = path.join(CONFIG.projectRoot, CONFIG.outputFile);
  fs.writeFileSync(outputPath, out, "utf8");

  const sizeKB = Math.round(Buffer.byteLength(out, "utf8") / 1024);
  console.log(`[${new Date().toLocaleTimeString()}] ✓ Snapshot updated → ${CONFIG.outputFile} (${sizeKB} KB, ${allFiles.length} files)`);
}

// ─── WATCHER ─────────────────────────────────────────────────────────────────

// Check if chokidar is installed
let chokidar;
try {
  chokidar = require("chokidar");
} catch {
  console.error("\n⚠  'chokidar' is not installed. Run:\n\n    npm install chokidar\n\nThen restart this script.\n");
  process.exit(1);
}

console.log(`\n🔍 Project Snapshot Watcher`);
console.log(`   Root : ${CONFIG.projectRoot}`);
console.log(`   Output: ${CONFIG.outputFile}`);
console.log(`   Watching for changes...\n`);

// Build once immediately on start
buildSnapshot();

let debounceTimer = null;

const watcher = chokidar.watch(CONFIG.projectRoot, {
  ignored: [
    /(^|[\/\\])\../,                        // dotfiles
    ...CONFIG.ignoreFolders.map(f => `**/${f}/**`),
    `**/${CONFIG.outputFile}`,
  ],
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 300,
    pollInterval: 100,
  },
});

function onFileChange(filePath) {
  // Only react to tracked file types
  if (!shouldInclude(filePath) && !shouldIgnore(filePath)) return;
  if (shouldIgnore(filePath)) return;

  // Debounce: wait 500ms after last change before rebuilding
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    buildSnapshot();
  }, 500);
}

watcher
  .on("add", onFileChange)
  .on("change", onFileChange)
  .on("unlink", onFileChange);

process.on("SIGINT", () => {
  console.log("\n\nWatcher stopped.");
  watcher.close();
  process.exit(0);
});


//npm install chokidar
//node snapshot-watcher.js 
```

### `src\app\api\chat\route.ts`

```typescript
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
  if (!N8N_WEBHOOK_URL) {
    return Response.json({ error: "N8N_WEBHOOK_URL not set" }, { status: 500 });
  }

  // Get the latest user message
  const lastUserMessage = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user");

  if (!lastUserMessage) {
    return Response.json({ error: "No user message found" }, { status: 400 });
  }

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: lastUserMessage.content,
        // Full history so n8n AI Agent has conversation context
        history: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("n8n webhook error:", err);
      return Response.json({ error: "n8n webhook error" }, { status: 500 });
    }

    const data = await response.json();

    // Handle the different output shapes n8n can return
    const reply =
      data.reply ??
      data.output ??
      data.text ??
      data.message ??
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return Response.json({ reply });
  } catch (err) {
    console.error("Fetch error:", err);
    return Response.json({ error: "Failed to reach n8n webhook" }, { status: 500 });
  }
}
```

### `src\app\api\contact\route.ts`

```typescript
// Contact is now handled client-side via EmailJS (free, no backend needed)
// This file is kept as a placeholder
export async function POST() {
  return Response.json({ message: "Use EmailJS on the client side" });
}

```

### `src\app\globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #ffffff;
  --surface: #f5f5f5;
  --border: #ebebeb;
  --text: #111111;
  --sub: #555555;
  --muted: #888888;
  --dim: #bbbbbb;
}

.dark {
  --bg: #0a0a0a;
  --surface: #141414;
  --border: #1e1e1e;
  --text: #f0f0f0;
  --sub: #777777;
  --muted: #555555;
  --dim: #333333;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.2s ease, color 0.2s ease;
  -webkit-font-smoothing: antialiased;
}

input, textarea, button {
  font-family: inherit;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
.chat-scroll::-webkit-scrollbar { width: 3px; }

```

### `src\app\layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "JC Dizon — Junior Developer",
  description: "Junior Developer specializing in Web, Mobile & Desktop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

```

### `src\app\page.tsx`

```typescript
"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import ContactModal from "@/components/ContactModal";
import Chatbot from "@/components/Chatbot";
import {
  personalInfo, skills, projects, experience,
  education, achievements, softSkills,
} from "@/lib/data";

const S = {
  // Reusable inline style helpers
  text:    { color: "var(--text)" },
  sub:     { color: "var(--sub)" },
  muted:   { color: "var(--muted)" },
  dim:     { color: "var(--dim)" },
  border:  { borderColor: "var(--border)" },
  surface: { background: "var(--surface)" },
  pill: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--sub)",
  },
  tag: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--muted)",
  },
  divider: "1px solid var(--border)",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[20px] font-bold mb-4"
      style={{ color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.2 }}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  const { theme, toggle } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 40px 120px" }}>

        {/* ── HERO ── */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, paddingBottom: 40, borderBottom: S.divider, marginBottom: 0 }}>

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
              {personalInfo.title} \ {personalInfo.subtitle}
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
              {/* Available */}
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

              {/* Send Email */}
              <button
                onClick={() => setContactOpen(true)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 7,
                  background: "var(--text)", color: "var(--bg)", border: "none", cursor: "pointer",
                }}
              >
                ✉ Send Email
              </button>

              {/* GitHub */}
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", textDecoration: "none",
              }}>
                ⌨ GitHub
              </a>

              {/* LinkedIn */}
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", textDecoration: "none",
              }}>
                💼 LinkedIn
              </a>

              {/* Portfolio */}
              <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 13, padding: "6px 12px", borderRadius: 7,
                background: "var(--surface)", border: "1px solid var(--border)",
                color: "var(--sub)", textDecoration: "none",
              }}>
                🌐 Portfolio
              </a>

              {/* Dark mode toggle */}
              <button
                onClick={toggle}
                style={{
                  fontSize: 13, padding: "6px 12px", borderRadius: 7,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  color: "var(--sub)", cursor: "pointer", marginLeft: "auto",
                }}
              >
                {theme === "dark" ? "☀ Light" : "☾ Dark"}
              </button>
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "0 60px", paddingTop: 44 }}
          className="portfolio-grid"
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
              <SectionTitle>Tech Stack</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
                      {group.category}
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {group.items.map((item) => (
                        <span key={item} style={{
                          fontSize: 13, padding: "4px 12px", borderRadius: 6,
                          background: "var(--surface)", border: "1px solid var(--border)",
                          color: "var(--sub)",
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <SectionTitle>Recent Projects</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {projects.map((proj, i) => (
                  <div key={proj.title} style={{
                    padding: "20px 0",
                    borderTop: i === 0 ? "none" : S.divider,
                    borderBottom: i === projects.length - 1 ? S.divider : "none",
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
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--sub)", marginBottom: 10, margin: "0 0 10px 0" }}>
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
                    borderBottom: i === experience.length - 1 ? S.divider : "none",
                    marginTop: i === 0 ? 4 : 0,
                  }}>
                    <div style={{
                      width: 9, height: 9, borderRadius: 2, flexShrink: 0,
                      marginTop: 5, background: "var(--border)", border: "1px solid var(--dim)",
                    }} />
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
                        {exp.role}
                      </p>
                      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 1 }}>
                        {exp.company}
                      </p>
                      <p style={{ fontSize: 12, color: "var(--dim)" }}>
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
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 3 }}>
                {education.degree}
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>{education.school}</p>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>{education.address}</p>
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
                    borderBottom: i === achievements.length - 1 ? S.divider : "none",
                    marginTop: i === 0 ? 4 : 0,
                  }}>
                    <span style={{ fontSize: 13, flexShrink: 0, marginTop: 2 }}>{ach.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--sub)", lineHeight: 1.4 }}>
                        {ach.title}
                      </p>
                      <p style={{ fontSize: 11, color: "var(--dim)", marginTop: 2 }}>
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

      {/* Responsive styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          div[style*="max-width: 960px"],
          div[style*="maxWidth: 960"] {
            padding: 32px 20px 100px !important;
          }
          div[style*="width: 110px"] {
            width: 80px !important;
            height: 80px !important;
            font-size: 22px !important;
          }
          h1[style] {
            font-size: 22px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="gap: 24px"] {
            flex-direction: column;
          }
        }

        /* Hover effects */
        button:hover { opacity: 0.85; }
        a:hover { opacity: 0.75; }
      `}</style>
    </main>
  );
}

```

### `src\components\Chatbot.tsx`

```typescript
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const send = async (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;

    const userMsg: Message = { role: "user", content: userText };
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();
      const reply = data.reply ?? "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col rounded-xl shadow-2xl overflow-hidden w-[340px] max-w-[calc(100vw-32px)]"
      style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            JC
          </div>
          <div>
            <p className="text-sm font-semibold leading-none" style={{ color: "var(--text)" }}>
              Ask JC&apos;s Assistant
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              AI-powered · n8n
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-xs px-2 py-1 rounded-md hover:opacity-70 transition-opacity"
          style={{ color: "var(--sub)", background: "var(--border)" }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="chat-scroll flex flex-col gap-3 p-4 overflow-y-auto"
        style={{ height: "300px" }}
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[88%] px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap"
              style={
                msg.role === "user"
                  ? {
                      background: "var(--text)",
                      color: "var(--bg)",
                      borderRadius: "14px 14px 4px 14px",
                    }
                  : {
                      background: "var(--surface)",
                      color: "var(--sub)",
                      border: "1px solid var(--border)",
                      borderRadius: "14px 14px 14px 4px",
                    }
              }
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex justify-start">
            <div
              className="px-4 py-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px 14px 14px 4px",
              }}
            >
              <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
                {[0, 200, 400].map((delay) => (
                  <span
                    key={delay}
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--muted)",
                      animation: `typingBounce 1.2s infinite ${delay}ms`,
                    }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested questions — only on first message */}
      {messages.length === 1 && !loading && (
        <div className="px-4 pb-2 flex flex-wrap gap-1.5">
          {SUGGESTED.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs px-2.5 py-1 rounded-full transition-opacity hover:opacity-70"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--sub)",
              }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        className="flex gap-2 px-3 py-3 flex-shrink-0"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && send()}
          placeholder="Ask me anything..."
          disabled={loading}
          className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
            opacity: loading ? 0.6 : 1,
          }}
        />
        <button
          onClick={() => send()}
          disabled={!input.trim() || loading}
          className="px-3 py-2 rounded-lg text-sm font-bold transition-opacity disabled:opacity-40"
          style={{ background: "var(--text)", color: "var(--bg)" }}
        >
          ↑
        </button>
      </div>

      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
```

### `src\components\ContactModal.tsx`

```typescript
"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─────────────────────────────────────────────
// FREE SETUP — EmailJS (emailjs.com)
// 1. Sign up free at emailjs.com
// 2. Create an Email Service (Gmail) → copy Service ID
// 3. Create a Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" in the template to your gmail
// 4. Copy your Public Key from Account → API Keys
// Replace the three values below:
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";    // e.g. "abcDEFghiJKL"
// ─────────────────────────────────────────────

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-lg rounded-xl p-6 shadow-2xl"
        style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
              Send a Message
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm hover:opacity-70 transition-opacity"
            style={{ background: "var(--surface)", color: "var(--sub)" }}
          >
            ✕
          </button>
        </div>

        {status === "sent" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">✉️</div>
            <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>Message sent!</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Thanks for reaching out. I&apos;ll reply soon.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-5 py-2 rounded-lg text-sm font-semibold"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                value={form.from_name}
                onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                value={form.from_email}
                onChange={(e) => setForm({ ...form, from_email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                Message
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi JC, I'd like to talk about..."
                rows={4}
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Make sure your EmailJS keys are set up correctly.
              </p>
            )}

            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-opacity disabled:opacity-60"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-sm"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--sub)",
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

```

### `src\components\ThemeProvider.tsx`

```typescript
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved || preferred;
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

```

### `src\lib\data.ts`

```typescript
export const personalInfo = {
  name: "John Carlo Victoria Dizon",
  shortName: "JC Dizon",
  initials: "JC",
  title: "Junior Developer",
  subtitle: "Web · Mobile · Desktop",
  tagline: "Building scalable web apps and mobile experiences — from backend APIs to Play Store deployments.",
  location: "Pampanga, Philippines",
  email: "johncarlovictoriadizon@gmail.com",
  github: "https://github.com/johncarlo-dizon",
  linkedin: "https://linkedin.com/in/jcdizon",
  portfolio: "https://jc-portfolio-orpin.vercel.app/",
  available: true,
  about: [
    "I'm a junior developer specializing in building scalable web apps, mobile experiences, and desktop systems — from backend APIs to Play Store deployments. I work on full-stack web, cross-platform mobile, and biometric-integrated enterprise systems.",
    "I've contributed to real company workflows during my internship at BMware Business Solutions, building and maintaining systems used company-wide for HR, payroll, and attendance tracking.",
    "Currently finishing my BS in Information Technology at Holy Cross College — recognized as Top 1 Performer in the Department and a consistent President's Lister.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "PHP (native)", "Java Swing"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "CodeIgniter 4", "Spring Boot"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "DevOps & Database",
    items: ["MySQL", "PostgreSQL", "Supabase", "Docker", "Vercel", "Git / GitHub"],
  },
];

export const projects = [
  // ── Desktop (Java Swing) ──────────────────────────────────────────
  {
    title: "Intern Attendance Management System",
    description:
      "Desktop system that integrates with biometric devices via LAN to pull real-time OJT attendance data. Automatically generates TDR (Time and Daily Reports) and detailed attendance reports for intern monitoring and compliance.",
    tags: ["Java", "Java Swing", "PostgreSQL", "Biometrics / LAN"],
    category: "Desktop",
    featured: true,
  },
  {
    title: "HR, Timekeeping & Payroll System",
    description:
      "Comprehensive desktop system for managing employee records, daily time tracking, and automated payroll computation. Maintained and enhanced for company-wide use, covering leave management, overtime calculation, and payslip generation.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: true,
  },
  {
    title: "Head Office POS Maintenance System",
    description:
      "Desktop point-of-sale maintenance system developed for the company head office. Handles product catalog management, sales transactions, receipt generation, and inventory tracking.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: true,
  },
  {
    title: "Kids Cancervive — Blood Donation Management",
    description:
      "Desktop application for managing blood donation drives and bloodletting events. Tracks donor records, blood type inventory, donation history, and generates reports for health coordinators. Maintained and enhanced ongoing.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: false,
  },

  // ── Web ───────────────────────────────────────────────────────────
  {
    title: "SyncSpace — Workspace Collaboration System",
    description:
      "Full-stack workspace collaboration system with a Kanban board (similar to Trello) for task and project management. Built with Next.js and Supabase, containerized with Docker, and deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Docker", "Vercel"],
    category: "Web",
    featured: true,
  },
  {
    title: "Research Management & Title Verification System",
    description:
      "Full-stack Laravel system for managing research documents and verifying title originality. Features plagiarism detection, document versioning, research workflow management, and RESTful APIs consumed by the frontend.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    category: "Web",
    featured: true,
  },
  {
    title: "Clinic Management System",
    description:
      "Web-based clinic management system developed for a school health clinic. Manages patient consultations, medical records, appointment scheduling, and health inventory for school staff and students.",
    tags: ["Laravel", "MySQL", "REST API"],
    category: "Web",
    featured: false,
  },
  {
    title: "Point of Sale System",
    description:
      "Native PHP web-based POS system for retail operations. Handles product catalog management, sales transactions, receipt generation, inventory tracking, and daily sales reporting.",
    tags: ["PHP", "MySQL", "JavaScript"],
    category: "Web",
    featured: false,
  },

  // ── Mobile (Flutter) ─────────────────────────────────────────────
  {
    title: "Ordering App",
    description:
      "Flutter mobile application for placing and managing orders. Features product browsing, cart management, order tracking, and a clean checkout flow with real-time order status updates.",
    tags: ["Flutter", "Dart", "REST API", "MySQL"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Recipe App",
    description:
      "Flutter app for browsing, saving, and sharing recipes. Includes ingredient lists, step-by-step cooking instructions, category filtering, and a favorites feature with local storage.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Note App",
    description:
      "Feature-rich Flutter notes application with create, edit, delete, and search functionality. Supports color-coded notes, local SQLite storage, and a responsive grid/list layout.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Contacts App",
    description:
      "Flutter contacts manager app with full CRUD operations, contact grouping, search and filter, and local device storage integration for seamless contact management.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Quote App",
    description:
      "Flutter mobile app that displays inspirational quotes with category filtering, share functionality, and a daily quote notification feature. Clean UI with smooth animations.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    featured: false,
  },
];

export const experience = [
  {
    role: "Desktop Application Developer (Intern)",
    company: "BMware Business Solutions Enterprises Inc.",
    type: "Internship",
    period: "Dec 2025 – Mar 2026",
    location: "Pampanga, Philippines",
    points: [
      "Developed an Intern Attendance Management System that integrates with biometric devices via LAN to automatically pull and manage OJT attendance data.",
      "Maintained and enhanced the Kids Cancervive System, a blood donation management application used for tracking donor records and donation history.",
      "Maintained and improved the company's Human Resource, Time Keeping and Payroll System for internal operations.",
      "Developed a Head Office POS Maintenance System for point-of-sale management at the company head office.",
    ],
  },
  {
    role: "Full Stack Developer (Academic Projects)",
    company: "Holy Cross College",
    type: "Academic",
    period: "2022 – Present",
    location: "Sta. Ana, Pampanga",
    points: [
      "Built a Research Management and Title Verification System (Capstone) with plagiarism detection using Laravel and RESTful APIs.",
      "Developed a Clinic Management System for the school health clinic using Laravel and MySQL.",
      "Built SyncSpace, a workspace collaboration system with Kanban board using Next.js, Supabase, Docker, and Vercel.",
      "Created multiple Flutter mobile apps (Ordering, Recipe, Note, Contacts, Quote) with PHP REST API backends.",
      "Developed a Bloodletting and Blood Donation Management System using Java Swing for community health drives.",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "Holy Cross College",
  address: "Sta. Ana, Pampanga",
  period: "2022 – Present",
};

export const achievements = [
  { icon: "🏆", title: "President's Lister", period: "Multiple Semesters" },
  { icon: "🥇", title: "Top 1 Performer in the Department", period: "SY 2024–2025" },
  { icon: "⭐", title: "Rank 9 Overall in the College", period: "SY 2024–2025" },
  { icon: "🥉", title: "Top 3 Performer in the Department", period: "SY 2022–2023" },
  { icon: "🎖️", title: "Overall Best Project", period: "SY 2021–2022" },
  { icon: "🎖️", title: "Best Project for Community Extension", period: "SY 2021–2022" },
  { icon: "🎖️", title: "Best in System & Best Presenter", period: "SY 2021–2022" },
  { icon: "🎖️", title: "Best in Research Paper", period: "SY 2021–2022" },
];

export const softSkills = [
  "Problem-Solving", "Team Collaboration", "Adaptability",
  "Initiative", "Critical Thinking", "Accountability", "Self-directed Learning",
];

export const chatbotContext = `
You are JC Dizon's portfolio assistant. Answer questions about JC briefly and professionally.

About JC:
- Full name: John Carlo Victoria Dizon (goes by "JC")
- Junior Developer specializing in Web, Mobile, and Desktop development
- Location: Pampanga, Philippines
- Available for work/opportunities
- Email: johncarlovictoriadizon@gmail.com

Education:
- BS Information Technology at Holy Cross College, Sta. Ana, Pampanga (2022–Present)
- Top 1 Performer in the Department (SY 2024–2025)
- Consistent President's Lister
- Rank 9 Overall in the College (SY 2024–2025)

Experience:
- Desktop App Developer (Intern) at BMware Business Solutions (Dec 2025 – Mar 2026)
  Built attendance system with biometric LAN, maintained HR & payroll system, developed POS system, maintained Kids Cancervive blood donation app
- Full Stack Developer (Academic) at Holy Cross College (2022–Present)
  Built research management capstone, SyncSpace collaboration app, 5 Flutter mobile apps, clinic management system

Tech Stack:
- Frontend: React, Next.js, TypeScript, JavaScript, PHP (native), Java Swing
- Backend: Node.js, Laravel, CodeIgniter 4, Spring Boot
- Mobile: Flutter, Dart
- Database & DevOps: MySQL, PostgreSQL, Supabase, Docker, Vercel, Git

Key Projects:
- Intern Attendance Management System (Java Swing + PostgreSQL + Biometrics/LAN)
- HR, Timekeeping & Payroll System (Java Swing + PostgreSQL)
- Head Office POS Maintenance System (Java Swing + PostgreSQL)
- Kids Cancervive Blood Donation Management (Java Swing + PostgreSQL)
- SyncSpace workspace collaboration (Next.js + Supabase + Docker + Vercel)
- Research Management & Title Verification (Laravel + MySQL)
- Clinic Management System (Laravel + MySQL)
- Point of Sale System (PHP + MySQL)
- Flutter Mobile Suite — 5 apps (Ordering, Recipe, Note, Contacts, Quote)

Achievements: President's Lister, Top 1 in Department, Rank 9 in College, Overall Best Project, Best Project for Community Extension, Best in System, Best Presenter, Best in Research Paper

Keep answers concise (2-4 sentences max). Be friendly and professional. If asked about hiring or contact, direct them to use the contact form on the page or email johncarlovictoriadizon@gmail.com.
`;
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

