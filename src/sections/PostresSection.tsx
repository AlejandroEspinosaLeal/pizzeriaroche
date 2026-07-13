import MenuCard from '../components/MenuCard'
import { CakeSlice } from 'lucide-react'
import { AllergenBadges } from '../components/AllergenBadge'

const postres = [
  { name: 'ARROZ CON LECHE', allergens: [7] },
  { name: 'TARTA DE CHOCOLATE BLANCO/NEGRO CON GALLETAS', allergens: [1, 3, 7] },
  { name: 'MOUSSE DE CHOCOLATE NEGRO', allergens: [3, 7] },
  { name: 'NATILLAS CON GALLETAS', allergens: [1, 3, 7] },
  { name: 'FLAN DE HUEVO', allergens: [3, 7] },
]

export default function PostresSection() {
  return (
    <section id="postres" className="bg-[#F5F0E8] pb-16 md:pb-20 px-4 sm:px-6 scroll-mt-32">
      <div className="max-w-[700px] mx-auto">
        <MenuCard
          bgClass=""
          style={{ background: 'linear-gradient(135deg, #F5EDE0, #EDE4D3)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <CakeSlice size={28} className="text-[#8B5E3C]" />
            <h3
              className="font-display font-bold text-[#2C2420]"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)' }}
            >
              Postres
            </h3>
            <AllergenBadges allergens={[3, 7]} className="ml-1" />
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4A84B] text-white font-body font-bold text-sm shadow-md ml-2">
              4,50 €
            </span>
          </div>

          <div className="text-center space-y-3">
            {postres.map((item) => (
              <div key={item.name} className="flex items-center justify-center gap-2 flex-wrap">
                <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                  {item.name}
                </span>
                <AllergenBadges allergens={item.allergens} />
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-center text-[#7A8B5C] mt-6 pt-4 border-t border-[rgba(122,139,92,0.2)]">
            Pan y Picos 2,00 € · IVA Incluido
          </p>
        </MenuCard>
      </div>
    </section>
  )
}
