import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { RiToolsLine, RiGlassesLine } from '@remixicon/react';
import { Check, Eye } from 'lucide-react';

export default function Adjustments() {
  const services = [
    {
      title: 'Ajuste de Armações',
      description:
        'Alinhamento e ajustes das armações para conforto e estabilidade durante o uso.',
      Icon: RiToolsLine,
    },
    {
      title: 'Substituição de Parafusos e Hastes',
      description:
        'Troca de peças danificadas para manter os óculos funcionais e seguros.',
      Icon: RiGlassesLine,
    },
    {
      title: 'Limpeza Profissional',
      description:
        'Remoção de sujeira e oleosidade, mantendo suas lentes limpas e protegidas.',
      Icon: Eye,
    },
    {
      title: 'Manutenção Preventiva',
      description:
        'Verificações periódicas para prolongar a vida útil dos seus óculos.',
      Icon: Check,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-100 md:h-125 lg:h-150 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3846021/pexels-photo-3846021.jpeg"
          alt="Ajuste de óculos Eye Plus Óptico"
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
              Ajuste e Manutenção de Óculos
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Serviços especializados para garantir conforto, durabilidade e perfeito alinhamento das suas armações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços de Ajuste */}
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nossos Serviços de Ajuste
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

        {/* Contacte-nos */}
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
