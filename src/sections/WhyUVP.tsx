import { Trophy, Users, Building2, Award, Star, TrendingUp, CheckCircle2 } from 'lucide-react'

const stats = [
  {
    value: '29°',
    label: 'Ranking Nacional',
    description: 'Entre las mejores universidades de México',
    source: 'Ranking El Universal 2025',
    icon: Trophy,
    color: 'bg-uvp-yellow',
    textColor: 'text-uvp-dark'
  },
  {
    value: '42+',
    label: 'Años de Experiencia',
    description: 'Formando líderes emprendedores',
    source: 'Desde 1981',
    icon: Building2,
    color: 'bg-uvp-purple',
    textColor: 'text-white'
  },
  {
    value: '34',
    label: 'Licenciaturas',
    description: 'Programas académicos de excelencia',
    source: 'Diversas áreas del conocimiento',
    icon: Award,
    color: 'bg-uvp-red',
    textColor: 'text-white'
  },
  {
    value: '15K+',
    label: 'Estudiantes',
    description: 'Comunidad universitaria activa',
    source: 'En todos nuestros campus',
    icon: Users,
    color: 'bg-uvp-dark',
    textColor: 'text-white'
  }
]

const accreditations = [
  'FIMPES - Acreditación Lisa y Llana',
  'CIEES - Comités Interinstitucionales',
  'ANUIES - Asociación Nacional',
  'Registro SEP',
  'ISO 9001:2015',
  'ACBSP (Negocios)'
]

const differentiators = [
  {
    title: 'Modelo Educativo Híbrido',
    description: 'Combina lo mejor de la educación presencial y en línea'
  },
  {
    title: 'Infraestructura de Primera',
    description: 'Laboratorios, talleres y bibliotecas equipadas con tecnología de punta'
  },
  {
    title: 'Vinculación Empresarial',
    description: 'Convenios con más de 500 empresas para prácticas y empleo'
  },
  {
    title: 'Movilidad Internacional',
    description: 'Programas de intercambio con universidades de todo el mundo'
  },
  {
    title: 'Becas y Apoyos',
    description: 'Amplio programa de becas académicas, deportivas y culturales'
  },
  {
    title: 'Servicios Integrales',
    description: 'Transporte, residencias, cafetería, gimnasio y más'
  }
]

export function WhyUVP() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-uvp-purple/10 text-uvp-purple px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Excelencia Académica</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-uvp-dark mb-4">
            ¿Por qué elegir la <span className="text-uvp-purple">UVP</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Más de cuatro décadas de experiencia formando profesionales de excelencia
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-uvp-purple/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${stat.textColor}`} />
                </div>

                {/* Value */}
                <div className="text-5xl md:text-6xl font-bold text-uvp-purple mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-uvp-dark mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {stat.description}
                </p>

                {/* Source */}
                <div className="flex items-center gap-2 text-sm text-uvp-purple">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.source}</span>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-uvp-purple/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            )
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Accreditations */}
          <div className="bg-gradient-to-br from-uvp-purple to-purple-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Acreditaciones y Reconocimientos
            </h3>
            <p className="text-white/80 mb-8">
              Nuestra calidad educativa está respaldada por las principales instituciones acreditadoras de México.
            </p>

            <div className="space-y-4">
              {accreditations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-uvp-yellow flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-uvp-yellow" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Top 10</p>
                  <p className="text-white/80">Mejores universidades privadas en Puebla</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Differentiators */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-uvp-dark mb-6">
              Lo que nos hace diferentes
            </h3>
            <p className="text-gray-600 mb-8">
              En la UVP nos comprometemos con tu éxito profesional y personal.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-uvp-purple hover:text-white transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-uvp-purple/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-uvp-purple group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-uvp-dark group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://uvp.mx/identidad-uvp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-uvp-purple hover:text-uvp-red font-bold text-lg transition-colors"
          >
            <span>Conoce más sobre nuestra historia y valores</span>
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
