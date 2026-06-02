# CareerGraph — AGENT.md

## Product Overview

CareerGraph is a Career OS platform that transforms scattered student experiences into trusted career evidence.

Students log projects, internships, hackathons, club activities, competitions, certifications, workshops, and freelance work.

The system extracts:
- skills
- contribution
- evidence
- credibility signals

These become a living Memory Profile that powers:
- career path suggestions
- readiness analysis
- opportunity recommendations
- employer matching
- university insights

This project is built for the Talentbank Career OS Hackathon.

---

## Core Product Philosophy

CareerGraph is NOT:
- another resume builder
- another job board
- another LinkedIn clone

CareerGraph IS:
- a living evidence graph
- an AI-powered career intelligence layer
- a trusted skill signal system

The main idea:
"Show what a student actually did, not just what they claim."

---

## UX Priorities

The product should feel:

* intelligent
* guided
* trustworthy
* calm
* modern

Avoid overwhelming dashboards.

Every screen should clearly communicate:

1. What this page does
2. Why it matters
3. What the user should do next

Prefer:

* progressive disclosure
* clean spacing
* obvious visual hierarchy
* actionable recommendations

Avoid:

* excessive charts
* crowded analytics
* enterprise-style complexity
* tiny unreadable cards


## AI Interaction Philosophy

AI should behave like a career intelligence assistant, not a chatbot.

The system should:

* explain recommendations clearly
* show reasoning transparently
* connect skills to evidence
* reduce uncertainty
* guide next actions

AI outputs should feel:

* practical
* grounded
* personalized
* confidence-based
* career-oriented

Avoid:

* generic motivational advice
* overclaiming predictions
* fake certainty
* conversational fluff

The product should communicate:
"We help users understand realistic career pathways using evidence and signals."


## MVP Scope (Hackathon Version)

Focus ONLY on these 3 student flows:
1. Add Experience
2. AI extracts skills/evidence
3. Career path & opportunity recommendations

Do NOT overbuild. Avoid:
- authentication
- payment systems
- real-time chat
- overly complex backend
- production-grade AI pipelines
- advanced analytics
- enterprise infrastructure

Hackathon priority:
- demo clarity
- visual quality
- believable AI workflow
- polished UX
- strong storytelling

---

## User Types

3 future user types:
1. Student
2. Employer
3. University

Current MVP focuses mainly on Student flow.
Employer and University pages can remain semi-static demo views.

---

## Technical Constraints

- React + Vite + Tailwind CSS
- JavaScript (.jsx) — only use TypeScript if it significantly improves clarity
- React Router v6 for page navigation
- Zustand for global state management
- All mock data in ONE file: `src/data/mockData.js`
- All mock AI functions in ONE file: `src/utils/mockAI.js`
- Use `lucide-react` for icons
- No additional animation libraries
- No CSS-in-JS — use Tailwind classes only

---

## Frontend Rules

Design Direction:
- Light mode only
- Inspired by modern Chinese AI SaaS apps
- Soft blue/purple accents (blue-600 to indigo-500)
- Glassmorphism allowed lightly
- Clean spacing, rounded-xl cards, subtle shadow-sm
- Professional but friendly, premium but minimal

Avoid:
- dark mode
- excessive animation
- neon cyberpunk
- cluttered dashboards
- overly corporate or enterprise styling

---

## Design Philosophy

Every page should answer:
"What value does the user immediately understand?"

UI should feel:
- intelligent
- calm
- trustworthy
- modern
- guided

Prioritize:
1. readability
2. information hierarchy
3. interaction clarity

---

## Core Pages

Student Pages:
1. Dashboard
2. Memory Profile
3. Career Intelligence
4. Opportunity Marketplace

Future Pages (semi-static for MVP):
5. Employer Talent Discovery
6. University Intelligence Hub

---

## Page Specifications (MVP)

### 1. Dashboard (Student Home)
- Welcome card with student name and overall readiness score
- Quick stats: total experiences, skills extracted, opportunities matched
- Recent activity feed (last 3 Memory Profile entries)
- "Add Experience" quick action button (navigates to Memory Profile)

### 2. Memory Profile
- Top section: text input + file upload zone + "Add Experience" button
- Main section: vertical timeline of ExperienceCards
- Each card shows: title, date, type tag, AI-extracted skill tags, evidence links, credibility badge
- Right sidebar: mini profile summary (total skills, top categories, readiness score)

### 3. Career Intelligence
- Left sidebar tabs: Skill Summary | Career Paths | Market Standing
- Tab A (Skill Summary): skill bars by category + readiness gauge + missing skills list
- Tab B (Career Paths): grid of suggested roles (match %, matching/missing skills) → click to see detailed roadmap stepper
- Tab C (Market Standing): demand trend chart + personal skill overlay + salary benchmarks

### 4. Opportunity Marketplace
- Filter bar: All | Internship | Course | Event | Project
- Card grid of opportunities (match score, title, type, missing skills, action button)
- Click card → slide-over detail panel with full description and AI match explanation

### 5. Employer Talent Discovery (semi-static)
- Search bar (mock)
- Candidate result cards (anonymized, match scores, skill evidence)
- One candidate detail view (hardcoded) showing Memory Profile + validation badges

### 6. University Intelligence Hub (semi-static)
- Curriculum gap mock table
- Student readiness summary cards
- Club event board with company interest buttons

---

## Memory Profile Philosophy

This is the HEART of the product.

The Memory Profile is:
- a living timeline
- a skill evidence engine
- the source of career intelligence

Every experience card should:
- show contribution
- show extracted skills
- show evidence
- show credibility

The goal:
Turn messy experiences into structured career signals.

---

## Career Intelligence Philosophy

Career Intelligence should:
- explain WHY a role fits
- show missing skills
- show roadmap steps
- reduce career uncertainty

Avoid generic AI advice.
Recommendations should feel:
- actionable
- personalized
- realistic

---

## Mock Data Rules

During hackathon MVP:
- use mock JSON data from `src/data/mockData.js`
- simulate AI extraction via `src/utils/mockAI.js`
- simulate recommendations

Do NOT build real AI systems first.
Demo experience > infrastructure.

---

## Coding Rules

- Use reusable components
- Keep files organized
- Prefer composition over giant files
- Avoid deeply nested logic
- Keep components readable
- Use meaningful names

---

## Component Naming Conventions

- Page components: PascalCase, `src/pages/MemoryProfile.jsx`
- Reusable components: PascalCase, `src/components/ExperienceCard.jsx`
- Layout components: PascalCase, `src/layouts/AppLayout.jsx`
- Mock data exports: camelCase, in `src/data/mockData.js`
- Mock AI functions: camelCase, in `src/utils/mockAI.js`

Reusable component candidates:
- SkillTag
- MatchBadge
- CredibilityBadge
- ExperienceCard
- OpportunityCard
- CandidateCard
- ReadinessGauge
- PathwayStepper
- FilterChips
- EmptyState
- AILoadingSpinner

---

## Project File Structure
src/
├── components/
│ ├── SkillTag.jsx
│ ├── MatchBadge.jsx
│ ├── CredibilityBadge.jsx
│ ├── ExperienceCard.jsx
│ ├── OpportunityCard.jsx
│ ├── CandidateCard.jsx
│ ├── ReadinessGauge.jsx
│ ├── PathwayStepper.jsx
│ ├── FilterChips.jsx
│ ├── EmptyState.jsx
│ └── AILoadingSpinner.jsx
├── pages/
│ ├── Dashboard.jsx
│ ├── MemoryProfile.jsx
│ ├── CareerIntelligence.jsx
│ ├── OpportunityMarketplace.jsx
│ ├── EmployerView.jsx
│ └── UniversityHub.jsx
├── layouts/
│ ├── AppLayout.jsx
│ └── Sidebar.jsx
├── data/
│ └── mockData.js
├── utils/
│ └── mockAI.js
├── store/
│ └── useStore.js
├── App.jsx
└── main.jsx


---

## Backend Philosophy

Frontend-first development.

Workflow:
1. Hardcoded UI skeleton
2. Define data structures
3. Define API contracts
4. Backend integration later

Avoid backend complexity early.

---

## Demo Philosophy

Judges should understand value within 30 seconds.

Every screen should visually communicate:
- evidence
- intelligence
- progression
- trust

The demo should feel:
"AI-powered career operating system"

not:
"student management system"

---

## Team Working Style

Team Lead (Kinston):
- Product direction, UX/UI decisions, AI workflow design
- Approves all component designs before backend integration
- Writes page specifications for Codex

Backend Lead (Ying Shien):
- FastAPI setup, database schema, AI API integration
- Builds backend AFTER frontend skeleton is validated

QA & Support (Hanz, Darren):
- Test every page against specification
- Curate mock data (realistic student experiences, job listings, course data)
- Polish UI details: spacing, hover states, empty states, error states
- Document setup instructions for demo

Working rule:
- Codex generates code. Team reviews together.
- No generated code goes into main branch without team understanding it.
- If Codex produces something unexpected, ask it to explain before accepting.

---

## Important Principle

Cut scope aggressively.

A polished small system beats a huge unfinished system.