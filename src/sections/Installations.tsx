import { useState } from 'react'
import { MapPin, Building2, ArrowRight, Play, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const complexes = [
  {
    id: 'aztlan',
    name: 'Complejo Aztlán',
    address: 'Calle 5 Sur 5906, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    facilities: ['Aulas modernas', 'Laboratorios', 'Biblioteca'],
    virtualTour: 'https://uvp.mx/tour/aztlan/'
  },
  {
    id: 'calmecac',
    name: 'Complejo Calmécac',
    address: 'Calle 3 Sur 5758, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    facilities: ['Auditorio', 'Centro de cómputo', 'Cafetería'],
    virtualTour: 'https://uvp.mx/tour/calmecac/'
  },
  {
    id: 'tlaloc',
    name: 'Complejo Tláloc',
    address: 'Calle 3 Sur 5904, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    facilities: ['Talleres', 'Laboratorios especializados', 'Estacionamiento'],
    virtualTour: 'https://uvp.mx/tour/tlaloc/'
  },
  {
    id: 'cuetlaxcoapan',
    name: 'Complejo Cuetlaxcoapan',
    address: 'Calle 3 Sur 5720, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    facilities: ['Aulas', 'Sala de juntas', 'Áreas verdes'],
    virtualTour: 'https://uvp.mx/tour/cuetlaxcoapan/'
  },
  {
    id: 'kukulcan',
    name: 'Complejo Kukulcán',
    address: 'Calle 3 Sur 5759, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
    facilities: ['Laboratorios de ingeniería', 'Talleres', 'Biblioteca especializada'],
    virtualTour: 'https://uvp.mx/tour/kukulcan/'
  },
  {
    id: 'quetzalcoatl',
    name: 'Complejo Quetzalcóatl',
    address: 'Calle 3 A Sur 5720, El Cerrito, 72440 Puebla',
    image: 'https://images.unsplash.com/photo-1592280771883-1cfae86b4321?w=800&q=80',
    facilities: ['Aulas multimedia', 'Centro de idiomas', 'Sala de lectura'],
    virtualTour: 'https://uvp.mx/tour/quetzalcoatl/'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
  'https://images.unsplash.com/photo-1592280771883-1cfae86b4321?w=800&q=80',
]

export function Installations() {
  const [selectedComplex, setSelectedComplex] = useState<typeof complexes[0] | null>(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="instalaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-uvp-purple/10 text-uvp-purple px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Infraestructura de Primera</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-uvp-dark mb-4">
            Nuestras <span className="text-uvp-purple">Instalaciones</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Campus modernos equipados con la mejor tecnología para tu formación académica
          </p>
        </div>

        {/* Gallery Preview */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentImage(idx)
                  setGalleryOpen(true)
                }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Instalación ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-uvp-purple/0 group-hover:bg-uvp-purple/30 transition-colors flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Complexes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complexes.map((complex) => (
            <div
              key={complex.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={complex.image}
                  alt={complex.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{complex.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 text-uvp-purple flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{complex.address}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {complex.facilities.map((facility, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedComplex(complex)}
                    variant="outline"
                    className="flex-1 border-uvp-purple text-uvp-purple hover:bg-uvp-purple hover:text-white"
                  >
                    Ver detalles
                  </Button>
                  <a
                    href={complex.virtualTour}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 bg-uvp-yellow text-uvp-dark rounded-lg font-medium hover:bg-uvp-yellow/90 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-uvp-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-uvp-purple" />
              </div>
              <h3 className="text-xl font-bold text-uvp-dark mb-2">10 Complejos</h3>
              <p className="text-gray-600">Instalaciones distribuidas estratégicamente en Puebla</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-uvp-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-uvp-red" />
              </div>
              <h3 className="text-xl font-bold text-uvp-dark mb-2">3 Campus</h3>
              <p className="text-gray-600">Puebla, Tehuacán y Tlaxcala</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-uvp-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-uvp-dark" />
              </div>
              <h3 className="text-xl font-bold text-uvp-dark mb-2">Tour Virtual</h3>
              <p className="text-gray-600">Conoce nuestras instalaciones desde casa</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://forms.gle/1w1oSHoyg85cwKeG9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-uvp-purple text-white font-bold px-8 py-4 rounded-xl hover:bg-uvp-purple/90 transition-colors shadow-lg shadow-uvp-purple/30"
          >
            <MapPin className="w-5 h-5" />
            Agenda un recorrido presencial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Complex Detail Dialog */}
      <Dialog open={!!selectedComplex} onOpenChange={() => setSelectedComplex(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-uvp-dark">
              {selectedComplex?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedComplex && (
            <div className="space-y-4">
              <img
                src={selectedComplex.image}
                alt={selectedComplex.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-uvp-purple flex-shrink-0 mt-0.5" />
                <span>{selectedComplex.address}</span>
              </div>
              <div>
                <h4 className="font-bold text-uvp-dark mb-2">Instalaciones:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedComplex.facilities.map((facility, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-uvp-purple/10 text-uvp-purple rounded-full text-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={selectedComplex.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-uvp-yellow text-uvp-dark font-bold px-6 py-3 rounded-xl hover:bg-uvp-yellow/90 transition-colors"
              >
                <Play className="w-5 h-5" />
                Ver Tour Virtual
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Gallery Dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl bg-black/95 border-none">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center justify-between">
              <span>Galería de Instalaciones</span>
              <button
                onClick={() => setGalleryOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={galleryImages[currentImage]}
              alt={`Instalación ${currentImage + 1}`}
              className="w-full h-[60vh] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentImage ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
