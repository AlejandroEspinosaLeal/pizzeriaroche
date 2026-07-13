import MenuCard from '../components/MenuCard'
import SectionHeader from '../components/SectionHeader'
import { AllergenBadges } from '../components/AllergenBadge'

const pastas = [
  { name: 'ESPAGUETI CARBONARA', price: '12,00 €', allergens: [1, 3, 7] },
  { name: 'ESPAGUETI BOLOÑESA', price: '12,00 €', allergens: [1, 9] },
  { name: 'PENNE AL PESTO', price: '11,50 €', allergens: [1, 7, 14] },
  { name: 'TORTELINI CUATRO QUESOS', price: '11,50 €', allergens: [1, 7, 14] },
]

const lasanas = [
  { name: 'LASAÑA CASERA DE CARNE', price: '13,50 €', allergens: [1, 7, 9, 14] },
  { name: 'LASAÑA CASERA DE VERDURAS', desc: 'berenjenas, calabacines, queso de cabra y pesto', price: '12,50 €', allergens: [1, 7, 14] },
]

export default function PastaSection() {
  return (
    <section className="bg-[#F5F0E8] pb-16 md:pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader title="Pasta & Lasañas" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Un poco de pasta */}
          <MenuCard bgClass="bg-[#EDE4D3]">
            <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
              Un Poco de Pasta
            </h3>
            <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
            <div className="space-y-3">
              {pastas.map((item) => (
                <div key={item.name} className="flex justify-between items-center gap-3 py-1.5 border-b border-[rgba(139,94,60,0.1)]">
                  <div className="flex items-center flex-wrap">
                    <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                      {item.name}
                    </span>
                    <AllergenBadges allergens={item.allergens} />
                  </div>
                  <span className="font-body text-sm font-bold text-[#D4A84B] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </MenuCard>

          {/* Lasañas */}
          <MenuCard bgClass="bg-[#E8DCC8]" delay={0.15}>
            <h3 className="font-body text-xl font-bold uppercase tracking-[0.04em] text-[#7A8B5C] mb-4">
              Lasañas
            </h3>
            <div className="border-b border-[rgba(122,139,92,0.25)] mb-4" />
            <div className="space-y-4">
              {lasanas.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-3 py-1.5 border-b border-[rgba(139,94,60,0.1)]">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap">
                      <span className="font-body text-sm font-semibold uppercase tracking-[0.02em] text-[#2C2420]">
                        {item.name}
                      </span>
                      <AllergenBadges allergens={item.allergens} />
                    </div>
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
      </div>
    </section>
  )
}
