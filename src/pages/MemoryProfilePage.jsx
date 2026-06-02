import React, { useState } from 'react'
import ExperienceInput from '../components/memory/ExperienceInput'
import ExperienceTimeline from '../components/memory/ExperienceTimeline'
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
    <div className="w-full">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Memory Profile</h2>
        <p className="mt-1 text-sm text-slate-500">Your journey. Your story. Your evidence.</p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
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

        <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <ProfileSummaryCard />
          <TopSkillsCard />
        </aside>
      </div>
    </div>
  )
}
