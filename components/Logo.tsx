interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric ETH-diamond mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ÆTHER logo mark"
      >
        {/* Outer diamond outline */}
        <polygon
          points="16,2 28,13 16,30 4,13"
          stroke="#627EEA"
          strokeWidth="1"
          fill="none"
          opacity="0.9"
        />
        {/* Inner facet top-left */}
        <line x1="16" y1="2"  x2="4"  y2="13" stroke="#627EEA" strokeWidth="0.5" opacity="0.4" />
        {/* Inner facet top-right */}
        <line x1="16" y1="2"  x2="28" y2="13" stroke="#627EEA" strokeWidth="0.5" opacity="0.4" />
        {/* Middle cross-band */}
        <line x1="4"  y1="13" x2="28" y2="13" stroke="#627EEA" strokeWidth="0.5" opacity="0.25" />
        {/* Inner vertical */}
        <line x1="16" y1="13" x2="16" y2="30" stroke="#627EEA" strokeWidth="0.5" opacity="0.4" />
        {/* Center dot */}
        <circle cx="16" cy="13" r="1.5" fill="#627EEA" opacity="0.9" />
        {/* Top vertex dot */}
        <circle cx="16" cy="2"  r="1"   fill="#A78BFA" opacity="0.7" />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'TWKLausanne', 'DM Sans', ui-sans-serif, sans-serif",
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: '0.08em',
          color: '#ededf8',
          textTransform: 'uppercase' as const,
        }}
      >
        ÆTHER
      </span>
    </div>
  )
}
