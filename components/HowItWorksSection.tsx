const STEPS = [
  {
    num: '01',
    title: 'Connect Wallet',
    description:
      'Link any EVM wallet — MetaMask, Ledger, or Safe. No seed phrases shared. The agent layer reads your address and infers balances and positions on-chain.',
    detail: 'Smart account delegation via EIP-7702',
  },
  {
    num: '02',
    title: 'Configure Agents',
    description:
      'Select strategy modules from our library or write custom intents in plain English. Set hard limits, risk parameters, and execution frequency.',
    detail: 'Natural-language intent compiler',
  },
  {
    num: '03',
    title: 'Deploy On-Chain',
    description:
      'Your intent graph is compiled to on-chain logic and deployed as a session-key smart account. Agents operate autonomously within the guardrails you define.',
    detail: 'Zero additional custody risk',
  },
  {
    num: '04',
    title: 'Monitor & Adapt',
    description:
      'Real-time dashboard shows every action, reasoning trace, and outcome. Modify strategies at any time or revoke agent access with a single transaction.',
    detail: 'Full audit trail on-chain',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        position: 'relative',
        background: '#01010d',
        zIndex: 1,
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div className="section-divider" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <span className="tag reveal" style={{ marginBottom: 20, display: 'inline-flex' }}>
            HOW IT WORKS
          </span>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              marginTop: 20,
              maxWidth: 500,
            }}
          >
            Four steps to autonomous execution
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '1px',
            background: 'var(--border-muted)',
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: 'clamp(28px, 3vw, 36px)',
                background: '#01010d',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 42,
                    fontWeight: 300,
                    color: 'rgba(237,237,248,0.08)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {step.num}
                </span>
                {/* Connecting arrow — only between steps on wide layout */}
                {i < STEPS.length - 1 && (
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    aria-hidden
                    style={{ color: 'var(--border-default)', opacity: 0.5 }}
                  >
                    <path d="M0 6h18M14 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#ededf8',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(237,237,248,0.52)',
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                {step.description}
              </p>

              {/* Detail chip */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  border: '1px solid rgba(98,126,234,0.2)',
                  background: 'rgba(98,126,234,0.04)',
                  fontSize: 11,
                  color: 'rgba(98,126,234,0.7)',
                  letterSpacing: '0.03em',
                  fontFamily: "'GeistMono', monospace",
                  alignSelf: 'flex-start',
                }}
              >
                <span style={{ display: 'block', width: 4, height: 4, background: '#627EEA', borderRadius: '50%' }} />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram — text-based, Blackalgo style */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            border: '1px solid var(--border-muted)',
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <span
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 11,
              color: 'rgba(237,237,248,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Architecture
          </span>

          {/* Flow diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              overflowX: 'auto',
              paddingBottom: 4,
            }}
          >
            {[
              { label: 'Your Wallet', sub: 'EOA / Safe' },
              { label: 'Intent Layer', sub: 'ÆTHER Protocol' },
              { label: 'Agent Runtime', sub: 'On-chain VM' },
              { label: 'DeFi Protocols', sub: 'Uniswap · Aave · Curve' },
            ].map((node, i, arr) => (
              <div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 'none' : 1 }}>
                <div
                  style={{
                    padding: '12px 20px',
                    border: '1px solid var(--border-default)',
                    background: 'var(--accent-1)',
                    textAlign: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ fontSize: 13, color: '#ededf8', letterSpacing: '-0.01em', fontWeight: 400, whiteSpace: 'nowrap' }}>
                    {node.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'rgba(237,237,248,0.35)', marginTop: 4, fontFamily: 'GeistMono, monospace', whiteSpace: 'nowrap' }}>
                    {node.sub}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ flex: 1, minWidth: 20, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                    <div style={{ flex: 1, height: 1, background: 'var(--border-muted)' }} />
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden style={{ flexShrink: 0 }}>
                      <path d="M0 4h7M4 1l3 3-3 3" stroke="rgba(237,237,248,0.2)" strokeWidth="1" strokeLinecap="square"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
