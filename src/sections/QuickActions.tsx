import { Edit3, DollarSign, MapPin, ClipboardCheck, ArrowRight } from 'lucide-react'

const actions = [
  {
    id: 'inscribete',
    title: 'Inscríbete',
    subtitle: 'Proceso de admisión',
    description: 'Completa tu registro y asegura tu lugar en la UVP',
    icon: Edit3,
    color: 'bg-uvp-purple',
    hoverColor: 'hover:bg-uvp-purple/90',
    link: 'https://uvp.mx/registro/',
    external: true
  },
  {
    id: 'cuotas',
    title: 'Cuotas',
    subtitle: 'Conoce los costos',
    description: 'Información sobre colegiaturas y planes de pago',
    icon: DollarSign,
    color: 'bg-uvp-red',
    hoverColor: 'hover:bg-uvp-red/90',
    link: 'https://uvp.mx/cuotas/',
    external: true
  },
  {
    id: 'recorrido',
    title: 'Agendar Recorrido',
    subtitle: 'Conoce el campus',
    description: 'Visita nuestras instalaciones y vive la experiencia UVP',
    icon: MapPin,
    color: 'bg-uvp-yellow',
    textColor: 'text-uvp-dark',
    hoverColor: 'hover:bg-uvp-yellow/90',
    link: 'https://forms.gle/1w1oSHoyg85cwKeG9',
    external: true
  },
  {
    id: 'test',
    title: 'Test Vocacional',
    subtitle: 'Descubre tu vocación',
    description: 'Encuentra la carrera perfecta según tus habilidades',
    icon: ClipboardCheck,
    color: 'bg-uvp-dark',
    hoverColor: 'hover:bg-uvp-dark/90',
    link: 'https://uvp.mx/test-vocacional/',
    external: true
  }
]

export function QuickActions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-uvp-dark mb-4">
            ¿Qué necesitas <span className="text-uvp-purple">hacer hoy</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Te damos las herramientas para que tomes la mejor decisión sobre tu futuro académico
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <a
                key={action.id}
                href={action.link}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Top Color Bar */}
                <div className={`h-2 ${action.color}`} />
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${action.textColor || 'text-white'}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-uvp-purple uppercase tracking-wide">
                      {action.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-uvp-dark group-hover:text-uvp-purple transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-uvp-purple font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Ir ahora</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 ${action.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            ¿Tienes dudas? Estamos aquí para ayudarte
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=522211113248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-uvp-purple hover:text-uvp-red font-medium transition-colors"
            >
              <span>Chatea por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="tel:2222669489"
              className="inline-flex items-center gap-2 text-uvp-purple hover:text-uvp-red font-medium transition-colors"
            >
              <span>Llámanos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
