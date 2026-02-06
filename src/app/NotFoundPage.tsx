import { Link } from 'react-router';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <section
          className="w-full max-w-xl text-center"
          aria-labelledby="not-found-title"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>

          <h1
            id="not-found-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Página não encontrada
          </h1>

          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            A página que você tentou acessar não existe ou foi movida.
            Verifique o endereço ou volte para a página inicial.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
