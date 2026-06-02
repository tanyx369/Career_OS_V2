import React, { useState } from 'react'
import ExperienceInput from '../components/memory/ExperienceInput'
import ExperienceTimeline from '../components/memory/ExperienceTimeline'
import EvidenceIntegrityCard from '../components/memory/EvidenceIntegrityCard'
import MemoryAIInsightCard from '../components/memory/MemoryAIInsightCard'
import ProfileSummaryCard from '../components/memory/ProfileSummaryCard'
import TopSkillsCard from '../components/memory/TopSkillsCard'
import { extractSkillsFromText } from '../data/mockAi'
import { useCareerStore } from '../store/useCareerStore'

export default function MemoryProfilePage() {
  const [text, setText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Project')
  const [isExtracting, setIsExtracting] = useState(false)
  const experiences = useCareerStore((state) => state.experiences)
  const addExperience = useCareerStore((state) => state.addExperience)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsExtracting(true)
    const extracted = await extractSkillsFromText(text)
    addExperience({
      ...extracted,
      type: selectedCategory,
      role: selectedCategory === 'Internship' ? 'Intern' : extracted.role,
    })
    setText('')
    setSelectedCategory('Project')
    setIsExtracting(false)
  }

  return (
    <div className="min-h-full bg-[radial-gradient(circle_at_top_right,#f2ecff,transparent_28%),linear-gradient(135deg,#ffffff_0%,#fbfaff_46%,#f7f4ff_100%)] pb-2 text-[#11104a]">
      <header className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wide text-violet-700">Student Workspace</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Career Memory</h2>
        <p className="mt-2 text-sm font-medium text-slate-500">Your journey, your story, your evidence.</p>
      </header>

      <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_320px]">
        <main className="min-w-0 space-y-6">
          <ExperienceInput
            text={text}
            setText={setText}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isExtracting={isExtracting}
            onSubmit={handleSubmit}
          />
          <ExperienceTimeline experiences={experiences} />
        </main>

        <aside className="grid gap-5 md:grid-cols-2 2xl:sticky 2xl:top-6 2xl:block 2xl:self-start 2xl:space-y-5">
          <ProfileSummaryCard />
          <TopSkillsCard />
          <MemoryAIInsightCard />
          <EvidenceIntegrityCard />
        </aside>
      </div>
    </div>
  )
}
