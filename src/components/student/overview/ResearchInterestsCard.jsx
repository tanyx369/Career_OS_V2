import React from 'react'
import { Plus, Search, X } from 'lucide-react'

export default function ResearchInterestsCard({ interests }) {
  const [interestList, setInterestList] = React.useState(interests)
  const [isAdding, setIsAdding] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [newInterest, setNewInterest] = React.useState('')

  const handleAddSubmit = (e) => {
    e.preventDefault()
    if (!newInterest.trim()) return
    // Prevent duplicate interests
    if (!interestList.includes(newInterest.trim())) {
      setInterestList((prev) => [...prev, newInterest.trim()])
    }
    setNewInterest('')
    setIsAdding(false)
  }

  const handleDelete = (interest) => {
    setInterestList((prev) => prev.filter((i) => i !== interest))
  }

  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/90 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600 shadow-sm">
            <Search size={17} strokeWidth={2} />
          </div>
          <h2 className="text-base font-bold text-[#11104a]">Research Interests</h2>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsEditing(!isEditing)
            setIsAdding(false)
          }}
          className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-all ${
            isEditing
              ? 'border-violet-600 bg-violet-600 text-white shadow-sm hover:bg-violet-700'
              : 'border-violet-100 text-violet-700 hover:bg-violet-50'
          }`}
        >
          {isEditing ? 'Done' : 'Edit'}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {interestList.map((interest) => (
          <span
            key={interest}
            className="flex items-center gap-1.5 rounded-xl bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 ring-1 ring-violet-100 transition-all duration-200 hover:bg-violet-100 hover:shadow-sm"
          >
            {interest}
            {isEditing && (
              <button
                type="button"
                onClick={() => handleDelete(interest)}
                className="flex h-4.5 w-4.5 items-center justify-center rounded-full hover:bg-violet-200 transition-colors"
                aria-label={`Delete interest ${interest}`}
              >
                <X size={10} className="text-violet-800" strokeWidth={3} />
              </button>
            )}
          </span>
        ))}
      </div>

      {isAdding ? (
        <form onSubmit={handleAddSubmit} className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            placeholder="Type interest (e.g. NLP)..."
            className="h-10 flex-1 rounded-xl border border-violet-200 px-3 text-xs outline-none focus:border-violet-400"
            autoFocus
          />
          <button
            type="submit"
            className="h-10 rounded-xl bg-violet-600 px-3 text-xs font-bold text-white hover:bg-violet-700 transition"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => { setIsAdding(false); setNewInterest('') }}
            className="h-10 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
          >
            ✕
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsAdding(true)
            setIsEditing(false)
          }}
          className="mt-4 flex h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-violet-100 bg-white text-sm font-bold text-[#11104a] transition-all hover:bg-violet-50 hover:shadow-sm"
        >
          <Plus size={15} strokeWidth={2} />
          Add Interest
        </button>
      )}
    </section>
  )
}
