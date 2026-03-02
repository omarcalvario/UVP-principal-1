import { useState } from 'react'
import { Search, GraduationCap, ArrowRight, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const carreras = [
  'Medicina',
  'Derecho',
  'Administración de Empresas',
  'Ingeniería en Sistemas Computacionales',
  'Psicología',
  'Contaduría Pública',
  'Nutrición',
  'Diseño Gráfico',
  'Comunicación',
  'Arquitectura',
  'Ingeniería Industrial',
  'Gastronomía',
  'Mercadotecnia',
  'Pedagogía',
  'Criminología',
]

export function Hero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)

  const filteredCarreras = carreras.filter(c => 
    c.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inscripcion" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80" 
          alt="Campus UVP" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uvp-purple/95 via-uvp-purple/85 to-uvp-purple/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-uvp-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full border border-uvp-yellow/30">
              <Calendar className="w-4 h-4 text-uvp-yellow" />
              <span className="text-sm font-medium">Inscripciones Abiertas 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Construye tu{' '}
              <span className="text-uvp-yellow">futuro</span>
              <br />
              en la UVP
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Más de 42 años formando líderes emprendedores con calidad humana. 
              Descubre nuestras 34 licenciaturas y posgrados con modelo educativo híbrido.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('carreras')}
                className="bg-uvp-red hover:bg-uvp-red/90 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-uvp-red/30 transition-all hover:scale-105"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Ver Carreras
              </Button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-uvp-purple font-bold text-lg px-8 py-6 rounded-xl transition-all"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Agenda tu Recorrido
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-uvp-yellow">42+</div>
                <div className="text-sm text-white/80">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uvp-yellow">34</div>
                <div className="text-sm text-white/80">Licenciaturas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uvp-yellow">29°</div>
                <div className="text-sm text-white/80">Ranking Nacional</div>
              </div>
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-uvp-dark mb-2">
                ¿Qué quieres estudiar?
              </h2>
              <p className="text-gray-600">
                Encuentra la carrera perfecta para ti
              </p>
            </div>

            {/* Search Box */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar carrera..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setShowResults(e.target.value.length > 0)
                }}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 rounded-xl focus:border-uvp-purple focus:ring-uvp-purple/20"
              />
              
              {/* Search Results */}
              {showResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-64 overflow-y-auto z-20">
                  {filteredCarreras.length > 0 ? (
                    filteredCarreras.map((carrera, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchTerm(carrera)
                          setShowResults(false)
                          scrollToSection('carreras')
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-uvp-purple/10 transition-colors flex items-center justify-between group"
                      >
                        <span className="text-uvp-dark group-hover:text-uvp-purple">{carrera}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-uvp-purple opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">
                      No se encontraron carreras
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Filters */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Explorar por área
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => scrollToSection('carreras')}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-uvp-purple hover:bg-uvp-purple/5 transition-all text-left group"
                >
                  <div className="w-10 h-10 bg-uvp-purple/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-uvp-purple transition-colors">
                    <span className="text-uvp-purple group-hover:text-white font-bold text-sm">HC</span>
                  </div>
                  <span className="text-sm font-medium text-uvp-dark">Ciencias de la Salud</span>
                </button>
                <button 
                  onClick={() => scrollToSection('carreras')}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-uvp-purple hover:bg-uvp-purple/5 transition-all text-left group"
                >
                  <div className="w-10 h-10 bg-uvp-purple/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-uvp-purple transition-colors">
                    <span className="text-uvp-purple group-hover:text-white font-bold text-sm">IN</span>
                  </div>
                  <span className="text-sm font-medium text-uvp-dark">Ingenierías</span>
                </button>
                <button 
                  onClick={() => scrollToSection('carreras')}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-uvp-purple hover:bg-uvp-purple/5 transition-all text-left group"
                >
                  <div className="w-10 h-10 bg-uvp-purple/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-uvp-purple transition-colors">
                    <span className="text-uvp-purple group-hover:text-white font-bold text-sm">AD</span>
                  </div>
                  <span className="text-sm font-medium text-uvp-dark">Administración</span>
                </button>
                <button 
                  onClick={() => scrollToSection('carreras')}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-uvp-purple hover:bg-uvp-purple/5 transition-all text-left group"
                >
                  <div className="w-10 h-10 bg-uvp-purple/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-uvp-purple transition-colors">
                    <span className="text-uvp-purple group-hover:text-white font-bold text-sm">DH</span>
                  </div>
                  <span className="text-sm font-medium text-uvp-dark">Humanidades</span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button 
                onClick={() => scrollToSection('carreras')}
                className="w-full bg-uvp-purple hover:bg-uvp-purple/90 text-white font-bold py-6 rounded-xl"
              >
                Ver todas las carreras
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
