# Pamela UI Prototype – 3‑Day Roadmap

## Overview

Deliver a clickable front‑end prototype that demonstrates Pamela Integrator Agent's core loop: **plan → preview → execute (mock) → audit**.

---

### Day 0 – Repo & Scaffold

* [x] Ensure Node ≥ 18, npm & git installed
* [x] `npx create-next-app …` scaffold in **pamela-ui-prototype**
* [x] Initial commit pushed to GitHub
* [x] Vercel linked; first deploy live

### Day 1 – Shell UI & Hot‑reload

**Issue:** "Shell UI & hot‑reload on Vercel"

* [x] Sidebar with logo + nav (Chat ▸, Audit)
* [x] Split‑pane layout

  * `ChatPanel` (left, 50 %)
  * `PlanPreview` (right, 50 %)
* [x] Live URL loads without errors

### Day 2 – Execute Button + Optimistic Snackbar

**Issue:** "Execute button + optimistic snackbar"

* [ ] API route **/api/execute** logs selected task IDs
* [ ] **Run selected tasks** button posts to route
* [ ] Sonner toast shows optimistic success/fail

### Day 3 – Basic Audit Feed Tab

**Issue:** "Basic audit feed tab"

* [ ] **/audit** page enabled in sidebar
* [ ] Static `demoRuns` array displayed with status chips
* [ ] Navigation Chat ⇄ Audit works without reload

---

## Stretch Goals (post‑Day 3)

* [ ] Realtime audit feed via WebSocket
* [ ] Supabase integration for runs table
* [ ] Background worker queue
* [ ] Real LLM integration for **runPlan**
* [ ] Mock **runPlan** → PlanPreview renders list
* [ ] API route **/api/runPlan** returns mock Plan JSON
* [ ] Zod schema for `Plan` & `PlanTask`
* [ ] `PlanPreview` fetches → parses → renders checklist
* [ ] Checkboxes default from `suggested` flag
