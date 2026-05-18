import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let raf

    const onMove = e => {
      x = e.clientX
      y = e.clientY
    }

    const tick = () => {
      if (glow) {
        glow.style.left = x + 'px'
        glow.style.top = y + 'px'
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
