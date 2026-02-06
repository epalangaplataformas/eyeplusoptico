import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

import { RiEyeLine, RiCheckLine } from '@remixicon/react';

export default function VisionExams() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6749697/pexels-photo-6749697.jpeg"
              alt="Exame de visão em consultório optométrico"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 text-center max-w-3xl text-white">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Exames de Visão Completos
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Avaliações optométricas completas para garantir a saúde dos seus
              olhos e a melhor qualidade visual.
            </motion.p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Texto principal */}
          <article className="lg:col-span-2 space-y-6">
            <header>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                O que é o Exame de Visão?
              </h2>
              <p className="text-muted-foreground">
                O exame de visão é uma avaliação optométrica detalhada que
                permite analisar a sua acuidade visual, identificar problemas
                refrativos e avaliar a saúde geral dos olhos.
              </p>
            </header>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                O que avaliamos no exame
              </h3>

              <ul className="space-y-3">
                {[
                  'Acuidade visual (longe e perto)',
                  'Miopia, hipermetropia e astigmatismo',
                  'Avaliação da visão binocular',
                  'Saúde ocular geral',
                  'Necessidade de óculos ou lentes de contacto',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <RiCheckLine className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Para quem é recomendado?
              </h3>
              <p className="text-muted-foreground">
                O exame de visão é recomendado para adultos e crianças,
                especialmente se sentir dificuldades visuais, dores de cabeça,
                fadiga ocular ou se já utiliza óculos ou lentes de contacto.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border p-6 bg-muted/30">
              <div className="flex items-center gap-3 mb-4">
                <RiEyeLine className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-lg">
                  Informações do Exame
                </h4>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Duração:</strong> 30 a 45 minutos
                </li>
                <li>
                  <strong>Indicação:</strong> Crianças e adultos
                </li>
                <li>
                  <strong>Resultado:</strong> Imediato
                </li>
                <li>
                  <strong>Periodicidade:</strong> Anual
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-primary p-6 text-white text-center">
              <h4 className="font-semibold text-lg mb-2">
                Pronto para cuidar da sua visão?
              </h4>
              <p className="text-sm mb-4">
                Agende o seu exame de visão numa das nossas lojas.
              </p>

              <Link
                to="/marcar-consulta"
                className="inline-flex items-center justify-center w-full rounded-lg bg-white text-primary px-4 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Marcar Exame de Visão
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
