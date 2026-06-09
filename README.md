# 🧪 GenAI Lab — Learn by Building

> An interactive Generative AI learning platform built in **4 days**. 8 modules. 30% theory, 70% hands-on coding. Real-time AI mentor feedback.

**🔗 Live Demo → [genai-lab-psi.vercel.app](https://genai-lab-psi.vercel.app)**

---

## What is GenAI Lab?

GenAI Lab is a browser-based learning platform that teaches Generative AI concepts through **doing, not reading**. Instead of passive lectures, every module drops you straight into an in-browser code editor where you write, run, and get AI-powered feedback on your work in real time.

Built as a portfolio-quality project in 4 days with a zero-cost stack — no paid APIs abused, no bloated dependencies, fully deployed and production-ready.

---

## Architecture

```
genai-lab/
├── src/                  # React 19 frontend (Vite)
│   ├── components/       # UI: modules, editor, chat, progress
│   ├── pages/            # Route-level views
│   └── main.jsx          # App entry point
├── api/                  # Vercel Serverless Functions
│   └── chat.js           # AI mentor endpoint (LLM calls, sandboxed)
├── public/               # Static assets
├── vercel.json           # SPA routing + CDN cache headers
├── vite.config.js        # Build config
└── package.json          # React 19, Vite 8
```

**Frontend → Backend flow:**

```
User writes code in browser
        ↓
React component sends code + module context to /api/chat
        ↓
Vercel Serverless Function calls LLM with a structured prompt
        ↓
AI mentor feedback streamed back to the UI
```

No separate server. No database. Vercel handles both the static frontend and the serverless API routes.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Vite 8 |
| API / Backend | Vercel Serverless Functions (Node.js) |
| AI Mentor | LLM via serverless API route |
| Hosting | Vercel (free tier) |
| Build | ESLint, Vite HMR |

---

## Modules

The platform covers 8 GenAI modules structured as **concept → code → feedback**:

1. Prompt Engineering Basics
2. Working with LLM APIs
3. Embeddings & Semantic Search
4. RAG (Retrieval-Augmented Generation)
5. Agents & Tool Use
6. Fine-tuning Fundamentals
7. Multimodal Inputs
8. Building & Deploying AI Apps

Each module follows the **30/70 rule** — 30% theory, 70% hands-on coding challenges with AI mentor review.

---

## 4-Day Build Plan

### Day 1 — Foundation
- Project scaffolding with React + Vite
- Core routing and layout components
- Module structure and content architecture

### Day 2 — Learning Engine
- In-browser code editor integration
- Module content for all 8 sections
- Progress tracking and navigation logic

### Day 3 — AI Mentor
- Vercel serverless API route (`/api/chat`)
- LLM prompt engineering for feedback generation
- Streaming responses to the frontend

### Day 4 — Polish & Deploy
- UI/UX refinements and responsive design
- Vercel deployment + SPA routing config (`vercel.json`)
- CDN caching headers for static assets
- Final testing across modules

---

## Local Setup

```bash
git clone https://github.com/FarhanAaqil/genai-lab.git
cd genai-lab
npm install
```

Add your LLM API key to `.env`:

```env
VITE_API_KEY=your_key_here
```

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build locally
```

---

## Deployment

Deployed on Vercel. Push to `main` → auto-deploys.

`vercel.json` handles:
- SPA fallback routing (all paths → `index.html`)
- Immutable cache headers on hashed static assets

---

## Built By

**Farhan Aaqil** — Final-year B.Tech AI/ML, JPNCE Mahbubnagar  
GitHub: [@FarhanAaqil](https://github.com/FarhanAaqil)

---

*Part of a broader portfolio of zero-cost, production-quality AI/ML projects.*
