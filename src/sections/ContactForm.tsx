import { useState } from 'react'
import { Send, Phone, Mail, MapPin, MessageCircle, User, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const programs = [
  'Preparatoria',
  'Licenciatura en Medicina',
  'Licenciatura en Derecho',
  'Licenciatura en Psicología',
  'Licenciatura en Administración',
  'Ingeniería en Sistemas',
  'Ingeniería Industrial',
  'Contaduría Pública',
  'Diseño Gráfico',
  'Comunicación',
  'Mercadotecnia',
  'Nutrición',
  'Gastronomía',
  'Arquitectura',
  'Posgrado',
  'Otro'
]

const campuses = [
  'Puebla',
  'Tehuacán',
  'Tlaxcala',
  'Online'
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    campus: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        campus: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-uvp-dark mb-4">
            ¿Listo para comenzar? <span className="text-uvp-purple">Contáctanos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Déjanos tus datos y un asesor se comunicará contigo para resolver todas tus dudas
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-uvp-dark mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-8">
                Estamos aquí para ayudarte en tu proceso de admisión. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-uvp-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-uvp-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-uvp-dark mb-1">Teléfono</h4>
                  <a href="tel:2222669488" className="text-gray-600 hover:text-uvp-purple transition-colors">
                    (222) 266 94 88
                  </a>
                  <br />
                  <a href="tel:2222669489" className="text-gray-600 hover:text-uvp-purple transition-colors">
                    (222) 266 94 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-uvp-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-uvp-red" />
                </div>
                <div>
                  <h4 className="font-bold text-uvp-dark mb-1">Correo Electrónico</h4>
                  <a href="mailto:info@uvp.mx" className="text-gray-600 hover:text-uvp-purple transition-colors">
                    info@uvp.mx
                  </a>
                  <br />
                  <a href="mailto:admisiones@uvp.mx" className="text-gray-600 hover:text-uvp-purple transition-colors">
                    admisiones@uvp.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-uvp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-uvp-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-uvp-dark mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Calle 3 Sur 5758, Col. El Cerrito<br />
                    C.P. 72440, Puebla, México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-uvp-dark mb-1">WhatsApp</h4>
                  <a 
                    href="https://api.whatsapp.com/send?phone=522211113248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +52 221 111 32 48
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">¿Prefieres contacto inmediato?</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=522211113248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:2222669488"
                  className="inline-flex items-center gap-2 bg-uvp-purple text-white px-4 py-2 rounded-lg font-medium hover:bg-uvp-purple/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Llamar
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-uvp-dark mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-600">
                    Un asesor se comunicará contigo en breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-uvp-dark font-medium">
                        Nombre completo *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="pl-12 py-6 bg-white border-0 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-uvp-dark font-medium">
                        Correo electrónico *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="pl-12 py-6 bg-white border-0 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-uvp-dark font-medium">
                        Teléfono (WhatsApp) *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="222 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="pl-12 py-6 bg-white border-0 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="campus" className="text-uvp-dark font-medium">
                        Campus de interés *
                      </Label>
                      <Select
                        value={formData.campus}
                        onValueChange={(value) => setFormData({ ...formData, campus: value })}
                      >
                        <SelectTrigger className="py-6 bg-white border-0 shadow-sm">
                          <SelectValue placeholder="Selecciona un campus" />
                        </SelectTrigger>
                        <SelectContent>
                          {campuses.map((campus) => (
                            <SelectItem key={campus} value={campus}>
                              {campus}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program" className="text-uvp-dark font-medium">
                      Programa de interés *
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) => setFormData({ ...formData, program: value })}
                    >
                      <SelectTrigger className="py-6 bg-white border-0 shadow-sm">
                        <SelectValue placeholder="Selecciona un programa" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-uvp-dark font-medium">
                      Mensaje (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más sobre tus dudas o intereses..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-white border-0 shadow-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-uvp-red hover:bg-uvp-red/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-uvp-red/30 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar información
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas nuestra{' '}
                    <a href="https://uvp.mx/aviso-de-privacidad/" target="_blank" rel="noopener noreferrer" className="text-uvp-purple hover:underline">
                      política de privacidad
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
