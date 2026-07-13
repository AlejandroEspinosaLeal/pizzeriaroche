import SectionHeader from '../components/SectionHeader'
import { ALLERGENS } from '../components/AllergenBadge'
import { ShieldAlert } from 'lucide-react'

export default function AlergenosSection() {
  const listaAlergenos = Object.values(ALLERGENS)

  return (
    <section id="alergenos" className="bg-[#F5F0E8] py-16 md:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader title="Alérgenos de Nuestra Carta" />

        <p className="font-body text-center text-[#5C4D44] max-w-[750px] mx-auto -mt-4 mb-10 text-sm md:text-base leading-relaxed">
          Símbolos de alérgenos presentes en nuestros platos según lo establecido en el Reglamento (UE) nº 1169/2011. Junto a cada plato de la carta verás los símbolos correspondientes:
        </p>

        {/* Grid con símbolos e iconos de cada alérgeno */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {listaAlergenos.map((alg) => (
            <div
              key={alg.id}
              className="bg-[#EDE5DA] hover:bg-[#E5DCCF] transition-colors rounded-lg px-5 py-3.5 flex items-center gap-4 border border-[rgba(139,94,60,0.18)] shadow-sm"
            >
              <span
                className="w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0 shadow-inner"
                style={{ backgroundColor: alg.color }}
              >
                {alg.icon}
              </span>
              <span className="font-display font-bold text-base md:text-lg text-[#2C2420]">
                {alg.name}
              </span>
            </div>
          ))}
        </div>

        {/* Banner de Información Alimentaria (sin el botón de llamar) */}
        <div className="mt-12 max-w-[900px] mx-auto bg-[#2C2420] text-[#EDE4D3] rounded-xl p-6 md:p-8 flex items-start gap-5 shadow-lg border border-[#3D322C]">
          <div className="w-12 h-12 rounded-full bg-[#3D322C] flex items-center justify-center shrink-0 text-[#C45B3F]">
            <ShieldAlert size={26} />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg md:text-xl text-white mb-2">
              Información Alimentaria (Reglamento UE 1169/2011)
            </h4>
            <p className="font-body text-sm md:text-base text-[#C8BCB0] leading-relaxed">
              En <strong className="text-white">ROCHE Pizzería Parrilla</strong> elaboramos nuestras pizzas y carnes al momento. Si tienes celiaquía, intolerancia a la lactosa o cualquier alergia alimentaria, infórmanos al realizar tu pedido para aplicar protocolos de cocina segura y evitar trazas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
