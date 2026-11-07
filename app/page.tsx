'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/HeroSection'
import { CardSection } from '@/components/CardSection'

const EthereumScene = dynamic(
  () => import('@/components/EthereumScene'),
  { ssr: false }
)

export default function HomePage() {
  const scrollProgressRef = useRef<number>(0)

  /* ── Smooth scroll via Lenis ── */
  useEffect(() => {
    let lenis: any
    const initLenis = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    initLenis()
    return () => lenis?.destroy()
  }, [])

  /* ── Scroll progress for ETH wireframe transition ── */
  useEffect(() => {
    const handleScroll = () => {
      scrollProgressRef.current = Math.min(1, window.scrollY / window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed 3D canvas behind everything */}
      <EthereumScene scrollProgressRef={scrollProgressRef} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <CardSection />
      </main>
    </>
  )
}
