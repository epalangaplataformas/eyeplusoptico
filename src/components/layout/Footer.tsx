import React from 'react';
import { Link } from 'react-router';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTiktokLine,
} from '@remixicon/react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

          {/* Logo e ThemeToggle */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">Eye Plus Óptico</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Cuide da sua visão com profissionais especializados em optometria, lentes e óculos.
            </p>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/servicos/exames-de-visao" className="hover:text-foreground">
                  Exames de Visão
                </Link>
              </li>
              <li>
                <Link to="/servicos/oculos" className="hover:text-foreground">
                  Óculos de Grau e Solares
                </Link>
              </li>
              <li>
                <Link to="/servicos/lentes-de-contato" className="hover:text-foreground">
                  Lentes de Contato
                </Link>
              </li>
              <li>
                <Link to="/servicos/ajuste-e-manutencao" className="hover:text-foreground">
                  Ajuste e Manutenção de Óculos
                </Link>
              </li>
              <li>
                <Link to="/servicos/saude-ocular" className="hover:text-foreground">
                  Consultoria Saúde Ocular
                </Link>
              </li>
              <li>
                <Link to="/servicos/lentes-especiais" className="hover:text-foreground">
                  Lentes Especiais
                </Link>
              </li>
            </ul>
          </div>

          {/* Lojas */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Nossas Lojas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.google.com/maps/place/%C3%93ptico+Eye+plus/@-8.9310308,13.2861829,13z/data=!4m9!1m2!2m1!1s3995+H8+Luanda!3m5!1s0x6e64597ca3067d9:0x7fd25d5da882fc4d!8m2!3d-8.9310264!4d13.3582882!16s%2Fg%2F11l_8b5171!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Mãe Jacinto
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Eye+Plus+optico/@-8.8189476,13.2403627,17z/data=!4m15!1m8!3m7!1s0x1a51f234eb5bc3c3:0xfc8c7017dafd721d!2sAv.+Cmte.+Val%C3%B3dia,+Luanda!3b1!8m2!3d-8.8181295!4d13.2471888!16s%2Fg%2F12hmslw6_!3m5!1s0x1a51f3177371eba7:0xac638d4db3852d4b!8m2!3d-8.8189472!4d13.2429382!16s%2Fg%2F11vqmcgr6n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Vila de Viana
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre a empresa */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Sobre a Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sobre" className="hover:text-foreground">Sobre Nós</Link></li>
              <li><Link to="/contactos" className="hover:text-foreground">Contactos</Link></li>
              <li><Link to="/marcar-consulta" className="hover:text-foreground">Marcar Consulta</Link></li>
            </ul>
          </div>

          {/* Empresa Criadora */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Desenvolvido por</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://epalanga.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Epalanga Plataformas - Tecnologia, (SU), Lda
                </a>
              </li>
              <li>NIF: 5002570327</li>
              <li>Fundada por Jorge Cambundo Epalanga</li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Eye-Plus-Optico-61555757236265/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <RiFacebookBoxLine className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eyeplusoptico/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <RiInstagramLine className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@eyeplusoptico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <RiTiktokLine className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Eye Plus Óptico. Desenvolvido por{' '}
            <a
              href="https://epalanga.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-4"
            >
              Epalanga Plataformas - Tecnologia, (SU), Lda
            </a>
            .
          </div>

          <div className="flex items-center gap-4">
            <Link to="/sobre" className="hover:text-foreground">Sobre</Link>
            <Link to="/contactos" className="hover:text-foreground">Contactos</Link>
            <Link to="/marcar-consulta" className="hover:text-foreground">Marcar Consulta</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
