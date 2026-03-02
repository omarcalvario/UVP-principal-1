import { useState } from 'react'
import { Search, GraduationCap, Clock, BookOpen, ChevronRight, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface Career {
  id: string
  name: string
  area: string
  duration: string
  modality: string[]
  description: string
  campus: string[]
}

const areas = [
  { id: 'all', name: 'Todas', count: 34 },
  { id: 'salud', name: 'Ciencias de la Salud', count: 6 },
  { id: 'ingenieria', name: 'Ingenierías', count: 8 },
  { id: 'admin', name: 'Administración', count: 7 },
  { id: 'humanidades', name: 'Humanidades', count: 6 },
  { id: 'diseño', name: 'Diseño y Arte', count: 4 },
  { id: 'posgrados', name: 'Posgrados', count: 12 },
]

const careers: Career[] = [
  {
    id: 'medicina',
    name: 'Medicina',
    area: 'salud',
    duration: '6 años',
    modality: ['Presencial'],
    description: 'Forma médicos con excelencia académica y compromiso social.',
    campus: ['Puebla']
  },
  {
    id: 'enfermeria',
    name: 'Enfermería',
    area: 'salud',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Cuidado integral de la salud con enfoque humanista.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    area: 'salud',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Promoción de la salud a través de la alimentación.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    area: 'salud',
    duration: '4 años',
    modality: ['Presencial', 'Online', 'Sabatino'],
    description: 'Comprensión del comportamiento humano y salud mental.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'sistemas',
    name: 'Ingeniería en Sistemas Computacionales',
    area: 'ingenieria',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Desarrollo de software y soluciones tecnológicas.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'industrial',
    name: 'Ingeniería Industrial',
    area: 'ingenieria',
    duration: '4 años',
    modality: ['Presencial', 'Online', 'Sabatino'],
    description: 'Optimización de procesos y sistemas productivos.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'mecatronica',
    name: 'Ingeniería Mecatrónica',
    area: 'ingenieria',
    duration: '4 años',
    modality: ['Presencial'],
    description: 'Integración de mecánica, electrónica y software.',
    campus: ['Puebla']
  },
  {
    id: 'arquitectura',
    name: 'Arquitectura',
    area: 'ingenieria',
    duration: '5 años',
    modality: ['Presencial'],
    description: 'Diseño de espacios funcionales y sostenibles.',
    campus: ['Puebla']
  },
  {
    id: 'admin',
    name: 'Administración de Empresas',
    area: 'admin',
    duration: '4 años',
    modality: ['Presencial', 'Online', 'Sabatino'],
    description: 'Gestión estratégica de organizaciones.',
    campus: ['Puebla', 'Online', 'Tehuacán']
  },
  {
    id: 'contaduria',
    name: 'Contaduría Pública',
    area: 'admin',
    duration: '4 años',
    modality: ['Presencial', 'Online', 'Sabatino'],
    description: 'Asesoría financiera y fiscal empresarial.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'mercadotecnia',
    name: 'Mercadotecnia',
    area: 'admin',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Estrategias de comunicación y ventas.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'derecho',
    name: 'Derecho',
    area: 'humanidades',
    duration: '4 años',
    modality: ['Presencial', 'Online', 'Sabatino'],
    description: 'Formación en justicia y normatividad legal.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'comunicacion',
    name: 'Comunicación',
    area: 'humanidades',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Producción de contenidos y relaciones públicas.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'pedagogia',
    name: 'Pedagogía',
    area: 'humanidades',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Formación docente y desarrollo educativo.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'diseño',
    name: 'Diseño Gráfico',
    area: 'diseño',
    duration: '4 años',
    modality: ['Presencial', 'Online'],
    description: 'Comunicación visual y soluciones creativas.',
    campus: ['Puebla', 'Online']
  },
  {
    id: 'gastronomia',
    name: 'Gastronomía',
    area: 'diseño',
    duration: '4 años',
    modality: ['Presencial'],
    description: 'Arte culinario y administración de restaurantes.',
    campus: ['Puebla']
  },
]

export function CareerExplorer() {
  const [selectedArea, setSelectedArea] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCareers = careers.filter(career => {
    const matchesArea = selectedArea === 'all' || career.area === selectedArea
    const matchesSearch = career.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesArea && matchesSearch
  })

  return (
    <section id="carreras" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-uvp-purple/10 text-uvp-purple hover:bg-uvp-purple/20 mb-4">
            <GraduationCap className="w-4 h-4 mr-1" />
            Explorador de Carreras
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-uvp-dark mb-4">
            Encuentra tu <span className="text-uvp-purple">carrera ideal</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            34 programas académicos diseñados para formar los líderes del mañana
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar carrera..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg border-0 bg-white shadow-sm rounded-xl focus:ring-2 focus:ring-uvp-purple"
              />
            </div>
            
            {/* Filter Button (Mobile) */}
            <Button
              variant="outline"
              className="md:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          {/* Area Filters */}
          <div className={`mt-4 flex flex-wrap gap-2 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedArea === area.id
                    ? 'bg-uvp-purple text-white shadow-lg shadow-uvp-purple/30'
                    : 'bg-white text-gray-600 hover:bg-uvp-purple/10 hover:text-uvp-purple'
                }`}
              >
                {area.name}
                <span className={`ml-2 text-xs ${selectedArea === area.id ? 'text-white/80' : 'text-gray-400'}`}>
                  {area.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-bold text-uvp-dark">{filteredCareers.length}</span> carreras
          </p>
          {(selectedArea !== 'all' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedArea('all')
                setSearchTerm('')
              }}
              className="text-sm text-uvp-purple hover:text-uvp-red flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Careers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-uvp-purple/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-uvp-purple/10 rounded-xl flex items-center justify-center group-hover:bg-uvp-purple transition-colors">
                  <BookOpen className="w-6 h-6 text-uvp-purple group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {career.modality.map((mod, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-uvp-dark mb-2 group-hover:text-uvp-purple transition-colors line-clamp-2">
                {career.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {career.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{career.duration}</span>
                </div>
              </div>

              {/* Campus */}
              <div className="flex flex-wrap gap-1 mb-4">
                {career.campus.map((camp, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-uvp-yellow/20 text-uvp-dark rounded-full"
                  >
                    {camp}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://uvp.mx/oferta-academica`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-uvp-purple font-medium text-sm group-hover:text-uvp-red transition-colors"
              >
                <span>Ver detalles</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-uvp-dark mb-2">
              No se encontraron carreras
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otros términos de búsqueda
            </p>
            <Button
              onClick={() => {
                setSelectedArea('all')
                setSearchTerm('')
              }}
              variant="outline"
            >
              Ver todas las carreras
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="https://uvp.mx/oferta-academica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-uvp-purple text-white font-bold px-8 py-4 rounded-xl hover:bg-uvp-purple/90 transition-colors"
          >
            Ver catálogo completo
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
