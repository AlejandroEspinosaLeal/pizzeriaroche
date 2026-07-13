import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import EntrantesSection from './sections/EntrantesSection'
import PizzasSection from './sections/PizzasSection'
import PastaSection from './sections/PastaSection'
import CarnesSection from './sections/CarnesSection'
import LocationMapSection from './sections/LocationMapSection'
import HamburguesasSection from './sections/HamburguesasSection'
import PostresSection from './sections/PostresSection'
import AlergenosSection from './sections/AlergenosSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-[100dvh] bg-[#F5F0E8]">
      <Navbar />
      <main>
        <HeroSection />
        <EntrantesSection />
        <PizzasSection />
        <PastaSection />
        <CarnesSection />
        <HamburguesasSection />
        <PostresSection />
        <AlergenosSection />
        <LocationMapSection />
      </main>
      <Footer />
    </div>
  )
}
