import { MapPin, Navigation, Clock, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function LocationMapSection() {
  return (
    <section id="ubicacion" className="bg-[#F5F0E8] py-16 md:py-24 px-6 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader title="Dónde Estamos" />

        <div className="bg-[#EDE4D3] rounded-2xl p-6 md:p-10 border border-[rgba(139,94,60,0.18)] shadow-[0_12px_40px_rgba(44,36,32,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Columna Izquierda: Información práctica y botones */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3D8C4] text-[#7A8B5C] font-body text-xs font-bold uppercase tracking-wider mb-3">
                  Urbanización Roche · Conil
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#2C2420] leading-snug">
                  ROCHE Pizzería Parrilla
                </h3>
              </div>

              <div className="space-y-4 font-body text-[#5C4D44]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E3D8C4] flex items-center justify-center shrink-0 text-[#C45B3F] mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2420] text-sm md:text-base">Dirección</h4>
                    <p className="text-sm leading-relaxed text-[#6B6057]">
                      Av. Bélgica, s/n · Urbanización Roche<br />
                      11149 Conil de la Frontera (Cádiz, España)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E3D8C4] flex items-center justify-center shrink-0 text-[#7A8B5C] mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2420] text-sm md:text-base">Horario de Cocina</h4>
                    <p className="text-sm leading-relaxed text-[#6B6057]">
                      <strong className="text-[#2C2420]">De 20:30 a 00:00 h</strong><br />
                      <span className="text-[#7A8B5C] font-medium">Abierto todos los días en temporada</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E3D8C4] flex items-center justify-center shrink-0 text-[#D4A84B] mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2420] text-sm md:text-base">Encargos y Reservas</h4>
                    <a href="tel:+34647338806" className="text-sm font-bold text-[#C45B3F] hover:underline">
                      647 338 806
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/Parrilla%2FPizzer%C3%ADa+Roche,+Av.+B%C3%A9lgica,+11149+Conil+de+la+Frontera,+C%C3%A1diz/@36.31632,-6.15180,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-white font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_6px_20px_rgba(196,91,63,0.35)]"
                  style={{ background: 'linear-gradient(135deg, #C45B3F, #A8492F)' }}
                >
                  <Navigation size={18} />
                  <span>Cómo llegar en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Mapa Interactivo Embed de Google Maps */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[320px] md:h-[390px] rounded-xl overflow-hidden border border-[rgba(139,94,60,0.22)] shadow-inner bg-[#E3D8C4]">
                <iframe
                  title="Mapa de ubicación ROCHE Pizzería Parrilla en Conil de la Frontera"
                  src="https://www.google.com/maps?q=Parrilla%2FPizzer%C3%ADa+Roche,+Av.+B%C3%A9lgica,+11149+Conil+de+la+Frontera,+C%C3%A1diz&output=embed&z=16"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
