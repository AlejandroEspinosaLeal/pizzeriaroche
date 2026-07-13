import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import RocheLogo from './RocheLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''
      }`}
      style={{ backgroundColor: 'rgba(245, 240, 232, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)' }}
    >
      <div className="max-w-[1100px] mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo Real */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:opacity-90 transition-opacity"
          aria-label="ROCHE Pizzería Parrilla Inicio"
        >
          <RocheLogo variant="dark" size="sm" showSubtitle={true} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('carta')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] hover:text-[#C45B3F] transition-colors">
            Carta
          </button>
          <button onClick={() => scrollTo('alergenos')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] hover:text-[#C45B3F] transition-colors">
            Alérgenos
          </button>
          <button onClick={() => scrollTo('ubicacion')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] hover:text-[#C45B3F] transition-colors">
            Ubicación
          </button>
          <a
            href="tel:+34647338806"
            className="flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] hover:text-[#C45B3F] transition-colors"
          >
            <Phone size={16} />
            647 338 806
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#2C2420]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#F5F0E8] border-b border-[rgba(139,94,60,0.15)] md:hidden py-4 px-6 flex flex-col gap-4 shadow-lg">
          <button onClick={() => scrollTo('carta')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] text-left">
            Carta
          </button>
          <button onClick={() => scrollTo('alergenos')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] text-left">
            Alérgenos
          </button>
          <button onClick={() => scrollTo('ubicacion')} className="font-body text-sm font-medium uppercase tracking-[0.04em] text-[#2C2420] text-left">
            Ubicación
          </button>
          <a
            href="tel:+34647338806"
            className="flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.04em] text-[#C45B3F]"
          >
            <Phone size={16} />
            647 338 806
          </a>
        </div>
      )}
    </nav>
  )
}
