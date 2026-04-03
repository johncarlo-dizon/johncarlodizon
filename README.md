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
