'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

interface Props {
  scrollProgressRef: React.RefObject<number>
}

export default function EthereumScene({ scrollProgressRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let W = window.innerWidth
    let H = window.innerHeight

    // ── Renderer ─────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    // ── Scene ────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#01010d')

    // ── Camera — offset left so ETH appears on the right half ────────────
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
    camera.position.z = 6.5
    camera.position.x = -1.4   // shift camera left → ETH visually right

    // ── Environment map (clean metallic reflections, no colour tint) ─────
    const pmrem = new THREE.PMREMGenerator(renderer)
    const roomEnv = new RoomEnvironment()
    const envTexture = pmrem.fromScene(roomEnv, 0.04).texture
    scene.environment = envTexture
    pmrem.dispose()
    roomEnv.dispose()

    // ── ETH Diamond geometry — scaled octahedron ─────────────────────────
    const rawGeo = new THREE.OctahedronGeometry(2, 0)
    const posArr = rawGeo.attributes.position.array as Float32Array
    for (let i = 0; i < posArr.length; i += 3) {
      posArr[i]     *= 0.72   // x — narrow
      posArr[i + 1] *= 1.35   // y — tall
      posArr[i + 2] *= 0.72   // z — narrow
    }
    rawGeo.attributes.position.needsUpdate = true
    rawGeo.computeVertexNormals()

    // ── Grey metallic material — no blue tint, like polished aluminium ───
    const metalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#9a9aaa'),
      metalness: 1.0,
      roughness: 0.10,
      envMapIntensity: 1.8,
      transparent: true,
      opacity: 1,
    })
    const ethMesh = new THREE.Mesh(rawGeo, metalMat)
    scene.add(ethMesh)

    // ── Inner back-face — very subtle lighter grey for depth ─────────────
    const innerGeo = rawGeo.clone()
    const innerArr = innerGeo.attributes.position.array as Float32Array
    for (let i = 0; i < innerArr.length; i++) innerArr[i] *= 0.97
    innerGeo.attributes.position.needsUpdate = true
    innerGeo.computeVertexNormals()
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#c0c0d0'),
      metalness: 0.5,
      roughness: 0.3,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.5,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    scene.add(innerMesh)

    // ── Wireframe skeleton (shown on scroll) ─────────────────────────────
    const edgesGeo = new THREE.EdgesGeometry(rawGeo)
    const dashMat = new THREE.LineDashedMaterial({
      color: new THREE.Color('#6080a0'),  // subtle cool blue-grey
      dashSize: 0.22,
      gapSize: 0.14,
      transparent: true,
      opacity: 0,
    })
    const wireframe = new THREE.LineSegments(edgesGeo, dashMat)
    wireframe.computeLineDistances()
    scene.add(wireframe)

    // ── Subtle equatorial ring (always visible) ───────────────────────────
    const ringGeo = new THREE.TorusGeometry(1.44 * 0.72, 0.003, 4, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#606070'),
      transparent: true,
      opacity: 0.25,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    scene.add(ring)

    // ── Background particle field (very subtle) ───────────────────────────
    const particleCount = 280
    const pPos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 24
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 24
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4
    }
    const bgGeo = new THREE.BufferGeometry()
    bgGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const bgMat = new THREE.PointsMaterial({
      size: 0.018,
      color: new THREE.Color('#ebeafa'),
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    })
    const bgParticles = new THREE.Points(bgGeo, bgMat)
    scene.add(bgParticles)

    // ── Lights — cool white key light, minimal fill ───────────────────────
    const ambient = new THREE.AmbientLight('#ffffff', 0.15)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight('#ffffff', 3)
    keyLight.position.set(5, 7, 5)
    scene.add(keyLight)

    // Cool grey-blue rim for depth, not colourful
    const rimLight = new THREE.DirectionalLight('#c8d0e0', 1.2)
    rimLight.position.set(-5, -2, -3)
    scene.add(rimLight)

    const topLight = new THREE.PointLight('#ffffff', 1.5, 20)
    topLight.position.set(0, 8, 2)
    scene.add(topLight)

    // ── Post-processing — VERY subtle bloom (no alien glow) ──────────────
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(W, H),
      0.12,   // very low strength
      0.4,
      0.6     // high threshold — only the brightest highlights bloom
    )
    composer.addPass(bloomPass)

    // ── Mouse parallax ────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3
    }
    window.addEventListener('mousemove', handleMouseMove)

    // ── Resize ────────────────────────────────────────────────────────────
    const handleResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      camera.aspect = W / H
      camera.updateProjectionMatrix()
      renderer.setSize(W, H)
      composer.setSize(W, H)
    }
    window.addEventListener('resize', handleResize)

    // ── Animation loop ────────────────────────────────────────────────────
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()
      const progress = scrollProgressRef.current ?? 0

      // Float
      const floatY = Math.sin(elapsed * 0.5) * 0.18
      const floatX = Math.cos(elapsed * 0.35) * 0.05

      // Slow rotation — slows as wireframe takes over
      const rotSpeed = 0.18 * (1 - progress * 0.8)
      const rotY = elapsed * rotSpeed

      const ethGroup = [ethMesh, innerMesh, wireframe, ring]
      for (const obj of ethGroup) {
        obj.rotation.y = rotY + mouseX * 0.25
        obj.rotation.x = mouseY * 0.18
        obj.position.y = floatY
        obj.position.x = floatX
      }

      // Material transitions
      const metalOpacity = Math.max(0, 1 - progress * 1.5)
      const wireOpacity  = Math.max(0, Math.min(1, (progress - 0.08) * 1.6))

      metalMat.opacity  = metalOpacity
      innerMat.opacity  = metalOpacity * 0.5
      dashMat.opacity   = wireOpacity
      ringMat.opacity   = 0.25 * (1 - progress * 0.5)

      // Bloom stays low — just minimal highlight bloom
      bloomPass.strength = 0.12 + wireOpacity * 0.08

      // Particle drift
      bgParticles.rotation.y = elapsed * 0.012
      bgParticles.rotation.x = elapsed * 0.006

      composer.render()
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      composer.dispose()
      renderer.dispose()
      ;[rawGeo, innerGeo, edgesGeo, bgGeo, ringGeo].forEach(g => g.dispose())
      ;[metalMat, innerMat, dashMat, bgMat, ringMat].forEach(m => m.dispose())
      envTexture.dispose()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block',
      }}
      aria-hidden="true"
    />
  )
}
