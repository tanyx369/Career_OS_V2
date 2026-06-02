import React from 'react'

function polarPoint(index, total, value, radius = 96, center = 120) {
  const angle = -90 + (360 / total) * index
  const radians = (Math.PI / 180) * angle
  const scaledRadius = radius * (value / 100)
  return {
    x: center + scaledRadius * Math.cos(radians),
    y: center + scaledRadius * Math.sin(radians),
  }
}

export default function RadarChartMock({ data }) {
  const center = 120
  const rings = [0.33, 0.66, 1]
  const polygonPoints = data.map((item, index) => polarPoint(index, data.length, item.value, 92, center))
  const polygon = polygonPoints.map((point) => `${point.x},${point.y}`).join(' ')

  return (
    <div className="mx-auto max-w-sm">
      <svg viewBox="0 0 240 240" className="h-72 w-full">
        {rings.map((ring) => {
          const points = data.map((_, index) => polarPoint(index, data.length, ring * 100, 92, center))
          return (
            <polygon
              key={ring}
              points={points.map((point) => `${point.x},${point.y}`).join(' ')}
              fill="none"
              stroke="#e0e7ff"
              strokeWidth="1"
            />
          )
        })}
        {data.map((_, index) => {
          const end = polarPoint(index, data.length, 100, 92, center)
          return <line key={index} x1={center} y1={center} x2={end.x} y2={end.y} stroke="#e0e7ff" strokeWidth="1" />
        })}
        <polygon points={polygon} fill="rgba(99,102,241,0.18)" stroke="#6366f1" strokeWidth="2" />
        {polygonPoints.map((point, index) => (
          <circle key={data[index].label} cx={point.x} cy={point.y} r="3.5" fill="#4f46e5" />
        ))}
        {data.map((item, index) => {
          const labelPoint = polarPoint(index, data.length, 116, 92, center)
          return (
            <text
              key={item.label}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-600 text-[9px] font-semibold"
            >
              {item.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
