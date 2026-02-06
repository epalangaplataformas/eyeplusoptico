import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { RiGlassesLine, RiToolsLine } from '@remixicon/react';
import { Eye, Check } from 'lucide-react';

export default function Glasses() {
  const services = [
    {
      title: 'Óculos de Grau',
      description:
        'Armações modernas e lentes de alta qualidade adaptadas à sua prescrição e estilo pessoal.',
      Icon: RiGlassesLine,
    },
    {
      title: 'Óculos Solares',
      description:
        'Proteção UV completa com design elegante, lentes polarizadas e resistentes.',
      Icon: Eye,
    },
    {
      title: 'Ajuste e Manutenção',
      description:
        'Garantimos conforto e durabilidade das suas armações com ajustes e manutenção profissional.',
      Icon: RiToolsLine,
    },
    {
      title: 'Consultoria Personalizada',
      description:
        'Ajudamos na escolha do óculos ideal conforme formato do rosto e necessidades visuais.',
      Icon: Check,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section específico para Óculos */}
      <section className="relative w-full h-100 md:h-125 lg:h-150 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611222777277-61319d63ca94?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Óculos modernos em loja Eye Plus Óptico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Óculos de Grau e Solares
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Explore nossa seleção de armações elegantes, lentes de alta qualidade e atendimento personalizado para cuidar da sua visão e estilo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Serviços de Óculos
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background hover:shadow-xl transition-all duration-300"
              >
                <service.Icon className="w-16 h-16 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contacte-nos (opcional repetir da home) */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contacte-nos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Localização</h3>
              <p>R. 11 de Novembro (Em frente ao Hospital Materno Infantil Mãe Jacinto), Luanda, Angola</p>
              <p>Email: eyeplusoptico@gmail.com</p>
              <p>Telefone: +244 947 197 036</p>
              <iframe
                className="w-full h-64 rounded-lg mt-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.683643628653!2d13.3582882!3d-8.9310264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f42c3995h8%3A0xabcdef1234567890!2sEye%20Plus%20%C3%93ptico!5e0!3m2!1sen!2sao!4v1670000000000!5m2!1sen!2sao"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Eye Plus Óptico"
              ></iframe>
            </article>

            <article>
              <form className="flex flex-col gap-4">
                <label htmlFor="name" className="font-medium">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-border p-3"
                />

                <label htmlFor="email" className="font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-border p-3"
                />

                <label htmlFor="message" className="font-medium">Mensagem</label>
                <textarea
                  id="message"
                  placeholder="Escreva sua mensagem..."
                  className="w-full rounded-lg border border-border p-3 h-32"
                />

                <button
                  type="submit"
                  className="bg-primary text-white rounded-lg p-3 hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
