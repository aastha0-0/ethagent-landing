'use client'

export function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Dot-grid texture — left half only so it doesn't clutter the ETH side */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(237,237,248,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 55%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left-aligned content — max 50% width so it stays clear of ETH */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          paddingLeft: 'clamp(28px, 6vw, 96px)',
          paddingRight: '2rem',
          maxWidth: '52%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 48,
          }}
        >
          <EthAgentLogo />
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(237,237,248,0.40)',
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
            }}
          >
            ETHAGENT
          </span>
        </div>

        {/* Badge */}
        <div className="tag tag-eth" style={{ marginBottom: 32 }}>
          <span style={{ display: 'inline-block', width: 5, height: 5, background: '#627EEA', borderRadius: '50%' }} />
          AI AGENT LAYER — ETHEREUM NATIVE
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: 'clamp(52px, 7vw, 110px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: '#ededf8',
            marginBottom: 8,
          }}
        >
          THE AGENT
        </h1>
        <h1
          style={{
            fontSize: 'clamp(52px, 7vw, 110px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'rgba(237,237,248,0.42)',
            fontStyle: 'italic',
            marginBottom: 32,
          }}
        >
          LAYER
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            lineHeight: 1.65,
            color: 'rgba(237,237,248,0.52)',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            marginBottom: 44,
            maxWidth: 400,
          }}
        >
          Autonomous AI agents that execute, protect, and optimise your
          Ethereum wallet — 24/7, non-custodial, and composable with any
          DeFi protocol.
        </p>

        {/* CTA with corner brackets */}
        <CornerButton href="#access">
          Join the Waiting List
        </CornerButton>

        {/* Trust indicators */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginTop: 56,
            flexWrap: 'wrap',
          }}
        >
          {['Non-Custodial', 'On-Chain Proof', 'EVM Native'].map((label) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(237,237,248,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span style={{ display: 'inline-block', width: 4, height: 4, border: '1px solid rgba(98,126,234,0.5)', transform: 'rotate(45deg)' }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 'clamp(28px, 6vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 10,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(237,237,248,0.22)',
            fontFamily: "'GeistMono', monospace",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, rgba(237,237,248,0.25), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}

/* ── Corner-bracket button ───────────────────────────────────────────────── */
function CornerButton({ children, href }: { children: React.ReactNode; href?: string }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      className="corner-btn"
      onClick={
        href?.startsWith('#')
          ? (e: React.MouseEvent) => {
              e.preventDefault()
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
            }
          : undefined
      }
    >
      <span className="cb-tl" />
      <span className="cb-tr" />
      <span className="cb-bl" />
      <span className="cb-br" />
      {children}
    </Tag>
  )
}
CornerButton.displayName = 'CornerButton'

/* ── Logo mark SVG ───────────────────────────────────────────────────────── */
function EthAgentLogo() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ETH diamond — top half solid, bottom half dashed outline */}
      <polygon
        points="13,1 24,13 13,17 2,13"
        fill="rgba(98,126,234,0.18)"
        stroke="rgba(98,126,234,0.7)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <polygon
        points="13,17 24,13 13,29 2,13"
        fill="rgba(98,126,234,0.07)"
        stroke="rgba(98,126,234,0.35)"
        strokeWidth="1"
        strokeDasharray="2.5 2"
        strokeLinejoin="round"
      />
      {/* Centre dot */}
      <circle cx="13" cy="13" r="1.2" fill="rgba(98,126,234,0.9)" />
    </svg>
  )
}
