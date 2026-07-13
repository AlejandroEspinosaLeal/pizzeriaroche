import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface MenuCardProps {
  children: ReactNode
  className?: string
  bgClass?: string
  style?: React.CSSProperties
  delay?: number
}

export default function MenuCard({ children, className = '', bgClass = '', style, delay = 0 }: MenuCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current!, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl p-5 sm:p-7 md:p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,36,32,0.08)] ${bgClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
