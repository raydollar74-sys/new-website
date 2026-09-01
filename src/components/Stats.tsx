'use client'

import { useEffect, useState } from 'react'

const stats = [
  { value: 250, suffix: 'kg', label: 'DAILY REFINING CAPACITY', icon: '⚙️' },
  { value: 7, suffix: '+', label: 'COUNTRIES SERVED', icon: '🌍' },
  { value: 3, suffix: '+', label: 'YEARS EXPERIENCE', icon: '📅' },
  { value: 27, suffix: '+', label: 'CLIENTS SERVED', icon: '👥' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                <CountUp end={stat.value} />{stat.suffix}
              </div>
              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const increment = end / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [end])

  return <span>{count.toLocaleString()}</span>
}