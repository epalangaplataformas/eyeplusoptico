import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">

        {/* Hero / Banner */}
        <section className="relative w-full h-75 md:h-100 lg:h-125 overflow-hidden">
          <img
            src="/banner.png"
            alt="Eye Plus Óptico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Sobre a Eye Plus Óptico
              </h1>
              <p className="mt-2 text-white/90 max-w-2xl mx-auto">
                Excelência em saúde visual e serviços ópticos em Luanda.
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-12">

          {/* Card Empresa */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Nossa Empresa</h2>
              <p className="text-sm text-muted-foreground">
                A <strong>Eye Plus Óptico</strong> oferece serviços de saúde ocular de alta qualidade,
                incluindo exames de visão, lentes de contato, óculos de grau e solares, ajustes e manutenção,
                além de consultoria especializada para todas as idades.
              </p>
              <p className="text-sm text-muted-foreground">
                Este website foi criado e é mantido por <strong>Epalanga Plataformas - Tecnologia, (SU), Lda</strong>{' '}
                (<a
                  href="https://epalanga.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Saiba mais
                </a>), NIF: <strong>5002570327</strong>, fundada por <strong>Jorge Cambundo Epalanga</strong>.
              </p>
            </CardContent>
          </Card>

          <Separator />

          {/* Card Missão */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Missão e Objetivos</h2>
              <p className="text-sm text-muted-foreground">
                A missão da Eye Plus Óptico é fornecer atendimento óptico completo, profissional e personalizado, permitindo:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-muted-foreground">
                <li>Exames de visão completos para todas as idades;</li>
                <li>Seleção de óculos de grau e solares de qualidade;</li>
                <li>Fornecimento e acompanhamento de lentes de contato;</li>
                <li>Ajustes e manutenção precisos para conforto e durabilidade;</li>
                <li>Consultoria em saúde ocular e prevenção de problemas visuais.</li>
              </ul>
            </CardContent>
          </Card>

          <Separator />

          {/* Card Contato */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Contato</h2>
              <p className="text-sm text-muted-foreground">
                Entre em contato conosco para agendar consultas ou esclarecer dúvidas:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email:{' '}
                  <a
                    href="mailto:eyeplusoptico@gmail.com"
                    className="underline hover:text-foreground break-all"
                  >
                    eyeplusoptico@gmail.com
                  </a>
                </li>
                <li>Telefone: <a href="tel:+244947197036" className="underline hover:text-foreground">+244 947 197 036</a></li>
                <li>WhatsApp: <a href="https://wa.me/244947197036" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">+244 947 197 036</a></li>
              </ul>
            </CardContent>
          </Card>

          <Separator />

          {/* Card Valores */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Nossos Valores</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-muted-foreground">
                <li>Excelência e precisão em todos os exames;</li>
                <li>Atendimento personalizado e humanizado;</li>
                <li>Transparência e confiança em todas as interações;</li>
                <li>Inovação tecnológica aplicada à saúde ocular;</li>
                <li>Compromisso com a comunidade e responsabilidade social.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
