// Mock data for the redesigned Employer Workspace Home page (src/pages/EmployerHome.jsx).
// No backend — every value here is static demo content.

export const employerUser = {
  name: 'Edwin Khoo',
  company: 'Acme Corporation',
  initials: 'EK',
  greeting: 'Good morning, Edwin',
  briefingDate: 'Thursday, 15 May 2025',
}

export const briefingBoxes = [
  {
    id: 'roles-at-risk',
    icon: 'shield',
    tone: 'red',
    label: 'Roles at risk',
    value: '2',
    detail: 'Software Engineering Intern, Data Analyst Intern',
    footer: 'At risk due to pipeline drop-off',
  },
  {
    id: 'candidates-needing-action',
    icon: 'user',
    tone: 'orange',
    label: 'Top candidates needing action',
    value: '5',
    detail: 'Highly-fit candidates are waiting for your next step',
    link: 'Review candidates',
  },
  {
    id: 'event-performance',
    icon: 'calendar',
    tone: 'blue',
    label: 'Event performance',
    value: '4',
    detail: 'Events completed this month',
    footer: '▲ 18% vs last month',
    footerTone: 'green',
  },
  {
    id: 'bottlenecks',
    icon: 'hourglass',
    tone: 'purple',
    label: 'Bottlenecks',
    value: '2',
    detail: 'Feedback pending, interviews awaiting scheduling',
    link: 'View bottlenecks',
  },
]

export const leadershipSnapshot = {
  label: 'Leadership snapshot',
  rows: [
    { label: 'Time to fill (avg)', value: '28 days', delta: '▼ 12%', deltaTone: 'green' },
    { label: 'Quality of hire (pred.)', value: '87%', delta: '▲ 5%', deltaTone: 'green' },
    { label: 'Offer acceptance', value: '92%', delta: '▲ 6%', deltaTone: 'green' },
  ],
  progressLabel: 'Hiring progress',
  progress: 70,
  link: 'See full analytics',
}

export const metricsPills = [
  { id: 'time-to-fill', icon: 'clock', label: 'Time to fill (avg)', value: '28 days', delta: '▼ 12% vs last 30 days', deltaTone: 'red' },
  { id: 'quality-of-hire', icon: 'star', label: 'Quality of hire (pred.)', value: '87%', delta: '▲ 5% vs last 30 days', deltaTone: 'green', info: true },
  { id: 'offer-acceptance', icon: 'check', label: 'Offer acceptance', value: '92%', delta: '▲ 6% vs last 30 days', deltaTone: 'green', info: true },
  { id: 'shortlisted', icon: 'people', label: 'Shortlisted this week', value: '34', delta: '▲ 21% vs last week', deltaTone: 'green', info: true },
  { id: 'event-roi', icon: 'chart', label: 'Event ROI (this month)', value: '4.6x', delta: '▲ 0.9x vs last month', deltaTone: 'green', info: true },
]

export const topCandidates = [
  {
    id: 'ivan-lim',
    name: 'Ivan Lim',
    university: "Taylor's University",
    role: 'Software Engineering Intern',
    match: 96,
    matchLabel: 'High match',
    matchTone: 'green',
    tags: ['Full-stack dev', 'Hackathon winner', 'Fast learner'],
    risk: { level: 'medium', text: 'Considering other offers' },
    validatedNext: 'Strong design problem solving',
  },
  {
    id: 'nur-alya',
    name: 'Nur Alya Binti',
    university: 'APU',
    role: 'Data Analyst Intern',
    match: 92,
    matchLabel: 'High match',
    matchTone: 'green',
    tags: ['SQL & Python', 'Data storytelling', 'Analytics projects'],
    risk: { level: 'low', text: 'Low in keeping commitment' },
    validatedNext: 'Advanced SQL, dashboard',
  },
  {
    id: 'marcus-tan',
    name: 'Marcus Tan',
    university: 'Sunway University',
    role: 'Software Engineering Intern',
    match: 89,
    matchLabel: 'Strong match',
    matchTone: 'blue',
    tags: ['Backend dev', 'API design', 'Open source'],
    risk: { level: 'medium', text: 'Graded school applications' },
    validatedNext: 'Technical deep dive interview',
  },
]

export const campusFunnel = [
  { label: 'Invited', value: 12842 },
  { label: 'Viewed', value: 6314, conversion: '49.2%' },
  { label: 'Registered', value: 3812, conversion: '60.4%' },
  { label: 'Attended', value: 1942, conversion: '51.0%' },
  { label: 'Applied', value: 683, conversion: '35.2%' },
  { label: 'Shortlisted', value: 214, conversion: '31.3%' },
  { label: 'Interviewed', value: 98, conversion: '45.5%' },
  { label: 'Hired', value: 26, conversion: '26.5%' },
]

export const campusFunnelSummary = {
  conversionRate: '0.20%',
  eventsRoi: '4.6x',
}

export const opportunityRadar = {
  badge: 'AI recommendation',
  subtitle: 'Proactive engagement recommendations based on hiring demand and campus talent availability',
  body:
    "CareerOS detected a likely IT talent need in the next 3 months. Based on your hiring pattern and campus talent availability, Taylor's, APU, and Sunway are strong engagement opportunities. A strong pool of high-fit candidates is becoming available between June and August, especially in backend engineering, data, and analytics. Recommended next move: launch a targeted campus engagement now to warm candidates before the hiring cycle begins.",
  rows: [
    { icon: 'forecast', label: 'Demand forecast', value: 'IT hiring likely to rise in ~3 months' },
    { icon: 'building', label: 'Campus availability', value: "Taylor's, APU, Sunway · June–August" },
    { icon: 'people', label: 'Talent quality', value: '42 high-fit candidates with strong project evidence' },
    { icon: 'sparkle', label: 'Recommended engagement', value: 'Backend workshop or AI/Data challenge' },
  ],
}

export const actionQueue = [
  {
    id: 'action-1',
    icon: 'clock',
    tone: 'orange',
    text: '3 shortlisted interns likely to accept if contacted today',
    pill: 'High impact',
    pillTone: 'green',
  },
  {
    id: 'action-2',
    icon: 'zap',
    tone: 'yellow',
    text: '2 high-fit candidates with expiring availability windows',
    pill: 'Time sensitive',
    pillTone: 'orange',
  },
  {
    id: 'action-3',
    icon: 'flag',
    tone: 'red',
    text: '1 requisition at risk because feedback is late',
    pill: 'At risk',
    pillTone: 'red',
  },
  {
    id: 'action-4',
    icon: 'chart',
    tone: 'blue',
    text: 'Challenge sign-ups high but qualified conversion low',
    pill: 'Needs attention',
    pillTone: 'blue',
  },
  {
    id: 'action-5',
    icon: 'people',
    tone: 'green',
    text: '12 strong candidates rediscovered from previous events',
    pill: 'Easy win',
    pillTone: 'green',
  },
]

export const employerNavTabs = [
  { label: 'Home', to: '/employer/home', icon: 'home' },
  { label: 'Talent Discovery', to: '/employer/talent-discovery', icon: 'pipeline' },
  { label: 'Candidates', to: '/employer/candidates', icon: 'people' },
  { label: 'Engagement', to: '/employer/posting', icon: 'campaign' },
  { label: 'Campus Pipeline', to: '/employer/campus-pipeline', icon: 'school' },
  { label: 'Analytics', to: '/employer/analytics', icon: 'analytics' },
]
