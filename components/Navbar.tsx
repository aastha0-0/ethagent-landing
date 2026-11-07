'use client'

import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { label: 'Agents',   href: '#features'    },
  { label: 'Protocol', href: '#how-it-works' },
  { label: 'Network',  href: '#stats'        },
  { label: 'Docs',     href: '#'             },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
      className={scrolled ? 'navbar-blur' : ''}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Logo size={28} />
        </a>

        {/* Nav links — hidden on mobile */}
        <nav
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(237,237,248,0.64)',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ededf8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,237,248,0.64)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <a
            href="#"
            style={{
              color: 'rgba(237,237,248,0.64)',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: '-0.01em',
              transition: 'color 0.15s ease',
            }}
            className="hidden sm:block"
            onMouseEnter={e => (e.currentTarget.style.color = '#ededf8')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,237,248,0.64)')}
          >
            Sign in
          </a>
          <a href="#cta" className="btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}>
            Get Access
          </a>
        </div>
      </div>
    </header>
  )
}
