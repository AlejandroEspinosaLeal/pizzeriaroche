import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function PhoneCTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current!, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from(sublineRef.current!, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from(btnRef.current!, {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 scroll-mt-20"
      style={{ background: 'linear-gradient(135deg, #C45B3F, #A8492F)' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <h2
          ref={headlineRef}
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          ¿Reserva o para llevar?
        </h2>
        <p
          ref={sublineRef}
          className="font-body text-lg text-white/90 mt-3"
        >
          Av. Bélgica · Urbanización Roche, 11149 Conil de la Frontera (Cádiz)
        </p>
        <p className="font-body text-sm text-white/80 mt-1">
          Llámanos para reservar mesa o recoger tu pedido
        </p>
        <a
          ref={btnRef}
          href="tel:+34647338806"
          className="inline-flex items-center gap-3 mt-8 px-14 py-5 rounded-full bg-white text-[#C45B3F] font-body font-bold hover:scale-105 transition-transform duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}
        >
          <Phone size={26} />
          647 338 806
        </a>
      </div>
    </section>
  )
}
