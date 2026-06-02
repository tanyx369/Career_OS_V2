// Mock AI helper for the Memory Profile demo. Replace this with an API call
// when real skill extraction is available.
export function extractSkillsFromText(text) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        title: text.trim() ? text.slice(0, 58) : 'New Student Experience',
        type: 'Project',
        role: 'Contributor',
        date: 'Jun 2026',
        summary: text.trim()
          ? `AI summarized this entry from your note: ${text.slice(0, 110)}${text.length > 110 ? '...' : ''}`
          : 'AI extracted a concise career evidence summary from the submitted experience.',
        evidenceLinks: ['Portfolio Note'],
        credibility: 'Verified',
        extractedSkills: [
          { name: 'Problem Solving', level: 'Intermediate', credibility: 86 },
          { name: 'Collaboration', level: 'Intermediate', credibility: 82 },
          { name: 'Communication', level: 'Emerging', credibility: 76 },
        ],
      })
    }, 800)
  })
}
