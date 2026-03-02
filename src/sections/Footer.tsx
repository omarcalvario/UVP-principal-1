import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const footerLinks = {
  oferta: [
    { label: 'Preparatoria', href: 'https://uvp.mx/prepa/' },
    { label: 'Licenciaturas', href: 'https://uvp.mx/oferta-academica/' },
    { label: 'Posgrados', href: 'https://uvp.mx/posgrados-3/' },
    { label: 'Universidad Online', href: 'https://uvp.mx/online/' },
    { label: 'Sistema Abierto', href: 'https://uvp.mx/sistema-abierto/' },
    { label: 'Educación Continua', href: 'https://educacioncontinua.uvp.mx/' },
  ],
  admisiones: [
    { label: 'Proceso de Inscripción', href: 'https://uvp.mx/registro/' },
    { label: 'Cuotas', href: 'https://uvp.mx/cuotas/' },
    { label: 'Becas', href: 'https://uvp.mx/admision/' },
    { label: 'Test Vocacional', href: 'https://uvp.mx/test-vocacional/' },
    { label: 'Calendario Escolar', href: 'https://uvp.mx/assets/avisos/Calendario2026.pdf' },
  ],
  servicios: [
    { label: 'SAIA', href: 'https://uvp.mx/saia/' },
    { label: 'Biblioteca', href: 'https://uvp.mx/biblioteca-central/' },
    { label: 'Vinculación', href: 'https://uvp.mx/vinculacion/' },
    { label: 'Bolsa de Trabajo', href: 'https://uvp.mx/bolsadetrabajo/' },
    { label: 'Talleres Culturales', href: 'https://uvp.mx/talleres-culturales/' },
    { label: 'Deportes', href: 'https://deportes.uvp.mx/' },
  ],
  identidad: [
    { label: 'Historia', href: 'https://uvp.mx/historia/' },
    { label: 'Acreditaciones', href: 'https://uvp.mx/identidad-uvp/' },
    { label: 'Ranking', href: 'https://uvp.mx/ranking-2/' },
    { label: 'Plan de Desarrollo', href: 'https://uvp.mx/plan-de-desarrollo/' },
    { label: 'Política de Calidad', href: 'https://uvp.mx/politica-de-calidad/' },
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://es-la.facebook.com/uvp.pue/', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: 'https://www.instagram.com/uvp_puebla/', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Youtube, href: 'https://www.youtube.com/WEBUVP', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: MessageCircle, href: 'https://api.whatsapp.com/send?phone=522211113248', label: 'WhatsApp', color: 'hover:bg-green-500' },
]

const accreditations = [
  { name: 'FIMPES', image: 'https://uvp.mx/assets/img/ico/footer/fimpes.png' },
  { name: 'CIEES', image: 'https://uvp.mx/assets/img/ico/footer/ciees.png' },
  { name: 'ANUIES', image: 'https://uvp.mx/assets/img/ico/footer/anuies.png' },
  { name: 'ACBSP', image: 'https://uvp.mx/assets/img/ico/footer/acbsp.png' },
  { name: 'AENOR', image: 'https://uvp.mx/assets/img/ico/footer/aenor.png' },
]

export function Footer() {
  return (
    <footer className="bg-uvp-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-uvp-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">UVP</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">Universidad del</span>
                <span className="text-uvp-purple font-bold text-lg leading-tight block">Valle de Puebla</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Más de 42 años formando líderes emprendedores con calidad humana. 
              Excelencia académica respaldada por las principales instituciones.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-uvp-purple" />
                <span className="text-sm">Calle 3 Sur 5758, Col. El Cerrito, Puebla</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-uvp-purple" />
                <span className="text-sm">(222) 266 94 88 / 89</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-uvp-purple" />
                <span className="text-sm">info@uvp.mx</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-4">Oferta Académica</h4>
            <ul className="space-y-3">
              {footerLinks.oferta.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uvp-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Admisiones</h4>
            <ul className="space-y-3">
              {footerLinks.admisiones.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uvp-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uvp-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Identidad UVP</h4>
            <ul className="space-y-3">
              {footerLinks.identidad.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uvp-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Accreditations Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {accreditations.map((acc) => (
              <img
                key={acc.name}
                src={acc.image}
                alt={acc.name}
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Universidad del Valle de Puebla. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://uvp.mx/aviso-de-privacidad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-uvp-yellow transition-colors"
              >
                Aviso de Privacidad
              </a>
              <a
                href="https://uvp.mx/quejas-y-sugerencias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-uvp-yellow transition-colors"
              >
                Quejas y Sugerencias
              </a>
              <a
                href="https://uvp.mx/directorio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-uvp-yellow transition-colors"
              >
                Directorio
              </a>
              <a
                href="https://reclutamiento.uvp.mx/empleos/uvppue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-uvp-yellow transition-colors flex items-center gap-1"
              >
                Trabaja con Nosotros
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
