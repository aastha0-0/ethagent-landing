'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return value
}

const STATS = [
  { value: 2400, suffix: '+', label: 'Agents Deployed', prefix: '' },
  { value: 98,   suffix: '%', label: 'Uptime SLA',      prefix: '' },
  { value: 1,    suffix: 'B+', label: 'TVL Managed',    prefix: '$' },
  { value: 40,   suffix: '+', label: 'DeFi Protocols',  prefix: '' },
]

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const v0 = useCountUp(STATS[0].value, 1600, triggered)
  const v1 = useCountUp(STATS[1].value, 1200, triggered)
  const v2 = useCountUp(STATS[2].value, 1000, triggered)
  const v3 = useCountUp(STATS[3].value, 1400, triggered)
  const values = [v0, v1, v2, v3]

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#01010d',
        zIndex: 1,
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div className="section-divider" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
            gap: '1px',
            background: 'var(--border-muted)',
            border: '1px solid var(--border-muted)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal"
              style={{
                padding: 'clamp(28px, 3vw, 36px)',
                background: '#01010d',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div
                className="stat-number"
                style={{ fontFamily: "'TWKLausanne', 'DM Sans', sans-serif" }}
              >
                {stat.prefix}
                {values[i].toLocaleString()}
                <span style={{ color: '#627EEA' }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'rgba(237,237,248,0.48)',
                  letterSpacing: '-0.01em',
                  fontWeight: 300,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial / quote block */}
        <div
          className="reveal"
          style={{
            border: '1px solid var(--border-default)',
            padding: 'clamp(32px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner marks */}
          <span style={{ position: 'absolute', top: 20, left: 20, fontSize: 11, color: 'rgba(98,126,234,0.4)', fontFamily: 'GeistMono, monospace', letterSpacing: '0.08em' }}>[ SIGNAL ]</span>

          <blockquote
            style={{
              fontSize: 'clamp(20px, 3vw, 32px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.3,
              color: '#ededf8',
              maxWidth: 760,
              marginTop: 24,
            }}
          >
            "ÆTHER turned my Ethereum wallet into a fully automated DeFi operator.
            Three weeks in, it's capturing yield and hedging risk I never had
            the time to manage manually."
          </blockquote>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            {/* Avatar placeholder */}
            <div
              style={{
                width: 36,
                height: 36,
                border: '1px solid var(--border-default)',
                background: 'rgba(98,126,234,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                color: '#627EEA',
                fontFamily: 'GeistMono, monospace',
              }}
            >
              0x
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#ededf8', letterSpacing: '-0.01em' }}>
                anon.eth
              </div>
              <div style={{ fontSize: 11, color: 'rgba(237,237,248,0.4)', marginTop: 2, fontFamily: 'GeistMono, monospace' }}>
                Waitlist — Early Access
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
