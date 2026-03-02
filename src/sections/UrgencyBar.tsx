import { useEffect, useState } from 'react'
import { Clock, Calendar, AlertCircle } from 'lucide-react'

export function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Próxima fecha de examen: 15 de Agosto de 2026
    const examDate = new Date('2026-08-15T09:00:00')
    
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = examDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-uvp-red py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Alert */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm md:text-base">¡Próximo Examen de Admisión!</p>
              <p className="text-white/80 text-xs md:text-sm flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                15 de Agosto de 2026 - 9:00 AM
              </p>
            </div>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-5 h-5 hidden sm:block" />
              <span className="text-sm font-medium hidden sm:inline">Tiempo restante:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-white/80">Días</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-white/80">Hrs</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-white/80">Min</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]">
                <div className="text-xl md:text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-white/80">Seg</div>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <a 
            href="https://uvp.mx/registro/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-uvp-yellow text-uvp-dark font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm md:text-base whitespace-nowrap"
          >
            Registrarme al Examen →
          </a>
        </div>
      </div>
    </section>
  )
}
