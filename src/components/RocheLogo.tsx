import React from 'react'

interface RocheLogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  showSubtitle?: boolean
  className?: string
}

export default function RocheLogo({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}: RocheLogoProps) {
  const primaryColor = variant === 'dark' ? '#2C2420' : '#F5F0E8'
  const secondaryColor = variant === 'dark' ? '#7A6B5D' : '#D5C7B8'
  const accentRed = '#CE2B37'
  const accentGreen = '#009246'

  const dimensions = {
    sm: { emblemSize: 26 },
    md: { emblemSize: 36 },
    lg: { emblemSize: 46 },
  }[size]

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblema Oficial R P con Utensilios Cruzados y Brocheta */}
      <svg
        width={dimensions.emblemSize}
        height={dimensions.emblemSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Espátula / Pala de Pizza Cruzada (Diagonal Izq a Der) */}
        <path
          d="M20 78 L78 20"
          stroke={primaryColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Tenedor / Utensilio Cruzado (Diagonal Der a Izq) */}
        <path
          d="M78 78 L20 20"
          stroke={primaryColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Cabezales redondos / Pala en extremos superiores */}
        <circle cx="20" cy="20" r="8" fill="none" stroke={primaryColor} strokeWidth="4.5" />
        <circle cx="78" cy="20" r="8" fill="none" stroke={primaryColor} strokeWidth="4.5" />
        {/* Mangos inferiores */}
        <rect x="16" y="73" width="8" height="12" rx="3" transform="rotate(-45 20 78)" fill={primaryColor} />
        <rect x="74" y="73" width="8" height="12" rx="3" transform="rotate(45 78 78)" fill={primaryColor} />

        {/* Letra R Superior */}
        <text
          x="49"
          y="31"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="'Playfair Display', serif"
          fontWeight="800"
          fontSize="24"
        >
          R
        </text>

        {/* Letra P Inferior */}
        <text
          x="49"
          y="88"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="'Playfair Display', serif"
          fontWeight="800"
          fontSize="24"
        >
          P
        </text>

        {/* Detalle lateral izquierdo: Brocheta */}
        <path
          d="M10 55 L32 33"
          stroke={secondaryColor}
          strokeWidth="2.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        {/* Detalle lateral derecho: Parrilla */}
        <path
          d="M68 33 L90 55"
          stroke={secondaryColor}
          strokeWidth="2.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
      </svg>

      {/* Texto de Marca Oficial ROCHE PIZZERÍA · PARRILLA */}
      <div className="flex flex-col justify-center">
        <span
          className="font-display font-bold leading-none tracking-wider"
          style={{
            color: primaryColor,
            fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.65rem' : '2.1rem',
          }}
        >
          ROCHE
        </span>
        {showSubtitle && (
          <>
            <span
              className="font-body uppercase font-semibold tracking-[0.22em] mt-0.5"
              style={{
                color: secondaryColor,
                fontSize: size === 'sm' ? '0.55rem' : size === 'md' ? '0.65rem' : '0.8rem',
              }}
            >
              PIZZERÍA · PARRILLA
            </span>
            {/* Línea Tricolor Bandera Italiana */}
            <div className="flex h-[2.5px] w-full mt-1 rounded-full overflow-hidden opacity-90">
              <div className="flex-1" style={{ backgroundColor: accentGreen }} />
              <div className="flex-1" style={{ backgroundColor: variant === 'dark' ? '#D4A84B' : '#F5F0E8' }} />
              <div className="flex-1" style={{ backgroundColor: accentRed }} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
