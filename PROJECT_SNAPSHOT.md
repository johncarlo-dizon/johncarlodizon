# Project Snapshot
> Generated: 4/19/2026, 10:50:15 AM  
> Root: `D:\.CODES_PROJECT\NextJs\jc-portfolio`  
> Files included: 19

---

## File Tree

```
jc-portfolio/
├── public/
│   ├── certificates/
│   │   ├── 4th Place — CodeChum National Programming Challenge 2025, Season 2.png
│   │   ├── bestinresearchpaper.jpeg
│   │   ├── bestinsystem.jpeg
│   │   ├── bestpresenter.jpeg
│   │   ├── bestprojectforcommunityextension.jpeg
│   │   ├── cerofrecog_embracingthelightofinnovation.jpeg
│   │   ├── overallbestproject.jpeg
│   │   ├── overallrank9.jpeg
│   │   ├── pl2023-2024firstsem.jpeg
│   │   ├── pl2023-2024secondsem.jpeg
│   │   ├── pl2024-2025firstsem.jpeg
│   │   ├── pl2024-2025firstsemv2.jpeg
│   │   ├── pl2024-2025secondsem.jpeg
│   │   ├── pl2024-2025secondsemv2.jpeg
│   │   ├── seclstop1.jpeg
│   │   └── top3bestperformerindepartment.jpeg
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
├── .env.local
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

### `.env.local`

```
# .env.local
N8N_WEBHOOK_URL=https://jc-portfolio-n8n.onrender.com/webhook/portfolio-chat
SMTP_USER=johncarlovdizon@gmail.com 
SMTP_PASS=ampjmecetyeibltr
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
    "nodemailer": "^8.0.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "resend": "^6.10.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/nodemailer": "^7.0.11",
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
```

### `src\app\api\contact\route.ts`

```typescript
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials not set in environment variables");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Send email to JC
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject} — from ${name}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="margin: 0 0 20px; font-size: 18px; color: #111;">
            📬 New message from your portfolio
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Email</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Subject</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111;">${subject}</td>
            </tr>` : ""}
          </table>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin: 0; font-size: 12px; color: #9ca3af;">
            Hit reply to respond directly to ${name} at ${email}
          </p>
        </div>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `"JC Dizon" <${SMTP_USER}>`,
      to: email,
      subject: "Got your message! — JC Dizon",
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="margin: 0 0 12px; font-size: 18px; color: #111;">Hey ${name}! 👋</h2>
          <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">
            Thanks for reaching out! I've received your message and will get back to you within 24–48 hours.
          </p>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0 0 6px; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Your message</p>
            <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 14px; color: #374151; margin: 0 0 4px;">Talk soon,</p>
          <p style="font-size: 14px; font-weight: 600; color: #111; margin: 0;">JC Dizon</p>
          <p style="font-size: 12px; color: #9ca3af; margin: 4px 0 0;">Junior Developer · Pampanga, Philippines</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("Email send error:", err);
    return Response.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
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
  education, softSkills, forteItems, certificates,
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
    <h2 style={{
      fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 0,
      color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.2,
    }}>
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
            padding: 0, marginBottom: 16, transition: "color 0.15s",
          }}
        >
          {showAll ? <>show less <span style={{ fontSize: 10, opacity: 0.7 }}>↑</span></>
                   : <>{`+${hiddenCount}`} more <span style={{ fontSize: 10, opacity: 0.7 }}>↓</span></>}
        </button>
      </div>

      {skills.map((group) => {
        const forte   = group.items.filter((item) => forteItems.includes(item));
        const visible = showAll || forte.length === 0 ? group.items : forte;
        return (
          <div key={group.category}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px 0" }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {visible.map((item) => (
                <span key={item} style={{
                  fontSize: 13, padding: "4px 12px", borderRadius: 6,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  color: "var(--sub)", fontWeight: 400,
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AchievementsSection() {
  const [showAll, setShowAll]         = useState(false);
  // lightbox now holds an array of image paths
  const [lightbox, setLightbox]       = useState<string[] | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const visible    = showAll ? certificates : certificates.filter((c) => c.featured);
  const hiddenCount = certificates.filter((c) => !c.featured).length;

  const openLightbox = (images: string[]) => {
    setLightbox(images);
    setLightboxIdx(0);
  };

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <SectionTitle>Achievements</SectionTitle>
        <button
          onClick={() => setShowAll((v) => !v)}
          style={{
            fontSize: 11, fontWeight: 500, color: "var(--muted)",
            background: "none", border: "none", cursor: "pointer",
            padding: 0, marginBottom: 16, transition: "color 0.15s",
            display: "inline-flex", alignItems: "center", gap: 4,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}
        >
          {showAll
            ? <>show less <span style={{ fontSize: 10, opacity: 0.7 }}>↑</span></>
            : <>{`+${hiddenCount}`} more <span style={{ fontSize: 10, opacity: 0.7 }}>↓</span></>}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {visible.map((cert, i) => (
          <div
            key={cert.title}
            onClick={() => openLightbox(cert.images)}
            style={{
              display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              gap: 10, padding: "10px 0", cursor: "pointer",
              borderTop: i === 0 ? "none" : S.divider,
              marginTop: i === 0 ? 4 : 0, transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "0.6"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, minWidth: 0 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--sub)", lineHeight: 1.4, margin: 0 }}>
                  {cert.title}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <p style={{ fontSize: 11, color: "var(--dim)", margin: 0 }}>
                    {cert.period}
                  </p>
                  {cert.images.length > 1 && (
                    <span style={{
                      fontSize: 10, color: "var(--muted)",
                      background: "var(--surface)", border: "1px solid var(--border)",
                      padding: "1px 6px", borderRadius: 4,
                    }}>
                      {cert.images.length} photos
                    </span>
                  )}
                </div>
              </div>
            </div>
            <span style={{ fontSize: 11, color: "var(--dim)", flexShrink: 0, marginTop: 3 }}>↗</span>
          </div>
        ))}
      </div>

      {/* Lightbox — supports multiple images with prev/next */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, flexDirection: "column", gap: 16,
          }}
        >
          {/* Images — side by side if multiple */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex", gap: 12, alignItems: "center", justifyContent: "center",
              maxWidth: "92vw", maxHeight: "80vh",
            }}
          >
            {lightbox.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Certificate ${idx + 1}`}
                style={{
                  maxHeight: "78vh",
                  maxWidth: lightbox.length > 1 ? "46vw" : "88vw",
                  borderRadius: 10,
                  boxShadow: "0 8px 48px rgba(0,0,0,0.6)",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>

          {/* Caption */}
          {lightbox.length > 1 && (
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: 0 }}>
              Click anywhere outside to close
            </p>
          )}

          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", top: 20, right: 24,
              background: "none", border: "none", color: "#fff",
              fontSize: 24, cursor: "pointer", opacity: 0.7, lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default function Home() {
  const { theme, toggle } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [chatOpen, setChatOpen]       = useState(false);
  const [showAllProjects, setShowAll] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, PROJECTS_DEFAULT);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 40px 120px" }}>

{/* ── HERO ── */}
<div style={{
  display: "flex", alignItems: "flex-start", gap: 20,
  paddingBottom: 40, borderBottom: S.divider, marginBottom: 0,
  flexWrap: "wrap",
}}>
  <div style={{
    width: 80, height: 80, borderRadius: 10, flexShrink: 0,
    background: "#111", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 24, fontWeight: 700, color: "#fff",
  }}>
    {personalInfo.initials}
  </div>

  <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
    <button onClick={toggle} style={{
      position: "absolute", top: 0, right: 0,
      fontSize: 12, padding: "5px 10px", borderRadius: 7,
      background: "var(--surface)", border: "1px solid var(--border)",
      color: "var(--sub)", cursor: "pointer",
    }}>
      {theme === "dark" ? "☀ Light" : "☾ Dark"}
    </button>

    <h1 style={{
      fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em",
      color: "var(--text)", marginBottom: 2, lineHeight: 1.15,
      paddingRight: 80, marginTop: 0,
    }}>
      {personalInfo.name}
    </h1>
    <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 3, marginTop: 0 }}>
      📍 {personalInfo.location}
    </p>
    <p style={{ fontSize: 14, color: "var(--sub)", marginBottom: 12, marginTop: 0 }}>
      {personalInfo.title} · {personalInfo.subtitle}
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 12, fontWeight: 500, padding: "5px 10px", borderRadius: 7,
        background: theme === "dark" ? "#0c1f17" : "#f0faf5",
        border: `1px solid ${theme === "dark" ? "#152a1e" : "#c3e6d3"}`,
        color: "#2e7d52",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "#2e7d52", display: "inline-block",
          animation: "pulse 2s infinite",
        }} />
        Open to Work
      </span>

      <button onClick={() => setContactOpen(true)} style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 7,
        background: "var(--text)", color: "var(--bg)", border: "none", cursor: "pointer",
      }}>
        ✉ Send Email
      </button>

      <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 12, padding: "5px 10px", borderRadius: 7,
        background: "var(--surface)", border: "1px solid var(--border)",
        color: "var(--sub)", textDecoration: "none",
      }}>
        ⌨ GitHub
      </a>

      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 12, padding: "5px 10px", borderRadius: 7,
        background: "var(--surface)", border: "1px solid var(--border)",
        color: "var(--sub)", textDecoration: "none",
      }}>
        💼 LinkedIn
      </a>
    </div>
  </div>
</div>

        {/* ── TWO-COLUMN GRID ── */}
        <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "0 60px", paddingTop: 44 }}>

          {/* ── MAIN COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* ABOUT */}
            <section>
              <SectionTitle>About</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {personalInfo.about.map((p, i) => (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: "var(--sub)", margin: 0 }}>{p}</p>
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
                      <span style={{ fontSize: 12, color: "var(--dim)", flexShrink: 0 }}>{proj.category}</span>
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
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 2, marginTop: 0 }}>{exp.role}</p>
                      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 1, marginTop: 0 }}>{exp.company}</p>
                      <p style={{ fontSize: 12, color: "var(--dim)", margin: 0 }}>{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <SectionTitle>Education</SectionTitle>
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 3, marginTop: 0 }}>{education.degree}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>{education.school}</p>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>{education.address}</p>
              <p style={{ fontSize: 12, color: "var(--dim)", marginTop: 3 }}>{education.period}</p>
            </section>

            {/* ACHIEVEMENTS */}
            <AchievementsSection />

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

      {/* FLOATING CHAT BUTTON */}
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)} style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 40,
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 18px", borderRadius: 12,
          background: "var(--text)", color: "var(--bg)",
          fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer",
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        }}>
          💬 Ask JC
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
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
        button:hover { opacity: 0.85; }
        a:hover { opacity: 0.75; }
        @media (max-width: 480px) {
  .portfolio-grid { padding-top: 32px !important; }
}
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

const SUGGESTED = ["What's your tech stack?", "Tell me about your projects", "Are you open to work?", "How can I reach you?"];

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! 👋 I'm JC. Feel free to ask me anything — my skills, projects, experience, or if you're looking to work together!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("JC is typing...");
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
    setLoadingText("JC is typing...");
    const t1 = setTimeout(() => setLoadingText("Give me a sec..."), 5000);
    const t2 = setTimeout(() => setLoadingText("Just waking up, one moment..."), 15000);
    const t3 = setTimeout(() => setLoadingText("Almost there, hang tight!"), 30000);
    timersRef.current = [t1, t2, t3];
  };

  const stopLoadingMessages = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setLoadingText("JC is typing...");
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
      const reply = data.reply ?? "Sorry, something went wrong. Try again!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: unknown) {
      const isTimeout = err instanceof Error && err.name === "AbortError";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isTimeout
            ? "⏱️ Took too long to respond — I was probably sleeping 😅 Try again, should be faster now!"
            : "❌ Something went wrong on my end. Check your connection and try again!",
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

      <div style={{
        position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
        width: "340px", maxWidth: "calc(100vw - 32px)",
        display: "flex", flexDirection: "column",
        borderRadius: "12px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        overflow: "hidden", border: "1px solid var(--border)",
        background: "var(--bg)", animation: "chatFadeIn 0.2s ease",
      }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", borderBottom: "1px solid var(--border)",
          background: "var(--surface)", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Avatar */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700,
                background: "var(--text)", color: "var(--bg)",
              }}>
                JC
              </div>
              {/* Online dot */}
              <span style={{
                position: "absolute", bottom: 0, right: 0,
                width: 9, height: 9, borderRadius: "50%",
                background: loading ? "#f59e0b" : "#22c55e",
                border: "2px solid var(--surface)",
              }} />
            </div>

            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", margin: 0, lineHeight: 1.2 }}>
                JC Dizon
              </p>
              <p style={{ fontSize: 11, color: "var(--muted)", margin: "2px 0 0" }}>
                {loading ? loadingText : "Junior Developer · Usually replies fast"}
              </p>
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
              alignItems: "flex-end", gap: 6,
            }}>
              {/* JC avatar on assistant messages */}
              {msg.role === "assistant" && (
                <div style={{
                  width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 8, fontWeight: 700,
                  background: "var(--text)", color: "var(--bg)",
                }}>
                  JC
                </div>
              )}
              <div style={{
                maxWidth: "80%", padding: "8px 12px",
                fontSize: 13, lineHeight: 1.6,
                whiteSpace: "pre-wrap", wordBreak: "break-word",
                ...(msg.role === "user"
                  ? { background: "var(--text)", color: "var(--bg)", borderRadius: "14px 14px 4px 14px" }
                  : { background: "var(--surface)", color: "var(--sub)", border: "1px solid var(--border)", borderRadius: "4px 14px 14px 14px" }
                ),
              }}>
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, fontWeight: 700,
                background: "var(--text)", color: "var(--bg)",
              }}>
                JC
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{
                  padding: "10px 14px",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "4px 14px 14px 14px",
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
                <p style={{ fontSize: 10, color: "var(--dim)", margin: 0, paddingLeft: 4 }}>
                  {loadingText}
                </p>
              </div>
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
            ⚡ First reply may take ~30s to wake up
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
            placeholder={loading ? "JC is replying..." : "Message JC..."}
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
```

### `src\components\ContactModal.tsx`

```typescript
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
  email: "johncarlovdizon@gmail.com",
  github: "https://github.com/johncarlo-dizon",
  linkedin: "https://linkedin.com/in/jcdizon",
  portfolio: "https://johncarlodizon-silk.vercel.app/",
  available: true,
  about: [
    "I'm a junior developer specializing in building scalable web apps, mobile experiences, and desktop systems — from backend APIs to Play Store deployments. I work on full-stack web, cross-platform mobile, and biometric-integrated enterprise systems.",
    "I've contributed to real company workflows during my internship at BMware Business Solutions, building and maintaining systems used for HR, payroll, and attendance tracking.",
    "Currently finishing my BS in Information Technology at Holy Cross College. I'm continuously learning and improving my skills, and I'm eager to grow as a developer while gaining more real-world experience.",
  ],
};

export const forteItems = [
  "Java", "Flutter", "Laravel", "Next.js", "Node.js", "Git / GitHub", "TypeScript", "Postman","MySQL", "PostgreSQL"
];

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
  {
    category: "Tools",
    items: ["Postman", "Git / GitHub", "VS Code", "Docker", "n8n"],
  },
];

export const projects = [
  {
    title: "Intern Attendance Management System",
    description:
      "Desktop system that integrates with biometric devices via LAN to pull real-time OJT attendance data. Automatically generates TDR (Time and Daily Reports) and detailed attendance reports for intern monitoring and compliance.",
    tags: ["Java", "Java Swing", "PostgreSQL", "Biometrics / LAN"],
    category: "Desktop",
    featured: true,
  },
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
    featured: false,
  },
  {
    title: "Kids Cancervive — Blood Donation Management",
    description:
      "Desktop application for managing blood donation drives and bloodletting events. Tracks donor records, blood type inventory, donation history, and generates reports for health coordinators.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: false,
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
 
];

export const education = {
  degree: "BS Information Technology",
  school: "Holy Cross College",
  address: "Sta. Ana, Pampanga",
  period: "2022 – Present",
};

export const softSkills = [
  "Problem-Solving", "Team Collaboration", "Adaptability",
  "Initiative", "Critical Thinking", "Accountability", "Self-directed Learning",
];

// images: array — if multiple, lightbox shows them side by side
// featured: true = shown by default
export const certificates = [
  {
    title: "Rank 9 Overall in the College",
    period: "SY 2024–2025",
    images: ["/certificates/overallrank9.jpeg"],
    featured: true,
  },
  {
    title: "4th Place — CodeChum National Programming Challenge 2025, Season 2",
    period: "2025",
    images: ["/certificates/4th Place — CodeChum National Programming Challenge 2025, Season 2.png"],
    featured: true,
  },
  {
    title: "Top 1 Performer in the Department",
    period: "SY 2024–2025",
    images: ["/certificates/seclstop1.jpeg"],
    featured: true,
  },
  {
    title: "Top 3 Performer in the Department",
    period: "SY 2022–2023",
    images: ["/certificates/top3bestperformerindepartment.jpeg"],
    featured: true,
  },
  {
    title: "Overall Best Project",
    period: "SY 2021–2022",
    images: ["/certificates/overallbestproject.jpeg"],
    featured: true,
  },
  {
    title: "Best Project for Community Extension",
    period: "SY 2021–2022",
    images: ["/certificates/bestprojectforcommunityextension.jpeg"],
    featured: false,
  },
  {
    title: "Best in System",
    period: "SY 2021–2022",
    images: ["/certificates/bestinsystem.jpeg"],
    featured: false,
  },
  {
    title: "Best Presenter",
    period: "SY 2021–2022",
    images: ["/certificates/bestpresenter.jpeg"],
    featured: false,
  },
  {
    title: "Best in Research Paper",
    period: "SY 2021–2022",
    images: ["/certificates/bestinresearchpaper.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2023–2024, 1st Sem",
    period: "2023–2024",
    images: ["/certificates/pl2023-2024firstsem.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2023–2024, 2nd Sem",
    period: "2023–2024",
    images: ["/certificates/pl2023-2024secondsem.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2024–2025, 1st Sem",
    period: "2024–2025",
    // two certificates for same award — shown side by side in lightbox
    images: [
      "/certificates/pl2024-2025firstsem.jpeg",
      "/certificates/pl2024-2025firstsemv2.jpeg",
    ],
    featured: false,
  },
  {
    title: "President's Lister — 2024–2025, 2nd Sem",
    period: "2024–2025",
    images: [
      "/certificates/pl2024-2025secondsem.jpeg",
      "/certificates/pl2024-2025secondsemv2.jpeg",
    ],
    featured: false,
  },
  {
    title: "Certificate of Recognition — Embracing the Light of Innovation",
    period: "2024",
    images: ["/certificates/cerofrecog_embracingthelightofinnovation.jpeg"],
    featured: false,
  },
];

export const chatbotContext = `
You are JC Dizon himself. Respond in first person as JC — friendly, casual but professional, like a real developer chatting. Use "I", "my", "me".

About me:
- I'm John Carlo Victoria Dizon, goes by JC
- Junior Developer: Web, Mobile, Desktop — Pampanga, Philippines
- Open to work and new opportunities
- Email: johncarlovictoriadizon@gmail.com

My forte: Java, Flutter, Laravel, Next.js, Node.js, TypeScript, Git/GitHub, Postman

Tech I work with: React, Next.js, TypeScript, JavaScript, PHP, Java Swing, Node.js, Laravel, CodeIgniter 4, Spring Boot, Flutter, Dart, MySQL, PostgreSQL, Supabase, Docker, Vercel

My projects: Intern Attendance System (biometrics/LAN), HR & Payroll System, POS System, SyncSpace (Next.js+Supabase), Research Management System (Laravel), Clinic System, 5 Flutter apps

Experience: Interned at BMware Business Solutions (Dec 2025–Mar 2026) building real enterprise systems. Academic full-stack dev at Holy Cross College (2022–Present).

Education: BS Information Technology, Holy Cross College — Top 1 in Department, President's Lister, Rank 9 overall, 4th Place CodeChum National Programming Challenge 2025 Season 2.

Keep replies short and conversational (2-4 sentences). Sound like a real person, not a bot. For hiring or contact, say to use the contact form or email me at johncarlovictoriadizon@gmail.com.
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

