import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Pizza } from 'lucide-react'
import { AllergenBadges } from '../components/AllergenBadge'

gsap.registerPlugin(ScrollTrigger)

const pizzas = [
  { name: 'MARGARITA', price: '12,00 €', allergens: [1, 7] },
  { name: 'PROSCIUTTO', desc: 'jamón york', price: '13,00 €', allergens: [1, 7] },
  { name: 'ROMANA', desc: 'jamón serrano y parmesano', price: '13,50 €', allergens: [1, 7] },
  { name: 'SERRANA', desc: 'jamón serrano y tomate natural', price: '13,50 €', allergens: [1, 7] },
  { name: 'PISCINA', desc: 'salchichas y beicon', price: '13,00 €', allergens: [1, 7] },
  { name: 'MARINERA', desc: 'gambas, atún y palometa', price: '14,00 €', allergens: [1, 4, 7] },
  { name: 'HORTOLANA', desc: 'calabacín y berenjena', price: '13,00 €', allergens: [1, 7] },
  { name: 'B&R', desc: 'beicon y roquefort', price: '13,00 €', allergens: [1, 7] },
  { name: 'CAPRICHOSA', desc: 'jamón serrano, aceitunas negras, alcaparras y anchoas', price: '14,00 €', allergens: [1, 4, 7, 14] },
  { name: 'CAMPERA', desc: 'beicon, chorizo, jamón serrano y anchoas', price: '14,00 €', allergens: [1, 4, 7] },
  { name: 'RÚSTICA', desc: 'beicon y cebolla', price: '13,00 €', allergens: [1, 7] },
  { name: 'TUNA', desc: 'atún y cebolla', price: '13,00 €', allergens: [1, 4, 7] },
  { name: 'CUATRO QUESOS', desc: 'parmesano, roquefort y emmental', price: '13,50 €', allergens: [1, 7] },
  { name: 'PRESIDENTE', desc: 'chorizo picante', price: '13,00 €', allergens: [1, 7] },
  { name: 'PRESIDENTE ESPECIAL', desc: 'chorizo picante y cebolla roja', price: '13,50 €', allergens: [1, 7] },
  { name: 'CUATRO ESTACIONES', desc: 'jamón york, alcachofas, aceitunas y champiñones', price: '14,00 €', allergens: [1, 7, 14] },
  { name: 'CARBONARA', desc: 'nata y beicon', price: '13,00 €', allergens: [1, 7] },
  { name: 'GAMBERETTI', desc: 'gambas y ajo', price: '14,00 €', allergens: [1, 4, 7] },
  { name: 'BIANCA', desc: 'base sin tomate, parmesano y emmental', price: '13,00 €', allergens: [1, 7] },
  { name: 'MARIACHI', desc: 'base sin tomate, parmesano, emmental y guindillas', price: '13,50 €', allergens: [1, 7, 14] },
  { name: 'ANCHOAS', desc: 'anchoas', price: '14,00 €', allergens: [1, 4, 7] },
  { name: 'SICILIANA', desc: 'anchoas, aceitunas y alcaparras', price: '14,00 €', allergens: [1, 4, 7, 14] },
  { name: 'DULCINEA', desc: 'jamón york y cebolla blanca', price: '13,00 €', allergens: [1, 7] },
  { name: 'HAWAIANA', desc: 'jamón york y piña', price: '13,00 €', allergens: [1, 7, 14] },
  { name: 'DIABLO', desc: 'chorizo picante y guindilla', price: '13,50 €', allergens: [1, 7, 14] },
  { name: 'RÚCULA', desc: 'queso de cabra, rúcula y nueces', price: '14,00 €', allergens: [1, 7, 8] },
  { name: 'BARBACOA', desc: 'carne picada y salsa barbacoa', price: '14,00 €', allergens: [1, 7] },
  { name: 'PRIMAVERA', desc: 'pimiento, cebolla, chorizo y jamón york', price: '14,00 €', allergens: [1, 7] },
  { name: 'ROCHE', desc: 'jamón york, chorizo, champiñones y huevo', price: '14,00 €', allergens: [1, 7] },
]

export default function PizzasSection() {
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
    <section className="bg-[#F5F0E8] pb-16 md:pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={cardRef}
          className="rounded-xl p-8 md:p-10 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,36,32,0.08)]"
          style={{ background: 'linear-gradient(135deg, #F0E6D0, #E8DCC8)' }}
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <Pizza size={32} className="text-[#8B5E3C] opacity-30" />
            <h3
              className="font-display font-bold text-[#2C2420]"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              Las Pizzas
            </h3>
          </div>

          <p className="font-body text-sm italic text-[#6B6057] mb-1">
            *Nuestras pizzas están hechas con masa casera, base de tomate natural y mozzarella.
          </p>
          <p className="font-body text-sm font-semibold text-[#7A8B5C] mb-6">
            Ingrediente extra 1,00 €
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            {pizzas.map((pizza) => (
              <div key={pizza.name} className="flex justify-between items-start gap-3 py-1.5 border-b border-[rgba(139,94,60,0.12)]">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap">
                    <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                      {pizza.name}
                    </span>
                    <AllergenBadges allergens={pizza.allergens} />
                  </div>
                  {pizza.desc && (
                    <span className="font-body text-sm italic text-[#6B6057] block mt-0.5">
                      ({pizza.desc})
                    </span>
                  )}
                </div>
                <span className="font-body text-sm font-bold text-[#D4A84B] whitespace-nowrap">
                  {pizza.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
