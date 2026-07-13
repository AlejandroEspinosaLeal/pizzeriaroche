import { useState } from 'react'
import { Phone } from 'lucide-react'

export default function PhoneFAB() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-[76px] right-0 bg-[#2C2420] text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Llamar para reservar o pedir
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#2C2420] rotate-45" />
        </div>
      )}

      {/* Pulse ring */}
      <div
        className="absolute inset-0 rounded-full bg-[#C45B3F] animate-pulse-ring"
        style={{ margin: '-4px', padding: '4px' }}
      />

      {/* Button */}
      <a
        href="tel:+34647338806"
        className="relative flex items-center justify-center w-16 h-16 rounded-full text-white shadow-[0_8px_32px_rgba(196,91,63,0.4)] hover:scale-110 transition-transform duration-300"
        style={{ background: 'linear-gradient(135deg, #C45B3F, #A8492F)' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Llamar para reservar o pedir"
      >
        <Phone size={28} />
      </a>
    </div>
  )
}
