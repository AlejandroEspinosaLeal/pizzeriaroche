export default function MobileCategoryNav() {
  const categories = [
    { label: '🔥 Carta', id: 'carta' },
    { label: '🍕 Pizzas', id: 'pizzas' },
    { label: '🥩 Carnes', id: 'carnes' },
    { label: '🍝 Pastas', id: 'pasta' },
    { label: '🥗 Entrantes', id: 'entrantes' },
    { label: '🍔 Burgers', id: 'hamburguesas' },
    { label: '🍰 Postres', id: 'postres' },
    { label: '⚠️ Alérgenos', id: 'alergenos' },
    { label: '📍 Ubicación', id: 'ubicacion' },
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-[72px] z-40 bg-[#2C2420] text-white py-2.5 px-4 shadow-md md:hidden border-b border-[#3D322D]">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#3E332E] hover:bg-[#C45B3F] active:bg-[#C45B3F] text-xs font-semibold tracking-wide transition-colors whitespace-nowrap border border-white/10"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
