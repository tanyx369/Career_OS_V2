import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── Mock Data per Program ────────────────────────────────────────────────────

const programData = {
  'BSc Computer Science': {
    cohorts: ['Year 1', 'Year 2', 'Year 3'],
    semesters: ['This Semester', 'Last Semester', 'Last Year'],
    aiInsight:
      'Your program excels in core technical skills, but significant gaps in Cloud and MLOps are limiting graduate readiness for high-demand software and AI roles.',
    potentialImpact: '+14%',
    strengths: ['Python', 'SQL', 'Data Analysis'],
    weaknesses: ['Cloud Deployment', 'MLOps', 'Product Thinking'],
    interventions: [
      { title: 'Cloud Workshop Series', impact: 'High Impact', duration: '8-12 weeks', tone: 'blue' },
      { title: 'AWS Educate Partnership', impact: 'High Impact', duration: 'Ongoing', tone: 'violet' },
      { title: 'AI Society Hackathon', impact: 'Medium Impact', duration: '1-2 weeks', tone: 'amber' },
      { title: 'MLOps Short Course', impact: 'Medium Impact', duration: '4 weeks', tone: 'emerald' },
    ],
    advisorFocus: [
      { title: 'Cloud competencies', impact: 'High Impact', students: '62 students', tone: 'blue' },
      { title: 'MLOps fundamentals', impact: 'Medium Impact', students: '48 students', tone: 'violet' },
      { title: 'Product thinking', impact: 'Medium Impact', students: '40 students', tone: 'amber' },
    ],
    cohortData: {
      'Year 1': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '65%', status: 'Fair', change: '+3%', tone: 'blue', helper: 'Foundational skills building. Core CS modules underway.' },
            { label: 'Graduate Readiness Score', value: '58%', status: 'Fair', change: '+4%', tone: 'violet', helper: 'Early-stage readiness. Python and fundamentals in progress.' },
            { label: 'Students at Risk', value: '28', status: '8% of cohort', change: '+2', tone: 'rose', helper: 'Primarily programming fundamentals concerns.' },
            { label: 'Top Emerging Gap', value: 'Algorithms', status: 'Medium demand', change: 'Low coverage', tone: 'amber', helper: 'Critical foundation for later technical roles.' },
            { label: 'Data Confidence', value: 'Low', status: '32% coverage', change: 'Student data', tone: 'emerald', helper: 'Early cohort; limited profile signals available.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 60, gap: -32, priority: 'High' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 45, gap: -43, priority: 'High' },
            { rank: 3, skill: 'Data Structures', demand: 85, coverage: 55, gap: -30, priority: 'High' },
            { rank: 4, skill: 'Algorithms', demand: 82, coverage: 40, gap: -42, priority: 'High' },
            { rank: 5, skill: 'Web Development', demand: 70, coverage: 30, gap: -40, priority: 'High' },
            { rank: 6, skill: 'Cloud Deployment', demand: 76, coverage: 10, gap: -66, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 8, gap: -66, priority: 'High' },
            { rank: 8, skill: 'Networking Basics', demand: 50, coverage: 35, gap: -15, priority: 'Medium' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '62%', status: 'Fair', change: '+1%', tone: 'blue', helper: 'Alignment improving as fundamentals take hold.' },
            { label: 'Graduate Readiness Score', value: '54%', status: 'Fair', change: '+2%', tone: 'violet', helper: 'Building foundations. Python intro just completed.' },
            { label: 'Students at Risk', value: '34', status: '10% of cohort', change: '+4', tone: 'rose', helper: 'Higher risk in first semester as students adjust.' },
            { label: 'Top Emerging Gap', value: 'Python Basics', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Most students still learning syntax fundamentals.' },
            { label: 'Data Confidence', value: 'Very Low', status: '18% coverage', change: 'Student data', tone: 'emerald', helper: 'Minimal profile data available at program start.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 42, gap: -50, priority: 'High' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 30, gap: -58, priority: 'High' },
            { rank: 3, skill: 'Data Structures', demand: 85, coverage: 36, gap: -49, priority: 'High' },
            { rank: 4, skill: 'Algorithms', demand: 82, coverage: 28, gap: -54, priority: 'High' },
            { rank: 5, skill: 'Web Development', demand: 70, coverage: 20, gap: -50, priority: 'High' },
            { rank: 6, skill: 'Cloud Deployment', demand: 76, coverage: 5, gap: -71, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 3, gap: -71, priority: 'High' },
            { rank: 8, skill: 'Networking Basics', demand: 50, coverage: 22, gap: -28, priority: 'Medium' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '60%', status: 'Fair', change: '0%', tone: 'blue', helper: 'Baseline alignment for incoming CS cohort.' },
            { label: 'Graduate Readiness Score', value: '52%', status: 'Fair', change: '0%', tone: 'violet', helper: 'Baseline readiness at program entry.' },
            { label: 'Students at Risk', value: '36', status: '11% of cohort', change: '0', tone: 'rose', helper: 'Baseline risk profile for Year 1 cohort.' },
            { label: 'Top Emerging Gap', value: 'Python Basics', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent pattern in incoming Year 1 cohorts.' },
            { label: 'Data Confidence', value: 'Very Low', status: '15% coverage', change: 'Student data', tone: 'emerald', helper: 'Minimal data at program entry for previous cohort.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 90, coverage: 38, gap: -52, priority: 'High' },
            { rank: 2, skill: 'SQL', demand: 86, coverage: 26, gap: -60, priority: 'High' },
            { rank: 3, skill: 'Data Structures', demand: 83, coverage: 30, gap: -53, priority: 'High' },
            { rank: 4, skill: 'Algorithms', demand: 80, coverage: 22, gap: -58, priority: 'High' },
            { rank: 5, skill: 'Web Development', demand: 68, coverage: 18, gap: -50, priority: 'High' },
            { rank: 6, skill: 'Cloud Deployment', demand: 72, coverage: 4, gap: -68, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 70, coverage: 2, gap: -68, priority: 'High' },
            { rank: 8, skill: 'Networking Basics', demand: 48, coverage: 18, gap: -30, priority: 'Medium' },
          ],
        },
      },
      'Year 2': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '70%', status: 'Good', change: '+5%', tone: 'blue', helper: 'Strong improvement as core CS skills solidify.' },
            { label: 'Graduate Readiness Score', value: '67%', status: 'Good', change: '+5%', tone: 'violet', helper: 'Readiness growing steadily with applied projects.' },
            { label: 'Students at Risk', value: '44', status: '13% of cohort', change: '+3', tone: 'rose', helper: 'Risk concentrated in database and systems topics.' },
            { label: 'Top Emerging Gap', value: 'Cloud & Systems', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Systems architecture courses not yet introduced.' },
            { label: 'Data Confidence', value: 'Medium', status: '52% coverage', change: 'Student data', tone: 'emerald', helper: 'Growing profile data from project submissions.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 78, gap: -14, priority: 'Low' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 70, gap: -18, priority: 'Medium' },
            { rank: 3, skill: 'Data Structures', demand: 85, coverage: 74, gap: -11, priority: 'Low' },
            { rank: 4, skill: 'Algorithms', demand: 82, coverage: 68, gap: -14, priority: 'Low' },
            { rank: 5, skill: 'Web Development', demand: 70, coverage: 55, gap: -15, priority: 'Medium' },
            { rank: 6, skill: 'Cloud Deployment', demand: 76, coverage: 22, gap: -54, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 14, gap: -60, priority: 'High' },
            { rank: 8, skill: 'System Design', demand: 62, coverage: 30, gap: -32, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '67%', status: 'Good', change: '+3%', tone: 'blue', helper: 'Alignment improving as data modules complete.' },
            { label: 'Graduate Readiness Score', value: '63%', status: 'Fair', change: '+3%', tone: 'violet', helper: 'Steady growth with first internship preparation.' },
            { label: 'Students at Risk', value: '48', status: '14% of cohort', change: '+2', tone: 'rose', helper: 'Elevated risk near semester transition.' },
            { label: 'Top Emerging Gap', value: 'Cloud & Systems', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Cloud modules not yet introduced in Year 2.' },
            { label: 'Data Confidence', value: 'Medium', status: '46% coverage', change: 'Student data', tone: 'emerald', helper: 'Coverage growing from first-year project signals.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 72, gap: -20, priority: 'Medium' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 64, gap: -24, priority: 'Medium' },
            { rank: 3, skill: 'Data Structures', demand: 85, coverage: 68, gap: -17, priority: 'Medium' },
            { rank: 4, skill: 'Algorithms', demand: 82, coverage: 60, gap: -22, priority: 'Medium' },
            { rank: 5, skill: 'Web Development', demand: 70, coverage: 48, gap: -22, priority: 'Medium' },
            { rank: 6, skill: 'Cloud Deployment', demand: 76, coverage: 16, gap: -60, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 10, gap: -64, priority: 'High' },
            { rank: 8, skill: 'System Design', demand: 62, coverage: 24, gap: -38, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '64%', status: 'Fair', change: '+2%', tone: 'blue', helper: 'Historical alignment for Year 2 cohort last year.' },
            { label: 'Graduate Readiness Score', value: '60%', status: 'Fair', change: '+2%', tone: 'violet', helper: 'Year 2 readiness baseline from prior cohort.' },
            { label: 'Students at Risk', value: '50', status: '15% of cohort', change: '+1', tone: 'rose', helper: 'Historical risk for Year 2 last year.' },
            { label: 'Top Emerging Gap', value: 'Databases & Cloud', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent gap pattern across Year 2 cohorts.' },
            { label: 'Data Confidence', value: 'Low', status: '40% coverage', change: 'Student data', tone: 'emerald', helper: 'Prior cohort historical signal coverage.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 90, coverage: 68, gap: -22, priority: 'Medium' },
            { rank: 2, skill: 'SQL', demand: 86, coverage: 58, gap: -28, priority: 'Medium' },
            { rank: 3, skill: 'Data Structures', demand: 83, coverage: 62, gap: -21, priority: 'Medium' },
            { rank: 4, skill: 'Algorithms', demand: 80, coverage: 55, gap: -25, priority: 'Medium' },
            { rank: 5, skill: 'Web Development', demand: 68, coverage: 40, gap: -28, priority: 'Medium' },
            { rank: 6, skill: 'Cloud Deployment', demand: 72, coverage: 12, gap: -60, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 70, coverage: 8, gap: -62, priority: 'High' },
            { rank: 8, skill: 'System Design', demand: 60, coverage: 18, gap: -42, priority: 'High' },
          ],
        },
      },
      'Year 3': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '76%', status: 'Good', change: '+8%', tone: 'blue', helper: 'Core program skills remain aligned with employer demand.' },
            { label: 'Graduate Readiness Score', value: '74%', status: 'Good', change: '+6%', tone: 'violet', helper: 'Readiness improved after analytics and Python reinforcement.' },
            { label: 'Students at Risk', value: '62', status: '18% of cohort', change: '+5', tone: 'rose', helper: 'Mostly concentrated around cloud deployment readiness.' },
            { label: 'Top Emerging Gap', value: 'Cloud & MLOps', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Priority gap for software, data, and AI roles.' },
            { label: 'Data Confidence', value: 'High', status: '68% coverage', change: 'Student data', tone: 'emerald', helper: 'Based on 68% student profile and course coverage signals.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 88, gap: -4, priority: 'Low' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 82, gap: -6, priority: 'Low' },
            { rank: 3, skill: 'Data Analysis', demand: 85, coverage: 80, gap: -5, priority: 'Low' },
            { rank: 4, skill: 'AI / ML Basics', demand: 70, coverage: 75, gap: 5, priority: 'Low' },
            { rank: 5, skill: 'Cloud Deployment', demand: 76, coverage: 38, gap: -38, priority: 'High' },
            { rank: 6, skill: 'MLOps', demand: 74, coverage: 26, gap: -48, priority: 'High' },
            { rank: 7, skill: 'Product Analytics', demand: 58, coverage: 30, gap: -28, priority: 'Medium' },
            { rank: 8, skill: 'Power BI', demand: 42, coverage: 42, gap: 0, priority: 'Medium' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '72%', status: 'Good', change: '+5%', tone: 'blue', helper: 'Solid alignment as students complete advanced modules.' },
            { label: 'Graduate Readiness Score', value: '70%', status: 'Good', change: '+4%', tone: 'violet', helper: 'Readiness building ahead of final year.' },
            { label: 'Students at Risk', value: '57', status: '17% of cohort', change: '+3', tone: 'rose', helper: 'Risk concentrated in cloud and deployment topics.' },
            { label: 'Top Emerging Gap', value: 'Cloud & MLOps', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent gap pattern heading into final year.' },
            { label: 'Data Confidence', value: 'High', status: '64% coverage', change: 'Student data', tone: 'emerald', helper: 'Strong profile data from projects and assessments.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 92, coverage: 84, gap: -8, priority: 'Low' },
            { rank: 2, skill: 'SQL', demand: 88, coverage: 78, gap: -10, priority: 'Low' },
            { rank: 3, skill: 'Data Analysis', demand: 85, coverage: 75, gap: -10, priority: 'Low' },
            { rank: 4, skill: 'AI / ML Basics', demand: 70, coverage: 68, gap: -2, priority: 'Low' },
            { rank: 5, skill: 'Cloud Deployment', demand: 76, coverage: 30, gap: -46, priority: 'High' },
            { rank: 6, skill: 'MLOps', demand: 74, coverage: 20, gap: -54, priority: 'High' },
            { rank: 7, skill: 'Product Analytics', demand: 58, coverage: 26, gap: -32, priority: 'Medium' },
            { rank: 8, skill: 'Power BI', demand: 42, coverage: 38, gap: -4, priority: 'Low' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '68%', status: 'Good', change: '+4%', tone: 'blue', helper: 'Prior cohort Year 3 alignment benchmark.' },
            { label: 'Graduate Readiness Score', value: '66%', status: 'Good', change: '+3%', tone: 'violet', helper: 'Prior cohort readiness at Year 3 stage.' },
            { label: 'Students at Risk', value: '58', status: '17% of cohort', change: '+2', tone: 'rose', helper: 'Consistent risk pattern across Year 3 cohorts.' },
            { label: 'Top Emerging Gap', value: 'Cloud & MLOps', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Persistent gap across multiple Year 3 cohorts.' },
            { label: 'Data Confidence', value: 'High', status: '60% coverage', change: 'Student data', tone: 'emerald', helper: 'Historical Year 3 signal coverage.' },
          ],
          skills: [
            { rank: 1, skill: 'Python', demand: 90, coverage: 80, gap: -10, priority: 'Low' },
            { rank: 2, skill: 'SQL', demand: 86, coverage: 74, gap: -12, priority: 'Low' },
            { rank: 3, skill: 'Data Analysis', demand: 83, coverage: 70, gap: -13, priority: 'Low' },
            { rank: 4, skill: 'AI / ML Basics', demand: 68, coverage: 60, gap: -8, priority: 'Low' },
            { rank: 5, skill: 'Cloud Deployment', demand: 72, coverage: 24, gap: -48, priority: 'High' },
            { rank: 6, skill: 'MLOps', demand: 70, coverage: 16, gap: -54, priority: 'High' },
            { rank: 7, skill: 'Product Analytics', demand: 55, coverage: 22, gap: -33, priority: 'High' },
            { rank: 8, skill: 'Power BI', demand: 40, coverage: 34, gap: -6, priority: 'Low' },
          ],
        },
      },
    },
  },

  'BSc Data Science': {
    cohorts: ['Year 1', 'Year 2', 'Year 3'],
    semesters: ['This Semester', 'Last Semester', 'Last Year'],
    aiInsight:
      'Your Data Science program has a strong statistics and Python foundation. The critical gaps are in production ML deployment (MLOps) and real-world data engineering pipelines — skills increasingly required by top hiring companies.',
    potentialImpact: '+18%',
    strengths: ['Statistics', 'Python', 'Machine Learning'],
    weaknesses: ['MLOps', 'Data Engineering', 'Cloud Platforms'],
    interventions: [
      { title: 'MLOps Bootcamp', impact: 'High Impact', duration: '6-8 weeks', tone: 'blue' },
      { title: 'Data Engineering Pipeline Lab', impact: 'High Impact', duration: '4 weeks', tone: 'violet' },
      { title: 'Kaggle Competition Programme', impact: 'Medium Impact', duration: 'Ongoing', tone: 'amber' },
      { title: 'Cloud ML Platform Workshop', impact: 'Medium Impact', duration: '3 weeks', tone: 'emerald' },
    ],
    advisorFocus: [
      { title: 'MLOps & model deployment', impact: 'High Impact', students: '54 students', tone: 'blue' },
      { title: 'Data Engineering pipelines', impact: 'High Impact', students: '46 students', tone: 'violet' },
      { title: 'Business communication of insights', impact: 'Medium Impact', students: '38 students', tone: 'amber' },
    ],
    cohortData: {
      'Year 1': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '68%', status: 'Good', change: '+4%', tone: 'blue', helper: 'Early DS cohort building strong stats and Python base.' },
            { label: 'Graduate Readiness Score', value: '60%', status: 'Fair', change: '+3%', tone: 'violet', helper: 'Foundation-stage readiness. Maths and stats in focus.' },
            { label: 'Students at Risk', value: '22', status: '7% of cohort', change: '+1', tone: 'rose', helper: 'Risk mainly around linear algebra and calculus modules.' },
            { label: 'Top Emerging Gap', value: 'Programming Skills', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Python and R still being introduced.' },
            { label: 'Data Confidence', value: 'Low', status: '28% coverage', change: 'Student data', tone: 'emerald', helper: 'Early-stage; minimal profile data collected yet.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 72, gap: -23, priority: 'Medium' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 55, gap: -35, priority: 'High' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 50, gap: -28, priority: 'High' },
            { rank: 4, skill: 'SQL', demand: 85, coverage: 40, gap: -45, priority: 'High' },
            { rank: 5, skill: 'Data Visualization', demand: 80, coverage: 35, gap: -45, priority: 'High' },
            { rank: 6, skill: 'Machine Learning', demand: 88, coverage: 20, gap: -68, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 5, gap: -71, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 8, gap: -64, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '63%', status: 'Fair', change: '+2%', tone: 'blue', helper: 'Baseline DS alignment for first semester students.' },
            { label: 'Graduate Readiness Score', value: '55%', status: 'Fair', change: '+1%', tone: 'violet', helper: 'Very early stage. Math fundamentals only.' },
            { label: 'Students at Risk', value: '28', status: '9% of cohort', change: '+3', tone: 'rose', helper: 'Higher early risk typical for DS programs.' },
            { label: 'Top Emerging Gap', value: 'Python & R', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Programming languages just being introduced.' },
            { label: 'Data Confidence', value: 'Very Low', status: '15% coverage', change: 'Student data', tone: 'emerald', helper: 'Minimal signal data at program start.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 60, gap: -35, priority: 'High' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 38, gap: -52, priority: 'High' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 35, gap: -43, priority: 'High' },
            { rank: 4, skill: 'SQL', demand: 85, coverage: 28, gap: -57, priority: 'High' },
            { rank: 5, skill: 'Data Visualization', demand: 80, coverage: 22, gap: -58, priority: 'High' },
            { rank: 6, skill: 'Machine Learning', demand: 88, coverage: 10, gap: -78, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 2, gap: -74, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 4, gap: -68, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '61%', status: 'Fair', change: '0%', tone: 'blue', helper: 'Year 1 DS baseline from prior cohort.' },
            { label: 'Graduate Readiness Score', value: '52%', status: 'Fair', change: '0%', tone: 'violet', helper: 'Historical baseline for incoming DS students.' },
            { label: 'Students at Risk', value: '30', status: '9% of cohort', change: '0', tone: 'rose', helper: 'Consistent early-cohort risk profile.' },
            { label: 'Top Emerging Gap', value: 'Python & Statistics', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent pattern across DS Year 1 intakes.' },
            { label: 'Data Confidence', value: 'Very Low', status: '12% coverage', change: 'Student data', tone: 'emerald', helper: 'Historical prior-cohort Year 1 signal.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 93, coverage: 55, gap: -38, priority: 'High' },
            { rank: 2, skill: 'Python', demand: 88, coverage: 32, gap: -56, priority: 'High' },
            { rank: 3, skill: 'R Programming', demand: 76, coverage: 30, gap: -46, priority: 'High' },
            { rank: 4, skill: 'SQL', demand: 83, coverage: 24, gap: -59, priority: 'High' },
            { rank: 5, skill: 'Data Visualization', demand: 78, coverage: 18, gap: -60, priority: 'High' },
            { rank: 6, skill: 'Machine Learning', demand: 86, coverage: 8, gap: -78, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 1, gap: -73, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 70, coverage: 3, gap: -67, priority: 'High' },
          ],
        },
      },
      'Year 2': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '74%', status: 'Good', change: '+6%', tone: 'blue', helper: 'Strong stats and ML fundamentals improving alignment.' },
            { label: 'Graduate Readiness Score', value: '70%', status: 'Good', change: '+5%', tone: 'violet', helper: 'Readiness growing with applied ML and stats coursework.' },
            { label: 'Students at Risk', value: '32', status: '10% of cohort', change: '+1', tone: 'rose', helper: 'Risk around ML implementation and data wrangling.' },
            { label: 'Top Emerging Gap', value: 'Data Engineering', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Pipeline and ETL skills not yet introduced.' },
            { label: 'Data Confidence', value: 'Medium', status: '50% coverage', change: 'Student data', tone: 'emerald', helper: 'Growing signal data from lab and assignment submissions.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 88, gap: -7, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 80, gap: -10, priority: 'Low' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 72, gap: -6, priority: 'Low' },
            { rank: 4, skill: 'SQL', demand: 85, coverage: 68, gap: -17, priority: 'Medium' },
            { rank: 5, skill: 'Data Visualization', demand: 80, coverage: 65, gap: -15, priority: 'Medium' },
            { rank: 6, skill: 'Machine Learning', demand: 88, coverage: 58, gap: -30, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 18, gap: -58, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 20, gap: -52, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '70%', status: 'Good', change: '+4%', tone: 'blue', helper: 'Good momentum as ML modules deepen.' },
            { label: 'Graduate Readiness Score', value: '66%', status: 'Good', change: '+4%', tone: 'violet', helper: 'Consistent improvement with applied coursework.' },
            { label: 'Students at Risk', value: '36', status: '11% of cohort', change: '+2', tone: 'rose', helper: 'Some risk around transition from theory to application.' },
            { label: 'Top Emerging Gap', value: 'Data Engineering', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'ETL pipeline skills not yet introduced in curriculum.' },
            { label: 'Data Confidence', value: 'Medium', status: '44% coverage', change: 'Student data', tone: 'emerald', helper: 'Moderate signal from Year 2 assignments.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 84, gap: -11, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 74, gap: -16, priority: 'Medium' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 65, gap: -13, priority: 'Low' },
            { rank: 4, skill: 'SQL', demand: 85, coverage: 60, gap: -25, priority: 'Medium' },
            { rank: 5, skill: 'Data Visualization', demand: 80, coverage: 58, gap: -22, priority: 'Medium' },
            { rank: 6, skill: 'Machine Learning', demand: 88, coverage: 48, gap: -40, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 12, gap: -64, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 14, gap: -58, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '67%', status: 'Good', change: '+3%', tone: 'blue', helper: 'Prior Year 2 DS cohort alignment benchmark.' },
            { label: 'Graduate Readiness Score', value: '63%', status: 'Fair', change: '+3%', tone: 'violet', helper: 'Historical readiness for Year 2 DS students.' },
            { label: 'Students at Risk', value: '38', status: '12% of cohort', change: '+1', tone: 'rose', helper: 'Consistent risk pattern in Year 2 DS cohorts.' },
            { label: 'Top Emerging Gap', value: 'ML & Data Eng', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent Year 2 gap across DS cohorts.' },
            { label: 'Data Confidence', value: 'Medium', status: '40% coverage', change: 'Student data', tone: 'emerald', helper: 'Prior cohort historical signal for Year 2.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 93, coverage: 80, gap: -13, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 88, coverage: 70, gap: -18, priority: 'Medium' },
            { rank: 3, skill: 'R Programming', demand: 76, coverage: 60, gap: -16, priority: 'Medium' },
            { rank: 4, skill: 'SQL', demand: 83, coverage: 55, gap: -28, priority: 'Medium' },
            { rank: 5, skill: 'Data Visualization', demand: 78, coverage: 50, gap: -28, priority: 'Medium' },
            { rank: 6, skill: 'Machine Learning', demand: 86, coverage: 40, gap: -46, priority: 'High' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 8, gap: -66, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 70, coverage: 10, gap: -60, priority: 'High' },
          ],
        },
      },
      'Year 3': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '81%', status: 'Strong', change: '+9%', tone: 'blue', helper: 'Excellent stats and ML alignment with data-driven employers.' },
            { label: 'Graduate Readiness Score', value: '78%', status: 'Good', change: '+7%', tone: 'violet', helper: 'High readiness in analytical core; deployment skills lagging.' },
            { label: 'Students at Risk', value: '38', status: '12% of cohort', change: '+2', tone: 'rose', helper: 'Risk mostly around MLOps and production deployment.' },
            { label: 'Top Emerging Gap', value: 'MLOps & Cloud ML', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Production deployment skills critical for DS roles.' },
            { label: 'Data Confidence', value: 'High', status: '72% coverage', change: 'Student data', tone: 'emerald', helper: 'Strong signal from project and competition data.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 94, gap: -1, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 90, gap: 0, priority: 'Low' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 82, gap: 4, priority: 'Low' },
            { rank: 4, skill: 'Machine Learning', demand: 88, coverage: 80, gap: -8, priority: 'Low' },
            { rank: 5, skill: 'SQL', demand: 85, coverage: 86, gap: 1, priority: 'Low' },
            { rank: 6, skill: 'Data Visualization', demand: 80, coverage: 78, gap: -2, priority: 'Low' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 36, gap: -40, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 38, gap: -34, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '77%', status: 'Good', change: '+7%', tone: 'blue', helper: 'Strong Year 3 DS alignment across analytical roles.' },
            { label: 'Graduate Readiness Score', value: '74%', status: 'Good', change: '+6%', tone: 'violet', helper: 'Good readiness with strong analytical foundations.' },
            { label: 'Students at Risk', value: '42', status: '13% of cohort', change: '+3', tone: 'rose', helper: 'Risk around production ML and cloud skills.' },
            { label: 'Top Emerging Gap', value: 'MLOps & Cloud ML', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Deployment gap persists into Year 3.' },
            { label: 'Data Confidence', value: 'High', status: '68% coverage', change: 'Student data', tone: 'emerald', helper: 'Good signal data from assessments and labs.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 95, coverage: 90, gap: -5, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 90, coverage: 86, gap: -4, priority: 'Low' },
            { rank: 3, skill: 'R Programming', demand: 78, coverage: 78, gap: 0, priority: 'Low' },
            { rank: 4, skill: 'Machine Learning', demand: 88, coverage: 74, gap: -14, priority: 'Low' },
            { rank: 5, skill: 'SQL', demand: 85, coverage: 82, gap: -3, priority: 'Low' },
            { rank: 6, skill: 'Data Visualization', demand: 80, coverage: 72, gap: -8, priority: 'Low' },
            { rank: 7, skill: 'MLOps', demand: 76, coverage: 28, gap: -48, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 72, coverage: 30, gap: -42, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '73%', status: 'Good', change: '+5%', tone: 'blue', helper: 'Historical Year 3 DS alignment benchmark.' },
            { label: 'Graduate Readiness Score', value: '70%', status: 'Good', change: '+5%', tone: 'violet', helper: 'Prior cohort Year 3 DS readiness.' },
            { label: 'Students at Risk', value: '44', status: '14% of cohort', change: '+2', tone: 'rose', helper: 'Consistent Year 3 DS risk pattern.' },
            { label: 'Top Emerging Gap', value: 'MLOps & Data Eng', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent production deployment gap across DS cohorts.' },
            { label: 'Data Confidence', value: 'High', status: '65% coverage', change: 'Student data', tone: 'emerald', helper: 'Historical Year 3 DS signal coverage.' },
          ],
          skills: [
            { rank: 1, skill: 'Statistics', demand: 93, coverage: 86, gap: -7, priority: 'Low' },
            { rank: 2, skill: 'Python', demand: 88, coverage: 82, gap: -6, priority: 'Low' },
            { rank: 3, skill: 'R Programming', demand: 76, coverage: 74, gap: -2, priority: 'Low' },
            { rank: 4, skill: 'Machine Learning', demand: 86, coverage: 70, gap: -16, priority: 'Medium' },
            { rank: 5, skill: 'SQL', demand: 83, coverage: 78, gap: -5, priority: 'Low' },
            { rank: 6, skill: 'Data Visualization', demand: 78, coverage: 68, gap: -10, priority: 'Low' },
            { rank: 7, skill: 'MLOps', demand: 74, coverage: 22, gap: -52, priority: 'High' },
            { rank: 8, skill: 'Data Engineering', demand: 70, coverage: 24, gap: -46, priority: 'High' },
          ],
        },
      },
    },
  },

  'BSc Data Analytics': {
    cohorts: ['Year 1', 'Year 2', 'Year 3'],
    semesters: ['This Semester', 'Last Semester', 'Last Year'],
    aiInsight:
      'Your Data Analytics program has excellent SQL and Excel foundations. The critical gaps are in advanced analytics tooling (Power BI, Tableau) and predictive modelling — skills that are increasingly expected even at entry-level analyst roles.',
    potentialImpact: '+16%',
    strengths: ['SQL', 'Excel', 'Data Reporting'],
    weaknesses: ['Power BI', 'Predictive Modelling', 'Python Analytics'],
    interventions: [
      { title: 'Power BI & Tableau Intensive', impact: 'High Impact', duration: '4-6 weeks', tone: 'blue' },
      { title: 'Python for Analytics Course', impact: 'High Impact', duration: '6 weeks', tone: 'violet' },
      { title: 'Business Analytics Case Studies', impact: 'Medium Impact', duration: 'Ongoing', tone: 'amber' },
      { title: 'Industry Analytics Mentorship', impact: 'Medium Impact', duration: '1 semester', tone: 'emerald' },
    ],
    advisorFocus: [
      { title: 'Power BI & data visualisation', impact: 'High Impact', students: '70 students', tone: 'blue' },
      { title: 'Python analytics scripting', impact: 'High Impact', students: '58 students', tone: 'violet' },
      { title: 'Predictive & statistical modelling', impact: 'Medium Impact', students: '44 students', tone: 'amber' },
    ],
    cohortData: {
      'Year 1': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '62%', status: 'Fair', change: '+2%', tone: 'blue', helper: 'Early DA cohort building Excel and basic SQL foundation.' },
            { label: 'Graduate Readiness Score', value: '55%', status: 'Fair', change: '+2%', tone: 'violet', helper: 'Very early stage. Business and data fundamentals in focus.' },
            { label: 'Students at Risk', value: '32', status: '10% of cohort', change: '+2', tone: 'rose', helper: 'Risk around quantitative skills and data interpretation.' },
            { label: 'Top Emerging Gap', value: 'Analytical Tools', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Power BI and Tableau not yet introduced.' },
            { label: 'Data Confidence', value: 'Low', status: '26% coverage', change: 'Student data', tone: 'emerald', helper: 'Early intake; limited profile data available.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 52, gap: -38, priority: 'High' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 64, gap: -24, priority: 'Medium' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 40, gap: -42, priority: 'High' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 15, gap: -70, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 12, gap: -68, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 18, gap: -60, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 35, gap: -40, priority: 'High' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 8, gap: -62, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '58%', status: 'Fair', change: '+1%', tone: 'blue', helper: 'First-semester DA students building business acumen.' },
            { label: 'Graduate Readiness Score', value: '50%', status: 'Fair', change: '+1%', tone: 'violet', helper: 'Baseline readiness. Excel and business context introduced.' },
            { label: 'Students at Risk', value: '38', status: '12% of cohort', change: '+4', tone: 'rose', helper: 'Higher early risk typical for quantitative beginners.' },
            { label: 'Top Emerging Gap', value: 'SQL & Analytics Tools', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Core tools not yet introduced in first semester.' },
            { label: 'Data Confidence', value: 'Very Low', status: '14% coverage', change: 'Student data', tone: 'emerald', helper: 'Minimal signal data at program start.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 35, gap: -55, priority: 'High' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 48, gap: -40, priority: 'High' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 28, gap: -54, priority: 'High' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 8, gap: -77, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 6, gap: -74, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 10, gap: -68, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 22, gap: -53, priority: 'High' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 2, gap: -68, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '56%', status: 'Fair', change: '0%', tone: 'blue', helper: 'Prior intake Year 1 DA alignment baseline.' },
            { label: 'Graduate Readiness Score', value: '48%', status: 'Fair', change: '0%', tone: 'violet', helper: 'Historical Year 1 DA baseline readiness.' },
            { label: 'Students at Risk', value: '40', status: '12% of cohort', change: '0', tone: 'rose', helper: 'Consistent early intake risk profile for DA program.' },
            { label: 'Top Emerging Gap', value: 'Analytics Tools', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent tool gap across Year 1 DA intakes.' },
            { label: 'Data Confidence', value: 'Very Low', status: '12% coverage', change: 'Student data', tone: 'emerald', helper: 'Minimal historical Year 1 DA signal.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 88, coverage: 30, gap: -58, priority: 'High' },
            { rank: 2, skill: 'Excel / Sheets', demand: 86, coverage: 42, gap: -44, priority: 'High' },
            { rank: 3, skill: 'Data Reporting', demand: 80, coverage: 24, gap: -56, priority: 'High' },
            { rank: 4, skill: 'Power BI', demand: 83, coverage: 6, gap: -77, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 78, coverage: 4, gap: -74, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 76, coverage: 8, gap: -68, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 73, coverage: 18, gap: -55, priority: 'High' },
            { rank: 8, skill: 'Predictive Modelling', demand: 68, coverage: 1, gap: -67, priority: 'High' },
          ],
        },
      },
      'Year 2': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '72%', status: 'Good', change: '+6%', tone: 'blue', helper: 'SQL and reporting skills driving strong market alignment.' },
            { label: 'Graduate Readiness Score', value: '68%', status: 'Good', change: '+5%', tone: 'violet', helper: 'Readiness improving as students build BI tool experience.' },
            { label: 'Students at Risk', value: '48', status: '15% of cohort', change: '+3', tone: 'rose', helper: 'Risk concentrated in Python and predictive modelling modules.' },
            { label: 'Top Emerging Gap', value: 'Power BI & Python', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'BI tools and Python analytics not yet fully covered.' },
            { label: 'Data Confidence', value: 'Medium', status: '48% coverage', change: 'Student data', tone: 'emerald', helper: 'Growing signal from assignments and case study submissions.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 82, gap: -8, priority: 'Low' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 86, gap: -2, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 75, gap: -7, priority: 'Low' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 42, gap: -43, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 38, gap: -42, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 36, gap: -42, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 65, gap: -10, priority: 'Low' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 22, gap: -48, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '68%', status: 'Good', change: '+4%', tone: 'blue', helper: 'Good alignment growth as BI tools introduced.' },
            { label: 'Graduate Readiness Score', value: '64%', status: 'Fair', change: '+4%', tone: 'violet', helper: 'Steady readiness improvement through Year 2.' },
            { label: 'Students at Risk', value: '52', status: '16% of cohort', change: '+4', tone: 'rose', helper: 'Elevated risk as students transition to BI tools.' },
            { label: 'Top Emerging Gap', value: 'Power BI & Modelling', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'BI tools and modelling just being introduced.' },
            { label: 'Data Confidence', value: 'Medium', status: '42% coverage', change: 'Student data', tone: 'emerald', helper: 'Growing signal from Year 2 submissions.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 76, gap: -14, priority: 'Low' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 82, gap: -6, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 68, gap: -14, priority: 'Low' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 30, gap: -55, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 26, gap: -54, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 26, gap: -52, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 58, gap: -17, priority: 'Medium' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 14, gap: -56, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '65%', status: 'Fair', change: '+3%', tone: 'blue', helper: 'Prior Year 2 DA cohort alignment benchmark.' },
            { label: 'Graduate Readiness Score', value: '60%', status: 'Fair', change: '+3%', tone: 'violet', helper: 'Historical readiness for Year 2 DA students.' },
            { label: 'Students at Risk', value: '56', status: '17% of cohort', change: '+2', tone: 'rose', helper: 'Consistent risk pattern in Year 2 DA cohorts.' },
            { label: 'Top Emerging Gap', value: 'BI Tools & Python', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Persistent gap across Year 2 DA cohorts.' },
            { label: 'Data Confidence', value: 'Low', status: '38% coverage', change: 'Student data', tone: 'emerald', helper: 'Prior cohort historical Year 2 DA signal.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 88, coverage: 72, gap: -16, priority: 'Medium' },
            { rank: 2, skill: 'Excel / Sheets', demand: 86, coverage: 78, gap: -8, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 80, coverage: 62, gap: -18, priority: 'Medium' },
            { rank: 4, skill: 'Power BI', demand: 83, coverage: 22, gap: -61, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 78, coverage: 18, gap: -60, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 76, coverage: 18, gap: -58, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 73, coverage: 50, gap: -23, priority: 'Medium' },
            { rank: 8, skill: 'Predictive Modelling', demand: 68, coverage: 10, gap: -58, priority: 'High' },
          ],
        },
      },
      'Year 3': {
        'This Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '78%', status: 'Good', change: '+8%', tone: 'blue', helper: 'Strong SQL and reporting alignment. BI tools closing gap.' },
            { label: 'Graduate Readiness Score', value: '74%', status: 'Good', change: '+7%', tone: 'violet', helper: 'Good readiness. Python analytics and modelling still gaps.' },
            { label: 'Students at Risk', value: '55', status: '17% of cohort', change: '+4', tone: 'rose', helper: 'Risk concentrated in Python and predictive modelling.' },
            { label: 'Top Emerging Gap', value: 'Power BI & Modelling', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Advanced BI and predictive skills need more coverage.' },
            { label: 'Data Confidence', value: 'High', status: '65% coverage', change: 'Student data', tone: 'emerald', helper: 'Good signal from case studies and industry projects.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 90, gap: 0, priority: 'Low' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 92, gap: 4, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 86, gap: 4, priority: 'Low' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 58, gap: -27, priority: 'Medium' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 55, gap: -25, priority: 'Medium' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 52, gap: -26, priority: 'Medium' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 78, gap: 3, priority: 'Low' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 38, gap: -32, priority: 'High' },
          ],
        },
        'Last Semester': {
          metrics: [
            { label: 'Market Alignment Score', value: '74%', status: 'Good', change: '+6%', tone: 'blue', helper: 'Year 3 DA students showing strong analytical alignment.' },
            { label: 'Graduate Readiness Score', value: '70%', status: 'Good', change: '+5%', tone: 'violet', helper: 'Approaching graduation readiness. Core tools solid.' },
            { label: 'Students at Risk', value: '60', status: '18% of cohort', change: '+5', tone: 'rose', helper: 'Risk elevated as predictive modelling module introduced.' },
            { label: 'Top Emerging Gap', value: 'Python & Modelling', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Advanced analytics skills still lagging for DA students.' },
            { label: 'Data Confidence', value: 'High', status: '60% coverage', change: 'Student data', tone: 'emerald', helper: 'Growing signal from Year 3 projects.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 90, coverage: 86, gap: -4, priority: 'Low' },
            { rank: 2, skill: 'Excel / Sheets', demand: 88, coverage: 88, gap: 0, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 82, coverage: 80, gap: -2, priority: 'Low' },
            { rank: 4, skill: 'Power BI', demand: 85, coverage: 50, gap: -35, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 80, coverage: 46, gap: -34, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 78, coverage: 44, gap: -34, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 75, coverage: 72, gap: -3, priority: 'Low' },
            { rank: 8, skill: 'Predictive Modelling', demand: 70, coverage: 30, gap: -40, priority: 'High' },
          ],
        },
        'Last Year': {
          metrics: [
            { label: 'Market Alignment Score', value: '70%', status: 'Good', change: '+5%', tone: 'blue', helper: 'Historical Year 3 DA cohort alignment benchmark.' },
            { label: 'Graduate Readiness Score', value: '66%', status: 'Good', change: '+4%', tone: 'violet', helper: 'Prior Year 3 DA cohort readiness at graduation.' },
            { label: 'Students at Risk', value: '62', status: '19% of cohort', change: '+3', tone: 'rose', helper: 'Consistent risk pattern in Year 3 DA cohorts.' },
            { label: 'Top Emerging Gap', value: 'Power BI & Python', status: 'High demand', change: 'Low coverage', tone: 'amber', helper: 'Consistent BI tool and Python gap in DA program.' },
            { label: 'Data Confidence', value: 'High', status: '56% coverage', change: 'Student data', tone: 'emerald', helper: 'Historical Year 3 DA signal coverage.' },
          ],
          skills: [
            { rank: 1, skill: 'SQL', demand: 88, coverage: 82, gap: -6, priority: 'Low' },
            { rank: 2, skill: 'Excel / Sheets', demand: 86, coverage: 84, gap: -2, priority: 'Low' },
            { rank: 3, skill: 'Data Reporting', demand: 80, coverage: 76, gap: -4, priority: 'Low' },
            { rank: 4, skill: 'Power BI', demand: 83, coverage: 42, gap: -41, priority: 'High' },
            { rank: 5, skill: 'Tableau', demand: 78, coverage: 38, gap: -40, priority: 'High' },
            { rank: 6, skill: 'Python Analytics', demand: 76, coverage: 36, gap: -40, priority: 'High' },
            { rank: 7, skill: 'Statistics', demand: 73, coverage: 68, gap: -5, priority: 'Low' },
            { rank: 8, skill: 'Predictive Modelling', demand: 68, coverage: 24, gap: -44, priority: 'High' },
          ],
        },
      },
    },
  },
}

// ─── Constants ────────────────────────────────────────────────────────────────

const metricToneClasses = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
}

const priorityClasses = {
  Low: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Medium: 'bg-amber-50 text-amber-700 ring-amber-100',
  High: 'bg-rose-50 text-rose-700 ring-rose-100',
}

const changeColor = (change) => {
  if (!change) return 'text-slate-400'
  if (change.startsWith('+') || change.startsWith('-0') || change === '0%') return 'text-emerald-600'
  if (change.startsWith('-')) return 'text-rose-500'
  return 'text-slate-500'
}

const quadrantToneClasses = {
  priority: {
    marker: 'text-rose-700 ring-rose-200',
    icon: 'bg-rose-50 text-rose-600 ring-rose-200',
  },
  leverage: {
    marker: 'text-emerald-700 ring-emerald-200',
    icon: 'bg-emerald-50 text-emerald-600 ring-emerald-200',
  },
  monitor: {
    marker: 'text-amber-700 ring-amber-200',
    icon: 'bg-amber-50 text-amber-600 ring-amber-200',
  },
  maintain: {
    marker: 'text-teal-700 ring-teal-200',
    icon: 'bg-teal-50 text-teal-600 ring-teal-200',
  },
}

const quadrantSkills = [
  { skill: 'Cloud Deployment', icon: 'CD', tone: 'priority', x: 22, y: 28 },
  { skill: 'MLOps', icon: 'ML', tone: 'priority', x: 31, y: 42 },
  { skill: 'Product Thinking', icon: 'PT', tone: 'priority', x: 42, y: 34 },
  { skill: 'Python', icon: 'PY', tone: 'leverage', x: 68, y: 27 },
  { skill: 'Data Analysis', icon: 'DA', tone: 'leverage', x: 80, y: 42 },
  { skill: 'Power BI', icon: 'BI', tone: 'monitor', x: 24, y: 72 },
  { skill: 'SQL', icon: 'SQL', tone: 'maintain', x: 72, y: 76 },
]

const quadrantStats = [
  { value: '3', label: 'Strengths', helper: 'Areas driving success', tone: 'emerald', icon: 'UP' },
  { value: '4', label: 'Priority Gaps', helper: 'High impact areas', tone: 'rose', icon: '!' },
  { value: '70%', label: 'Focus Score', helper: 'Improvement opportunity', tone: 'violet', icon: 'FS' },
  { value: '+14%', label: 'Potential Impact', helper: 'Readiness uplift', tone: 'blue', icon: '+' },
]

const keyInsights = [
  { text: 'Cloud Deployment and MLOps are high-impact gaps that should be prioritized.', tone: 'rose', icon: 'UP' },
  { text: 'Python and Data Analysis are strong pillars driving readiness.', tone: 'emerald', icon: 'ST' },
  { text: 'Closing priority gaps can unlock up to 14% improvement in readiness.', tone: 'amber', icon: '+' },
]

const priorityActions = [
  { title: 'Cloud Deployment Workshop', detail: 'Build production-ready cloud skills', impact: 'High Impact', tone: 'rose' },
  { title: 'MLOps Enablement Program', detail: 'Implement CI/CD and monitoring', impact: 'High Impact', tone: 'rose' },
  { title: 'Product Thinking Sprint', detail: 'Strengthen user-centric thinking', impact: 'Medium Impact', tone: 'amber' },
  { title: 'Power BI Fundamentals', detail: 'Improve data visualization skills', impact: 'Medium Impact', tone: 'amber' },
]

// ─── Dropdown Filter Component ─────────────────────────────────────────────────

function QuadrantLabel({ title, subtitle, className }) {
  return (
    <div className={`absolute rounded-[8px] px-3 py-2 ring-1 ${className}`}>
      <p className="text-xs font-semibold">{title}</p>
      <p className="mt-1 text-[11px] font-medium opacity-80">{subtitle}</p>
    </div>
  )
}

function getInterventionRecommendation(skillName) {
  const recommendations = {
    'Cloud Deployment': 'AWS/GCP Cloud Architecture Certification and Hands-on Deploy Labs.',
    'MLOps': 'MLOps pipeline workshop featuring GitHub Actions & Docker containers.',
    'Product Thinking': 'Product Management Sprint: customer discovery to MVP roadmap.',
    'Python': 'Advanced Python programming boot camp focusing on scripting and OOP.',
    'Data Analysis': 'Applied Data Science challenge: cleaning raw datasets and scripting.',
    'Power BI': 'Microsoft Power BI masterclass: data modeling and DAX queries.',
    'SQL': 'SQL databases Bootcamp: writing complex queries and optimizing tables.',
    'Statistics': 'Advanced Statistical Methods & Hypothesis Testing workshop.',
    'Machine Learning': 'Introduction to Machine Learning: regression, trees, and clustering.',
    'Data Engineering': 'ETL pipelines lab with Apache Spark and data lake staging.',
    'R Programming': 'Statistical computing with R: tidyverse and markdown reports.',
    'Data Visualization': 'Interactive Dashboard design using Tableau and d3.js.',
    'Data Structures': 'Coding interviews prep: stacks, trees, queues, and complexity.',
    'Algorithms': 'Advanced Algorithms sprint: dynamic programming and graph traversals.',
    'Web Development': 'Modern Frontend Frameworks: building interactive React web apps.',
    'Networking Basics': 'Cisco CCNA prep: subnetting, routing tables, and HTTP protocols.',
    'System Design': 'Scalable web systems design: load balances, caching, and database sharing.',
    'AI / ML Basics': 'AI Fundamentals: neural networks, NLP, and deep learning overview.',
    'Product Analytics': 'Behavioral analytics track: Amplitude instrumentation and user cohorts.',
    'Predictive Modelling': 'Regression modeling and forecasting methods using Python.',
    'Data Reporting': 'Executive summary writing and metric report generation.',
    'Python Analytics': 'Data science scripts: Pandas, Numpy, and Matplotlib.',
    'Excel / Sheets': 'Advanced spreadsheets: VLOOKUP, Pivot tables, and Macros.',
  }
  return recommendations[skillName] || `Specialized course and project-based validation for ${skillName}.`
}

const nodeStyles = {
  priority: 'bg-rose-50 text-rose-700 ring-rose-200 hover:bg-rose-100 hover:text-rose-800',
  leverage: 'bg-emerald-50 text-emerald-700 ring-emerald-200 hover:bg-emerald-100 hover:text-emerald-800',
  monitor: 'bg-amber-50 text-amber-700 ring-amber-200 hover:bg-amber-100 hover:text-amber-800',
  maintain: 'bg-teal-50 text-teal-700 ring-teal-200 hover:bg-teal-100 hover:text-teal-800',
}

const clusterStyles = {
  priority: 'bg-rose-50 text-rose-700 ring-rose-200 border-rose-300 hover:bg-rose-100',
  leverage: 'bg-emerald-50 text-emerald-700 ring-emerald-200 border-emerald-300 hover:bg-emerald-100',
  monitor: 'bg-amber-50 text-amber-700 ring-amber-200 border-amber-300 hover:bg-amber-100',
  maintain: 'bg-teal-50 text-teal-700 ring-teal-200 border-teal-300 hover:bg-teal-100',
}

function QuadrantSkillNode({ node, hoveredNodeId, setHoveredNodeId, selectedNodeId, setSelectedNodeId }) {
  const isSelected = selectedNodeId === node.id
  const isHovered = hoveredNodeId === node.id
  const isAnyHovered = hoveredNodeId !== null
  const opacityClass = isAnyHovered && !isHovered ? 'opacity-30 scale-95 blur-[0.2px]' : 'opacity-100'

  const activeStyle = node.isCluster
    ? `border-2 border-dashed ${clusterStyles[node.tone]}`
    : `bg-white/95 ${nodeStyles[node.tone]}`

  // Apply visual styling hierarchy:
  // selected node = stronger blue ring + soft glow + slight scale-up + high z-index
  // hover node = subtle scale-up only + high z-index
  const selectionClasses = isSelected
    ? 'ring-4 ring-blue-500/80 drop-shadow-[0_0_12px_rgba(59,130,246,0.45)] scale-110 z-30'
    : isHovered
      ? 'scale-105 shadow-md z-30'
      : ''

  const handleClick = (e) => {
    e.stopPropagation()
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id))
  }

  return (
    <div
      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${opacityClass}`}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      onMouseEnter={() => setHoveredNodeId(node.id)}
      onMouseLeave={() => setHoveredNodeId(null)}
      onClick={handleClick}
    >
      <button
        type="button"
        className={`flex h-11 w-11 items-center justify-center rounded-full font-bold text-xs shadow-sm ring-1 transition-all duration-300 ease-out focus:outline-none ${activeStyle} ${selectionClasses}`}
      >
        {node.isCluster ? (
          <span className="text-slate-700">{node.label}</span>
        ) : (
          <span className="uppercase text-slate-800">{node.icon}</span>
        )}
      </button>
    </div>
  )
}

function QuadrantStatCard({ stat }) {
  const valueClass =
    stat.tone === 'rose'
      ? 'text-rose-600'
      : stat.tone === 'emerald'
        ? 'text-emerald-600'
        : stat.tone === 'violet'
          ? 'text-violet-600'
          : 'text-blue-600'

  return (
    <article className="flex min-w-0 items-center gap-3 rounded-[8px] border border-slate-100 bg-white p-3">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-1 ${metricToneClasses[stat.tone]}`}>
        {stat.icon}
      </span>
      <div className="min-w-0">
        <p className={`text-xl font-semibold leading-none ${valueClass}`}>{stat.value}</p>
        <p className="mt-1 text-xs font-semibold text-slate-800">{stat.label}</p>
        <p className="mt-0.5 truncate text-[11px] font-medium text-slate-500">{stat.helper}</p>
      </div>
    </article>
  )
}

function getSkillIcon(skillName) {
  const customIcons = {
    'Cloud Deployment': 'CD',
    'MLOps': 'ML',
    'Product Thinking': 'PT',
    'Python': 'PY',
    'Data Analysis': 'DA',
    'Power BI': 'BI',
    'SQL': 'SQL',
    'Statistics': 'STA',
    'Machine Learning': 'ML',
    'Data Engineering': 'DE',
    'R Programming': 'R',
    'Data Visualization': 'DV',
    'Data Structures': 'DS',
    'Algorithms': 'ALG',
    'Web Development': 'WEB',
    'Networking Basics': 'NET',
    'System Design': 'SYS',
    'AI / ML Basics': 'AI',
    'Product Analytics': 'PA',
    'Business Analytics': 'BA',
    'Data Warehousing': 'DW',
    'Tableau': 'TAB',
    'Excel': 'XLS',
    'Excel / Sheets': 'XLS',
    'Predictive Modelling': 'PM',
    'Data Reporting': 'REP',
    'Python Analytics': 'PYA',
  }
  return customIcons[skillName] || skillName.substring(0, 2).toUpperCase()
}

const badgeStyles = {
  priority: 'bg-rose-50 text-rose-700 ring-rose-100',
  leverage: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  monitor: 'bg-amber-50 text-amber-700 ring-amber-100',
  maintain: 'bg-teal-50 text-teal-700 ring-teal-100',
}

const badgeLabels = {
  priority: 'Priority Focus',
  leverage: 'Leverage Strengths',
  monitor: 'Monitor & Improve',
  maintain: 'Maintain Momentum',
}

function StrategicQuadrantSection({ skills = [], metrics = [], potentialImpact = '+14%' }) {
  const [hoveredNodeId, setHoveredNodeId] = React.useState(null)
  const [selectedNodeId, setSelectedNodeId] = React.useState(null)
  const [hoveredFocusZone, setHoveredFocusZone] = React.useState(false)

  const dynamicSkills = React.useMemo(() => {
    // 1. Initial mapping of nodes
    const rawNodes = skills.map((item) => {
      const x = 12 + (item.coverage / 100) * 76
      const y = 12 + (1 - (item.demand / 100)) * 76
      
      let tone = 'monitor'
      if (x < 50 && y < 50) tone = 'priority'
      else if (x >= 50 && y < 50) tone = 'leverage'
      else if (x < 50 && y >= 50) tone = 'monitor'
      else tone = 'maintain'
      
      return {
        ...item,
        x,
        y,
        origX: x,
        origY: y,
        tone,
        icon: getSkillIcon(item.skill),
        id: item.skill,
      }
    })

    // 2. Zone-based Clustering (collapse into cluster if more than 3 nodes in a quadrant and they overlap closely)
    const zones = ['priority', 'leverage', 'monitor', 'maintain']
    let finalNodes = []

    zones.forEach((zoneName) => {
      const zoneNodes = rawNodes.filter((n) => n.tone === zoneName)
      
      if (zoneNodes.length > 3) {
        const visited = new Set()
        const clustered = []
        
        for (let i = 0; i < zoneNodes.length; i++) {
          if (visited.has(i)) continue
          
          const cluster = [zoneNodes[i]]
          visited.add(i)
          
          for (let j = i + 1; j < zoneNodes.length; j++) {
            if (visited.has(j)) continue
            
            // Highly crowded (> 5) -> cluster more aggressively to keep nodes away from labels
            const threshold = zoneNodes.length > 5 ? 12.5 : 10.5
            const isClose = cluster.some((cNode) => {
              const dx = zoneNodes[j].x - cNode.x
              const dy = zoneNodes[j].y - cNode.y
              return Math.sqrt(dx * dx + dy * dy) < threshold
            })
            
            if (isClose) {
              cluster.push(zoneNodes[j])
              visited.add(j)
            }
          }
          
          if (cluster.length >= 2) {
            const avgX = cluster.reduce((sum, n) => sum + n.x, 0) / cluster.length
            const avgY = cluster.reduce((sum, n) => sum + n.y, 0) / cluster.length
            
            clustered.push({
              id: `cluster-${zoneName}-${clustered.length}`,
              isCluster: true,
              skills: cluster,
              x: avgX,
              y: avgY,
              tone: zoneName,
              label: `+${cluster.length}`,
            })
          } else {
            clustered.push({
              ...cluster[0],
              isCluster: false,
            })
          }
        }
        finalNodes = finalNodes.concat(clustered)
      } else {
        finalNodes = finalNodes.concat(zoneNodes.map((n) => ({ ...n, isCluster: false })))
      }
    })

    // 3. Relaxation loop for collision avoidance on final displayed nodes with safe zones
    const minDist = 8.5
    const steps = 15
    for (let step = 0; step < steps; step++) {
      // Step A: Push nodes out of quadrant label bounding boxes and enforce margins
      for (let i = 0; i < finalNodes.length; i++) {
        const n = finalNodes[i]
        
        // Top-Left Label Area: x < 34 and y < 22
        if (n.x < 34 && n.y < 22) {
          if ((34 - n.x) < (22 - n.y)) {
            n.x = 34
          } else {
            n.y = 22
          }
        }
        // Top-Right Label Area: x > 66 and y < 22
        if (n.x > 66 && n.y < 22) {
          if ((n.x - 66) < (22 - n.y)) {
            n.x = 66
          } else {
            n.y = 22
          }
        }
        // Bottom-Left Label Area: x < 34 and y > 78
        if (n.x < 34 && n.y > 78) {
          if ((34 - n.x) < (n.y - 78)) {
            n.x = 34
          } else {
            n.y = 78
          }
        }
        // Bottom-Right Label Area: x > 66 and y > 78
        if (n.x > 66 && n.y > 78) {
          if ((n.x - 66) < (n.y - 78)) {
            n.x = 66
          } else {
            n.y = 78
          }
        }

        // Spacing from horizontal and vertical axes lines (x=50, y=50)
        const axisBuffer = 4.5
        if (Math.abs(n.x - 50) < axisBuffer) {
          n.x = n.x < 50 ? 50 - axisBuffer : 50 + axisBuffer
        }
        if (Math.abs(n.y - 50) < axisBuffer) {
          n.y = n.y < 50 ? 50 - axisBuffer : 50 + axisBuffer
        }

        // Minimum spacing from outer chart edges
        n.x = Math.max(14, Math.min(86, n.x))
        n.y = Math.max(14, Math.min(86, n.y))
      }

      // Step B: Resolve node-to-node collisions
      for (let i = 0; i < finalNodes.length; i++) {
        for (let j = i + 1; j < finalNodes.length; j++) {
          const dx = finalNodes[j].x - finalNodes[i].x
          const dy = finalNodes[j].y - finalNodes[i].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < minDist && dist > 0.01) {
            const overlap = minDist - dist
            const forceX = (dx / dist) * overlap * 0.4
            const forceY = (dy / dist) * overlap * 0.4
            
            finalNodes[i].x = Math.max(14, Math.min(86, finalNodes[i].x - forceX))
            finalNodes[i].y = Math.max(14, Math.min(86, finalNodes[i].y - forceY))
            finalNodes[j].x = Math.max(14, Math.min(86, finalNodes[j].x + forceX))
            finalNodes[j].y = Math.max(14, Math.min(86, finalNodes[j].y + forceY))
          }
        }
      }
    }

    return finalNodes
  }, [skills])

  const hoveredNode = React.useMemo(() => {
    if (!hoveredNodeId) return null
    return dynamicSkills.find((n) => n.id === hoveredNodeId) || null
  }, [hoveredNodeId, dynamicSkills])

  const selectedNode = React.useMemo(() => {
    if (!selectedNodeId) return null
    return dynamicSkills.find((n) => n.id === selectedNodeId) || null
  }, [selectedNodeId, dynamicSkills])

  const activeNode = hoveredNode || selectedNode || null

  const zoneCounts = React.useMemo(() => {
    const counts = { priority: 0, leverage: 0, monitor: 0, maintain: 0 }
    dynamicSkills.forEach((node) => {
      if (node.isCluster) {
        counts[node.tone] += node.skills?.length || 0
      } else {
        counts[node.tone] += 1
      }
    })
    return counts
  }, [dynamicSkills])

  const dynamicStats = React.useMemo(() => {
    const strengthsCount = skills.filter((s) => s.coverage >= 50).length
    const priorityGapsCount = skills.filter((s) => s.coverage < 50 && s.demand >= 60).length
    const readinessMetric = metrics.find((m) => m.label === 'Graduate Readiness Score')
    const readinessValue = readinessMetric ? readinessMetric.value : '70%'
    
    return [
      { value: String(strengthsCount), label: 'Strengths', helper: 'Areas driving success', tone: 'emerald', icon: 'UP' },
      { value: String(priorityGapsCount), label: 'Priority Gaps', helper: 'High impact areas', tone: 'rose', icon: '!' },
      { value: readinessValue, label: 'Readiness Score', helper: 'Current average readiness', tone: 'violet', icon: 'FS' },
      { value: potentialImpact, label: 'Potential Impact', helper: 'Readiness uplift', tone: 'blue', icon: '+' },
    ]
  }, [skills, metrics, potentialImpact])

  const dynamicInsights = React.useMemo(() => {
    const sortedGaps = [...skills].filter((s) => s.gap < 0).sort((a, b) => a.gap - b.gap)
    const topGapSkill = sortedGaps[0]?.skill || 'Priority Gaps'
    const secondGapSkill = sortedGaps[1]?.skill || 'MLOps'
    
    const sortedStrengths = [...skills].sort((a, b) => b.coverage - a.coverage)
    const topStrengthSkill = sortedStrengths[0]?.skill || 'Python'
    
    const gapText = topGapSkill === 'MLOps'
      ? `${topGapSkill} and ${secondGapSkill} are high-impact gaps that should be prioritized.`
      : `${topGapSkill} and MLOps are high-impact gaps that should be prioritized.`
      
    return [
      { text: gapText, tone: 'rose', icon: 'UP' },
      { text: `${topStrengthSkill} and core program competencies are strong pillars driving readiness.`, tone: 'emerald', icon: 'ST' },
      { text: `Closing priority gaps can unlock up to ${potentialImpact} improvement in readiness.`, tone: 'amber', icon: '+' },
      { 
        text: 'The central Focus Zone highlights key priorities: targeted interventions on skills plotted here (e.g. MLOps or Cloud Deployment) will yield the fastest readiness gains.', 
        tone: 'blue', 
        icon: 'FZ' 
      },
    ]
  }, [skills, potentialImpact])

  const dynamicActions = React.useMemo(() => {
    const sortedGaps = [...skills].filter((s) => s.gap < 0).sort((a, b) => a.gap - b.gap)
    return sortedGaps.slice(0, 4).map((item, index) => {
      const isHigh = index < 2
      return {
        title: `${item.skill} Enablement`,
        detail: isHigh ? `Intensive workshop to build production-ready skills` : `Fundamentals short course to cover gaps`,
        impact: isHigh ? 'High Impact' : 'Medium Impact',
        tone: isHigh ? 'rose' : 'amber'
      }
    })
  }, [skills])

  return (
    <section className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_390px] 2xl:grid-cols-[minmax(0,1fr)_430px]">
      <div className="min-w-0 self-start xl:sticky xl:top-4">
      <section className="min-w-0 rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-medium text-slate-950">Program Strengths vs Emerging Weaknesses</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              A strategic view of program performance to double down on strengths and close critical gaps.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-[52px_minmax(0,1fr)_260px] xl:grid-cols-[52px_minmax(0,1fr)_280px]">
          <div className="hidden flex-col items-center justify-center gap-3 text-center lg:flex">
            <span className="text-[11px] font-semibold text-slate-500">High Impact</span>
            <span className="h-48 w-px bg-slate-300" />
            <span className="text-[11px] font-semibold text-slate-500">Low Impact</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="relative min-h-[430px] min-w-[640px] overflow-hidden rounded-[8px] border border-slate-200 bg-white">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="bg-rose-50/55" />
                <div className="bg-emerald-50/55" />
                <div className="bg-amber-50/50" />
                <div className="bg-teal-50/55" />
              </div>
              <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-slate-200" />

              <QuadrantLabel title="Priority Focus" subtitle="High impact, low performance" className="left-5 top-5 bg-white/80 text-rose-700 ring-rose-100" />
              <QuadrantLabel title="Leverage Strengths" subtitle="High impact, strong performance" className="right-5 top-5 bg-white/80 text-emerald-700 ring-emerald-100" />
              <QuadrantLabel title="Monitor & Improve" subtitle="Low impact, low performance" className="bottom-5 left-5 bg-white/80 text-amber-700 ring-amber-100" />
              <QuadrantLabel title="Maintain Momentum" subtitle="Low impact, strong performance" className="bottom-5 right-5 bg-white/80 text-teal-700 ring-teal-100" />

              {dynamicSkills.map((node) => (
                <QuadrantSkillNode
                  key={node.id}
                  node={node}
                  hoveredNodeId={hoveredNodeId}
                  setHoveredNodeId={setHoveredNodeId}
                  selectedNodeId={selectedNodeId}
                  setSelectedNodeId={setSelectedNodeId}
                />
              ))}

              {/* Focus Zone background elements */}
              <style>{`
                @keyframes focusZoneBreath {
                  0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.25; }
                  50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.50; }
                  100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.25; }
                }
                .animate-breath {
                  animation: focusZoneBreath 4.5s ease-in-out infinite;
                }
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(4px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                  animation: fadeIn 0.22s ease-out forwards;
                }
              `}</style>
              
              {/* Radial breathing ring */}
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 ring-4 ring-blue-100/35 pointer-events-none animate-breath z-0" />
              
              {/* Small center marker with hover trigger */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center cursor-pointer"
                onMouseEnter={() => setHoveredFocusZone(true)}
                onMouseLeave={() => setHoveredFocusZone(false)}
              >
                <div className="h-3 w-3 rounded-full bg-blue-600/80 border border-white shadow-sm transition-transform hover:scale-125 duration-200" />
              </div>
              
              {/* Focus Zone Label beneath center point */}
              <div className="absolute left-1/2 top-[53.5%] -translate-x-1/2 pointer-events-none z-10">
                <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-wider text-blue-500/85 bg-white/80 px-1.5 py-0.5 rounded border border-slate-100 shadow-sm">
                  Focus Zone
                </span>
              </div>

              {/* Focus Zone Tooltip */}
              {hoveredFocusZone && (
                <div className="pointer-events-none absolute z-50 bottom-[calc(50%+16px)] left-1/2 -translate-x-1/2 w-64 rounded-lg border border-blue-100 bg-white/95 p-3 shadow-md backdrop-blur-sm transition-all duration-200">
                  <p className="text-xs font-bold text-blue-700">Focus Zone</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600 font-medium">
                    Skills plotted near the center represent high-leverage opportunities where curriculum updates yield the fastest readiness gains.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-3 grid min-w-[640px] grid-cols-3 items-center gap-2 text-[11px] font-semibold text-slate-500">
              <span>Low Performance</span>
              <span className="justify-self-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-500">Program Average</span>
              <span className="justify-self-end">High Performance</span>
            </div>
          </div>

          {/* Skill Details Panel */}
          <aside 
            key={activeNode?.id || 'empty'}
            className="flex flex-col min-h-[300px] lg:min-h-[430px] rounded-[8px] border border-slate-200/80 bg-slate-50/40 p-4 shadow-sm animate-fadeIn"
          >
            {!activeNode ? (
              <div className="flex flex-col items-center text-center px-4 py-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 mb-3">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500 font-medium max-w-[200px]">
                  Click any marker or cluster in the quadrant to pin its details and recommendations.
                </p>
              </div>
            ) : activeNode.isCluster ? (
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                      Cluster Node
                    </span>
                    {selectedNodeId && (
                      <button 
                        type="button" 
                        onClick={() => setSelectedNodeId(null)}
                        className="text-[11px] font-bold text-blue-600 transition hover:text-blue-700"
                      >
                        Back to Overview ✕
                      </button>
                    )}
                  </div>
                  
                  <h3 className="mt-3 text-sm font-bold text-slate-900 leading-tight">
                    {badgeLabels[activeNode.tone]} Cluster
                  </h3>
                  <p className="mb-3 mt-1 text-xs font-medium leading-5 text-slate-500">
                    Dense region in the {badgeLabels[activeNode.tone].toLowerCase()} quadrant. Hover details for grouped skills below.
                  </p>
                  
                  <div className="overflow-y-auto space-y-2.5 max-h-[220px] lg:max-h-[250px] pr-1">
                    {activeNode.skills?.map((s) => (
                      <div key={s.skill} className="rounded-lg border border-slate-100 bg-white p-3 shadow-xs transition hover:border-slate-200">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="truncate text-xs font-bold text-slate-800" title={s.skill}>{s.skill}</h4>
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${badgeStyles[s.tone]}`}>
                            {s.tone === 'priority' ? 'Priority' : s.tone === 'leverage' ? 'Leverage' : s.tone === 'monitor' ? 'Monitor' : 'Maintain'}
                          </span>
                        </div>
                        
                        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                          <div>
                            <span className="font-medium">Readiness:</span>
                            <span className="font-semibold text-slate-800 ml-1">{s.coverage}%</span>
                          </div>
                          <div>
                            <span className="font-medium">Demand:</span>
                            <span className="font-semibold text-slate-800 ml-1">{s.demand}%</span>
                          </div>
                        </div>
                        
                        <p className="mt-2 border-t border-slate-50 pt-2 text-[11px] font-medium leading-5 text-slate-600">
                          <span className="font-semibold text-slate-700">Action: </span>
                          {getInterventionRecommendation(s.skill)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-3 border-t border-slate-100 pt-2.5">
                  <p className="text-[11px] leading-5 text-slate-500 italic">
                    Tip: Hovering individual markers highlights unique skills.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${badgeStyles[activeNode.tone]}`}>
                      {badgeLabels[activeNode.tone]}
                    </span>
                    <div className="flex items-center gap-2">
                      {activeNode.gap !== undefined && (
                        <span className={`inline-flex items-center gap-1 text-xs font-bold ${activeNode.gap < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                          {activeNode.gap > 0 ? `+${activeNode.gap}%` : `${activeNode.gap}%`} {activeNode.gap < 0 ? '↓' : '↑'}
                        </span>
                      )}
                      {selectedNodeId && (
                        <button 
                          type="button" 
                          onClick={() => setSelectedNodeId(null)}
                          className="text-[11px] font-bold text-blue-600 transition hover:text-blue-700"
                        >
                          Back to Overview ✕
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="mt-2.5 text-base font-bold text-slate-900 leading-snug">{activeNode.skill}</h3>
                  
                  {/* Readiness Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Graduate Readiness</span>
                      <span className="text-slate-800">{activeNode.coverage}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${activeNode.coverage}%` }} />
                    </div>
                  </div>
                  
                  {/* Market Demand Progress Bar */}
                  <div className="mt-3.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Market Demand</span>
                      <span className="text-slate-800">{activeNode.demand}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: `${activeNode.demand}%` }} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 border-t border-slate-100 pt-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800">Curriculum Intervention</p>
                  <p className="mt-1.5 rounded-lg border border-slate-200/60 bg-slate-100/50 p-3 text-xs font-medium leading-5 text-slate-600">
                    {getInterventionRecommendation(activeNode.skill)}
                  </p>
                </div>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {dynamicStats.map((stat) => (
            <QuadrantStatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
      </div>

      <aside className="self-start space-y-5 rounded-[8px] border border-violet-100 bg-gradient-to-br from-white via-violet-50/60 to-blue-50 p-5 shadow-[0_18px_48px_rgba(79,70,229,0.1)]">
        <section>
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <h3 className="text-lg font-medium text-slate-950">Key Insights</h3>
          </div>
          <div className="mt-4 space-y-3">
            {dynamicInsights.map((insight) => (
              <article key={insight.text} className="flex gap-3 rounded-[8px] border border-white bg-white/80 p-4 shadow-sm">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-1 ${metricToneClasses[insight.tone]}`}>
                  {insight.icon}
                </span>
                <p className="text-sm font-medium leading-6 text-slate-700">{insight.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-100 pt-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
              TP
            </span>
            <h3 className="text-lg font-medium text-slate-950">Top Priority Actions</h3>
          </div>
          <div className="mt-4 space-y-3">
            {dynamicActions.map((action, index) => (
              <article key={action.title} className="flex items-center gap-3 rounded-[8px] border border-white bg-white/80 p-3 shadow-sm">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] text-xs font-bold ring-1 ${index < 2 ? metricToneClasses.rose : metricToneClasses.amber}`}>
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-950">{action.title}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{action.detail}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${metricToneClasses[action.tone]}`}>
                  {action.impact}
                </span>
              </article>
            ))}
          </div>
        </section>

        <div className="rounded-[8px] bg-violet-50/70 p-4 ring-1 ring-violet-100">
          <p className="text-sm font-semibold text-violet-800">Focus on the right gaps. Maximize impact.</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">Strategic improvement leads to measurable growth.</p>
        </div>
      </aside>
    </section>
  )
}

function FilterDropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-11 min-w-[180px] items-center justify-between gap-3 rounded-[8px] border px-3 text-sm font-semibold shadow-sm transition ${
          open
            ? 'border-blue-300 bg-blue-50 text-blue-700'
            : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'
        }`}
      >
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium text-slate-400">{label}</span>
          <span className="mt-0.5 whitespace-nowrap">{value}</span>
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-1.5 min-w-[180px] overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => { onChange(option); setOpen(false) }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700 ${
                option === value ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
              }`}
            >
              {option === value && (
                <svg className="h-3.5 w-3.5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              )}
              {option !== value && <span className="h-3.5 w-3.5 shrink-0" />}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProgressCell({ value, tone }) {
  const toneClass = tone === 'green' ? 'bg-emerald-500' : 'bg-blue-500'
  return (
    <div className="min-w-[128px]">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${toneClass}`} style={{ width: `${Math.max(value, 6)}%` }} />
      </div>
    </div>
  )
}

function GapCell({ gap }) {
  const isImportant = gap <= -20
  const width = Math.min(Math.abs(gap), 50) * 2
  return (
    <div className="min-w-[112px]">
      <span className={`text-sm font-medium ${isImportant ? 'text-rose-600' : gap < 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
        {gap > 0 ? `+${gap}%` : `${gap}%`}
      </span>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        {isImportant ? <div className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-500" style={{ width: `${width}%` }} /> : null}
      </div>
    </div>
  )
}

function SkillSetupModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-sm">
      <section className="w-full max-w-xl rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase text-blue-600">Program Skills Setup</p>
            <h2 className="mt-2 text-xl font-medium text-slate-950">Manage Program Skills</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Define course skill coverage so AI can compare curriculum signals with market demand.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-slate-200 text-sm font-medium text-slate-500 hover:bg-slate-50"
            aria-label="Close program skills setup"
          >
            ✕
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {[
            'Select program template',
            'Upload course outline',
            'Review AI-extracted skills',
            'Manually adjust skill coverage',
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-4 rounded-[8px] border border-slate-200 bg-slate-50/70 p-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-950">{item}</p>
                <p className="mt-1 text-xs text-slate-500">Placeholder workflow for the prototype.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-[8px] border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Cancel
          </button>
          <button type="button" onClick={onClose} className="rounded-[8px] bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200">
            Save setup draft
          </button>
        </div>
      </section>
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function UniversityOverviewPage() {
  const [showSkillSetup, setShowSkillSetup] = useState(false)

  const programOptions = Object.keys(programData)
  const [selectedProgram, setSelectedProgram] = useState('BSc Computer Science')

  const currentProgram = programData[selectedProgram]
  const [selectedCohort, setSelectedCohort] = useState(currentProgram.cohorts[2] || currentProgram.cohorts[0])
  const [selectedSemester, setSelectedSemester] = useState(currentProgram.semesters[0])

  // When program changes, reset cohort/semester to sensible defaults
  function handleProgramChange(program) {
    setSelectedProgram(program)
    const pd = programData[program]
    setSelectedCohort(pd.cohorts[2] || pd.cohorts[0])
    setSelectedSemester(pd.semesters[0])
  }

  // Resolve current data slice
  const cohortKey = selectedCohort in currentProgram.cohortData ? selectedCohort : currentProgram.cohorts[0]
  const semesterKey = selectedSemester in currentProgram.cohortData[cohortKey]
    ? selectedSemester
    : currentProgram.semesters[0]

  const { metrics, skills } = currentProgram.cohortData[cohortKey][semesterKey]
  const { aiInsight, potentialImpact, advisorFocus } = currentProgram

  return (
    <div className="mx-auto max-w-[1560px] space-y-6">
      <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase text-blue-600">University Workspace</p>
          <h1 className="mt-2 text-3xl font-medium text-slate-950">University Career Intelligence Hub</h1>
          <p className="mt-2 text-base leading-7 text-slate-500">
            AI-powered insights to strengthen curriculum relevance and graduate outcomes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <FilterDropdown
            label="Program"
            value={selectedProgram}
            options={programOptions}
            onChange={handleProgramChange}
          />
          <FilterDropdown
            label="Cohort"
            value={selectedCohort}
            options={currentProgram.cohorts}
            onChange={setSelectedCohort}
          />
          <FilterDropdown
            label="Semester"
            value={selectedSemester}
            options={currentProgram.semesters}
            onChange={setSelectedSemester}
          />
          <button
            type="button"
            className="flex h-11 items-center rounded-[8px] bg-blue-600 px-4 text-sm font-medium text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
          >
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Metrics */}
      <section className="rounded-[8px] border border-blue-100 bg-white/95 p-5 shadow-[0_18px_48px_rgba(30,64,175,0.08)]">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-medium text-slate-950">Program Intelligence at a Glance</h2>
            <p className="mt-1 text-sm text-slate-500">
              {selectedProgram} · {selectedCohort} · {selectedSemester}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowSkillSetup(true)}
            className="w-fit rounded-[8px] border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
          >
            Manage Program Skills
          </button>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <article key={metric.label} className="min-w-0 border-l border-slate-100 pl-4 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-4 xl:first:border-l-0 xl:first:pl-0">
              <p className="text-xs font-medium uppercase text-slate-400">{metric.label}</p>
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <p className="text-2xl font-medium text-slate-950">{metric.value}</p>
                <span className={`mb-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${metricToneClasses[metric.tone]}`}>
                  {metric.status}
                </span>
              </div>
              <p className={`mt-2 text-sm font-medium ${changeColor(metric.change)}`}>{metric.change}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{metric.helper}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Table + AI Advisor */}
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
        <section className="min-w-0 rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-slate-950">Top Market Skills vs Program Coverage</h2>
              <p className="mt-1 text-sm text-slate-500">Table-style intelligence view of demand, readiness, and intervention priority.</p>
            </div>
            <span className="w-fit rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 ring-1 ring-violet-100">
              {selectedProgram}
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left">
              <thead>
                <tr className="text-xs font-medium uppercase text-slate-400">
                  <th className="rounded-l-[8px] bg-slate-50 px-3 py-3">Rank</th>
                  <th className="bg-slate-50 px-3 py-3">Skill</th>
                  <th className="bg-slate-50 px-3 py-3">Market Demand</th>
                  <th className="bg-slate-50 px-3 py-3">Program Coverage</th>
                  <th className="bg-slate-50 px-3 py-3">Coverage Gap</th>
                  <th className="rounded-r-[8px] bg-slate-50 px-3 py-3">Priority</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((row) => (
                  <tr key={row.skill} className="border-b border-slate-100">
                    <td className="border-b border-slate-100 px-3 py-4 text-sm font-medium text-slate-500">{row.rank}</td>
                    <td className="border-b border-slate-100 px-3 py-4 text-sm font-medium text-slate-950">{row.skill}</td>
                    <td className="border-b border-slate-100 px-3 py-4"><ProgressCell value={row.demand} tone="blue" /></td>
                    <td className="border-b border-slate-100 px-3 py-4"><ProgressCell value={row.coverage} tone="green" /></td>
                    <td className="border-b border-slate-100 px-3 py-4"><GapCell gap={row.gap} /></td>
                    <td className="border-b border-slate-100 px-3 py-4">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${priorityClasses[row.priority]}`}>
                        {row.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs font-medium text-slate-500">
            Market demand data based on mock job postings in the past 60 days
          </p>
        </section>

        <aside className="rounded-[8px] border border-violet-100 bg-gradient-to-br from-white via-violet-50/60 to-blue-50 p-5 shadow-[0_18px_48px_rgba(79,70,229,0.1)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-sm font-semibold text-violet-700 shadow-sm ring-1 ring-violet-100">
              AI
            </span>
            <div>
              <p className="text-xs font-medium uppercase text-violet-600">AI University Advisor</p>
              <h2 className="text-lg font-medium text-slate-950">Key Insight</h2>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">{aiInsight}</p>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-950">Recommended Focus</h3>
            <div className="mt-3 space-y-3">
              {advisorFocus.map((item) => (
                <div key={item.title} className="rounded-[8px] border border-white bg-white/80 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-slate-950">{item.title}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${metricToneClasses[item.tone]}`}>
                      {item.impact}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-500">{item.students}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-[8px] border border-blue-100 bg-white/85 p-4">
            <p className="text-xs font-medium uppercase text-slate-400">Potential Impact</p>
            <p className="mt-2 text-3xl font-semibold text-blue-700">{potentialImpact}</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">readiness improvement</p>
            <p className="mt-1 text-xs text-slate-500">Estimated: 3-6 months</p>
          </div>
        </aside>
      </section>

      <StrategicQuadrantSection
        skills={skills}
        metrics={metrics}
        potentialImpact={potentialImpact}
      />

      {showSkillSetup ? <SkillSetupModal onClose={() => setShowSkillSetup(false)} /> : null}
    </div>
  )
}
