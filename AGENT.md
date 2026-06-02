# CareerOS / CareerGraph Operating Manual

This file is the internal operating manual for building CareerOS. It should guide product decisions, frontend implementation, AI behavior, responsive design, and hackathon execution.

CareerOS is the product experience. CareerGraph is the intelligence layer: the evidence graph, career path graph, and skill-signal system that power the product.

---

## 1. Product North Star

CareerOS is a multi-sided AI-powered Career Operating System for students, employers, and universities.

The platform turns real student experiences into trusted career evidence, then uses that evidence to guide career growth, opportunity discovery, hiring, and curriculum-market alignment.

The product should prove one core idea:

> Show what a person actually did, not only what they claim.

CareerOS is not:

- a resume builder
- a generic job board
- a LinkedIn clone
- a personal productivity tracker
- a university admin dashboard

CareerOS is:

- a living Memory Profile
- an AI career companion
- a skill and evidence verification layer
- a career stage awareness system
- a career path intelligence graph
- an opportunity ecosystem
- an evidence-based hiring interface
- a university-market alignment system

---

## 2. Hackathon Scope And Execution

This project is built for the Talentbank Career OS Hackathon. Scope must stay sharp.

Hackathon priorities:

- demo clarity
- visual polish
- believable AI workflows
- strong storytelling
- realistic mock data
- fast iteration
- frontend-first validation

Do not overbuild:

- production authentication
- payments
- complex backend infrastructure
- real-time chat infrastructure
- production AI pipelines
- enterprise analytics depth
- heavy graph libraries

MVP rule:

> A polished small system beats a huge unfinished system.

Frontend should lead the product story. Backend and AI integration can come after the demo experience is validated.

---

## 3. Product Architecture

CareerOS has three workspaces.

### Student Workspace

Purpose: help students understand their career readiness, build evidence, discover paths, and find opportunities.

Current student areas:

- Overview
- Career Memory / Memory Profile
- Career Intelligence
- Opportunities
- Applications
- Network & Mentors
- Learning & Skills
- AI Assistant
- Settings

Core student systems:

- AI-driven Memory Profile
- Career Stage Awareness
- Career Path Network Graph
- Opportunity Marketplace
- AI Career Companion
- Evidence Integrity

### Employer Workspace

Purpose: help employers discover evidence-backed candidates and collaborate with student ecosystems.

Current employer areas:

- Talent Discovery
- Candidate Insights
- Create Engagement

Core employer systems:

- evidence-based candidate discovery
- readiness and validation signals
- hiring pipeline analytics
- club/society collaboration requests
- engagement builder for workshops, case competitions, hackathons, mentorship, and micro-projects

### University Workspace

Purpose: help universities align curriculum, monitor student readiness, and connect societies with companies.

Current university areas:

- Curriculum-Market Alignment
- Student Readiness
- Society-Corporate Marketplace

Core university systems:

- curriculum-to-market gap analysis
- cohort readiness analytics
- skill gap heatmaps
- AI-recommended interventions
- society-company collaboration marketplace
- post-event evidence completion

---

## 4. Career Intelligence Concepts

### Memory Profile

The Memory Profile is the heart of CareerOS.

It transforms projects, internships, hackathons, club work, competitions, certificates, workshops, and freelance work into structured career evidence.

Each memory should communicate:

- what happened
- what the student contributed
- what skills were demonstrated
- what evidence supports it
- how credible the signal is

The Career Memory page should feel like a polished evidence timeline, not a raw activity log.

### Career Stage Awareness

CareerOS should understand that users are at different stages:

- exploring possible paths
- building foundation skills
- collecting evidence
- applying to roles
- interviewing
- preparing for first-job readiness

UI recommendations should respect the user's current stage. Do not show every possible action at once.

### Career Path Network Graph

The Career Path Network Graph is a discovery interface.

It helps users see:

- which careers are closest
- which paths are related
- which skills unlock future paths
- which paths are strong matches, skill-gap paths, or future unlocks

Graph rules:

- Use React, Tailwind, and SVG only.
- Use fixed percentage-based node positions for the hackathon demo.
- Keep nodes readable on laptop screens.
- Use curved SVG connections with soft gradients and glow.
- Connection types are `strong`, `gap`, and `unlock`.
- Selected paths may use subtle animated line flow.
- Lines must sit behind nodes.
- Graph containers must remain responsive and avoid page-level horizontal overflow.

Graph philosophy:

> The graph is discovery. The detail panel is execution.

### Opportunity Ecosystem

Opportunities should connect to career evidence and skill gaps.

Examples:

- internships
- courses
- workshops
- hackathons
- case competitions
- mentorship
- club-company collaborations

Every opportunity should explain why it matches and what evidence it helps create.

---

## 5. AI Product Philosophy

AI in CareerOS is not a novelty chatbot. It is a career intelligence layer.

AI should:

- extract skills from real experiences
- connect evidence to career readiness
- explain why a path fits
- identify missing evidence
- recommend next actions
- reduce uncertainty
- stay grounded in visible data

AI should feel:

- practical
- warm
- transparent
- confidence-aware
- career-focused

Avoid:

- generic motivation
- fake certainty
- vague encouragement
- overclaiming predictions
- personality-heavy chatbot fluff

### AI Companion UX

The AI Companion should feel like a calm career guide.

It can:

- answer career questions
- suggest what to do next
- review memory evidence
- explain graph paths
- recommend opportunities

It should not dominate the interface. The user should feel supported, not interrupted.

---

## 6. UX And Visual Design Philosophy

CareerOS should feel like a warm premium AI SaaS product.

Visual direction:

- light mode
- clean white surfaces
- soft lavender gradients
- pastel purple/blue accents
- subtle shadows
- rounded cards
- spacious layouts
- calm dashboard rhythm
- polished but not flashy

Avoid:

- dark mode
- cyberpunk/neon styling
- cold technical diagrams
- dense enterprise dashboards
- tiny unreadable cards
- decorative clutter
- generic productivity-app patterns

Every page should answer:

1. What is this page for?
2. Why does it matter?
3. What should the user do next?

Use progressive disclosure. Important actions should be obvious. Secondary details can sit in right panels, tooltips, timelines, or detail cards.

---

## 7. Dashboard Consistency System

Dashboard-style pages should share the same design DNA.

Use:

- page title and subtitle
- soft gradient page background
- rounded white/lavender cards
- thin violet or slate borders
- subtle shadows
- consistent gutters
- responsive grids
- right insight panels that collapse below main content

Student Overview, Career Memory, and Career Intelligence should feel like siblings in the same product system.

Right panels should use a consistent card style:

- Profile Summary
- Top Skills
- AI Insight
- Evidence Integrity
- Research Interests
- Recommended for You

---

## 8. Frontend Implementation Standards

Tech stack:

- React
- Vite
- JavaScript / JSX
- React Router v6
- Zustand
- Tailwind CSS
- Mock data in `src/data/mockData.js`
- Mock AI functions in `src/data/mockAi.js`

Rules:

- Use Tailwind classes only for styling.
- Do not add CSS-in-JS.
- Do not add heavy UI or graph libraries.
- Prefer reusable components.
- Keep page components readable.
- Keep business/demo data in mock data files.
- Keep AI simulation in mock AI helpers.
- Use composition instead of giant component files.
- Do not change Employer or University pages when a task is scoped to Candidate.
- Do not change app features when a task asks only for documentation or styling.

Naming:

- Page components: `src/pages/CandidateOverviewPage.jsx`
- Layout components: `src/components/layout/AppLayout.jsx`
- Feature components: `src/components/<feature>/`
- Mock data exports: camelCase
- Mock AI functions: camelCase

---

## 9. Current File Structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    layout/
      AppLayout.jsx
    session/
      ProtectedRoute.jsx
      RoleCard.jsx
      SignOutButton.jsx
    ui/
      Button.jsx
      Card.jsx
      ProgressBar.jsx
      Tag.jsx
    student/
      StudentSidebar.jsx
      AICompanionCard.jsx
      overview/
        CareerSnapshotCard.jsx
        CareerActionList.jsx
        CareerSignalTimeline.jsx
        TopCareerPathsCard.jsx
        SkillGapAnalysisCard.jsx
        ApplicationTrackerCard.jsx
        RecentCareerMemoryCard.jsx
        ResearchInterestsCard.jsx
        RecommendedForYouCard.jsx
        AICareerInsightCard.jsx
        BottomAIInputBar.jsx
    memory/
      ExperienceInput.jsx
      ExperienceTimeline.jsx
      ExperienceCard.jsx
      ProfileSummaryCard.jsx
      TopSkillsCard.jsx
      MemoryAIInsightCard.jsx
      EvidenceIntegrityCard.jsx
    career/
      CareerPathDetail.jsx
      MarketStanding.jsx
      ReadinessGauge.jsx
      RoadmapStepper.jsx
      network/
        CareerPathNetworkGraph.jsx
        CareerGraphNode.jsx
        GraphConnection.jsx
        CareerGraphLegend.jsx
        CareerGraphFilter.jsx
        CareerGraphControls.jsx
        CareerGraphTooltip.jsx
    opportunities/
    employer/
    university/
  pages/
    LandingPage.jsx
    CandidateOverviewPage.jsx
    MemoryProfilePage.jsx
    CareerIntelligencePage.jsx
    OpportunitiesPage.jsx
    EmployerWorkspacePage.jsx
    CandidateInsightsPage.jsx
    EmployerCreateEngagementPage.jsx
    CurriculumMarketAlignmentPage.jsx
    StudentReadinessOverviewPage.jsx
    SocietyCorporateMarketplacePage.jsx
  data/
    mockData.js
    mockAi.js
  store/
    useCareerStore.js
```

---

## 10. Layout System Rules

The app uses `AppLayout` for workspace pages.

Layout principles:

- Sidebar remains fixed/static on desktop and laptop when space allows.
- Main content owns the remaining width.
- Main content scrolls independently.
- Use `min-w-0` on flex/grid children.
- Avoid large page-level fixed widths.
- Avoid page-level `max-w-7xl` wrappers unless the content truly needs reading-width constraints.
- Use responsive gutters: smaller on laptop, more spacious on large desktop.
- Right panels should collapse below main content when width is limited.
- Cards should wrap or resize, not overflow.

Student sidebar:

- Uses the warm CareerOS treatment.
- Should not consume too much width on smaller laptops.
- On tablet and mobile, use the top mobile nav instead of forcing the full sidebar.

Employer and university sidebars:

- Can be simpler and denser.
- Should still obey the same responsive shell rules.

---

## 11. Responsive Design And Viewport Rules

Responsiveness is a core requirement, not a final polish step.

The app must look stable across:

- standard laptops
- smaller laptops
- large desktop monitors
- tablets / iPad sizes
- mobile screens

Important issue to avoid:

Do not design pages only based on a large desktop monitor. A layout that looks fine on a wide monitor may break, overflow, or feel cramped on a normal laptop screen.

### Desktop And Laptop Rules

- Use responsive width constraints such as `max-w`, `min-w-0`, `w-full`, and flexible grids.
- Avoid hardcoded large pixel widths unless absolutely necessary.
- Avoid layouts that depend on one specific screen size.
- Main content should adapt gracefully between large monitor and standard laptop width.
- Cards should wrap or resize instead of overflowing.
- Right-side panels should collapse or stack when space is limited.
- Long content should scroll inside the main page, not push the whole layout out of alignment.
- Sidebar should remain fixed/sticky, but the main content must calculate available width correctly.
- Use `overflow-hidden`, `overflow-x-auto`, or `min-w-0` where needed to prevent horizontal page overflow.

### Breakpoint Expectations

Use Tailwind responsive breakpoints intentionally:

- `sm`: mobile-large
- `md`: tablet
- `lg`: laptop
- `xl`: desktop
- `2xl`: large monitor

The default design should work well on normal laptop size first, not only on large desktop screens.

### Layout Testing Requirement

Before considering any page complete, test it at these viewport sizes:

- 390px width: mobile
- 768px width: tablet / iPad portrait
- 1024px width: small laptop / iPad landscape
- 1366px width: standard laptop
- 1440px width: common desktop
- 1920px width: large monitor

The layout must not:

- create unwanted horizontal scrolling
- hide important buttons
- overlap cards
- push right panels outside the screen
- make text unreadably small
- make cards too compressed
- break sidebar alignment

### Page-Specific Rules

For dashboard-style pages:

- Use responsive grid columns.
- Mobile should be 1 column.
- Tablet can be 2 columns.
- Laptop and desktop can be 3 or 4 columns depending on content.
- Right-side insight panels should move below main content on smaller screens.

For graph or visualization pages:

- The graph container should be responsive.
- Use relative positioning based on percentage values, not fixed pixel-only positioning.
- SVG lines should scale with the container.
- Graph should have a minimum usable height but should not force the whole page to overflow horizontally.
- On smaller screens, provide scroll/zoom behavior or simplified stacked layout.

For sidebar:

- On desktop/laptop, sidebar can remain fixed.
- On tablet/mobile, sidebar should collapse into a drawer, top menu, or compact navigation.
- Do not let the fixed sidebar consume too much space on smaller screens.

### Codex Instruction

Whenever generating or editing UI code, always check responsive behavior as part of the task.

After making UI changes, inspect and improve:

- container widths
- grid breakpoints
- sidebar behavior
- right panel collapse behavior
- card wrapping
- text truncation
- overflow handling
- graph scaling

Do not mark the task as complete until the page works properly on standard laptop size, not only on a large desktop monitor.

---

## 12. Component Architecture Rules

Use feature folders:

- `student/overview` for Candidate Overview cards
- `memory` for Career Memory components
- `career` for Career Intelligence
- `career/network` for graph-specific components
- `opportunities` for Opportunity Marketplace
- `employer` for Employer Workspace
- `university` for University Workspace

Component expectations:

- Components should accept props instead of importing data unless they are high-level page sections.
- Keep mock data imports mostly in pages or container components.
- Small presentational components should be easy to reuse.
- Avoid component names that only make sense for one temporary mock if they represent a reusable pattern.

---

## 13. Mock Data And Backend Philosophy

During hackathon development:

- use `src/data/mockData.js`
- use `src/data/mockAi.js`
- simulate AI and backend behavior
- focus on demo experience over infrastructure

Future backend workflow:

1. Validate frontend skeleton.
2. Keep mock data as response-shape examples.
3. Define API contracts.
4. Add API helpers or hooks.
5. Replace mock data page by page.

Do not build backend complexity before the product story is clear.

---

## 14. Demo Storytelling Priorities

Judges and teammates should understand the product within 30 seconds.

Demo story:

1. Student builds career memory from real experiences.
2. AI extracts evidence and skills.
3. CareerOS shows readiness and career paths.
4. The graph reveals unlockable opportunities.
5. Opportunities help create more evidence.
6. Employers use evidence-backed signals.
7. Universities align curriculum and society collaborations with market needs.

Every screen should visually communicate:

- evidence
- intelligence
- progression
- trust
- action

The demo should feel like:

> An AI-powered Career Operating System.

Not:

> A student management system.

---

## 15. Team Working Style

Product direction:

- Keep the product career-focused.
- Prioritize user clarity over feature volume.
- Validate visual changes against the CareerOS design language.

Engineering direction:

- Codex may generate code.
- Team members must understand the code before merging.
- Do not accept generated code that changes scope unexpectedly.
- If a generated result is unclear, ask for explanation before continuing.

QA direction:

- Test role selection.
- Test Candidate Overview.
- Test Career Memory add-experience flow.
- Test Career Intelligence graph interactions.
- Test Opportunity filters and detail panel.
- Test Employer and University demo flows.
- Test responsive layout at required viewport sizes.

Final principle:

> Cut scope aggressively, polish what remains, and make the story unmistakable.
