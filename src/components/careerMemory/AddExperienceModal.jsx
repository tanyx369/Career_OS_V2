import React, { useEffect, useRef, useState } from 'react'
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  FileText,
  FolderKanban,
  GraduationCap,
  Handshake,
  Link as LinkIcon,
  Plus,
  Sparkles,
  Tag as TagIcon,
  Trophy,
  X,
} from 'lucide-react'

// The six primary Career Memory categories the user can log an entry
// under. Each one carries an icon, tone (used in accents), a friendly
// role placeholder, and a logoTone that the timeline card will use to
// colour the entry's avatar after it's added.
const EXPERIENCE_TYPES = [
  {
    id: 'experience',
    label: 'Experience',
    description: 'Internship, job, or work exposure',
    icon: Briefcase,
    tone: 'blue',
    rolePlaceholder: 'Software Engineering Intern',
    logoTone: 'emerald',
  },
  {
    id: 'education',
    label: 'Education',
    description: 'Degree, coursework, or milestone',
    icon: GraduationCap,
    tone: 'indigo',
    rolePlaceholder: "Dean's List — Semester 4",
    logoTone: 'blue',
  },
  {
    id: 'project',
    label: 'Project',
    description: 'Personal build or team project',
    icon: FolderKanban,
    tone: 'violet',
    rolePlaceholder: 'NLP Sentiment Pipeline',
    logoTone: 'blue',
  },
  {
    id: 'competition',
    label: 'Competition',
    description: 'Hackathon, case comp, or award',
    icon: Trophy,
    tone: 'amber',
    rolePlaceholder: 'Hackathon — Top 3 Finalist',
    logoTone: 'amber',
  },
  {
    id: 'volunteering',
    label: 'Leadership',
    description: 'Society role or volunteer work',
    icon: Handshake,
    tone: 'emerald',
    rolePlaceholder: 'Vice President — Computing Society',
    logoTone: 'rose',
  },
  {
    id: 'certification',
    label: 'Certification',
    description: 'Course or verified credential',
    icon: Award,
    tone: 'rose',
    rolePlaceholder: 'AWS Cloud Practitioner',
    logoTone: 'blue',
  },
]

const TYPE_TONES = {
  blue: {
    ring: 'ring-blue-200',
    activeBg: 'bg-blue-50/85',
    activeBorder: 'border-blue-300',
    iconBg: 'bg-blue-100/80 text-blue-600',
    dot: 'bg-blue-600',
  },
  indigo: {
    ring: 'ring-indigo-200',
    activeBg: 'bg-indigo-50/85',
    activeBorder: 'border-indigo-300',
    iconBg: 'bg-indigo-100/80 text-indigo-600',
    dot: 'bg-indigo-600',
  },
  violet: {
    ring: 'ring-violet-200',
    activeBg: 'bg-violet-50/85',
    activeBorder: 'border-violet-300',
    iconBg: 'bg-violet-100/80 text-violet-600',
    dot: 'bg-violet-600',
  },
  amber: {
    ring: 'ring-amber-200',
    activeBg: 'bg-amber-50/85',
    activeBorder: 'border-amber-300',
    iconBg: 'bg-amber-100/80 text-amber-600',
    dot: 'bg-amber-500',
  },
  emerald: {
    ring: 'ring-emerald-200',
    activeBg: 'bg-emerald-50/85',
    activeBorder: 'border-emerald-300',
    iconBg: 'bg-emerald-100/80 text-emerald-600',
    dot: 'bg-emerald-600',
  },
  rose: {
    ring: 'ring-rose-200',
    activeBg: 'bg-rose-50/85',
    activeBorder: 'border-rose-300',
    iconBg: 'bg-rose-100/80 text-rose-600',
    dot: 'bg-rose-500',
  },
}

// ── Small labelled input helper ──────────────────────────────────────
function IconField({ icon: Icon, label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#637094]">
        <Icon size={13} className="text-blue-600" strokeWidth={2.4} />
        {label}
        {hint && <span className="text-[10px] font-medium normal-case text-[#9aa6c3]">· {hint}</span>}
      </span>
      {children}
    </label>
  )
}

const INPUT_CLASS =
  'w-full rounded-xl border border-white/70 bg-white/85 px-3.5 py-2.5 text-sm font-semibold text-[#2c3656] outline-none transition placeholder:text-[#9aa6c3] focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100'

// ── Modal ────────────────────────────────────────────────────────────
export default function AddExperienceModal({ open, onClose, onSubmit }) {
  const [typeId, setTypeId] = useState('experience')
  const [title, setTitle] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState([])
  const [skillDraft, setSkillDraft] = useState('')
  const [evidenceUrl, setEvidenceUrl] = useState('')
  const [error, setError] = useState('')
  const firstFieldRef = useRef(null)

  const activeType = EXPERIENCE_TYPES.find((t) => t.id === typeId) ?? EXPERIENCE_TYPES[0]
  const isValid = title.trim().length > 0 && organisation.trim().length > 0 && dateRange.trim().length > 0

  // Reset form when the modal reopens so previous drafts don't leak in.
  useEffect(() => {
    if (!open) return
    setTypeId('experience')
    setTitle('')
    setOrganisation('')
    setDateRange('')
    setDescription('')
    setSkills([])
    setSkillDraft('')
    setEvidenceUrl('')
    setError('')
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 60)
    return () => window.clearTimeout(timer)
  }, [open])

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return
    const handler = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const addSkill = (raw) => {
    const clean = raw.trim().replace(/,+$/, '')
    if (!clean) return
    setSkills((current) => (current.includes(clean) ? current : [...current, clean]))
    setSkillDraft('')
  }

  const removeSkill = (skill) => setSkills((current) => current.filter((s) => s !== skill))

  const handleSkillKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      addSkill(skillDraft)
    } else if (event.key === 'Backspace' && !skillDraft && skills.length > 0) {
      removeSkill(skills[skills.length - 1])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isValid) {
      setError('Add a title, organisation, and date range to continue.')
      return
    }
    // If the user still has an unadded chip in the draft, capture it.
    const finalSkills = skillDraft.trim() ? [...skills, skillDraft.trim()] : skills

    const logoInitial = organisation
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? '')
      .join('') || title.trim()[0]?.toUpperCase() || 'M'

    const timelineEntry = {
      id: `mem-${Date.now()}`,
      logo: logoInitial,
      logoTone: activeType.logoTone,
      title: `${title.trim()} — ${organisation.trim()}`,
      period: dateRange.trim(),
      year: dateRange.trim(),
      tags: finalSkills.slice(0, 3),
      verified: false,
      signalStrength: 2,
      details: {
        type: activeType.label,
        title: title.trim(),
        organisation: organisation.trim(),
        dateRange: dateRange.trim(),
        status: 'Self-reported',
        description: description.trim() || 'No description provided yet.',
        skills: finalSkills,
        evidence: evidenceUrl.trim() ? [evidenceUrl.trim()] : [],
        insight: 'AI will analyse this entry shortly and surface signals it adds to your profile.',
        actions: ['Add an outcome or metric', 'Attach a link or screenshot'],
      },
    }

    onSubmit?.(timelineEntry)
    onClose?.()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/15 px-4 py-6 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-experience-title"
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(239,246,255,0.74))] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-blue-100/50 backdrop-blur-2xl"
      >
        {/* ── Header ───────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)]">
              <Sparkles size={20} strokeWidth={2.2} />
            </span>
            <div>
              <h2 id="add-experience-title" className="text-lg font-black text-[#11194a] sm:text-xl">
                Add to Career Memory
              </h2>
              <p className="mt-0.5 text-sm font-semibold text-[#637094]">
                Log an experience so your Career Memory grows stronger.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#7382a1] transition hover:bg-blue-50 hover:text-blue-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* ── Type picker ───────────────────────────────── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#637094]">
              What kind of entry?
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {EXPERIENCE_TYPES.map((type) => {
                const Icon = type.icon
                const tones = TYPE_TONES[type.tone]
                const active = type.id === typeId
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setTypeId(type.id)}
                    className={`group flex items-start gap-2.5 rounded-2xl border p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all ${
                      active
                        ? `${tones.activeBg} ${tones.activeBorder} ring-2 ${tones.ring}`
                        : 'border-white/70 bg-white/60 hover:border-blue-200 hover:bg-white/85'
                    }`}
                    aria-pressed={active}
                  >
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${tones.iconBg}`}>
                      <Icon size={16} strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate text-sm font-black text-[#11194a]">{type.label}</span>
                        {active && (
                          <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${tones.dot}`} aria-hidden="true" />
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] font-semibold text-[#7382a1]">
                        {type.description}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Title & organisation ───────────────────── */}
          <div className="grid gap-3 sm:grid-cols-2">
            <IconField icon={Sparkles} label="Title / Role">
              <input
                ref={firstFieldRef}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder={activeType.rolePlaceholder}
                className={INPUT_CLASS}
                required
              />
            </IconField>
            <IconField icon={Building2} label="Organisation">
              <input
                value={organisation}
                onChange={(event) => setOrganisation(event.target.value)}
                placeholder="Company, university, or club"
                className={INPUT_CLASS}
                required
              />
            </IconField>
          </div>

          {/* ── Date range ───────────────────────────────── */}
          <IconField icon={Calendar} label="Date range" hint="e.g. Jun–Aug 2024 or 2023–2024">
            <input
              value={dateRange}
              onChange={(event) => setDateRange(event.target.value)}
              placeholder="Jun – Aug 2024"
              className={INPUT_CLASS}
              required
            />
          </IconField>

          {/* ── Description ─────────────────────────────── */}
          <IconField icon={FileText} label="What happened?" hint="A few lines is fine">
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What you did, what you delivered, and any measurable outcome…"
              rows={3}
              className={`${INPUT_CLASS} resize-none`}
            />
          </IconField>

          {/* ── Skills (chip input) ──────────────────────── */}
          <IconField icon={TagIcon} label="Skills used" hint="Press Enter or comma to add">
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/70 bg-white/85 px-3 py-2 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50/85 px-2.5 py-1 text-xs font-bold text-blue-700"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="rounded-full p-0.5 text-blue-500 transition hover:bg-blue-100 hover:text-blue-700"
                    aria-label={`Remove ${skill}`}
                  >
                    <X size={11} strokeWidth={2.6} />
                  </button>
                </span>
              ))}
              <input
                value={skillDraft}
                onChange={(event) => {
                  const value = event.target.value
                  if (value.endsWith(',')) {
                    addSkill(value)
                  } else {
                    setSkillDraft(value)
                  }
                }}
                onKeyDown={handleSkillKeyDown}
                onBlur={() => skillDraft.trim() && addSkill(skillDraft)}
                placeholder={skills.length === 0 ? 'Python, Leadership, SQL…' : ''}
                className="flex-1 min-w-[8rem] bg-transparent text-sm font-semibold text-[#2c3656] outline-none placeholder:text-[#9aa6c3]"
              />
            </div>
          </IconField>

          {/* ── Evidence link (optional) ─────────────────── */}
          <IconField icon={LinkIcon} label="Evidence link" hint="Optional but strengthens signal">
            <input
              type="url"
              value={evidenceUrl}
              onChange={(event) => setEvidenceUrl(event.target.value)}
              placeholder="https://github.com/… or Google Drive link"
              className={INPUT_CLASS}
            />
          </IconField>

          {/* ── Footer ───────────────────────────────────── */}
          {error && (
            <p className="rounded-xl border border-rose-100 bg-rose-50/80 px-3 py-2 text-xs font-bold text-rose-700">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#7382a1]">
              <CheckCircle2 size={12} className="text-emerald-500" strokeWidth={2.4} />
              Entries start as self-reported. Add a link to verify.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Plus size={14} strokeWidth={2.6} />
                Add to Career Memory
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
