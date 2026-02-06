import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  X,
  Calendar,
  Info,
  Phone,
  MapPin,
} from 'lucide-react';
import {
  RiMenu3Fill,
  RiEyeLine,
  RiGlassesLine,
  RiContactsLine,
  RiToolsLine,
  RiHealthBookLine,
} from '@remixicon/react';
import { ScanEye } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

/* =======================
   Serviços (MESMOS da Home)
======================= */
const services = [
  {
    label: 'Exames de Visão',
    description:
      'Avaliações completas da saúde visual',
    Icon: RiEyeLine,
    href: '/servicos/exames-de-visao',
  },
  {
    label: 'Óculos de Grau e Solares',
    description:
      'Armações e lentes personalizadas',
    Icon: RiGlassesLine,
    href: '/servicos/oculos',
  },
  {
    label: 'Lentes de Contato',
    description:
      'Acompanhamento profissional',
    Icon: RiContactsLine,
    href: '/servicos/lentes-de-contato',
  },
  {
    label: 'Ajuste e Manutenção',
    description:
      'Correções e manutenção de óculos',
    Icon: RiToolsLine,
    href: '/servicos/ajuste-e-manutencao',
  },
  {
    label: 'Saúde Ocular',
    description:
      'Consultoria e prevenção',
    Icon: RiHealthBookLine,
    href: '/servicos/saude-ocular',
  },
  {
    label: 'Lentes Especiais',
    description:
      'Progressivas e multifocais',
    Icon: ScanEye,
    href: '/servicos/lentes-especiais',
  },
];

/* =======================
   Lojas
======================= */
const stores = [
  {
    name: 'Eye Plus – Mãe Jacinto',
    address:
      'R. 11 de Novembro (Em frente ao Hospital Materno Infantil Mãe Jacinto)',
    phone: '947 197 036',
    mapsUrl: 'https://www.google.com/maps/place/%C3%93ptico+Eye+plus/@-8.9310308,13.2861829,13z/data=!4m9!1m2!2m1!1s3995+H8+Luanda!3m5!1s0x6e64597ca3067d9:0x7fd25d5da882fc4d!8m2!3d-8.9310264!4d13.3582882!16s%2Fg%2F11l_8b5171!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Eye Plus – Vila de Viana',
    address: 'Bairro Vila de Viana, Rua Comandante Valódia',
    phone: '921 007 776',
    mapsUrl:
      'https://www.google.com/maps/place/Eye+Plus+optico/@-8.8189476,13.2403627,17z/data=!4m15!1m8!3m7!1s0x1a51f234eb5bc3c3:0xfc8c7017dafd721d!2sAv.+Cmte.+Val%C3%B3dia,+Luanda!3b1!8m2!3d-8.8181295!4d13.2471888!16s%2Fg%2F12hmslw6_!3m5!1s0x1a51f3177371eba7:0xac638d4db3852d4b!8m2!3d-8.8189472!4d13.2429382!16s%2Fg%2F11vqmcgr6n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D',
  },
];

export function Header() {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] =
    useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const motionProps = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.2 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Eye Plus Óptico"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary"
              >
                Início
              </Link>
            </li>

            {/* Serviços */}
            <li>
              <DropdownMenu
                open={servicesOpen}
                onOpenChange={setServicesOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                    Serviços
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <AnimatePresence>
                  {servicesOpen && (
                    <DropdownMenuContent
                      asChild
                      align="start"
                    >
                      <motion.div
                        {...motionProps}
                        className="grid w-72 gap-1 rounded-md border bg-popover p-2 shadow-md"
                      >
                        {services.map(
                          ({
                            label,
                            Icon,
                            href,
                          }) => (
                            <DropdownMenuItem
                              key={href}
                              onClick={() =>
                                navigate(href)
                              }
                              className="flex items-center gap-3"
                            >
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="text-sm">
                                {label}
                              </span>
                            </DropdownMenuItem>
                          ),
                        )}
                      </motion.div>
                    </DropdownMenuContent>
                  )}
                </AnimatePresence>
              </DropdownMenu>
            </li>

            {/* Lojas */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                    <MapPin className="h-4 w-4" />
                    Lojas
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-80">
                  {stores.map((store) => (
                    <DropdownMenuItem
                      key={store.name}
                      onClick={() =>
                        window.open(
                          store.mapsUrl,
                          '_blank',
                        )
                      }
                      className="flex flex-col items-start gap-1"
                    >
                      <span className="font-medium">
                        {store.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {store.address}
                      </span>
                      <span className="text-xs text-primary">
                        📞 {store.phone}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <Link
                to="/sobre"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              >
                <Info className="h-4 w-4" />
                Sobre Nós
              </Link>
            </li>

            <li>
              <Link
                to="/contactos"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Contactos
              </Link>
            </li>
          </ul>

          <Button
            onClick={() =>
              navigate('/marcar-consulta')
            }
          >
            <Calendar className="mr-2 h-4 w-4" />
            Marcar Consulta
          </Button>
        </nav>

        {/* Mobile */}
        <div className="ml-auto flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <RiMenu3Fill className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-background border-t border-border md:hidden z-50"
            >
              <ul className="flex flex-col gap-2 p-4">
                {/* Início */}
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium hover:text-primary"
                  >
            Início
                  </Link>
                </li>

                {/* Serviços */}
                <li>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium hover:text-primary">
              Serviços
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 flex flex-col gap-1 pl-4">
                      {services.map(({ label, href }) => (
                        <li key={href}>
                          <Link
                            to={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm hover:text-primary"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>

                {/* Lojas */}
                <li>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium hover:text-primary">
              Lojas
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 flex flex-col gap-1 pl-4">
                      {stores.map((store) => (
                        <li key={store.name}>
                          <a
                            href={store.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm hover:text-primary"
                          >
                            {store.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>

                {/* Sobre Nós */}
                <li>
                  <Link
                    to="/sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium hover:text-primary"
                  >
            Sobre Nós
                  </Link>
                </li>

                {/* Contactos */}
                <li>
                  <Link
                    to="/contactos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium hover:text-primary"
                  >
            Contactos
                  </Link>
                </li>

                {/* Marcar Consulta */}
                <li>
                  <Button
                    onClick={() => {
                      navigate('/marcar-consulta');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full mt-2"
                  >
            Marcar Consulta
                  </Button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
