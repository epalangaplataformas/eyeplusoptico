import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export function HeroSection() {
  const slides = [
    {
      title: 'Cuide da sua visão com os melhores especialistas',
      description:
        'Agende consultas de optometria, exames de visão completos e receba orientações personalizadas para a saúde dos seus olhos.',
      background: '/hero.jpg',
    },
    {
      title: 'Encontre os óculos perfeitos para você',
      description:
        'Explore uma seleção exclusiva de óculos de grau e solares, com marcas renomadas e atendimento personalizado.',
      background: '/hero_oculos.jpg',
    },
    {
      title: 'Lentes de contato e soluções modernas para os seus olhos',
      description:
        'Oferecemos lentes de contato de alta qualidade, com acompanhamento profissional para garantir conforto e segurança.',
      background: '/hero-lenses.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const textVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const bgVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <header className="relative w-full overflow-hidden">
      {/* Background animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].background})` }}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Backgrounds decorativos */}
      <div className="absolute -top-20 -left-40 w-125 h-125 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-40 w-150 h-150 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-16 text-center relative z-10">
        {/* Conteúdo com animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 max-w-xl"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {slides[currentIndex].title}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-50 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {slides[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
}
