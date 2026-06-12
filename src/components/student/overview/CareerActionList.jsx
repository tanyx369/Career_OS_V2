import React from 'react'

const badgeStyles = {
  purple: 'bg-violet-50 text-violet-700',
  blue: 'bg-blue-50 text-blue-700',
  indigo: 'bg-indigo-50 text-indigo-700',
  rose: 'bg-rose-50 text-rose-600',
  green: 'bg-emerald-50 text-emerald-700',
}

export default function CareerActionList({ actions }) {
  const [actionList, setActionList] = React.useState(actions)
  const [isAdding, setIsAdding] = React.useState(false)
  const [newText, setNewText] = React.useState('')

  const handleToggle = (title) => {
    setActionList((prev) =>
      prev.map((a) => (a.title === title ? { ...a, completed: !a.completed } : a))
    );
  };

  const handleAddSubmit = (e) => {
    e.preventDefault()
    if (!newText.trim()) return
    setActionList((prev) => [
      ...prev,
      { title: newText.trim(), badge: 'Custom', tone: 'blue', completed: false },
    ])
    setNewText('')
    setIsAdding(false)
  }

  return (
    <section className="rounded-3xl border border-violet-100/80 bg-white/90 p-5 shadow-[0_18px_44px_rgba(88,63,188,0.08)]">
      <h2 className="text-base font-bold text-[#11104a]">Monthly Career Actions</h2>
      <div className="mt-4 divide-y divide-violet-50 border-t border-violet-100">
        {actionList.map((action) => (
          <label key={action.title} className="flex items-center gap-4 py-4 text-sm text-[#11104a] cursor-pointer">
            <input
              type="checkbox"
              checked={!!action.completed}
              onChange={() => handleToggle(action.title)}
              className="h-4 w-4 rounded border-violet-200 text-violet-600 focus:ring-violet-300 cursor-pointer"
            />
            <span className={`flex-1 font-medium transition-all ${action.completed ? 'line-through text-slate-400' : ''}`}>
              {action.title}
            </span>
            <span className={`rounded-xl px-3 py-1.5 text-xs font-bold ${badgeStyles[action.tone] ?? badgeStyles.purple}`}>
              {action.badge}
            </span>
          </label>
        ))}
      </div>

      {isAdding ? (
        <form onSubmit={handleAddSubmit} className="mt-4 flex items-center gap-3">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Type your new career action..."
            className="h-10 flex-1 rounded-xl border border-violet-200 px-3 text-sm outline-none focus:border-violet-400"
            autoFocus
          />
          <button
            type="submit"
            className="h-10 rounded-xl bg-violet-600 px-4 text-xs font-bold text-white hover:bg-violet-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => { setIsAdding(false); setNewText('') }}
            className="h-10 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="mt-4 text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
        >
          + Add your own action
        </button>
      )}
    </section>
  )
}
