# 🧪 GenAI Lab — Learn Generative AI by Building

> An interactive browser-based learning platform with 8 GenAI modules, an in-browser code editor, and real-time AI mentor feedback. 30% theory, 70% hands-on coding.

![React](https://img.shields.io/badge/React-19-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

**🔗 Live Demo → [genai-lab-psi.vercel.app](https://genai-lab-psi.vercel.app)**

---

## What Is GenAI Lab?

GenAI Lab teaches Generative AI concepts through doing, not reading. Each module drops you into an in-browser code editor where you write real code, run it, and get AI-powered feedback instantly — no local setup needed.

---

## Modules

| # | Module | What you build |
|---|---|---|
| 1 | Prompt Engineering Basics | Effective prompts, system messages, few-shot examples |
| 2 | Working with LLM APIs | API calls, parameters, streaming responses |
| 3 | Embeddings & Semantic Search | Vector embeddings, cosine similarity, nearest-neighbour search |
| 4 | RAG (Retrieval-Augmented Generation) | Document chunking, retrieval pipeline, grounded answers |
| 5 | Agents & Tool Use | ReAct loop, tool definitions, function calling |
| 6 | Fine-tuning Fundamentals | Dataset prep, LoRA concepts, evaluation |
| 7 | Multimodal Inputs | Vision models, image + text prompts |
| 8 | Building & Deploying AI Apps | Full-stack AI app, deployment, API design |

Each module follows the **30/70 rule** — 30% concept explanation, 70% coding challenge with AI mentor review.

---

## Architecture

```
genai-lab/
├── src/                  ← React 19 frontend
│   ├── components/       ← Module cards, code editor, chat, progress tracker
│   └── pages/            ← Route-level views per module
├── api/                  ← Vercel serverless functions
│   └── chat.js           ← AI mentor endpoint (LLM call + structured feedback)
├── public/               ← Static assets
├── vercel.json           ← SPA routing + CDN cache headers
├── vite.config.js        ← Build config
└── package.json          ← React 19, Vite 8
```

**Request flow:**

```
User writes code in browser
        ↓
React sends code + module context → /api/chat (Vercel serverless)
        ↓
Serverless function calls LLM with structured feedback prompt
        ↓
AI mentor response streamed back to UI
```

No separate server. No database. Vercel handles both static hosting and the serverless API route.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | React 19, Vite 8 |
| AI Mentor API | Vercel Serverless Functions (Node.js) |
| Hosting | Vercel (free tier) |
| Build tooling | Vite HMR, ESLint |

---

## 4-Day Build Plan

| Day | Focus | Deliverable |
|---|---|---|
| 1 | Foundation | Project scaffold, routing, layout, module data structure |
| 2 | Learning engine | In-browser editor, all 8 module contents, progress tracking |
| 3 | AI mentor | `/api/chat` serverless function, LLM prompt engineering, streaming |
| 4 | Polish & deploy | UI refinements, `vercel.json` config, CDN headers, live deploy |

---

## Local Setup

```bash
git clone https://github.com/FarhanAaqil/genai-lab.git
cd genai-lab
npm install
```

Add your API key to `.env`:

```env
VITE_API_KEY=your_key_here
```

```bash
npm run dev       # http://localhost:5173
npm run build     # production build
npm run preview   # preview production build locally
```

---

## Deployment

Deployed on Vercel — push to `main` triggers auto-deploy.

`vercel.json` handles:
- SPA fallback routing (all paths → `index.html`)
- Immutable cache headers on hashed static assets (`/assets/*`)

---

## Author

**Farhan Aaqil** — B.Tech AI/ML

[![GitHub](https://img.shields.io/badge/GitHub-FarhanAaqil-181717?style=flat&logo=github)](https://github.com/FarhanAaqil)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-farhan--aaqil-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/farhan-aaqil-4730432bb)
