import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/layout/HeroSection';
import { motion } from 'framer-motion';
import {
  RiEyeLine,
  RiGlassesLine,
  RiContactsLine,
  RiToolsLine,
  RiHealthBookLine,
} from '@remixicon/react';
import { ScanEye } from 'lucide-react';


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header fixo */}
      <Header />

      <main className="flex-1">
        <HeroSection />

        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
    Nossos Serviços
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Exames de Visão Completos',
                description:
          'Avaliações detalhadas da saúde visual, incluindo testes de acuidade e diagnóstico optométrico.',
                Icon: RiEyeLine,
              },
              {
                title: 'Óculos de Grau e Solares',
                description:
          'Armações modernas e lentes de alta qualidade adaptadas às suas necessidades visuais.',
                Icon: RiGlassesLine,
              },
              {
                title: 'Lentes de Contato',
                description:
          'Lentes confortáveis e seguras com acompanhamento profissional especializado.',
                Icon: RiContactsLine,
              },
              {
                title: 'Ajuste e Manutenção de Óculos',
                description:
          'Correções, ajustes e manutenção para maior conforto e durabilidade.',
                Icon: RiToolsLine,
              },
              {
                title: 'Consultoria em Saúde Ocular',
                description:
          'Orientações personalizadas para prevenção e cuidados diários com a visão.',
                Icon: RiHealthBookLine,
              },
              {
                title: 'Exames para Lentes Especiais',
                description:
          'Avaliações para lentes progressivas, multifocais e soluções avançadas.',
                Icon: ScanEye,
              },
            ].map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background hover:shadow-xl transition-all duration-300"
              >
                <service.Icon
                  className="w-12 h-12 mb-4 text-primary"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Seção: Nossa Equipa */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
    Nossa Equipa
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Ana Costa',
                role: 'Optometrista Chefe',
              },
              {
                name: 'João Martins',
                role: 'Especialista em Lentes de Contato',
              },
              {
                name: 'Marta Silva',
                role: 'Consultora Óptica',
              },
              {
                name: 'Luís Pereira',
                role: 'Especialista em Diagnóstico Visual',
              },
            ].map((member, index) => {
              const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                member.name
              )}&background=random&color=fff&size=256`;

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-background hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={avatarUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Seção: Contacte-nos */}
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
              <p>Av. 21 de Janeiro, Região 3995+H8, Luanda, Angola</p>
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
};

export default Index;
