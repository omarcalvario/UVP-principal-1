import { useState, useEffect } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { UrgencyBar } from './sections/UrgencyBar'
import { QuickActions } from './sections/QuickActions'
import { CareerExplorer } from './sections/CareerExplorer'
import { Modalities } from './sections/Modalities'
import { WhyUVP } from './sections/WhyUVP'
import { Installations } from './sections/Installations'
import { ContactForm } from './sections/ContactForm'
import { Footer } from './sections/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <UrgencyBar />
        <QuickActions />
        <CareerExplorer />
        <Modalities />
        <WhyUVP />
        <Installations />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
