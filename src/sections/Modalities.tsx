import { BookOpen, Monitor, Calendar, Sun, GraduationCap, ArrowRight } from 'lucide-react'

const modalities = [
  {
    id: 'prepa',
    title: 'Preparatoria',
    subtitle: 'Bachillerato UVP',
    description: 'Formación integral con capacitación para el empleo desde el primer año. Preparación universitaria de excelencia.',
    features: ['3 años', 'Capacitación laboral', 'Beca académica'],
    icon: BookOpen,
    color: 'from-uvp-purple to-purple-700',
    bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    link: 'https://uvp.mx/prepa/'
  },
  {
    id: 'licenciatura',
    title: 'Licenciaturas',
    subtitle: 'Modalidad Híbrida',
    description: 'Modelo educativo que combina clases presenciales con actividades en línea. 34 programas académicos.',
    features: ['4-6 años', 'Modelo híbrido', 'Prácticas profesionales'],
    icon: GraduationCap,
    color: 'from-uvp-red to-red-700',
    bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    link: 'https://uvp.mx/oferta-academica/'
  },
  {
    id: 'sabatino',
    title: 'Sistema Abierto',
    subtitle: 'Modalidad Sabatina',
    description: 'Estudia los sábados y trabaja durante la semana. Ideal para quienes necesitan flexibilidad horaria.',
    features: ['Clases sábados', 'Compatible con trabajo', 'Misma calidad'],
    icon: Calendar,
    color: 'from-amber-500 to-orange-600',
    bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    link: 'https://uvp.mx/sistema-abierto/'
  },
  {
    id: 'online',
    title: 'Universidad Online',
    subtitle: '100% en Línea',
    description: 'Estudia desde cualquier lugar con horarios flexibles. Plataforma educativa de última generación.',
    features: ['100% online', 'Horario flexible', 'Acompañamiento virtual'],
    icon: Monitor,
    color: 'from-blue-500 to-blue-700',
    bgImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    link: 'https://uvp.mx/online/'
  },
  {
    id: 'posgrados',
    title: 'Posgrados',
    subtitle: 'Maestrías y Especialidades',
    description: 'Especialización de alto nivel para tu desarrollo profesional. Modalidades presencial, online y b-learning.',
    features: ['Maestrías', 'Especialidades', 'Doctorados'],
    icon: Sun,
    color: 'from-teal-500 to-teal-700',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    link: 'https://uvp.mx/posgrados-3/'
  },
  {
    id: 'continua',
    title: 'Educación Continua',
    subtitle: 'Cursos y Diplomados',
    description: 'Sigue preparándote con cursos, diplomados, talleres y certificaciones de tu interés.',
    features: ['Cursos cortos', 'Diplomados', 'Certificaciones'],
    icon: BookOpen,
    color: 'from-indigo-500 to-indigo-700',
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    link: 'https://educacioncontinua.uvp.mx/'
  }
]

export function Modalities() {
  return (
    <section id="modalidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-uvp-dark mb-4">
            Nuestras <span className="text-uvp-purple">Modalidades</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu estilo de vida y objetivos profesionales
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((modality) => {
            const Icon = modality.icon
            return (
              <a
                key={modality.id}
                href={modality.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={modality.bgImage}
                    alt={modality.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${modality.color} opacity-90 transition-opacity duration-300 group-hover:opacity-95`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-1">
                    {modality.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {modality.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {modality.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {modality.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span>Conocer más</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-uvp-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-uvp-purple mb-2">6</div>
              <p className="text-gray-600">Modalidades de estudio</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-uvp-red mb-2">34+</div>
              <p className="text-gray-600">Programas académicos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-uvp-yellow text-uvp-dark mb-2">3</div>
              <p className="text-gray-600">Campus disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
