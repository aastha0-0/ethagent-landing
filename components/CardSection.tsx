'use client'

import { useEffect, useRef } from 'react'

export function CardSection() {
  const cardRef = useRef<HTMLDivElement>(null)

  /* Fade-in + scale-up when card enters view */
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.opacity = '1'
          card.style.transform = 'translateY(0) scale(1)'
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="access"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#01010d',
        overflow: 'hidden',
      }}
    >
      {/* Top fade — blends hero into card section */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          background: 'linear-gradient(to bottom, rgba(1,1,13,0.95), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Radial spotlight centred on card */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(96,128,160,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Very subtle dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(237,237,248,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}
      />

      {/* The card */}
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 440,
          margin: '0 24px',
          padding: '48px 44px 52px',
          border: '1px solid rgba(237,237,248,0.10)',
          background: 'rgba(237,237,248,0.015)',
          opacity: 0,
          transform: 'translateY(28px) scale(0.98)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Wireframe-style corner decorations on the card itself */}
        <CardCorner pos="tl" />
        <CardCorner pos="tr" />
        <CardCorner pos="bl" />
        <CardCorner pos="br" />

        {/* Logo */}
        <div style={{ marginBottom: 36 }}>
          <CardLogo />
        </div>

        {/* Label */}
        <p
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(237,237,248,0.3)',
            fontFamily: "'GeistMono', monospace",
            marginBottom: 16,
          }}
        >
          EARLY ACCESS
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#ededf8',
            marginBottom: 16,
          }}
        >
          Request early access
        </h2>

        <p
          style={{
            fontSize: 14,
            color: 'rgba(237,237,248,0.44)',
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: 36,
          }}
        >
          Be among the first to run autonomous agents on your Ethereum wallet.
          No keys shared. Non-custodial by design.
        </p>

        {/* Sign-in / access button */}
        <CornerButton>
          Sign In to Get Access
        </CornerButton>

        {/* Fine print */}
        <p
          style={{
            marginTop: 20,
            fontSize: 11,
            color: 'rgba(237,237,248,0.22)',
            letterSpacing: '0.02em',
          }}
        >
          Connect with your Ethereum wallet — no password required.
        </p>
      </div>
    </section>
  )
}

/* ── Card corner decoration ─────────────────────────────────────────────── */
function CardCorner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 14
  const offset = -1
  const style: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    borderColor: 'rgba(96,128,160,0.5)',
    borderStyle: 'solid',
  }
  if (pos === 'tl') Object.assign(style, { top: offset, left: offset, borderWidth: '1px 0 0 1px' })
  if (pos === 'tr') Object.assign(style, { top: offset, right: offset, borderWidth: '1px 1px 0 0' })
  if (pos === 'bl') Object.assign(style, { bottom: offset, left: offset, borderWidth: '0 0 1px 1px' })
  if (pos === 'br') Object.assign(style, { bottom: offset, right: offset, borderWidth: '0 1px 1px 0' })
  return <span style={style} />
}

/* ── Corner-bracket button ───────────────────────────────────────────────── */
function CornerButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="corner-btn" style={{ width: '100%', justifyContent: 'center' }}>
      <span className="cb-tl" />
      <span className="cb-tr" />
      <span className="cb-bl" />
      <span className="cb-br" />
      {children}
    </button>
  )
}

/* ── Minimal logo for the card ───────────────────────────────────────────── */
function CardLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <polygon
          points="10,1 19,10 10,13.5 1,10"
          fill="rgba(98,126,234,0.15)"
          stroke="rgba(98,126,234,0.6)"
          strokeWidth="1"
        />
        <polygon
          points="10,13.5 19,10 10,23 1,10"
          fill="rgba(98,126,234,0.05)"
          stroke="rgba(98,126,234,0.3)"
          strokeWidth="1"
          strokeDasharray="2 1.5"
        />
      </svg>
      <span
        style={{
          fontSize: 13,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(237,237,248,0.5)',
          fontFamily: "'GeistMono', monospace",
          fontWeight: 400,
        }}
      >
        ETHAGENT
      </span>
    </div>
  )
}
