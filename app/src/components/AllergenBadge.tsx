import React from 'react'

export interface AllergenInfo {
  id: number
  name: string
  color: string
  icon: React.ReactNode
}

const GlutenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M2 22 16 8" />
    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
  </svg>
)

const CrustaceosIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 4C8 4 4 8 4 13c0 3.5 2.5 6 6 6s5-2 5-5" />
    <path d="M18 7c1.5 1.5 2 3.5 2 5.5 0 3-2 5-4.5 5" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <path d="M4 11H2m4 4H3m14-4h2m-4 4h1" />
  </svg>
)

const HuevosIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 22c4.97 0 9-3.58 9-9 0-5.42-4.03-11-9-11S3 7.58 3 13c0 5.42 4.03 9 9 9z" />
  </svg>
)

const PescadoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6-3.56 0-7.56-2.53-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
    <path d="M7 10.67C7 8 5.58 5.97 2.79 5.3c-1.51-.36-1.54 1.76-1.58 2.65-.05 1.15.82 2.11 1.95 2.22" />
    <path d="M7 13.33c0 2.67-1.42 4.7-4.21 5.37-1.51.36-1.54-1.76-1.58-2.65-.05-1.15.82-2.11 1.95-2.22" />
    <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
  </svg>
)

const CacahueteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M8.5 6A4.5 4.5 0 0 0 4 10.5c0 1.88 1.15 3.5 2.8 4.18a3 3 0 0 1 1.02 2.15C7.9 18.61 9.3 20 11 20h2c1.7 0 3.1-1.39 3.18-3.17a3 3 0 0 1 1.02-2.15C18.85 14 20 12.38 20 10.5A4.5 4.5 0 0 0 15.5 6c-1.39 0-2.63.63-3.45 1.62A4.48 4.48 0 0 0 8.5 6z" />
    <circle cx="8.5" cy="10.5" r="1.5" />
    <circle cx="15.5" cy="14.5" r="1.5" />
  </svg>
)

const SojaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.6-4.3 1.3-4.9 2z" />
  </svg>
)

const LacteosIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M8 2h8l-1 5v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7L8 2z" />
    <path d="M7 7h10" />
    <path d="M10 12h4" />
  </svg>
)

const FrutosCascaraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 2C7 2 3 6 3 11c0 6 4 11 9 11s9-5 9-11c0-5-4-9-9-9z" />
    <path d="M12 2v20" />
    <path d="M6 8c2 2 4 2 6 2s4 0 6-2" />
  </svg>
)

const ApioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 1 6.9-.9 2.5-4.1 5-7 6.1" />
    <path d="M11 20v-8" />
    <path d="M5 20a5 5 0 0 1-.9-8.9C7.8 10 9 9.5 11 8" />
  </svg>
)

const MostazaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 2v6" />
    <path d="M9 2h6" />
    <path d="M6 8h12l1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 8z" />
    <circle cx="12" cy="14" r="2" fill="currentColor" />
  </svg>
)

const SesamoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 3c-4 4-5 9-2 13 2 3 6 4 9 1-3 0-5-3-5-6 0-4 1-6-2-8z" />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
    <circle cx="13" cy="15" r="1" fill="currentColor" />
  </svg>
)

const AltramucesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 3a9 9 0 0 0-9 9c0 5.5 4.5 10 9 10s9-4.5 9-10a9 9 0 0 0-9-9z" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12.5" r="1.5" fill="currentColor" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
  </svg>
)

const MoluscosIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M12 3C6.5 3 3 7.5 3 13c0 4.5 3.5 8 9 8s9-3.5 9-8c0-5.5-3.5-10-9-10z" />
    <path d="M12 3v18" />
    <path d="M6 7c2 3 4 4 6 5" />
    <path d="M18 7c-2 3-4 4-6 5" />
  </svg>
)

const SulfitosIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M8 22h8" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5V3H7v7a5 5 0 0 0 5 5z" />
    <path d="M7 8h10" />
  </svg>
)

export const ALLERGENS: Record<number, AllergenInfo> = {
  1: { id: 1, name: 'Gluten', color: '#D35400', icon: <GlutenIcon /> },
  2: { id: 2, name: 'Crustáceos', color: '#E67E22', icon: <CrustaceosIcon /> },
  3: { id: 3, name: 'Huevos', color: '#F39C12', icon: <HuevosIcon /> },
  4: { id: 4, name: 'Pescado', color: '#1E88E5', icon: <PescadoIcon /> },
  5: { id: 5, name: 'Cacahuetes', color: '#6D4C41', icon: <CacahueteIcon /> },
  6: { id: 6, name: 'Soja', color: '#689F38', icon: <SojaIcon /> },
  7: { id: 7, name: 'Lácteos', color: '#29B6F6', icon: <LacteosIcon /> },
  8: { id: 8, name: 'Frutos de cáscara', color: '#8D6E63', icon: <FrutosCascaraIcon /> },
  9: { id: 9, name: 'Apio', color: '#43A047', icon: <ApioIcon /> },
  10: { id: 10, name: 'Mostaza', color: '#FBC02D', icon: <MostazaIcon /> },
  11: { id: 11, name: 'Sésamo', color: '#FB8C00', icon: <SesamoIcon /> },
  12: { id: 12, name: 'Altramuces', color: '#FDD835', icon: <AltramucesIcon /> },
  13: { id: 13, name: 'Moluscos', color: '#E53935', icon: <MoluscosIcon /> },
  14: { id: 14, name: 'Sulfitos', color: '#8E44AD', icon: <SulfitosIcon /> },
}

interface AllergenBadgesProps {
  allergens?: number[]
  className?: string
}

export const AllergenBadges: React.FC<AllergenBadgesProps> = ({ allergens, className = '' }) => {
  if (!allergens || allergens.length === 0) return null

  return (
    <span className={`inline-flex items-center gap-1.5 ml-2 align-middle ${className}`}>
      {allergens.map((id) => {
        const item = ALLERGENS[id]
        if (!item) return null
        return (
          <span
            key={id}
            title={`${item.name}`}
            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white shadow-sm cursor-help transition-transform hover:scale-110 shrink-0"
            style={{ backgroundColor: item.color }}
          >
            {item.icon}
          </span>
        )
      })}
    </span>
  )
}
