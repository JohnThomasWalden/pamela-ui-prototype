# Pamela UI Prototype – 4‑Day Roadmap

## Overview

Deliver a clickable front‑end prototype that demonstrates Pamela Integrator Agent’s core loop: **plan → preview → execute (mock) → audit**.

---

### Day 0 – Repo & Scaffold

* [ ] Ensure Node ≥ 18, npm & git installed
* [ ] `npx create-next-app …` scaffold in **pamela-ui-prototype**
* [ ] Initial commit pushed to GitHub
* [ ] Vercel linked; first deploy live

### Day 1 – Shell UI & Hot‑reload

**Issue:** “Shell UI & hot‑reload on Vercel”

* [ ] Sidebar with logo + nav (Chat ▸, Audit)
* [ ] Split‑pane layout

  * `ChatPanel` (left, 50 %)
  * `PlanPreview` (right, 50 %)
* [ ] Live URL loads without errors

### Day 2 – Mock **runPlan** → PlanPreview

**Issue:** “Mock runPlan → PlanPreview renders list”

* [ ] API route **/api/runPlan** returns mock Plan JSON
* [ ] Zod schema for `Plan` & `PlanTask`
* [ ] `PlanPreview` fetches → parses → renders checklist
* [ ] Checkboxes default from `suggested` flag

### Day 3 – Execute Button + Optimistic Snackbar

**Issue:** “Execute button + optimistic snackbar”

* [ ] API route **/api/execute** logs selected task IDs
* [ ] **Run selected tasks** button posts to route
* [ ] Sonner toast shows optimistic success/fail

### Day 4 – Basic Audit Feed Tab

**Issue:** “Basic audit feed tab”

* [ ] **/audit** page enabled in sidebar
* [ ] Static `demoRuns` array displayed with status chips
* [ ] Navigation Chat ⇄ Audit works without reload

---

## Stretch Goals (post‑Day 4)

* [ ] Realtime audit feed via WebSocket
* [ ] Supabase integration for runs table
* [ ] Background worker queue
* [ ] Real LLM integration for **runPlan**
