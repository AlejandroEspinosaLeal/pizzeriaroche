import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current!, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="text-center mb-12">
      <h2
        className="font-display font-bold text-[#2C2420]"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#6B6057] mt-2 text-base italic">{subtitle}</p>
      )}
      <div className="w-20 h-0.5 bg-[#C45B3F] mx-auto mt-4" />
    </div>
  )
}
