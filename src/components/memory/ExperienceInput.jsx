import React from 'react'
import Button from '../ui/Button'

const categories = ['Project', 'Club', 'Work', 'Hackathon', 'Course', 'Internship', 'Certificate']

export default function ExperienceInput({ text, setText, selectedCategory, setSelectedCategory, isExtracting, onSubmit }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-slate-950">Add a new experience</h3>
      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <textarea
          className="min-h-28 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          placeholder="Describe your experience... e.g. Led a team of 4 to build an AI chatbot for a hackathon."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <div className="flex flex-col gap-3 rounded-xl border border-dashed border-blue-200 bg-blue-50/40 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700">Upload files or drag and drop</p>
            <p className="mt-1 text-xs text-slate-500">PDF, images, links, docs. Max 10MB</p>
          </div>
          <Button type="submit" disabled={isExtracting} className="shrink-0">
            {isExtracting ? 'Extracting...' : 'Add Experience'}
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-blue-700 hover:ring-blue-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </form>
    </section>
  )
}
