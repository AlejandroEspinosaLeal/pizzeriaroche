import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AllergenBadges } from '../components/AllergenBadge'

gsap.registerPlugin(ScrollTrigger)

const hamburguesas = [
  { name: 'CAMPERA', desc: 'beicon, tomate natural, cebolla a la parrilla, lechuga y salsa casera de mostaza a la antigua', allergens: [7, 14] },
  { name: 'TEX-MEX', desc: 'queso, guacamole, picadillo de pimiento, maíz, tomate y jalapeños', allergens: [7, 14] },
  { name: 'TENNESSEE', desc: 'tomate, aros de cebolla, cebolla crispi, beicon y salsa barbacoa', allergens: [7, 14] },
  { name: 'CASTIZA', desc: 'queso de cabra, rúcula y cebolla caramelizada', allergens: [7, 14] },
  { name: 'ROCHE', desc: 'queso, lechuga, tomate, cebolla y beicon', allergens: [] },
]

export default function HamburguesasSection() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current!, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hamburguesas" className="bg-[#F5F0E8] pb-16 md:pb-20 px-4 sm:px-6 scroll-mt-32">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={cardRef}
          className="rounded-xl p-8 md:p-10 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,36,32,0.08)]"
          style={{ background: 'linear-gradient(135deg, #EDE4D3, #E5D9C8)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2
              className="font-display font-bold text-[#2C2420]"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)' }}
            >
              Hamburguesas de Buey
            </h2>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4A84B] text-white font-body font-bold text-sm shadow-md">
              13,00 €
            </span>
          </div>

          {/* Burgers */}
          <div className="space-y-4">
            {hamburguesas.map((item) => (
              <div key={item.name} className="border-b border-[rgba(139,94,60,0.12)] pb-3 last:border-0">
                <div className="flex items-center flex-wrap">
                  <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                    {item.name}
                  </span>
                  <AllergenBadges allergens={item.allergens} />
                </div>
                <p className="font-body text-sm italic text-[#6B6057] leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="font-body text-sm font-medium text-[#7A8B5C] mt-6 pt-4 border-t border-[rgba(122,139,92,0.2)]">
            *Todas nuestras hamburguesas van acompañadas de patatas fritas. Ración Extra de patatas fritas 3,00 €
          </p>
        </div>
      </div>
    </section>
  )
}
