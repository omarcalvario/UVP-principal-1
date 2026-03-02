import { useState } from 'react'
import { Menu, X, Phone, Mail, MessageCircle, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface NavbarProps {
  isScrolled: boolean
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-uvp-dark text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:2222669489" className="flex items-center gap-2 hover:text-uvp-yellow transition-colors">
              <Phone className="w-4 h-4" />
              <span>22 22 66 94 88</span>
            </a>
            <a href="mailto:info@uvp.mx" className="flex items-center gap-2 hover:text-uvp-yellow transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@uvp.mx</span>
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="https://api.whatsapp.com/send?phone=522211113248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-uvp-yellow transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://apps.ol.uvp.mx/authn/login" target="_blank" rel="noopener noreferrer" className="hover:text-uvp-yellow transition-colors font-medium">
              Acceso UVP Online
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-uvp-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">UVP</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-uvp-dark font-bold text-lg leading-tight block">Universidad del</span>
                <span className="text-uvp-purple font-bold text-lg leading-tight block">Valle de Puebla</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-uvp-dark hover:text-uvp-purple hover:bg-uvp-purple/10">
                    Oferta Académica <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem onClick={() => scrollToSection('modalidades')}>
                    Preparatoria
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('modalidades')}>
                    Licenciaturas e Ingenierías
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('modalidades')}>
                    Posgrados
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('modalidades')}>
                    Educación Online
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-uvp-dark hover:text-uvp-purple hover:bg-uvp-purple/10">
                    Admisiones <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem onClick={() => scrollToSection('inscripcion')}>
                    Proceso de Inscripción
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('cuotas')}>
                    Cuotas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('becas')}>
                    Becas
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" onClick={() => scrollToSection('carreras')} className="text-uvp-dark hover:text-uvp-purple hover:bg-uvp-purple/10">
                Carreras
              </Button>

              <Button variant="ghost" onClick={() => scrollToSection('instalaciones')} className="text-uvp-dark hover:text-uvp-purple hover:bg-uvp-purple/10">
                Instalaciones
              </Button>

              <Button variant="ghost" onClick={() => scrollToSection('contacto')} className="text-uvp-dark hover:text-uvp-purple hover:bg-uvp-purple/10">
                Contacto
              </Button>

              <Button 
                onClick={() => scrollToSection('inscripcion')}
                className="ml-4 bg-uvp-red hover:bg-uvp-red/90 text-white font-bold px-6"
              >
                ¡Inscríbete Ahora!
              </Button>

              <Button variant="ghost" size="icon" className="ml-2 text-uvp-dark hover:text-uvp-purple">
                <Search className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-uvp-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <button onClick={() => scrollToSection('modalidades')} className="w-full text-left py-3 px-4 rounded-lg hover:bg-uvp-purple/10 text-uvp-dark font-medium">
                Oferta Académica
              </button>
              <button onClick={() => scrollToSection('inscripcion')} className="w-full text-left py-3 px-4 rounded-lg hover:bg-uvp-purple/10 text-uvp-dark font-medium">
                Admisiones
              </button>
              <button onClick={() => scrollToSection('carreras')} className="w-full text-left py-3 px-4 rounded-lg hover:bg-uvp-purple/10 text-uvp-dark font-medium">
                Carreras
              </button>
              <button onClick={() => scrollToSection('instalaciones')} className="w-full text-left py-3 px-4 rounded-lg hover:bg-uvp-purple/10 text-uvp-dark font-medium">
                Instalaciones
              </button>
              <button onClick={() => scrollToSection('contacto')} className="w-full text-left py-3 px-4 rounded-lg hover:bg-uvp-purple/10 text-uvp-dark font-medium">
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('inscripcion')}
                className="w-full bg-uvp-red hover:bg-uvp-red/90 text-white font-bold mt-4"
              >
                ¡Inscríbete Ahora!
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
