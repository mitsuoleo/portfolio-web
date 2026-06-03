# Redesign Portfolio A+C Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the portfolio visual direction into Produto Minimal 2.0 with Editorial Engineering accents.

**Architecture:** Keep the existing React SPA structure and refine presentation through local component changes. Preserve the current data model and section order, while improving hierarchy, contrast, rhythm, card density, and responsive behavior.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, lucide-react, Vitest.

---

### Task 1: Global Visual Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`

- [ ] Add warmer paper, sharper ink, editorial accent, and subtle surface tokens.
- [ ] Replace decorative radial-heavy background with a restrained technical grid and full-page bands.
- [ ] Keep light and dark theme support through the existing `.dark` class.

### Task 2: Header And Navigation

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/ThemeToggle.tsx`

- [ ] Make the header more editorial and compact.
- [ ] Add pointer affordance and stronger hover/focus treatment.
- [ ] Preserve mobile menu behavior and accessibility labels.

### Task 3: Hero System

**Files:**
- Modify: `src/sections/Hero.tsx`

- [ ] Rebuild hero as a product-engineering intro with a strong left content column.
- [ ] Turn the right panel into a concise signal board with stats and process notes.
- [ ] Keep existing CTA anchors and mail action.

### Task 4: Editorial Cards And Sections

**Files:**
- Modify: `src/components/Section.tsx`
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/SkillGroup.tsx`
- Modify: `src/sections/About.tsx`
- Modify: `src/sections/Contact.tsx`

- [ ] Give sections a more measured editorial rhythm.
- [ ] Make project cards read like compact case studies.
- [ ] Keep cards responsive without nested-card decoration.
- [ ] Ensure buttons and links have visible interactive affordance.

### Task 5: Verification

**Files:**
- Test: `src/**/*.test.tsx`

- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Open the local app and inspect desktop/mobile layout.
- [ ] Fix any contrast, overlap, or responsive issues found during visual QA.
