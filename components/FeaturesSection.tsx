const FEATURES = [
  {
    index: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="2" width="7" height="7" stroke="#627EEA" strokeWidth="1"/>
        <rect x="11" y="2" width="7" height="7" stroke="rgba(237,237,248,0.3)" strokeWidth="1"/>
        <rect x="2" y="11" width="7" height="7" stroke="rgba(237,237,248,0.3)" strokeWidth="1"/>
        <path d="M14.5 11v8M11 14.5h8" stroke="#627EEA" strokeWidth="1" strokeLinecap="square"/>
      </svg>
    ),
    title: 'Autonomous Trading',
    description:
      'Strategy-driven agents execute DeFi trades across Uniswap, Curve, and 40+ protocols — responding to market conditions in milliseconds without human input.',
  },
  {
    index: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="#627EEA" strokeWidth="1"/>
        <path d="M10 6v4l3 2" stroke="#627EEA" strokeWidth="1" strokeLinecap="square"/>
        <circle cx="10" cy="10" r="1.5" fill="#627EEA"/>
      </svg>
    ),
    title: 'Yield Optimization',
    description:
      'Real-time yield routing across lending markets, liquidity pools, and staking vaults. Agents rebalance continuously to maximise APY within your defined risk envelope.',
  },
  {
    index: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2 L18 7 L18 13 L10 18 L2 13 L2 7 Z" stroke="#627EEA" strokeWidth="1"/>
        <path d="M10 6 L14 8.5 V13.5 L10 16 L6 13.5 V8.5 Z" stroke="rgba(98,126,234,0.5)" strokeWidth="1"/>
        <circle cx="10" cy="11" r="1.5" fill="#627EEA"/>
      </svg>
    ),
    title: 'Risk Management',
    description:
      'On-chain guardrails enforce position limits, drawdown thresholds, and exposure caps. The agent never exceeds the parameters you set — enforced at the smart-contract level.',
  },
  {
    index: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 10h12M10 4v12" stroke="rgba(237,237,248,0.3)" strokeWidth="1" strokeLinecap="square"/>
        <path d="M4 4l12 12M16 4L4 16" stroke="#627EEA" strokeWidth="1" strokeLinecap="square" opacity="0.6"/>
        <circle cx="10" cy="10" r="2.5" stroke="#627EEA" strokeWidth="1"/>
      </svg>
    ),
    title: 'MEV Protection',
    description:
      'Private mempool routing and sandwich-attack detection shield every transaction. Agents submit via Flashbots and private RPC endpoints by default.',
  },
  {
    index: '05',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="7" width="14" height="10" stroke="#627EEA" strokeWidth="1"/>
        <path d="M7 7V5a3 3 0 0 1 6 0v2" stroke="rgba(98,126,234,0.6)" strokeWidth="1"/>
        <circle cx="10" cy="12" r="1.5" fill="#627EEA"/>
      </svg>
    ),
    title: 'Non-Custodial Keys',
    description:
      'Your private keys never leave your device. Agents operate through intent signatures and smart-account delegation — full self-custody, full automation.',
  },
  {
    index: '06',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 10l4 4 10-8" stroke="#627EEA" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"/>
        <rect x="2" y="2" width="16" height="16" stroke="rgba(237,237,248,0.15)" strokeWidth="1"/>
      </svg>
    ),
    title: 'Composable Strategies',
    description:
      'Stack agent modules like primitives. Combine trading, lending, staking, and governance voting into a single on-chain intent graph — no-code or via API.',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        position: 'relative',
        background: '#01010d',
        zIndex: 1,
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      {/* Top edge line */}
      <div className="section-divider" />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          <span className="tag reveal">CAPABILITIES</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <h2
              className="reveal reveal-delay-1"
              style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 300, letterSpacing: '-0.03em', maxWidth: 480 }}
            >
              Every agent capability you need
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                maxWidth: 340,
                fontSize: 14,
                lineHeight: 1.65,
                color: 'rgba(237,237,248,0.56)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              A complete runtime layer for autonomous Ethereum operations.
              Every module is audited, composable, and upgradeable without
              touching your keys.
            </p>
          </div>
        </div>

        {/* Features grid — sharp rectangular boxes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '1px',
            background: 'var(--border-muted)',
            border: '1px solid var(--border-muted)',
          }}
        >
          {FEATURES.map((feature, i) => (
            <div
              key={feature.index}
              className={`reveal reveal-delay-${(i % 3) + 1} sharp-box-eth`}
              style={{
                padding: 'clamp(28px, 3.5vw, 40px)',
                background: '#01010d',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                cursor: 'default',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(98,126,234,0.04)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.background = '#01010d'
              }}
            >
              {/* Top row: index + icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: "'GeistMono', 'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: 'rgba(237,237,248,0.3)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {feature.index}
                </span>
                <div className="icon-box icon-box-eth">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#ededf8',
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(237,237,248,0.52)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  flex: 1,
                }}
              >
                {feature.description}
              </p>

              {/* Bottom arrow */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 12,
                  color: 'rgba(98,126,234,0.6)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                <span>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
