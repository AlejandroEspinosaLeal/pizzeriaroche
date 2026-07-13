import { Phone } from 'lucide-react'
import RocheLogo from './RocheLogo'

export default function Footer() {
  return (
    <footer className="bg-[#2C2420] text-[#A89888]">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Dirección */}
          <div className="text-center md:text-left">
            <RocheLogo variant="light" size="md" showSubtitle={true} />
            <p className="font-body text-xs text-[#A89888] mt-4 leading-relaxed">
              Av. Bélgica, Urbanización Roche<br />
              11149 Conil de la Frontera, Cádiz, España
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <a
              href="tel:+34647338806"
              className="inline-flex items-center gap-3 text-[#F5F0E8] hover:text-[#C45B3F] transition-colors"
            >
              <Phone size={24} />
              <span className="font-body text-2xl font-bold">647 338 806</span>
            </a>
            <p className="font-body text-sm mt-2 text-[#A89888]">
              Llamar para reservar o pedir
            </p>
          </div>

          {/* Info & Horario */}
          <div className="text-center md:text-right">
            <p className="font-body text-sm text-[#F5F0E8] font-semibold">Horario de Cocina</p>
            <p className="font-body text-sm mt-0.5">De 20:30 a 00:00 h</p>
            <p className="font-body text-xs mt-3 text-[#A89888]">Pan y Picos 2,00 € · IVA Incluido</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(168,152,136,0.2)] mt-8 pt-6">
          <p className="font-body text-xs text-center text-[rgba(168,152,136,0.6)]">
            Alérgenos según lo establecido en el reglamento 1169/2011
          </p>
          <p className="font-body text-xs text-center text-[rgba(168,152,136,0.6)] mt-1">
            Si tiene alguna alergia no recogida en esta carta, por favor indíquenoslo.
          </p>
        </div>
      </div>
    </footer>
  )
}
