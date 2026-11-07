import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Exact Blackalgo color system
      colors: {
        background: '#01010d',
        'accent-1': 'rgba(235,234,250,0.02)',
        'accent-2': 'rgba(235,234,250,0.04)',
        'accent-5': 'rgba(235,234,250,0.08)',
        'accent-7': 'rgba(235,234,250,0.16)',
        'accent-9': 'rgba(235,234,250,0.40)',
        'text-loud': '#ededf8',
        'text-default': 'rgba(237,237,248,0.72)',
        'text-muted': 'rgba(237,237,248,0.64)',
        'text-faint': 'rgba(237,237,248,0.48)',
        'border-default': 'rgba(237,237,248,0.12)',
        'border-loud': 'rgba(237,237,248,0.16)',
        'border-muted': 'rgba(237,237,248,0.08)',
        // Ethereum brand
        eth: '#627EEA',
        'eth-glow': 'rgba(98,126,234,0.3)',
        'eth-dim': 'rgba(98,126,234,0.1)',
      },
      fontFamily: {
        // TWKLausanne (commercial) — place WOFF2 files in /public/fonts/
        // Falls back to DM Sans (Google Fonts via CSS import) or system UI
        sans: ['TWKLausanne', 'DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['GeistMono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '0px',  // Sharp by default (Blackalgo style)
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-eth': 'pulseEth 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseEth: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(98,126,234,0)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(98,126,234,0.2)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
