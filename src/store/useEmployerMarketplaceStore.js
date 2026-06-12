import { create } from 'zustand';
import { employerTalentWorkspace } from '../data/mockData';

const initialOpportunities = [
  {
    id: 'opp-001',
    title: 'Data Analyst Intern',
    company: 'Google',
    type: 'Internship',
    location: 'Hybrid',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    openings: 2,
    summary: 'Analyze consumer product growth, build sales/retention dashboards, and present findings to leadership.',
    requiredSkills: ['SQL', 'Analytics', 'Dashboard'],
    preferredSkills: ['Python', 'Tableau'],
    experienceLevel: 'Undergraduate',
    education: "Bachelor's in Data Science, Computer Science, or Business",
    deadline: '2026-07-31',
    startDate: '2026-09-01',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: ['What is your experience with SQL and dashboard creation?', 'How many months are you available?'],
    applicantsCount: 4,
    averageMatch: 84,
    status: 'Active',
    weights: { skill: 40, project: 20, softSkill: 20, leadership: 10, academic: 5, interest: 5 }
  },
  {
    id: 'opp-002',
    title: 'Frontend Engineer Associate',
    company: 'Google',
    type: 'Full-Time',
    location: 'On-site',
    city: 'Petaling Jaya',
    country: 'Malaysia',
    openings: 1,
    summary: 'Build responsive web experiences using React, compile clean component suites, and optimize performance.',
    requiredSkills: ['React', 'JavaScript'],
    preferredSkills: ['TypeScript', 'Testing'],
    experienceLevel: 'Entry Level',
    education: "Bachelor's in Computer Science or Software Engineering",
    deadline: '2026-08-15',
    startDate: '2026-10-01',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: ['Describe a complex React UI you built.', 'Are you willing to work on-site in PJ?'],
    applicantsCount: 2,
    averageMatch: 89,
    status: 'Active',
    weights: { skill: 50, project: 15, softSkill: 15, leadership: 10, academic: 5, interest: 5 }
  },
  {
    id: 'opp-003',
    title: 'Growth Operations Intern',
    company: 'Google',
    type: 'Internship',
    location: 'Remote',
    city: 'Subang Jaya',
    country: 'Malaysia',
    openings: 1,
    summary: 'Optimize outbound CRM sequences, track customer growth funnels, and construct reports.',
    requiredSkills: ['CRM', 'Reporting'],
    preferredSkills: ['Automation', 'Excel'],
    experienceLevel: 'Undergraduate',
    education: "Bachelor's in Marketing, Business, or Analytics",
    deadline: '2026-07-20',
    startDate: '2026-08-15',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: ['Do you have experience setting up automated email flows?', 'Detail your familiarity with HubSpot/Salesforce.'],
    applicantsCount: 0,
    averageMatch: 0,
    status: 'Draft',
    weights: { skill: 30, project: 20, softSkill: 25, leadership: 10, academic: 5, interest: 10 }
  },
  {
    id: 'opp-004',
    title: 'Product Manager Graduate Associate',
    company: 'Google',
    type: 'Graduate Program',
    location: 'Hybrid',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    openings: 1,
    summary: 'Lead cross-functional product alignments, research competitor offerings, and deliver scoping specs.',
    requiredSkills: ['Product Thinking', 'Stakeholder Communication'],
    preferredSkills: ['Figma', 'Agile'],
    experienceLevel: 'Entry Level',
    education: "Bachelor's or Master's in Business, CS, or Design",
    deadline: '2026-05-30',
    startDate: '2026-07-01',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: [],
    applicantsCount: 1,
    averageMatch: 92,
    status: 'Closed',
    weights: { skill: 30, project: 30, softSkill: 20, leadership: 10, academic: 5, interest: 5 }
  },
  {
    id: 'opp-005',
    title: 'UX/UI Design Associate',
    company: 'Google',
    type: 'Full-Time',
    location: 'Hybrid',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    openings: 1,
    summary: 'Collaborate with product managers and engineers to design beautiful, user-centered flows for web and mobile dashboards.',
    requiredSkills: ['Figma', 'User Research'],
    preferredSkills: ['Wireframing', 'Communication'],
    experienceLevel: 'Entry Level',
    education: "Bachelor's or Diploma in Design, HCI, or related fields",
    deadline: '2026-08-30',
    startDate: '2026-10-01',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: ['Link your portfolio.', 'What is your UX research process?'],
    applicantsCount: 2,
    averageMatch: 81,
    status: 'Active',
    weights: { skill: 30, project: 30, softSkill: 20, leadership: 10, academic: 5, interest: 5 }
  },
  {
    id: 'opp-006',
    title: 'AI/ML Engineer Intern',
    company: 'Google',
    type: 'Internship',
    location: 'Remote',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    openings: 2,
    summary: 'Assist the AI core team in training custom recommendation models, refining matching logic, and evaluating prompt traces.',
    requiredSkills: ['Python', 'Machine Learning'],
    preferredSkills: ['SQL', 'NLP'],
    experienceLevel: 'Undergraduate',
    education: "Bachelor's or Master's in Computer Science, Data Science, or AI",
    deadline: '2026-07-15',
    startDate: '2026-08-01',
    applicationMethod: 'Apply Through CareerOS',
    screeningQuestions: ['What ML packages are you most comfortable with?', 'Have you worked on NLP models?'],
    applicantsCount: 3,
    averageMatch: 92,
    status: 'Active',
    weights: { skill: 45, project: 25, softSkill: 15, leadership: 5, academic: 5, interest: 5 }
  }
];

const initialPipelineApplications = {
  'opp-001': [
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'alyssa-tan'), stage: 'Shortlisted' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'daniel-lim'), stage: 'Applied' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'mei-wong'), stage: 'Interviewing' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'hakim-ridwan'), stage: 'Applied' }
  ],
  'opp-002': [
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'daniel-lim'), stage: 'Interviewing' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'alyssa-tan'), stage: 'Applied' }
  ],
  'opp-003': [],
  'opp-004': [
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'alyssa-tan'), stage: 'Offer' }
  ],
  'opp-005': [
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'alyssa-tan'), stage: 'Applied' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'mei-wong'), stage: 'Interviewing' }
  ],
  'opp-006': [
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'alyssa-tan'), stage: 'Shortlisted' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'daniel-lim'), stage: 'Applied' },
    { ...employerTalentWorkspace.candidates.find(c => c.id === 'hakim-ridwan'), stage: 'Shortlisted' }
  ]
};

export const useEmployerMarketplaceStore = create((set) => ({
  opportunities: initialOpportunities,
  pipelineApplications: initialPipelineApplications,

  addOpportunity: (newOpp) => set((state) => {
    const id = `opp-${String(state.opportunities.length + 1).padStart(3, '0')}`;
    const formattedOpp = {
      ...newOpp,
      id,
      company: 'Google',
      applicantsCount: 0,
      averageMatch: 0,
    };
    return {
      opportunities: [formattedOpp, ...state.opportunities],
      pipelineApplications: {
        ...state.pipelineApplications,
        [id]: []
      }
    };
  }),

  updatePipelineCandidates: (opportunityId, updatedList) => set((state) => {
    const updatedPipeline = {
      ...state.pipelineApplications,
      [opportunityId]: updatedList
    };

    const updatedOpps = state.opportunities.map(opp => {
      if (opp.id === opportunityId) {
        const count = updatedList.length;
        const avgMatch = count > 0 
          ? Math.round(updatedList.reduce((sum, c) => sum + (c.match || c.matchScore || 0), 0) / count)
          : 0;
        return {
          ...opp,
          applicantsCount: count,
          averageMatch: avgMatch
        };
      }
      return opp;
    });

    return {
      pipelineApplications: updatedPipeline,
      opportunities: updatedOpps
    };
  }),
}));
