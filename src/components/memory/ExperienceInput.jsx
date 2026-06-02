import React from 'react'

const categories = ['Project', 'Club', 'Work', 'Hackathon', 'Course', 'Internship', 'Certificate']

export default function ExperienceInput({ text, setText, selectedCategory, setSelectedCategory, isExtracting, onSubmit }) {
  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/92 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-[#11104a]">Add a new experience</h3>
          <p className="mt-1 text-xs font-medium text-slate-500">Turn projects, clubs, internships, and certificates into career evidence.</p>
        </div>
        <span className="rounded-xl bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">AI extraction ready</span>
      </div>
      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <textarea
          className="min-h-32 w-full resize-none rounded-2xl border border-violet-100 bg-white/90 px-4 py-4 text-sm leading-6 text-[#11104a] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100/70"
          placeholder="Describe your experience... e.g. Led a team of 4 to build an AI chatbot for a hackathon."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <div className="rounded-2xl border border-dashed border-violet-200 bg-violet-50/30 p-5 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50/70">
          <div>
            <p className="text-sm font-bold text-[#11104a]">Upload files or drag and drop</p>
            <p className="mt-1 text-xs font-medium text-slate-500">PDF, images, links, docs. Max 10MB</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-violet-50 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-100'
                    : 'bg-white text-[#3f3d78] ring-1 ring-violet-100 hover:bg-violet-50 hover:text-violet-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            type="submit"
            disabled={isExtracting}
            className="h-12 shrink-0 rounded-2xl bg-violet-600 px-6 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all duration-200 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isExtracting ? 'Extracting...' : 'Add Experience'}
          </button>
        </div>
      </form>
    </section>
  )
}
