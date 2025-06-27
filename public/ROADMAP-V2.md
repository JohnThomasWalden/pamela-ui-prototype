# Untitled

Below is an updated **ROADMAP.md v2** that adds the “plan-file + task-JSON” convention and keeps the build lean enough for a quick demo while still future-proof.

```markdown
# Pamela UI Prototype — “Side-car” Demo (v2)
*(PlanQueue • PlanCanvas • ChatDock stacked left, TaskBoard right)*

> **Scope for this sprint:**
> • Static Markdown plan (`demo-plan.md`) + static task list (`task-array.json`)
> • No live CRDT / OpenAI / Pamela API yet
> • Component boundaries ready for easy swap-ins later

---

## Folder quick-ref

```

/public

/plans

demo-plan.md ← rich Markdown roadmap

/mock

task-array.json ← tasks matching the plan

/app

layout.tsx

/components ← UI pieces

/contexts ← React context stores

/lib ← helpers (loadPlan, loadTasks, parseTasks later)

```

---

## Day 0 — Repo Reset & Skeleton

- [ ] `git checkout -b ui-demo-v2`
- [ ] Install **shadcn/ui**, Tailwind, Next.js App Router
- [ ] Create `<LeftPane>` (grid rows: PlanQueue / PlanCanvas / ChatDock) and `<RightPane>` (TaskBoard)
- [ ] Hard-code stubs → deploy Vercel preview

---

## Day 1 — PlanQueue + PlanCanvas (static files)

**Goal:** load and display `/public/plans/demo-plan.md`.

- [ ] `PlanContext` with `{plans[], activePlanId}`
      ```ts
      const plans = [{ id:'demo', title:'Demo Plan', mdPath:'/plans/demo-plan.md'}];
      ```
- [ ] PlanQueue renders list; click sets `activePlanId`
- [ ] `loadMarkdown(path): Promise<string>` fetches the file
- [ ] PlanCanvas uses **react-markdown** to render

> *Future-ready:* `loadMarkdown` is abstracted—later replace with CRDT provider.

---

## Day 2 — TaskBoard MVP (static JSON)

**Goal:** show cards from `/public/mock/task-array.json`.

- [ ] `loadTasks('/mock/task-array.json')`
- [ ] `TaskContext` holds `tasks[]`
- [ ] TaskCard fields: **title · outcome · cost · confidence**
- [ ] Right-click card → “Mark complete” (local state only)

> *Future-ready:* TaskBoard already consumes `tasks[]`; swap to SSE/WebSocket later.

---

## Day 3 — ChatDock & “Send to Pamela” (stub)

**Goal:** simulate hand-off and queue status.

- [ ] Collapsible ChatDock (history + input)
- [ ] Slash commands:
  - `/push` → appends selected text to PlanCanvas markdown (DOM insert)
  - `/send` → sets plan status **Queued** and shows toast “Sent to Pamela”
- [ ] `window.open('/pamela?planId=demo')` side-car mock

> *Future-ready:* replace toast + open with real fetch to Pamela.

---

## Day 4 — Polish & Handoff

- [ ] Responsive split-view (min-width left 400 px)
- [ ] Tailwind theme pass, badge colors by confidence
- [ ] README: run steps + how to replace mocks
- [ ] Record 90-sec Loom demo

---

## Stretch Upgrades (post-demo)

| Upgrade                     | Drop-in swap                                      |
|-----------------------------|---------------------------------------------------|
| Live CRDT editing           | Replace `loadMarkdown` / `saveMarkdown` with Yjs |
| OpenAI chat                 | Swap `mockChat()` in ChatDock for real API call   |
| Pamela API integration      | Replace `/send` stub with real `POST /v1/plan`    |
| Task live stream            | Replace `loadTasks` with SSE/WebSocket            |
| Auth + multi-team plans     | Wrap in Supabase AuthProvider                     |

---

### Sample seed files

**`/public/plans/demo-plan.md`**
*(shortened example)*
```markdown
# Launch Week Plan (Demo)

## Goal
Ship a public beta in seven days.

---

### Task: Draft landing-page copy
**Outcome** → Hero copy & three benefit bullets
**Cost** → 2 h
**Confidence** → 85 %

### Task: Design hero section
Outcome → Figma frame ready for dev
Cost → 3 h
Confidence → 70 %

```

**`/public/mock/task-array.json`**

```json
[
  {
    "id": 1,
    "section": "Website",
    "title": "Draft landing-page copy",
    "description": "Hero + 3 bullets",
    "outcome": "Copy ready for design",
    "cost": "2 h",
    "confidence": "85%"
  },
  {
    "id": 2,
    "section": "Design",
    "title": "Design hero section",
    "description": "Figma frame",
    "outcome": "Approved mock",
    "cost": "3 h",
    "confidence": "70%"
  }
]

```

With these two seed files in place the demo boots with a real-looking plan on the left and matching tasks on the right—perfect for demos today, painless to extend tomorrow.