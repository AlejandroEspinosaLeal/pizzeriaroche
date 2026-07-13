import MenuCard from '../components/MenuCard'
import { Flame } from 'lucide-react'

const parrilladas = [
  { name: 'PARRILLADA DE CERDO IBÉRICO', price: '34,50 €' },
  { name: 'PARRILLADA DE VERDURAS', desc: 'berenjena, calabacín, champiñón, tomate, espárrago, zanahoria, cebolla, pimiento y patata', price: '15,50 €' },
]

export default function ParrilladasSection() {
  return (
    <section className="bg-[#F5F0E8] pb-16 md:pb-20 px-6">
      <div className="max-w-[700px] mx-auto">
        <MenuCard bgClass="bg-[#EDE4D3]">
          <div className="flex items-center gap-3 mb-5">
            <Flame size={28} className="text-[#C45B3F]" />
            <h3
              className="font-display font-bold text-[#2C2420]"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)' }}
            >
              Parrilladas para Dos
            </h3>
          </div>
          <div className="space-y-4">
            {parrilladas.map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                    {item.name}
                  </span>
                  {item.desc && (
                    <p className="font-body text-sm italic text-[#6B6057] leading-relaxed">{item.desc}</p>
                  )}
                </div>
                <span className="font-body text-sm font-bold text-[#D4A84B] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </MenuCard>
      </div>
    </section>
  )
}
