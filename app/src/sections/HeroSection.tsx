import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Phone, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
      .to(scrollRef.current, { opacity: 1, duration: 0.5 }, '-=0.2')
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Pizza artesanal en horno de leña"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(44, 36, 32, 0.35), rgba(44, 36, 32, 0.65))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] px-6 flex flex-col items-center">
        {/* Emblema Oficial R P Cruzado */}
        <div className="mb-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 78 L78 20" stroke="#F5F0E8" strokeWidth="5" strokeLinecap="round" />
            <path d="M78 78 L20 20" stroke="#F5F0E8" strokeWidth="5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="8" fill="none" stroke="#F5F0E8" strokeWidth="4" />
            <circle cx="78" cy="20" r="8" fill="none" stroke="#F5F0E8" strokeWidth="4" />
            <rect x="16" y="73" width="8" height="12" rx="3" transform="rotate(-45 20 78)" fill="#F5F0E8" />
            <rect x="74" y="73" width="8" height="12" rx="3" transform="rotate(45 78 78)" fill="#F5F0E8" />
            <text x="49" y="31" textAnchor="middle" fill="#F5F0E8" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="24">R</text>
            <text x="49" y="88" textAnchor="middle" fill="#F5F0E8" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="24">P</text>
            <path d="M10 55 L32 33" stroke="#D5C7B8" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
            <path d="M68 33 L90 55" stroke="#D5C7B8" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
          </svg>
        </div>

        <h1
          ref={titleRef}
          className="font-display font-bold text-white opacity-0 translate-y-[30px]"
          style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', letterSpacing: '0.06em', textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
        >
          ROCHE
          <span className="sr-only"> Pizzería Parrilla — Conil de la Frontera, Urbanización Roche, Cádiz</span>
        </h1>
        <p
          ref={subtitleRef}
          className="font-body uppercase text-white/85 opacity-0 translate-y-[30px] mt-2"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', letterSpacing: '0.3em' }}
        >
          Pizzeria · Parrilla
        </p>
        <p
          ref={taglineRef}
          className="font-body text-white/90 opacity-0 translate-y-[30px] mt-6 max-w-[600px] mx-auto"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          La auténtica cocina italiana con el mejor sabor de la parrilla
        </p>
        <p className="font-body text-white/80 text-sm md:text-base mt-3 tracking-wide">
          Av. Bélgica · Urbanización Roche · 11149 Conil de la Frontera, Cádiz
        </p>

        {/* CTA Phone */}
        <a
          ref={ctaRef}
          href="tel:+34647338806"
          className="inline-flex items-center gap-3 mt-10 px-12 py-4 rounded-full text-white font-body font-semibold uppercase tracking-[0.04em] opacity-0 scale-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(196,91,63,0.4)]"
          style={{ background: 'linear-gradient(135deg, #C45B3F, #A8492F)', fontSize: '1.1rem' }}
        >
          <Phone size={22} />
          <span>647 338 806</span>
          <span className="text-white/80 text-sm normal-case tracking-normal">— Reservar o Pedir</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
      >
        <ChevronDown size={32} className="text-white/70 animate-bounce-gentle" />
      </div>
    </section>
  )
}
