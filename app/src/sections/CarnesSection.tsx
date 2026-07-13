import MenuCard from '../components/MenuCard'
import SectionHeader from '../components/SectionHeader'
import { AllergenBadges } from '../components/AllergenBadge'

const ternera = [
  { name: 'ENTRECOT DE TERNERA', price: '18,00 €', allergens: [] },
  { name: 'TECLAS', desc: 'tomate, cebolla, pimiento y beicon', price: '15,00 €', allergens: [] },
]

const cerdo = [
  { name: 'COSTILLAR CON SALSA BARBACOA', price: '16,00 €', allergens: [7, 8, 14] },
  { name: 'SECRETO', price: '16,00 €', allergens: [] },
  { name: 'SOLOMILLO ACOMPAÑADO DE UNA DE NUESTRAS SALSAS', price: '15,00 €', allergens: [7] },
  { name: 'BROCHETA', desc: 'tomate, cebolla, pimiento y beicon', price: '13,50 €', allergens: [] },
]

const pollo = [
  { name: 'PECHUGA ACOMPAÑADA (CONTRAMUSLO) CON UNA DE NUESTRAS SALSAS', price: '11,50 €', allergens: [7] },
  { name: 'BROCHETA', desc: 'tomate, cebolla, pimiento y beicon', price: '13,50 €', allergens: [] },
]

const parrilladas = [
  { name: 'PARRILLADA DE CERDO IBÉRICO', price: '34,50 €', allergens: [] },
  {
    name: 'PARRILLADA DE VERDURAS',
    desc: 'berenjena, calabacín, champiñón, tomate, espárrago, zanahoria, cebolla, pimiento y patata',
    price: '15,50 €',
    allergens: []
  },
]

export default function CarnesSection() {
  return (
    <section className="bg-[#F5F0E8] pb-16 md:pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader title="Carnes a la Parrilla" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Columna Izquierda: Ternera + Cerdo Ibérico */}
          <div className="space-y-6">
            <MenuCard bgClass="bg-[#EDE4D3]">
              <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
                Ternera
              </h3>
              <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
              <div className="space-y-3">
                {ternera.map((item) => (
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

            <MenuCard bgClass="bg-[#E8DCC8]" delay={0.1}>
              <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
                Cerdo Ibérico
              </h3>
              <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
              <div className="space-y-3">
                {cerdo.map((item) => (
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
          </div>

          {/* Columna Derecha: Pollo + Parrilladas Para Dos */}
          <div className="space-y-6">
            <MenuCard bgClass="bg-[#EDE4D3]" delay={0.15}>
              <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
                Pollo
              </h3>
              <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
              <div className="space-y-3">
                {pollo.map((item) => (
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

            <MenuCard bgClass="bg-[#E8DCC8]" delay={0.2}>
              <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
                Parrilladas Para Dos
              </h3>
              <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
              <div className="space-y-4">
                {parrilladas.map((item) => (
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

              <p className="font-body text-xs italic text-[#7A8B5C] mt-6 pt-4 border-t border-[rgba(122,139,92,0.2)]">
                Acompaña nuestros platos con salsas de mostaza a la antigua, pimienta o roquefort por 1,50 €
              </p>
            </MenuCard>
          </div>
        </div>
      </div>
    </section>
  )
}
