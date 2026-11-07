'use client'

import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Replace with your actual form submission logic
    setSubmitted(true)
  }

  return (
    <>
      <section
        id="cta"
        style={{
          position: 'relative',
          background: '#01010d',
          zIndex: 1,
          padding: 'clamp(80px, 12vw, 160px) 0 clamp(60px, 8vw, 100px)',
        }}
      >
        <div className="section-divider" />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

          {/* Main CTA block */}
          <div
            className="reveal"
            style={{
              border: '1px solid var(--border-default)',
              padding: 'clamp(40px, 6vw, 80px)',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 'clamp(32px, 4vw, 64px)',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background ETH outline — decorative */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.03,
                pointerEvents: 'none',
              }}
            >
              <svg width="400" height="500" viewBox="0 0 400 500" fill="none">
                <polygon points="200,10 380,180 200,490 20,180" stroke="#627EEA" strokeWidth="1" fill="none"/>
                <polygon points="200,10 380,180 200,280 20,180" stroke="#627EEA" strokeWidth="0.5" fill="none" opacity="0.5"/>
                <line x1="20" y1="180" x2="380" y2="180" stroke="#627EEA" strokeWidth="0.5" opacity="0.4"/>
              </svg>
            </div>

            {/* Text side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span className="tag tag-eth">REQUEST EARLY ACCESS</span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#ededf8',
                }}
              >
                Let your wallet work while you don't.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'rgba(237,237,248,0.52)',
                  fontWeight: 300,
                  maxWidth: 420,
                }}
              >
                ÆTHER is in private beta. Join the waitlist and we'll send you
                early access as slots open — ordered by signup date.
              </p>
            </div>

            {/* Form side */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                minWidth: 'clamp(260px, 30vw, 340px)',
              }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid rgba(98,126,234,0.3)',
                    background: 'rgba(98,126,234,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#627EEA', fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#ededf8', fontWeight: 400 }}>
                      You're on the list
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: 'rgba(237,237,248,0.4)', fontFamily: 'GeistMono, monospace' }}>
                    We'll be in touch at {email}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@address.eth or email"
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      border: '1px solid var(--border-default)',
                      background: 'var(--accent-1)',
                      color: '#ededf8',
                      fontSize: 14,
                      fontFamily: 'inherit',
                      borderRadius: 0,
                      outline: 'none',
                      letterSpacing: '-0.01em',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(98,126,234,0.5)')}
                    onBlur={e  => (e.target.style.borderColor = 'var(--border-default)')}
                  />
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Join Waitlist
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                    </svg>
                  </button>
                </form>
              )}

              <p style={{ fontSize: 11, color: 'rgba(237,237,248,0.3)', textAlign: 'center', letterSpacing: '0.02em' }}>
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          position: 'relative',
          background: '#01010d',
          zIndex: 1,
          borderTop: '1px solid var(--border-muted)',
          padding: 'clamp(32px, 4vw, 48px) 0',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontFamily: "'TWKLausanne', 'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'rgba(237,237,248,0.4)',
              textTransform: 'uppercase',
            }}
          >
            ÆTHER
          </div>

          {/* Links */}
          <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['Privacy', 'Terms', 'Security', 'Docs', 'GitHub'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 12,
                  color: 'rgba(237,237,248,0.3)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,237,248,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,237,248,0.3)')}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <span
            style={{
              fontSize: 11,
              color: 'rgba(237,237,248,0.2)',
              fontFamily: 'GeistMono, monospace',
              letterSpacing: '0.02em',
            }}
          >
            © 2026 ÆTHER Protocol. Not financial advice.
          </span>
        </div>
      </footer>
    </>
  )
}
