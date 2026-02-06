import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

import {
  RiEyeLine,
  RiGlassesLine,
  RiContactsLine,
  RiToolsLine,
  RiHealthBookLine,
} from '@remixicon/react';
import { ScanEye } from 'lucide-react';

const services = [
  {
    title: 'Exames de Visão Completos',
    description:
      'Avaliações detalhadas da saúde visual, incluindo testes de acuidade e diagnóstico optométrico.',
    icon: RiEyeLine,
    href: '/servicos/exames-de-visao',
  },
  {
    title: 'Óculos de Grau e Solares',
    description:
      'Armações modernas e lentes de alta qualidade adaptadas às suas necessidades visuais.',
    icon: RiGlassesLine,
    href: '/servicos/oculos',
  },
  {
    title: 'Lentes de Contato',
    description:
      'Lentes confortáveis e seguras com acompanhamento profissional especializado.',
    icon: RiContactsLine,
    href: '/servicos/lentes-de-contato',
  },
  {
    title: 'Ajuste e Manutenção de Óculos',
    description:
      'Correções, ajustes e manutenção para maior conforto e durabilidade.',
    icon: RiToolsLine,
    href: '/servicos/ajuste-e-manutencao',
  },
  {
    title: 'Consultoria em Saúde Ocular',
    description:
      'Orientações personalizadas para prevenção e cuidados diários com a visão.',
    icon: RiHealthBookLine,
    href: '/servicos/saude-ocular',
  },
  {
    title: 'Exames para Lentes Especiais',
    description:
      'Avaliações para lentes progressivas, multifocais e soluções avançadas.',
    icon: ScanEye,
    href: '/servicos/lentes-especiais',
  },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted/40 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Nossos Serviços
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Cuidamos da sua visão com serviços optométricos completos,
              tecnologia moderna e acompanhamento profissional especializado.
            </motion.p>
          </div>
        </section>

        {/* Lista de Serviços */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-border bg-background p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h2 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    aria-label={`Ver detalhes sobre ${service.title}`}
                  >
                    Saber mais →
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de ajuda especializada?
            </h2>
            <p className="text-muted-foreground mb-6">
              Marque uma consulta numa das nossas lojas e receba um atendimento
              personalizado com profissionais qualificados.
            </p>

            <Link
              to="/marcar-consulta"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Marcar Consulta
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
