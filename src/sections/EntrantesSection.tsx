import MenuCard from '../components/MenuCard'
import SectionHeader from '../components/SectionHeader'
import { AllergenBadges } from '../components/AllergenBadge'

const entrantes = [
  { name: 'CHORIZO CRIOLLO', price: '3,00 €', allergens: [] },
  { name: 'MORCILLA', price: '3,00 €', allergens: [] },
  { name: 'EMPANADILLA ARGENTINA', price: '3,50 €', allergens: [1, 14] },
  { name: 'PROVOLONE', price: '10,00 €', allergens: [1, 7] },
  { name: 'PROVOLONE PRESIDENTE', desc: 'con chorizo', price: '11,00 €', allergens: [1, 7] },
  { name: 'BRUSQUETA', desc: 'tomate y mozzarella', price: '6,00 €', allergens: [1, 7] },
  { name: 'BRUSQUETA SERRANA', desc: 'tomate, mozzarella y jamón serrano', price: '7,00 €', allergens: [1, 7] },
]

const ensaladas = [
  { name: 'ENSALADA CÉSAR', desc: 'lechuga, pollo asado, crutones, parmesano, aderezado con salsa César', price: '12,00 €', allergens: [7, 14] },
  { name: 'ENSALADA DE QUESO DE CABRA', desc: 'lechuga, queso de cabra, tomate cherry y nueces, aderezada con vinagre balsámico de Módena', price: '12,00 €', allergens: [7, 8, 14] },
  { name: 'ENSALADA TEMPLADA DE GULAS', desc: 'rúcula y gulas, aderezada con vinagre de Jerez', price: '12,00 €', allergens: [1, 14] },
  { name: 'CARPACHO DE CALABACÍN', desc: 'calabacín, tomate cherry y parmesano, aderezado con salsa de pesto', price: '10,00 €', allergens: [14] },
]

export default function EntrantesSection() {
  return (
    <section id="carta" className="bg-[#F5F0E8] py-16 md:py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader title="Nuestra Carta" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entrantes */}
          <MenuCard bgClass="bg-[#EDE4D3]">
            <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
              Entrantes
            </h3>
            <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
            <div className="space-y-3">
              {entrantes.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-3 py-1.5 border-b border-[rgba(139,94,60,0.1)]">
                  <div className="flex-1 pr-2 leading-relaxed">
                    <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420] align-middle">
                      {item.name}
                    </span>
                    <AllergenBadges allergens={item.allergens} className="!ml-1.5 align-middle" />
                    {item.desc && (
                      <p className="font-body text-sm italic text-[#6B6057] mt-0.5">{item.desc}</p>
                    )}
                  </div>
                  <span className="font-body text-sm font-bold text-[#D4A84B] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </MenuCard>

          {/* De la Huerta */}
          <MenuCard bgClass="bg-[#E8DCC8]" delay={0.15}>
            <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
              De la Huerta
            </h3>
            <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
            <div className="space-y-4">
              {ensaladas.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-3 py-1.5 border-b border-[rgba(139,94,60,0.1)]">
                  <div className="flex-1 pr-2 leading-relaxed">
                    <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420] align-middle">
                      {item.name}
                    </span>
                    <AllergenBadges allergens={item.allergens} className="!ml-1.5 align-middle" />
                    <p className="font-body text-sm italic text-[#6B6057] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-body text-sm font-bold text-[#D4A84B] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </MenuCard>
        </div>
      </div>
    </section>
  )
}
