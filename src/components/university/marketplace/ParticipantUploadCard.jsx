import React from 'react'

export default function ParticipantUploadCard({ uploadedFile, participantCount, onToast }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-base font-semibold text-slate-950">2. Participant Upload</h2>
      <p className="mt-2 text-sm text-slate-500">Upload participant list to start AI skill suggestion.</p>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <button
          type="button"
          onClick={() => onToast('Upload area is a visual mock for now.')}
          className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-dashed border-blue-300 bg-blue-50/30 px-4 text-center text-sm font-semibold text-blue-700"
        >
          Upload
          <span className="mt-2 text-xs font-normal leading-5 text-slate-500">Drag and drop CSV file here<br />or click to browse</span>
        </button>
        <div className="flex flex-col justify-center gap-3">
          <button type="button" onClick={() => onToast('Template download will be connected later.')} className="h-11 rounded-xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700">
            Download Template
          </button>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            or
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <button type="button" onClick={() => onToast('Manual entry will be connected later.')} className="h-11 rounded-xl border border-indigo-200 bg-white px-4 text-sm font-semibold text-indigo-700">
            Enter Participants Manually
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-b border-slate-100 pb-3 text-sm">
        <span className="font-semibold text-slate-800">Uploaded File</span>
        <span className="text-slate-600">{uploadedFile.fileName}</span>
        <span className="font-semibold text-emerald-600">{uploadedFile.status}</span>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-sm font-semibold text-slate-950">Preview ({participantCount} participants)</p>
        <div className="overflow-hidden rounded-xl border border-slate-100">
          <div className="grid grid-cols-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
            <span>Student ID</span>
            <span>Name</span>
            <span>Role</span>
          </div>
          {uploadedFile.previewParticipants.map((participant) => (
            <div key={`${participant.studentId}-${participant.name}`} className="grid grid-cols-3 border-t border-slate-100 px-3 py-2 text-xs text-slate-700">
              <span>{participant.studentId}</span>
              <span>{participant.name}</span>
              <span>{participant.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
