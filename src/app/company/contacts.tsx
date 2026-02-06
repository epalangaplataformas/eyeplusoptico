import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const stores = [
  {
    name: 'Eye Plus – Mãe Jacinto',
    address: 'R. 11 de Novembro (Em frente ao Hospital Materno Infantil Mãe Jacinto)',
    phone: '+244 947 197 036',
    mapsUrl: 'https://www.google.com/maps/place/%C3%93ptico+Eye+plus/@-8.9310308,13.2861829,13z/data=!4m9!1m2!2m1!1s3995+H8+Luanda!3m5!1s0x6e64597ca3067d9:0x7fd25d5da882fc4d!8m2!3d-8.9310264!4d13.3582882!16s%2Fg%2F11l_8b5171!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Eye Plus – Vila de Viana',
    address: 'Bairro Vila de Viana, Rua Comandante Valódia',
    phone: '+244 921 007 776',
    mapsUrl: 'https://www.google.com/maps/place/Eye+Plus+optico/@-8.8189476,13.2403627,17z/data=!4m15!1m8!3m7!1s0x1a51f234eb5bc3c3:0xfc8c7017dafd721d!2sAv.+Cmte.+Val%C3%B3dia,+Luanda!3b1!8m2!3d-8.8181295!4d13.2471888!16s%2Fg%2F12hmslw6_!3m5!1s0x1a51f3177371eba7:0xac638d4db3852d4b!8m2!3d-8.8189472!4d13.2429382!16s%2Fg%2F11vqmcgr6n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D',
  },
];

const Contacts = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 space-y-12">
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Contacte-nos</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entre em contato com a Eye Plus Óptico para agendar consultas, tirar dúvidas ou saber mais sobre nossos serviços.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Formulário */}
            <article className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Envie uma Mensagem</h2>
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

                <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </article>

            {/* Informações das Lojas */}
            <article className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold">Nossas Lojas</h2>
              {stores.map((store) => (
                <div key={store.name} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold">{store.name}</h3>
                  <p className="text-sm text-muted-foreground">{store.address}</p>
                  <p className="text-sm text-primary">📞 {store.phone}</p>
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-foreground mt-1 block"
                  >
                    Ver no mapa
                  </a>
                </div>
              ))}

              <Separator />

              {/* Mapa geral */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/d/embed?mid=1Vx1Pj4xg4KBGH5Olc5kRlhRz8BQ"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Eye Plus Óptico"
                ></iframe>
              </div>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacts;
